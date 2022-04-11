/*!
=========================================================
* Landing page
=========================================================

* Copyright: 2022 Unoriboas (https://github.com/Unoriboas)

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
* Imported to make sure everything works!
*/

// a key map of allowed keys
var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
    65: 'a',
    66: 'b'
  };
  
  // the 'official' Konami Code sequence
  var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];
  
  // a variable to remember the 'position' the user has reached so far.
  var konamiCodePosition = 0;
  
  // add keydown event listener
  document.addEventListener('keydown', function(e) {
    // get the value of the key code from the key map
    var key = allowedKeys[e.keyCode];
    // get the value of the required key from the konami code
    var requiredKey = konamiCode[konamiCodePosition];
  
    // compare the key with the required key
    if (key == requiredKey) {
  
      // move to the next key in the konami code sequence
      konamiCodePosition++;
  
      // if the last key is reached, activate cheats
      if (konamiCodePosition == konamiCode.length) {
        activateCheats();
        konamiCodePosition = 0;
      }
    } else {
      konamiCodePosition = 0;
    }
  });
  
// Get the root element
var r = document.querySelector(':root');

// Create a function for setting a variable value
function myFunction_set() {
  r.style.setProperty('--primary', '#00FF00');
  r.style.setProperty('--gray-dark', '#a16ae8');
}

  function activateCheats() {  
    var audio = new Audio('html_code/assets/audio/unlock.mp3');
    myFunction_set();
    audio.play();
    swal({
        title: 'Welcome to the secret level!',
        text: 'Collect your coins here.',
        background: 'gray',
        button: 'Hell yeah.'
    })
}    