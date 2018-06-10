const package = require('./index.js');

let song = package();

song.on('beat', function({count}){ console.log('beat',count) });
song.on('bar', function({count}){ console.log('bar',count) });
song.on('start', function(){ console.log('song started') });
song.on('stop', function(){ console.log('song ended') });

song.emit('start')
