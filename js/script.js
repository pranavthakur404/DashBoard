let toggleNav = document.getElementById('toggle-nav');
let closeNav = document.getElementById('close-nav');
let leftSection = document.getElementById("left-sec");

toggleNav.addEventListener('click',function(x){
    leftSection.style.left="0px";
    leftSection.style.background="white";
    leftSection.style.width="100%";
});

closeNav.addEventListener('click',function(){
    leftSection.style.left="-150%";
});

