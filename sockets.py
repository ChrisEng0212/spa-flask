
from app import app, db, socketio, cors
import json
from pprint import pprint
from models import *
from flask import request
from flask_socketio import SocketIO, join_room, leave_room, send, emit, rooms
from flask_cors import CORS

print('SOCKETS')


@socketio.on('online')
def online(data):

    """User joins personal room"""
    print('user online', data)
    userProfile = data['userProfile']
    friends = data['friends']
    userID = userProfile['userID']
    user = User.query.get(userID)

    """Check user isn't connected on anoter device"""
    check = Connected.query.filter_by(connected=user).first()
    print('checkUser', check, user, friends)

    if check:
        ## replace old sid with new
        if check.sid != request.sid:
            check.sid = request.sid
            db.session.commit()
    else:
        player = Connected(username=user.username, friends=json.dumps(friends), connected=user, sid=request.sid)
        db.session.add(player)
        db.session.commit()

    ## user is connected
    join_room(user.id)

    """Check if any friends are connected"""
    checkAll = Connected.query.all()

    for c in checkAll:
        print('check1', c.connected.id, c.friends)
        if str(c.connected.id) in friends:
            ## online data to the user about who is logged in currently
            emit('onlineUsers', {'userID': c.connected.id, 'username': c.connected.username}, user.id)


    for f in friends:
        ## get friend
        fUser = User.query.get(int(f))
        ## see if they're connected
        cUser = Connected.query.filter_by(connected=fUser).first()
        ## only send emit if user is one of their friends
        if cUser and str(userID) in json.loads(cUser.friends):
            print('online friend emit', int(f), )
            emit('onlineUsers', {'userID': user.id, 'username': user.username}, int(f))


def on_offline(user, check):

    friends = {}

    friends = json.loads(check.friends)
    Connected.query.filter_by(connected=user).delete()
    db.session.commit()


    for f in friends:
        print('friend', int(f))
        emit('offlineUsers', {'userID' : user.id}, int(f))

    emit('disconnect', {'userID': user.id}, user.id)

    print(user.username, 'offline')

@socketio.on('challenge')
def on_challenge(data):
    targetID = data['targetID']
    userID = data['userID']
    username = data['username']
    mode = data['mode']

    sid = request.sid
    print(sid)
    roomList = rooms(sid=sid)
    print(roomList)

    # send the challenge to the room of opponent
    emit('challengeMatch', {'sender': username, 'mode': mode, 'userID': userID}, int(targetID))
    print('challenge', 'target:', targetID, 'sender:', userID, 'mode', mode)

@socketio.on('accept')
def on_accept(data):
    p2 = data['p2']
    p2name = data['p2name']
    p1 = data['p1']
    p1name = data['p1name']
    mode = data['mode']

    print('p1', p1, type(p1))
    print('p2', p2, type(p2))

    leave_room(p2)
    join_room(p1)

    emit('start', {'p1': p1, 'p1name': p1name, 'p2': p2, 'p2name': p2name, 'mode': mode}, p1)

    print('start', str({'p1': p1, 'p1name': p1name, 'p2': p2, 'p2name': p2name, 'mode': mode}))

@socketio.on('ready')
def on_ready(data):
    room = data['room']
    player = data['player']
    testItems = data['testItems']
    timeReset = data['timeReset']

    emit('go', {'player': player, 'testItems': testItems, 'timeReset': timeReset}, room)

    print('go', str({'player': player, 'testItems': testItems, 'timeReset': timeReset}) )

@socketio.on('answer')
def on_answer(data):
    room = data['room']
    name = data['name']
    answer = data['answer']
    btnID = data['btnID']
    player = data['player']
    state = data['state']

    emit('answerMatch', {'player': player, 'name': name, 'answer': answer, 'btnID': btnID, 'state': state}, room)

    print('answerMatch:', 'room', room, 'player', player)

@socketio.on('updateType')
def updateType(data):
    print(data)
    room = data['room']
    opponent = data['opponent']
    current = data['current']
    player = data['player']
    state = data['state']

    emit('updateSignal', {'player': player, 'state': state, 'current': current, 'opponent': opponent}, room)

    print('updateSignal:', 'room', room, 'player', player, 'state', state)


@socketio.on('answerSend')
def answerSend(data):
    print(data)
    room = data['room']
    opponent = data['opponent']
    player = data['player']
    answer = data['answer']
    state = data['state']

    emit('answerComplete', {'player': player, 'state': state, 'answer': answer, 'opponent': opponent}, room)

    print('complete:', 'room', room, 'player', player, 'state', state)


@socketio.on('settingsData')
def on_settings(data):
    room = data['room']
    settingsData =  data['settingsData']

    emit('newSettings', {'settingsData': settingsData}, room)

    print('newSettings:', 'room', room, 'settings', settingsData)


@socketio.on('leftMatch')
def on_leftMatch(data):

    p2 = data['p2']
    p1 = data['p1']
    userID = data['userID']

    p2name = User.query.get(p2).username
    p1name = User.query.get(p1).username

    p1con = Connected.query.filter_by(user_id=p1).first()
    p2con = Connected.query.filter_by(user_id=p2).first()

    if userID is not p1:
        leave_room(p1)
        join_room(p2)

    if p1con:
        p1sid = p1con.sid
        emit('kickOff', {'opponent': p2name}, p1sid)

    if p2con:
        p2sid = p2con.sid
        emit('kickOff', {'opponent': p1name}, p2sid)

@socketio.on('exitMatch')
def on_exitMatch(data):

    p2 = data['p2']
    p1 = data['p1']
    player = data['player']

    ## both players are room p1
    ## send a signal to p2 which makes them leave the room and rejoin
    p2name = User.query.get(p2).username
    p1name = User.query.get(p1).username

    p1con = Connected.query.filter_by(user_id=p1).first()
    p2con = Connected.query.filter_by(user_id=p2).first()
    p1sid = 0
    p2sid = 0

    if p1con:
        p1sid = p1con.sid

    if p2con:
        p2sid = p2con.sid

    emit('reset', {'p1': p1, 'p2': p2, 'opponent': p2name}, p1sid)
    emit('reset', {'p1': p1, 'p2': p2, 'opponent': p1name}, p2sid)

@socketio.on('resetRoom')
def on_resetRoom(data):

    p2 = data['p2']
    p1 = data['p1']

    leave_room(int(p1))
    join_room(int(p2))

    print('resetRoom', p1, '--> ', p2)



@socketio.on('disconnect')
def on_disconnect():
    sid = request.sid
    print(sid)
    roomList = rooms(sid=sid)
    print(roomList)

    check = Connected.query.filter_by(sid=sid).first()
    print('check', check)

    if check:
        friendList = json.loads(check.friends)
        user = check.connected
        username = user.username
        userID = user.id
        for r in roomList:
            leave_room(r)
            print('LEAVE ROOM', r)
            emit('reset', {'opponent': 'your opponent'}, r)

        for f in friendList:
            print('Offline Signal: ', int(f))
            fOnline = Connected.query.filter_by(user_id=int(f)).first()
            if fOnline:
                emit('offlineUsers', {'userID': userID}, fOnline.sid)

        ## leave room before reconnecting??

        Connected.query.filter_by(sid=sid).delete()
        db.session.commit()

    print('Client Disconnected')

@socketio.on('connect')
def on_connect():
    """User connects"""
    print('connect_python')
    send({"username": 'Chris'})


