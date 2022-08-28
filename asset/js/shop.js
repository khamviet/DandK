// var nav = document.querySelector('.flexbox');
// nav.classList.add('wow', 'animate__fadeInDown')

var menu = document.querySelector('.body-menu');
menu.classList.add('wow', 'animate__fadeInLeft')

var bodyContent = document.querySelector('.body-content > p');
bodyContent.classList.add('wow', 'animate__fadeInUp');

var content = document.querySelector('.shop-show ');
content.classList.add('wow', 'animate__fadeInUp');

var a = document.querySelectorAll('div.item');
for(var i of a) {
    i.classList.add('wow', 'animate__fadeInUp');
}

var fFooter = document.querySelector('.footer-connect');
fFooter.classList.add('wow', 'animate__fadeInUp');

var lFooter = document.querySelector('.shop--list-footer');
LFooter.classList.add('wow', 'animate__fadeInUp');

var copyRight = document.querySelector('.copyright');
copyRight.classList.add('wow', 'animate__fadeInUp');