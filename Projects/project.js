
const $ =document;
const pTags = $.querySelectorAll('.body > p');
var textSection = $.querySelector('#textSection');
const title = $.querySelector('.title');
const project1 = $.querySelector('.project1');
const project2 = $.querySelector('.project2');
const project3 = $.querySelector('.project3');
const project4 = $.querySelector('.project4');
const project5 = $.querySelector('.project5');
const project6 = $.querySelector('.project6');
const nav = $.querySelector('.pro-navigation');
const h5 = $.querySelectorAll('.pro-navigation > h5');

const projects = [project1, project2, project3, project4, project5, project6];

const hideOnTitleClick = function() {
  title.addEventListener('click', e => {
    hideP();
    clearText();
    console.log('title clicked');
  })
}
hideOnTitleClick();

const clearText = function () {
  title.textContent = 'Recent Projects Section';
  title.style.fontSize = '30px';
  textSection.style.display = 'none';
}
clearText();

const hideP = function() {
  for(let i = 0; i < projects.length; i++) {
    projects[i].style.display = 'none';
  }
}
hideP();

var h5Toggle = function(cur) {
      // cur.style.backgroundColor = '#993300';
      cur.setAttribute('div', 'class');
      cur.classList.toggle('navOnClick');

      // console.log(cur.parentElement.children);
      // for(let i = 0; i < projects.length; i++) {
      //   cur.addEventListener('click', e => {
      //     projects[i].style.display = 'none';
      //     hideP();
      //   })
      // }
}

const showP = function() {
  console.log('started');
  nav.addEventListener('click', e => {
    switch (e.target.textContent) {
      case 'Project 1':
          title.style.display = 'block';
          title.textContent = '1. Game of Thrones';
          textSection.style.display = 'block';
          h5Toggle(e.target);
          // hideP();
          projects[0].style.display = 'block';
          break;
      case 'Project 2':
          title.style.display = 'block';
          title.textContent = '2. Cryptocurrency';
          textSection.style.display = 'block';
          h5Toggle(e.target);
          hideP();
          projects[1].style.display = 'block';
          break;
      case 'Project 3':
          title.style.display = 'block';
          title.textContent = '3. Real Estate Management';
          textSection.style.display = 'block';
          h5Toggle(e.target);
          hideP();
          projects[2].style.display = 'block';
          break;
      case 'Project 4':
          title.style.display = 'block';
          title.textContent = '4. IT in Medicine';
          textSection.style.display = 'block';
          h5Toggle(e.target);
          hideP();
          projects[3].style.display = 'block';
          break;
      case 'Project 5':
          title.style.display = 'block';
          title.textContent = '5. Coronavirus in China';
          textSection.style.display = 'block';
          h5Toggle(e.target);
          hideP();
          projects[4].style.display = 'block';
          break;
      case 'Project 6':
          title.style.display = 'block';
          title.textContent = '6. Product Review at Amazon';
          textSection.style.display = 'block';
          h5Toggle(e.target);
          hideP();
          projects[5].style.display = 'block';
          break;
      default:

    }

  })
}
showP();
