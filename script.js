'use strict';




//---------------------------------------------------------------------------------------------
// originals

const $body = document.querySelector('body');
  // const unit = document.querySelector('.unit');
    // const $treigger = document.querySelector('.btn-circle');
      const action = document.getElementById('js-action');
        const alertText = document.querySelector('.alert-text');
      const alertTextSystem = document.querySelector('.alertText-system');
    const alertTextBroken = document.querySelector('.alertText-broken');
  const alertSkullIcon = document.querySelectorAll('.alert-skull-icon');
const countUpNumber = document.querySelector('.countDown-number');
// unit.classList.add('js_displayNone');
window.addEventListener('load', function (event) {
  event.preventDefault();
  $body.classList.add('js_bgColor');
    alertText.classList.add('js_displayBlock');

  setTimeout(() => {
    action.classList.add('js_displayBlock');
    animationAction();
      setTimeout(() => {
        alertTextSystem.classList.add('js_displayBlock'); 
          alertTextBroken.textContent = '! 破壊されました！';
            countUpNumber.textContent = ''; 
              action.classList.add('js_flash');
          setTimeout(() => {
            $body.classList.add('js_bgColorFlash');
              alertText.classList.add('fontWeightBold');
                alertTextSystem.classList.add('red', 'fontLarge', 'fontWeightBold');
                  alertTextBroken.classList.add('red', 'fontLarge', 'fontWeightBold');
                    alertSkullIcon.forEach(element => {
                      element.classList.add('red');
                    });
            setTimeout(() => {
              $body.classList.remove('js_bgColorFlash');
                alertText.classList.remove('fontWeightBold');
                  alertTextSystem.classList.remove('red', 'fontLarge', 'fontWeightBold');
                    alertTextBroken.classList.remove('red', 'fontLarge', 'fontWeightBold');
                      alertSkullIcon.forEach(element => {
                        element.classList.remove('red');
                      });
              setTimeout(() => {
                $body.classList.add('js_bgColorFlash');
                  alertText.classList.add('fontWeightBold');
                    alertTextSystem.classList.add('red', 'fontLarge', 'fontWeightBold');
                      alertTextBroken.classList.add('red', 'fontLarge', 'fontWeightBold');
                        alertSkullIcon.forEach(element => {
                          element.classList.add('red');
                        });
                setTimeout(() => {
                  $body.classList.remove('js_bgColorFlash');
                    alertText.classList.remove('fontWeightBold');
                      alertTextSystem.classList.remove('red', 'fontWeightBold');
                    alertTextBroken.classList.remove('red', 'fontWeightBold');
                  alertSkullIcon.forEach(element => {
                    element.classList.remove('red');
                    element.classList.add('animationDone');
                  });
                }, 4000);
              }, 3000);
            }, 3000);
        }, 4000);
      }, 0); //4000
  }, 0);
});

function animationAction() {
  const textAnimation = document.querySelectorAll('.textAnimation');
    for (let i = 0; i < textAnimation.length; i++) {
      const animationTarget = textAnimation[i];
      const texts = animationTarget.textContent;
      animationTarget.textContent = '';
        
      for (let j = 0; j < texts.length; j++) {
        if(texts[j] === ' ') {
          animationTarget.innerHTML += ' ';
        } else {
          animationTarget.innerHTML += 
          '<span style="animation-delay: ' + ((j * .1) + .1) + 's;">' + texts[j] + '</span>';
        }
      }
    }
}

//---------------------------------------------------------------------------------------------


history.pushState(null, null, location.href);
window.addEventListener('popstate', (e) => {
  history.go(1);
});

  if (window.performance) {
    if (performance.navigation.type === 1) {
      // リロードされた
      // unit.classList.add('js_displayNone');
        $body.classList.add('js_bgColor');
          alertText.classList.add('js_displayBlock');
            action.classList.add('js_displayBlock');
              animationAction();
        setTimeout(() => {
          alertTextSystem.classList.add('js_displayBlock'); 
            alertTextBroken.textContent = '! 破壊されました！';
              countUpNumber.textContent = ''; 
                action.classList.add('js_flash');
            setTimeout(() => {
              $body.classList.add('js_bgColorFlash');
                alertText.classList.add('fontWeightBold');
                  alertTextSystem.classList.add('red', 'fontLarge', 'fontWeightBold');
                    alertTextBroken.classList.add('red', 'fontLarge', 'fontWeightBold');
                      alertSkullIcon.forEach(element => {
                        element.classList.add('red');
                      });
              setTimeout(() => {
                $body.classList.remove('js_bgColorFlash');
                  alertText.classList.remove('fontWeightBold');
                    alertTextSystem.classList.remove('red', 'fontLarge', 'fontWeightBold');
                      alertTextBroken.classList.remove('red', 'fontLarge', 'fontWeightBold');
                        alertSkullIcon.forEach(element => {
                          element.classList.remove('red');
                        });
                setTimeout(() => {
                  $body.classList.add('js_bgColorFlash');
                    alertText.classList.add('fontWeightBold');
                      alertTextSystem.classList.add('red', 'fontLarge', 'fontWeightBold');
                        alertTextBroken.classList.add('red', 'fontLarge', 'fontWeightBold');
                          alertSkullIcon.forEach(element => {
                            element.classList.add('red');
                          });
                  setTimeout(() => {
                    $body.classList.remove('js_bgColorFlash');
                      alertText.classList.remove('fontWeightBold');
                        alertTextSystem.classList.remove('red', 'fontWeightBold');
                      alertTextBroken.classList.remove('red', 'fontWeightBold');
                    alertSkullIcon.forEach(element => {
                      element.classList.remove('red');
                      element.classList.add('animationDone');
                    });
                  }, 4000);
                }, 3000);
              }, 3000);
          },0); //4000
        }, 0); //1000
    } else {
      // リロードされていない
      console.log('no');
    }
  }

action.addEventListener('click', function () {
  window.open('https://cyber-ground.github.io/infinite-ja/');
});





















