const package = require('./index.js');

let song = package({ bps: 1, beats:10 });

song.on('beat', function({beat}){ console.log('beat',beat) });
song.on('start', function(){ console.log('song started') });
song.on('stop', function(){ console.log('song ended') });

song.emit('start')
