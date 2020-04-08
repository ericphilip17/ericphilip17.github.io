//////////////////////////////////////////////////////////////////////////
// ::::::::::::::::::::DOMContentLoaded Event:::::::::::::::::::::::::::::::::::::
const $ = document;

$.addEventListener('DOMContentLoaded', () => {

  //////////////////////////////////////////////////////////////////////////
  // ::::::::::::::::::::Init Function:::::::::::::::::::::::::::::::::::::

  var init = () => {
    $.querySelector('.success').style.display = 'none';
    $.querySelector('.failed').style.display = 'none';
    $.querySelector('.deletedRes').style.display = 'none';
    $.querySelector('.responses').style.display = 'none';
    $.querySelector('.feedbackTitle').style.display = 'none';
    $.querySelector('.keepReading').style.display = 'none';
    inputsFun();
    //preventDefault();
    removeItem();
    sendEvent();
  }

  /////////////////////////////////////////////////////////////////////////
  //::::::::::::::::::Contact us Box functions:::::::::::::::::::::::::::::

  function inputsFun(){
      $.querySelector('#sendBtn').addEventListener('click', () => {
        var pasteMsg = $.querySelectorAll('textarea');
        var selectInput = $.querySelectorAll('.messagebox > div:nth-child(2) > input');
        var phoneNumber = parseInt($.querySelector('.messagebox > div:nth-child(4) > input').value);

        console.log(typeof(phoneNumber));

        pasteMsg.forEach((msg) => {
          selectInput.forEach((name) => {
            if(msg.value !== "" && name.value !== ""){
              if(typeof(phoneNumber) === "number"){
                $.querySelector('.bottom > h2').textContent = '~' + name.value;
                $.querySelector('.client1 > i').textContent = '" ' + msg.value + ' "';
                const success = $.querySelector('.success');
                success.style.display = 'block';
                success.textContent = 'Success!';
                setTimerSuccess();
                msg.value = "";
                // name.value = "";
                $.querySelector('.success').addEventListener('click', () => {
                  $.querySelector('.success').style.display = 'none';
                });
                $.querySelector('.responses').style.display = 'block';
                $.querySelector('.feedbackTitle').style.display = 'block';
                $.querySelector('.feedbackTitle').textContent = 'Confirm Message';
                $.querySelector('.keepReading').style.display = 'block';
              } else if (typeof(phoneNumber) !== "number"){            //typeof(phoneNumber + 3) !== NaN
                const failed = $.querySelector('.failed');
                failed.style.display = 'block';
                failed.textContent = 'InvaliD Phone Number';
                setTimerFail();
                failed.addEventListener('click', () => {
                  failed.style.display = 'none';
                });
              }
            } else if (msg.value === "" && typeof(name.value) === "string" && name.value !== "") {
                $.querySelector('.failed').style.display = 'block';
                $.querySelector('.failed').textContent = 'Missing Message';
                setTimerSuccess();
                $.querySelector('.failed').addEventListener('click', () => {
                  $.querySelector('.failed').style.display = 'none';
                });
            } else if (name.value === "" && typeof(msg.value) === "string" && msg.value !== "") {
                $.querySelector('.failed').style.display = 'block';
                $.querySelector('.failed').textContent = 'Missing Name';
                setTimerSuccess();
                $.querySelector('.failed').addEventListener('click', () => {
                  $.querySelector('.failed').style.display = 'none';
                });
            } else if (name.value === "" && msg.value === "") {
              const failed = $.querySelector('.failed');
                failed.style.display = 'block';
                failed.textContent = 'Name and Message Missing';
                setTimerSuccess();
                failed.addEventListener('click', () => {
                  $.querySelector('.failed').style.display = 'none';
                });
            }

          });
        });

        //:::::::::::Clear Input fields::::::::::::::::
        clearInputFields();
      });


  }

  /////////////////////////////////////////////////////////////////////////
  //::::::::::::::::::::::::Prevent Default:::::::::::::::::::::::::::::::
  function preventDefault(){
    const link = $.querySelectorAll('.samplesSection > .box > a');
    link.forEach((li) => {
      li.addEventListener('click', (e) => {
        //e.preventDefault();
        //console.log('Prevented');
      });
    });

  }

  /////////////////////////////////////////////////////////////////////////
  //:::::::::::::Removing Item when Delete Button is clicked.::::::::::::::
  function removeItem(){
    /////////////////////////////////////////////////////////
    //::::::::::::Deleting Element using DOM Traversal.::://
    var deleteBtn = $.querySelector('.deleteBtn');
    deleteBtn.addEventListener('click', (e) => {
      var clientDel = e.target.parentElement.parentElement;
      clientDel.parentNode.removeChild(clientDel);

      //////////////////////////////////////////////////////////////////
      //::::::::::::Adding A text after All Items are Deleted::::::::://

      var emptyResponses = $.querySelector('.responses').children;
      if(emptyResponses.length === 0) {
        var deletedRes = $.querySelector('.deletedRes').innerHTML;
        $.querySelector('.keepReading').innerHTML = deletedRes;
        inputsFun();
      }
    });

  }
removeItem();
  /////////////////////////////////////////////////////////////////////////
  //:::::::::::::Client Message confirmation Section features.:::::::::::::
  function sendEvent() {
    let sendBtn = $.querySelectorAll('.client1');
    sendBtn.forEach((cur, index) => {
      //console.log(btn.textContent);
      cur.addEventListener('click', (e) => {
        if(e.target.className === "sendMsgBtn") {
          var repItalic = $.querySelector('.client1 > i');
          repItalic = e.target;
          repItalic.textContent = 'Send! Thank you.';
          $.querySelector('.sendMsgBtn').addEventListener('click', () => {
            removeItem();
          })
        }
      })
    })
  }
sendEvent();


  ////Clearing Input Fields::::::
  function clearInputFields() {
    //Clear input fields::
    var pasteMsg = $.querySelectorAll('input');
    pasteMsg.forEach((cur) => {
      cur.value = "";
    });
  }


function setTimerSuccess() {
  let t = 0;
  const timer = setInterval(() => {
    t += 2;
    if(t === 2) {
      $.querySelector('.success').style.display = 'none';
      $.querySelector('.failed').style.display = 'none';
    }
    clearInterval(timer);
  }, 2000);
}








  init();
  console.log('Program Running');


})
