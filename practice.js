console.log('...Started...\n\n');

// var imgTags = document.getElementsByTagName('img')
// var imgArray = Array.from(imgTags);
// imgArray.forEach((cur) => {
//   console.log(cur);
// })
// let clientsC = document.getElementsByClassName('client1');
//
// Array.from(clientsC).forEach((cur) => {
//   console.log(cur);
// })
// console.log(clientsC);

// let mediaImgs = document.querySelector('.foot div:nth-child(2) .mediaLogos img')
// console.log(mediaImgs);

// let mediaImgs = document.querySelectorAll('.foot > div:nth-child(2) > .mediaLogos > img')
// // console.log(mediaImgs);
//
// Array.from(mediaImgs).forEach((cur, index, all) => {
//   console.log(cur);
// })

// var partners = document.querySelectorAll('.foot > div:nth-child(3) > ul > li')

// Array.from(partners).forEach((cur) => {
//   console.log(cur);
// })
//WORKS THE SAME WAY AS::::::::
// partners.forEach((cur) => {
//   cur.textContent += ' Test';
//   console.log(cur.textContent);
// })

// document.querySelector('#sendBtn').addEventListener('click', () => {
//   var inputs = document.querySelectorAll('input').value;
//   console.log(inputs);
//   // Array.from(inputs).forEach((cur) => {
//   //   console.log(cur);
//   // })
//
//   inputs = '';
//
// })

// let clientName = document.querySelectorAll('.client1 > h2');
// clientName.forEach((cur) => {
//   console.log(cur.innerHTML);
//   cur.innerHTML = '<h4>Steve Harvey</h4>'
//   cur.innerHTML += '<h5>TV Presenter</h5>';
// })

// let clientMsg = document.querySelectorAll('.client1 > i');
// clientMsg.forEach((cur) => {
//   console.log(cur.innerHTML);
//   cur.innerHTML = '"' + cur.innerHTML + '"';
// })


// const init = () => {
//   document.querySelector('.success').style.display = 'none';
//   document.querySelector('.failed').style.display = 'none';
//   inputsFun();
// }
// let inputsFun = () => {
//   document.querySelector('#sendBtn').addEventListener('click', () => {
//
//     var pasteMsg = document.querySelectorAll('textarea');
//     var selectInput = document.querySelectorAll('.messagebox > div:nth-child(2) > input');
//
//     pasteMsg.forEach((msg) => {
//       selectInput.forEach((name) => {
//         if(name.value != "" && msg.value != ""){
//           document.querySelector('.bottom > h2').textContent = '~' + name.value;
//           document.querySelector('.client1 > i').textContent = msg.value;
//           document.querySelector('.success').style.display = 'block';
//           msg.value = "";
//           name.value = "";
//         }else {
//           document.querySelector('.failed').style.display = 'block';
//         }
//       });
//     });
//     var pasteMsg = document.querySelectorAll('input');
//     pasteMsg.forEach((cur) => {
//       cur.value = "";
//     });
//     // var client1 = document.querySelector('.com1 > i');
//     // // console.log(client1.innerHTML);
//     // client1.parentElement.nextElementSibling.querySelector('.com2 > i').innerHTML = '<div><i>This is the newly added content ::: <br></i></div>';
//
// });
// }
//
// var msgBoxPressed = document.querySelectorAll('.messagebox');
// msgBoxPressed.forEach((pasteInfo) => {
//   pasteInfo.addEventListener('keypress', (e) => {
//     if(e.keyCode === 13) {
//       console.log(e.keyCode);
//       inputsFun();
//     }
//     // if(e.keyCode === 13) {
//     //   inputsFun();
//     // }
//   })
// })
//
// init();

// document.addEventListener('keypress', function(event){
//   if(event.keyCode === 13 || event.while === 13) {
//     inputsFun();
//     console.log('Entered');
//   }
// });

// var one = document.querySelector('.responses div:nth-child(4) h2');
// console.log(one.nodeType);
// console.log(one.hasChildNodes());
//
// var foot = document.querySelector('.foot');
// var clonedFoot = foot.cloneNode(false); //the whole bunch; Including Nestings
// var clonedFoot = foot.cloneNode(false);
// console.log(clonedFoot);

//DOM TRAVERSAL
//Up ::: Parent to Child
//var footImgs = document.querySelector('.foot');
// console.log(footImgs.parentNode);
// console.log(footImgs.parentElement.parentElement.parentElement);
////Down :: Child to parent
// console.log(footImgs.childNodes);   //Returns NODELIST
// console.log(footImgs.children);     //Returns HTML Collection
// footImgs.childNodes.forEach((cur) => {
//   console.log(cur);
// })
// Array.from(footImgs.children).forEach((cur) => {
//   console.log(cur);
// })

//Child to child:: Same level Siblings
//var client1 = document.querySelector('.client1');
// console.log(client1.nextSibling);
// console.log(client1.nextElementSibling);
// console.log(client1.previousSibling);
// console.log(client1.previousElementSibling);

// var mediaFoot = document.querySelector('.media');
// var sth = mediaFoot.nextElementSibling.querySelector('ul').innerHTML += ' <li>Client Posted</li>';
// console.log(sth);

// var client1 = document.querySelector('.com1 > i');
// // console.log(client1.innerHTML);
// client1.parentElement.nextElementSibling.querySelector('.com2 > i').innerHTML = '<div><i>This is the newly added content ::: <br> "client1.parentElement.nextElementSibling.querySelector(\'.com2 > i\').innerHTML = \'<div><i>--This is the newly added content--</i></div>"</i></div>'


////::::::EVENTS:::::::::::::::
// var nav = document.querySelector('.navigation').addEventListener('click', (e) => {
//   console.log(e.target);
//   console.log(e);
// })
//
const deleteBtn = document.querySelectorAll('.deleteBtn');
deleteBtn.forEach(btn => {
  btn.addEventListener('click', e => {
    const deleteItem = e.target.parentElement.parentElement;
    deleteItem.parentNode.removeChild(deleteItem);
  })
})

/////////////////////////////////////////////////
//>>>>>>>FORMS AND INPUTS.

// var form = document.forms['inputForm'];
// form.addEventListener('submit', (e) => {  //When Add button is clicked, the Form emits a Submit Event.
//   e.preventDefault();
//   var value = form.querySelector('input[type="text"]').value;
//   console.log(value);
//
//   //Create Elements::
//   const responses = document.querySelector('.responses');
//   const keepReading = document.querySelector('.keepReading');
//   const client1 = document.querySelector('.client1');
//   const i = document.createElement('i');
//   const btn = document.createElement('button');
//   const h2 = document.createElement('h2');
//   const div1 = document.createElement('div');
//   const div2 = document.createElement('div');
//   const div3 = document.createElement('div');
//   const bottom = document.querySelector('.bottom');
//   //const newClient = document.createElement('.client1');
//
//   //console.log(responses);
//
//   //Add content to the Tags
//   i.textContent = value;
//   btn.textContent = 'DELEETE';
//   h2.textContent = '~Anonymous';
//
//   //Add Classes::
//   btn.classList.add('deleteBtn');
//   div1.classList.add('bottom');
//   div2.classList.add('client1');
//   div3.classList.add('responses');
//
//   //Append to DOM
//   div1.appendChild(h2);
//   div1.appendChild(btn);
//   div2.appendChild(i);
//   div2.appendChild(div1);
//   div3.appendChild(div2);
//   //responses.appendChild(client1);
//   //keepReading.appendChild(client1);
//
//   //var responsesLast = document.querySelector('.client1:last-child');
//   //console.log(responsesLast);
//
//
// })



































































console.log('\n\n\...End...');
