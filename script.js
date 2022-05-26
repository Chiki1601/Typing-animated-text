/* // Get load " typeng animation " // */
const headLoadTypeng = document.querySelector('.first-page .load-page'); // Get Home Page ( load page ).
const headLoadInScroll = document.querySelector('.first-page .load-page .load-content'); // Get Home Page ( load page ) Haed.
const homeButton = document.querySelector('.first-page .load-content .text-4 content-button') // Get Home Page ( load page ) Button.
const LoadScrollDown = document.querySelector('.first-page .load-page .home-footer .scroll-down') // Get Footer Scroll Down Animation.
const homeCallAboutB = document.getElementById('home-about-button');

  
//--------------------------------/* Loading Page */------------------------------------------------//

/* Creat My Name Text for load Page Text 2 */
const tag1MyName = document.querySelector('.load-page .text-2 .my-name #tag-1');
const text2MyName_name = document.querySelector('.load-page .text-2 .my-name #name');
const tag2MyName = document.querySelector('.load-page .text-2 .my-name #tag-2');

tag1MyName.textContent = `<h2>`;
text2MyName_name.textContent = `Pooja Patel`;
tag2MyName.textContent = `</h2>`;


        /* Creat My Name Text for load Page Text 4 */
const buttonTag1 = document.querySelector('#tag-b-1')
    buttonTag2 = document.querySelector('#tag-b-2'),
    buttonContent = document.querySelector('.content-button');

buttonTag1.textContent = `<button>`;
buttonContent.textContent = `About Me`;
buttonTag2.textContent = `</button>`;