const EventEmitter = require('events');

module.exports = function(options = {bps:1, beats:8}){

  class MusicEvents extends EventEmitter {}
  const musicEvents = new MusicEvents();

  let intervalId = null;
  let beatCounter = 0;

  musicEvents.on('start', () => {
    intervalId = setInterval(function(){
    musicEvents.emit('beat', {beat:beatCounter});
    beatCounter++;
    }, 1000 / options.bps)
  });

  musicEvents.on('stop', () => {
    clearInterval(intervalId);
    beatCounter = 0;
  });

  musicEvents.on('beat', () => {
    if(beatCounter==options.beats-1) musicEvents.emit('stop');
  });

  return musicEvents;

}
