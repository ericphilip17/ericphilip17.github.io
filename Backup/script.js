//////////////////////////////////////////////////////////////////////////
// ::::::::::::::::::::Init Function:::::::::::::::::::::::::::::::::::::


var init = () => {
  document.querySelector('.success').style.display = 'none';
  document.querySelector('.failed').style.display = 'none';
  document.querySelector('.deletedRes').style.display = 'none';
  document.querySelector('.responses').style.display = 'none';
  document.querySelector('.feedbackTitle').style.display = 'none';
  document.querySelector('.keepReading').style.display = 'none';
  // document.querySelectorAll('.box').style.display = 'none';
  inputsFun();
  preventDefault();
  removeItem();
  sendEvent();
  checkButton();
  deleteBook();
}

/////////////////////////////////////////////////////////////////////////
//::::::::::::::::::Contact us Box functions:::::::::::::::::::::::::::::

function inputsFun(){
    document.querySelector('#sendBtn').addEventListener('click', () => {
      var pasteMsg = document.querySelectorAll('textarea');
      var selectInput = document.querySelectorAll('.messagebox > div:nth-child(2) > input');
      var phoneNumber = parseInt(document.querySelector('.messagebox > div:nth-child(4) > input').value);

      console.log(typeof(phoneNumber));

      pasteMsg.forEach((msg) => {
        selectInput.forEach((name) => {
          if(msg.value !== "" && name.value !== ""){
            if(typeof(phoneNumber) === "number"){
              document.querySelector('.bottom > h2').textContent = '~' + name.value;
              document.querySelector('.client1 > i').textContent = '" ' + msg.value + ' "';
              document.querySelector('.success').style.display = 'block';
              msg.value = "";
              // name.value = "";
              document.querySelector('.success').addEventListener('click', () => {
                document.querySelector('.success').style.display = 'none';
              });
              document.querySelector('.responses').style.display = 'block';
              document.querySelector('.feedbackTitle').style.display = 'block';
              document.querySelector('.keepReading').style.display = 'block';
            } else if (typeof(phoneNumber) !== "number"){
              document.querySelector('.failed').style.display = 'block';
              document.querySelector('.failed').textContent = 'InvaliD Phone Number';
              document.querySelector('.failed').addEventListener('click', () => {
                document.querySelector('.failed').style.display = 'none';
              });
            }
          } else if (msg.value === "" && typeof(name.value) === "string" && name.value !== "") {
              document.querySelector('.failed').style.display = 'block';
              document.querySelector('.failed').textContent = 'Missing Message';
              document.querySelector('.failed').addEventListener('click', () => {
                document.querySelector('.failed').style.display = 'none';
              });
          } else if (name.value === "" && typeof(msg.value) === "string" && msg.value !== "") {
              document.querySelector('.failed').style.display = 'block';
              document.querySelector('.failed').textContent = 'Missing Name';
              document.querySelector('.failed').addEventListener('click', () => {
                document.querySelector('.failed').style.display = 'none';
              });
          } else if (name.value === "" && msg.value === "") {
              document.querySelector('.failed').style.display = 'block';
              document.querySelector('.failed').textContent = 'Name and Message Missing';
              document.querySelector('.failed').addEventListener('click', () => {
                document.querySelector('.failed').style.display = 'none';
              });
          }
          // else {
          //   document.querySelector('.failed').style.display = 'block';
          //   document.querySelector('.failed').addEventListener('click', () => {
          //     document.querySelector('.failed').style.display = 'none';
          //   });
          // }

        });
      });

      //:::::::::::Clear Input fields::::::::::::::::
      clearInputFields();

      // var client1 = document.querySelector('.com1 > i');
      // // console.log(client1.innerHTML);
      // client1.parentElement.nextElementSibling.querySelector('.com2 > i').innerHTML = '<div><i>This is the newly added content ::: <br></i></div>';
    });


}

/////////////////////////////////////////////////////////////////////////
//::::::::::::::::::::::::Prevent Default:::::::::::::::::::::::::::::::
function preventDefault(){
  const link = document.querySelectorAll('.samplesSection > .box > a');
  link.forEach((li) => {
    li.addEventListener('click', (e) => {
      e.preventDefault();
      //console.log('Prevented');
    });
  });

  const addButton = document.querySelector('#inputForm');
  addButton.addEventListener('click', (e) => {
    e.preventDefault();
  })

  const searchBox = document.querySelector('#searchBox');
  searchBox.addEventListener('keypress', (e) => {
    if(e.keyCode === 13 || e.while === 13) {
      e.preventDefault();
    }
  });

}

/////////////////////////////////////////////////////////////////////////
//:::::::::::::Removing Item when Delete Button is clicked.::::::::::::::
function removeItem(){
  /////////////////////////////////////////////////////////
  //::::::::::::Deleting Element using DOM Traversal.::://
  const deleteBtn = document.querySelectorAll('.deleteBtn');
  deleteBtn.forEach((cur) => {
    cur.addEventListener('click', (e) => {
      const clientDel = e.target.parentElement.parentElement;
      clientDel.parentNode.removeChild(clientDel);

      //////////////////////////////////////////////////////////////////
      //::::::::::::Adding A text after All Items are Deleted::::::::://

      var emptyResponses = document.querySelector('.responses').children;
      //console.log(emptyResponses.length);
      if(emptyResponses.length === 0) {
        //console.log("doing well");
        // document.querySelector('.keepReading').innerHTML = '<h2><b>You have deleted all responses. Reload the page to retrieve.</b></h2>';
        var deletedRes = document.querySelector('.deletedRes').innerHTML;
        document.querySelector('.keepReading').innerHTML = deletedRes;
        // inputsFun();
      }
    });
  });

        // //ALTERNATIVE DELETE METHOD
        // ////////////////////////////////////////
        // //:::Event Bubbling::://
        var clientList = document.querySelector('.responses');
        clientList.addEventListener('click', (e) => {
          if(e.target.className === 'deleteBtn') {
            const li = e.target.parentElement.parentElement;
            clientList.removeChild(li)
            console.log('Evemt Bubbling Working right.');
          }
        });

}

/////////////////////////////////////////////////////////////////////////
//:::::::::::::Client Message confirmation Section features.:::::::::::::
function sendEvent() {
  let sendBtn = document.querySelectorAll('.client1');
  sendBtn.forEach((cur, index) => {
    //console.log(btn.textContent);
    cur.addEventListener('click', (e) => {
      if(e.target.className === "sendMsgBtn") {
        var repItalic = document.querySelector('.client1 > i');
        repItalic = e.target;
        repItalic.textContent = 'Thank you!';
        //console.log('Button ' + index + ' clicked');
        //console.log(btn.textContent.children);
        // document.querySelector('.sendMsgBtn').style.display = 'none';
      }
    })
  })
}

/////////////////////////////////////////////////////////////////////////
//:::::::::::::CheckBOX to Hide and diplay books.::::::::::::::::::::::::
function checkButton() {
  const idChecked = document.querySelector('.checking > input[type="checkbox"]');
  const hideBooks = document.querySelector('.books');
  const checking = document.querySelector('.checking');
  const label = document.querySelector('.checking > label');
  var selectForm = document.querySelector('#inputForm');

  idChecked.addEventListener('change', (e) => {
    if(idChecked.checked) {
      hideBooks.style.display = 'none'
      label.textContent = 'Show all Books';

      checking.addEventListener('click', (e) => {
        if(e.target.className === 'ckBox') {
        hideBooks.style.display = 'block';
        label.textContent = 'Hide all Books';
      }
      })
    }
  })
}

/////////////////////////////////////////////////////////////////////////
//::::::::::::::::::::Add Books from FORM :::::::::::::::::::::::::::::::
function addBooks() {

  var selectInputForm = document.querySelector('#inputForm > input')
  document.querySelector('#inputForm > button').addEventListener('click', (e) => {

      if(selectInputForm.value !== "") {
        //Select where to Append to::
        var book = document.querySelector('.book');
        var test = document.querySelector('#inputForm > input');
        var books = document.querySelector('.books');

    //console.log(document.querySelector('.books:last-child'));

        //Create Element::
        var button = document.createElement('button');
        var h5 = document.createElement('h5');
        var li = document.createElement('li');
        var ul = document.querySelector('ul');

        //Add Culontent::
        h5.textContent = test.value;
        button.textContent = 'Remove'

        //Add Styles::
        button.classList.add('del');
        li.classList.add('book');
        ul.classList.add('books')

        //Append to DOM
        li.appendChild(h5);
        li.appendChild(button);
        ul.appendChild(li);

        //Clear Book input::
        clearInputFields();
        deleteBook();
      }

      //Post Book by clicking ENTER.
      enterBook();

  })

  return {
    selectInputForm: selectInputForm,
  }
}
addBooks();

////:::::::::::Post Book by clicking ENTER.
function enterBook() {
  addBooks().selectInputForm.addEventListener('keypress', (e) => {
    if(e.keyCode === 13 || e.while === 13){
      addBooks()
    }
  });
}

////Clearing Input Field Function::::::
function clearInputFields() {
  //Clear input fields::
  var pasteMsg = document.querySelectorAll('input');
  pasteMsg.forEach((cur) => {
    cur.value = "";
  });
}

/////////////////////////////////////////////////////////////////////////
//::::::::::::::::::::Delete Book By clicking DELETE ::::::::::::::::::::
function deleteBook() {
  var selectBook = document.querySelectorAll('.book');
  selectBook.forEach((cur) => {
    cur.addEventListener('click', (e) => {
      if(e.target.className === 'del') {
        cur.style.display = 'none';
      }
    })
  })
}
deleteBook();

/////////////////////////////////////////////////////////////////////////
//::::::::::::::::::::Search Filter ::::::::::::::::::::

function searchBox() {
  var searchBox = document.forms['searchBox'].querySelector('input');
  //var list = document.querySelector('#form > ul');
  searchBox.addEventListener('keyup', (e) => {
    var term = e.target.value.toLowerCase();
    var books = document.querySelectorAll('li');

    Array.from(books).forEach((cur) => {
      var title = cur.firstElementChild.textContent;
      if(title.toLowerCase().indexOf(term) !== -1) {
        cur.style.display = 'block';
        cur.style.color = 'yellow';
      }else {
        cur.style.display = 'none';
      }
    })
  })

}
searchBox();



init();
console.log('Program Running');
