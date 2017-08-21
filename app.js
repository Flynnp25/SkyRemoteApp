var SkyRemote = require('sky-remote');

var remoteControl = new SkyRemote('');


function goToChannel(firstDigit,secondDigit,thirdDigit) {
    remoteControl.press([firstDigit, secondDigit, thirdDigit]);
}

function pressPower() {
    remoteControl.press('power');
}

function channelup(){
    remoteControl.press('channelup');
}


// Cool - send sequences of commands

// Nice - send commands with a callback
// remoteControl.press('channelup', function(err) {
//     if (err) {
//         console.log("Woah! Something went wrong. Cry time.");
//     } else {
//         console.log("I just pressed the Channel Up command.");
//     };
// });