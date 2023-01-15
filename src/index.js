import _, { forEach } from 'lodash';
//main styles import
import '../styles/styleMain.css';
//aside menu import
import './aside.js';
import createHome from '../src/home';


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


//creates main body tag
function createBody(){
    const main = document.createElement('main');
    main.classList.add('main');
    main.setAttribute('id',"main");
    main.appendChild(createHome())
    return main;
   
}


function siteInit(){
    const content = document.getElementById('content');
    content.appendChild(createBody())
    setActiveLinks(document.querySelectorAll('.link'));
}

siteInit();



