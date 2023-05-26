//sets main-title-sub displays

const main_title_sub=document.getElementsByClassName("main-title-sub")
const subMessage=['North East Floridas preimere mathematics tutoring.','Over 2 decades of educational experience','Contact us to learn more']
var counter=0

function timeout(){
    document.getElementById('main-subheader').className-='-show';
    setTimeout(showTitleSub,3000);


}

function showTitleSub(){
  
    //document.getElementById("test").children[0].className += " load";
    //var tempDisplay=document.getElementsById('main-subheader');
    //tempDisplay.classlist.add('show');
    //document.getElementById('main-subheader').innerHTML=subMessage[0];
    //document.getElementById('main-subheader').style.display='flex';
    if (counter<subMessage.length){
        timeout();
        document.getElementById('main-subheader').className+='-show';
        document.getElementById('main-subheader').innerHTML=subMessage[counter];
        counter++       
    }
    
    
        
        //showTitleSubDisplayTimer(i)    
    }
    


showTitleSub();