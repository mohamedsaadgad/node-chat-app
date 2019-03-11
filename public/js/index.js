var socket = io();
socket.on('connect', function ()  {
    console.log('Connection to server');
    socket.emit('createMessage', {
      from: 'mohamed',
      text: 'fuckin live'
    });
});

socket.on('disconnect', function ()  {
    console.log('Disconnected from server');
});

socket.on('newMessage', function (message) {
  console.log('newMessage',message);
});