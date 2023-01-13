import _, { forEach } from 'lodash';
//main styles import
import '../styles/styleMain.css';
//aside menu import
import './aside.js';



const links=document.querySelectorAll('[link]');


links.forEach(e=>{
    e.addEventListener('click',()=>{
        console.log(e.id);
    })
})





//creates main body tag
function createBody(){
    const main = document.createElement('main');
    main.classList.add('main');
    main.setAttribute('id',"main");
    return main;

}





//call home.js

//call about.js

//call contact.js

//call news.js

//call login/register.js


function siteInit(){
    const content = document.getElementById('content');
    content.appendChild(createBody())
}

siteInit();



