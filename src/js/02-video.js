import Player from '@vimeo/player';
// import throttle from 'lodash.throttle';
const throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('play', function() {
        console.log('played the video!');
});

player.on(
    'timeupdate',
    throttle(({ seconds }) => {
        localStorage.setItem('videoplayer-current-time', seconds);
    }, 1000)
)




player.setCurrentTime().then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});