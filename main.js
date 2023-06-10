
function followButtonClicked() { //changes text to "Follow" to "Following" when clicked
    var x = document.getElementById("followButton");
    if(x.innerHTML==="Follow"){
        x.innerHTML = "Following";
        
    }
    else{
        x.innerHTML = "Follow";
       
    }
}

function changeButtonColor(){   
    var x = document.getElementById("followButton"); //changes background + text color of follow button 
    if(x.innerHTML==="Following"){
        x.style.backgroundColor = "#F0F2F5";
        x.style.color = "black";
    }
    else{
        x.style.backgroundColor = "#0095F6";
        x.style.color = "white";
    }
}

function openModal(){
    var modal = document.getElementById("myModal");

    var img=document.getElementById("myImg");
    var modalImg=document.getElementById('img1');
    var captionText = document.getElementById("caption");

}



    

