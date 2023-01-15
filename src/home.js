//create FCMC home page 

function mainHome(){
    const home=document.createElement('div');
    home.classList.add('home');

    const homeImage=document.createElement('img');
    homeImage.src="./images/homeImages1.png";
    homeImage.alt='homeImage';

    home.appendChild(homeImage);
    const home2=document.createElement('h3');
    home2.textContent='test test test'
    home.appendChild(home2)

    return home;
}






function createHome(){
    const main=document.getElementById('content');
    main.textContent='hometest';
    main.appendChild(mainHome())


}

export default createHome;
