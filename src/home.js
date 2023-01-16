//create FCMC home page 

function mainHome(){
    const home=document.createElement('div');
    home.classList.add('home');

    const homeImage=document.createElement('img');
    homeImage.src="../images/homeImage1.png";
    homeImage.alt='homeImage';

    home.appendChild(homeImage);
    

    return home;
}






function createHome(){
    const main=document.getElementById('content');
    main.appendChild(mainHome())


}

export default createHome;
