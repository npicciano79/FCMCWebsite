//open menu on click
const openMenu = () =>{
    document.querySelector('.backdrop').className='backdrop active';
    document.querySelector('aside').className='active';


}

//close menu on click 

const closeMenu = () =>{
    document.querySelector('.backdrop').className='backdrop';
    document.querySelector('aside').className='';


}


document.getElementById('menuBtn').onclick= e =>{
    console.log('hit');
    e.preventDefault();
    openMenu();

}

document.querySelector('aside button.close').onclick =e=>{
    closeMenu();
}

document.querySelector('.backdrop').onclick=e=>{
    closeMenu();

}