import _, { forEach } from 'lodash';
//main styles import
import '../styles/styleMain.css';
//import '../styles/styleHome.css';
//aside menu import
import './aside.js';
import createHome from '../src/home';
import textDisplay from './load';
import showTitleSub from './mainTitleTextDisplay';


//on page load, call load.js and display intro text
window.addEventListener("load", e => {
    
  });

//setactive function 
function setActiveLinks(class_link){
    const links=document.querySelectorAll('[link]');
    links.forEach(e=>{
        e.addEventListener('click',()=>{
        console.log(e.id);
    })
})
}

//call home.js

//call about.js

//call contact.js

//call news.js

//call login/register.js


//determine page display based on user click or page load
function createBody(){
    const main = document.createElement('main');
    main.classList.add('main');
    main.setAttribute('id',"main");
    main.appendChild(createHome())
    return main;
   
}


function siteInit(){
    //call showTitleSub from mainTItleTextDisplay
    showTitleSub();

    //const content = document.getElementById('content');
    //content.appendChild(createBody())
    //setActiveLinks(document.querySelectorAll('.link'));
}

siteInit();



