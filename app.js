const menuBtn = document.getElementById("menuBtn")
const menu = document.getElementById("menu")
const sideNav = document.getElementById("sideNav")

sideNav.style.right ="-250px"
menuBtn.onclick=function(){
    if(sideNav.style.right=="-250px"){
        sideNav.style.right ="0px"
        menu.src ="./Barber_Shop_img/close.png"
    }else{
        sideNav.style.right ="-250px"
        menu.src ="./Barber_Shop_img/menu.png"
    }
}

var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 500,
	speedAsDuration: true
});
