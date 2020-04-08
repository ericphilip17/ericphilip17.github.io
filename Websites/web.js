const $ = document;

aTags = $.querySelectorAll('a');
aTags.forEach(a => {
  console.log(a.textContent);
})
