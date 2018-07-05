// const title = document.createElement('h1');
// title.textContent = 'Title created from JS';
// title.classList.add('red');
// const container = document.querySelector('div');
// // // container.appendChild(title);
// // const article = document.querySelector('article');
// // const firstTitle = document.querySelector('#title')
// // container.insertBefore(title, firstTitle);
//
// // container.append(title);  /*in end */
// // container.prepend(title); /*in start*/
//
// /*способ размещения легче*/
// const article = document.querySelector('article');
// // article.after(title);
// article.before(title);
// article.replaceWith(title);
//
// document.querySelector('.list').remove();


// inner.HTML

// const div = document.querySelector('div');
// // // div.textContent = 'Hello World';
// // // console.log(div);
// div.innerHTML = '<h1>Hello World!</h1>';
// div.innerHTML += '<p>Hello World!</p>';
// // div.textContent = '<p>Hello World!</p>';

// let root = document.querySelector('div');
// // const frag = document.createDocumentFragment();
// // for (let i = 0; i < 100; i++) {
// //     let box = document.createElement('div');
// //     box.classList.add('box');
// //     frag.append(box);
// // }
// // root.append(frag);
// let str = '';
// for (let i = 0; i< 100; i++) {
//     str += '<div class="box"></div>'
// }
// root.innerHTML = str;


// const ul = document.querySelector('ul');
// const text = '<li>Hello World!</li>';
// // ul.insertAdjacentHTML('beforebegin', text); // перед
// // ul.insertAdjacentHTML('afterend', text); // після
// // ul.insertAdjacentHTML('afterbegin', text); // всередині спочатку
// // ul.insertAdjacentHTML('beforeend', text); // всередині вкінці


// const article = document.querySelector('.article');
// const cloneArticle = article.cloneNode(true);
// console.log(cloneArticle);

const jumbotron = document.querySelector('.jumbotron');



//create
const titileContainer = document.createElement('div');
const h1 = document.createElement('h1');
const deadpoolSpan = document.createElement('span');
const deadpoolP = document.createElement('p');
const deadpoolSpan2 = document.createElement('span');
const imgContainer = document.createElement('div');
const mainImg = document.createElement('img');
const subtitleContainer = document.createElement('div');
const listContainer = document.createElement('div');
const ul = document.createElement('ul');
const imgContainer1 = document.createElement('div');
const mainImg1 = document.createElement('img');
const subtitleContainer1 = document.createElement('div');
const rowContainer = document.createElement('div');
const col = document.createElement('div');
const blackquote = document.createElement('blockquote');
const footerP = document.createElement('p');
const footer = document.createElement('footer');
const cite = document.createElement('cite');
const footerContainer = document.createElement('div');
const colMd6 = document.createElement('div');
const smallP = document.createElement('p');
const colMd6Last = document.createElement('div');
const ulFooter = document.createElement('ul');



const liArr = ['- BORN IN CANADA AS WADE WILSON.', '- HIS MOTHER DIED OF CANCER WHILE HE WAS YOUNG AND HIS FATHER (WHO WAS IN THE MILITARY) WAS PHYSICALLY ABUSIVE.', '- WADE BEGAN HIS MERCENARY CAREER WHILE STILL IN HIS LATE TEENS.', '- IN AMERICA, HE MET AND FELL IN LOVE WITH TEENAGE PROSTITUTE VANESSA CARLYSLE, WITH WHOM HE SHARED DREAMS OF A BETTER LIFE.', '- LEARNING THAT HE HAD CONTRACTED CANCER, WILSON BROKE UP WITH VANESSA RATHER THAN FORCE HER TO REMAIN WITH A TERMINALLY ILL MAN.', '- IN PURSUE OF HOPE FOR HIS TERMINAL CONDITION, HE JOINS THE WEAPON X PROGRAM', '- HIS CANCER WAS TEMPORARILY ARRESTED VIA THE IMPLANTATION OF A HEALING FACTOR DERIVED FROM WOLVERINE', '- DURING ONE MISSION, WILSON KILLED HIS TEAMMATE SLAYBACK. AS A RESULT, HE WAS REJECTED FROM THE WEAPON X PROGRAM AND SENT TO THE HOSPICE, ALLEGEDLY A GOVERNMENT FACILITY WHERE FAILED SUPERHUMAN OPERATIVES WERE TREATED.', '- IN THE HOSPICE HE WAS TORTURED BY THE DOCTOR KILLEBREW AND HIS SADISTIC ASSISTANT AJAX, WHO TORE OUT WILSON’S HEART AND LEFT HIM FOR DEAD', '- FOLLOWING HIS ESCAPE HE SOON RETURNED TO HIS FREELANCE MERCENARY ACTIVITIES, DONNING A COSTUME IN KEEPING WITH HIS NEW IDENTITY, DEADPOOL', '- WHY DO YOU KEEP READING, THIS IS SO BORING...'];

const spanArr = ['SOME YEAR ', 'SOME OTHER YEAR ', 'SOME OTHER DIFERENT YEAR ', 'YET ANOTHER YEAR ', 'YESTERDAY? ', 'NO... ', 'WHO CARES? ', 'DUNNO ', 'MEEH ', '???? ', '@$%^# '];



for (li = 0; li < 11; li++){
    let list = document.createElement('li');
    let span = document.createElement('span');
    list.classList.add('list-item');
    span.classList.add('red-text');
    list.textContent = liArr[li];
    span.textContent = spanArr[li];
    list.prepend(span);
    ul.append(list);
}

mass = ['Made as a <a href="https://www.freecodecamp.com/" target="_blank">CodeCamp</a> project',
    '<a href="http://www.foxmovies.com/movies/deadpool" target="_blank">Assets and idea</a>',
    '<a href="http://marvel.com/universe/Deadpool_(Wade_Wilson)" target="_blank">Info</a>',
    '<a href="https://twitter.com/deadpoolmovie" target="_blank">The best twitter ever</a>'];

for (let i = 0; i < mass.length; i++){
    const liFooter = document.createElement('li');
    liFooter.innerHTML = mass[i];
    ulFooter.append(liFooter);
}

//add class
titileContainer.classList.add('row', 'title-container');
h1.classList.add('text-center');
deadpoolSpan.classList.add('red-text');
deadpoolP.classList.add('text-center');
deadpoolSpan2.classList.add('red-text');
imgContainer.classList.add('row');
mainImg.classList.add('img-responsive', 'inside-shadow');
subtitleContainer.classList.add('row', 'sub-title-container');
listContainer.classList.add('row', 'list-container');
imgContainer1.classList.add('row');
mainImg1.classList.add('img-responsive', 'inside-shadow');
subtitleContainer1.classList.add('row', 'sub-title-container');
rowContainer.classList.add('row');
col.classList.add('col-ls-6', 'col-ls-offset-3', 'col-md-6', 'col-md-offset-3');
blackquote.classList.add('blockquote-reverse');
footerContainer.classList.add('row', 'footer');
colMd6.classList.add('col-md-6');
smallP.classList.add('small-text');
colMd6Last.classList.add('col-md-6');



//clone
const cloneH1 = h1.cloneNode(false);
const cloneH2 = h1.cloneNode(false);

//add attr
imgContainer.setAttribute('id', 'main-image-container');
mainImg.setAttribute('src', 'http://s3.foxfilm.com/foxmovies/production/films/103/images/gallery/deadpool1-gallery-image.jpg');
mainImg.setAttribute('alt', 'picture');
imgContainer1.setAttribute('id', 'main-image-container');
mainImg1.setAttribute('src', 'http://s3.foxfilm.com/foxmovies/production/films/103/images/gallery/deadpool-gallery-06-gallery-image.jpg');
mainImg1.setAttribute('alt', 'picture');
cite.setAttribute('title', 'Source Title');

//add text
h1.textContent = ' TRIBUTE PAGE';
deadpoolSpan.textContent = 'DEADPOOL';
deadpoolP.textContent = 'WITH GREAT POWER COMES GREAT ';
deadpoolSpan2.textContent = 'IRRESPONSIBILITY';
cloneH1.textContent = 'TIMELINE';
cloneH2.textContent = 'QUOTE';
footerP.textContent = 'MMMMHHH... I\'M TOUCHING MYSELF TONIGHT.';
cite.textContent = 'Someone with a great ass';
smallP.textContent = 'All rights and lefts reserved.';

//paste
jumbotron.append(titileContainer);
titileContainer.append(h1);
h1.prepend(deadpoolSpan);
titileContainer.append(deadpoolP);
deadpoolP.append(deadpoolSpan2);
jumbotron.append(imgContainer);
imgContainer.append(mainImg);
jumbotron.append(subtitleContainer);
subtitleContainer.prepend(cloneH1);
jumbotron.append(listContainer);
listContainer.append(ul);
jumbotron.append(imgContainer1);
imgContainer1.append(mainImg1);
jumbotron.append(subtitleContainer1);
subtitleContainer1.prepend(cloneH2);
jumbotron.append(rowContainer);
rowContainer.append(col);
col.append(blackquote);
blackquote.append(footerP);
blackquote.append(footer);
footer.append(cite);
jumbotron.append(footerContainer);
footerContainer.append(colMd6);
colMd6.append(smallP);
footerContainer.append(colMd6Last);
colMd6Last.append(ulFooter);







