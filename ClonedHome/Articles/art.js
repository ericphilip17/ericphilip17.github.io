const $ = document;

////SELECTING ELEMENTS:::
// h5art1.style.display = 'none';
const h5Class = $.querySelectorAll('.h5Class');
const crosses = $.querySelectorAll('.h4s > img');
const h4Title = $.querySelectorAll('.h4Title');
const aTitles = $.querySelectorAll('.h5Class > a');
const h6ReadMore = $.querySelectorAll('.readMore > h6');
const pTagsReadMore = $.querySelectorAll('.readMore > p');
const aTags = $.querySelectorAll('a');

//Remove defaut action of a-tags with href === #
const preventAtagsDefault = function() {
  aTags.forEach(a => {
    const value = a.getAttribute('href');
    if(value === '#') {
      a.addEventListener('click', e => {
        e.preventDefault();
      })
    }
  })
}

//Remove read-more text when it is clicked,
const toggleReadMoreTags = function() {
  h6ReadMore.forEach(h6 => {
    h6.style.display = 'none';
  });

  pTagsReadMore.forEach(p => {
    p.addEventListener('click', e => {
      e.target.nextElementSibling.style.display = 'block';
      e.target.style.display = 'none';
    })
  });

  h5Class.forEach(h5 => {
    h5.style.display ='none';
  });
}

//Manipulate toggling featues on click events
const allArticles = function() {
  const articles = $.querySelectorAll('.art-1');
  articles.forEach((article, index) => {
    article.firstElementChild.lastElementChild.style.display = 'none';  //Remove cross display at start
    article.addEventListener('click', e => {
      if(e.target.className === 'h4Title') {
        const paraG = e.target.parentElement.nextElementSibling.firstElementChild.nextElementSibling; // Select readmore a tag
        e.target.classList.add('activeArt');  //Animation class
        // console.log(paraG);
        e.target.parentElement.nextElementSibling.style.display = 'block'; //Show delete button
        e.target.nextElementSibling.style.display = 'block';
        e.target.textContent = `Article ${index + 1}`;
        paraG.style.display = 'block'; //Show display of readmore text
        console.log(paraG.firstElementChild);
        // paraG.firstElementChild.style.display = 'block';
        paraG.style.display = 'block';
      }
    })
  })
}

//Prepare delete button
const allCrosses = function() {
  crosses.forEach((cross, index) => {
    cross.addEventListener('click', e => {
      if(e.target.className === 'cross') {
        const para = e.target.parentElement.nextElementSibling;
        console.log(para);
        e.target.previousElementSibling.classList.remove('activeArt');
        e.target.previousElementSibling.textContent = `Open Article ${index + 1}`
        e.target.style.display = 'none';
        para.style.display = 'none';

      }
    })
  })
}


const init = function() {
  preventAtagsDefault();
  toggleReadMoreTags();
  allArticles();
  allCrosses();
}












init();
console.log('Program running');
