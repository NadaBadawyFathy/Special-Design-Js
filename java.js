// Menue
let menu = document.querySelector('.header .toggle-menu');
let ul = document.querySelector('.header .box ul');

menu.onclick = function () {
    if (ul.className === 'hidden'){
        ul.className = 'show';
    }else{
        ul.className = 'hidden';
    }
}

// change background img
let setImg = ['01.jpg','03.jpg','04.jpg','05.jpg','07.jpg','09.jpg','10.jpg'];

let changeImg = document.querySelector('.landing')
let ckeck = 1;

function randomBackground() {
    setInterval(function () {
        let randomNumber = Math.floor(Math.random() * setImg.length);
        if (ckeck){
            changeImg.style.backgroundImage = `url(./images/${setImg[randomNumber]})`
        }
    },8000)
}
randomBackground();

// when click go to section
let divItems = document.querySelectorAll('.ul div');
let linksItem = document.querySelectorAll('.ul div a');
let spanItems = document.querySelectorAll('.ul div span');

for (let index = 0; index < linksItem.length; index++) {
    linksItem[index].className = index;
    spanItems[index].className = index;
}

linksItem.forEach(function (item) {
    item.addEventListener('mouseover',(e) =>{
        let str = e.target.className;
        spanItems[+str].classList.add('active');
    });

    item.addEventListener('mouseout',(e) =>{
        let str = e.target.className;
        spanItems[+str].classList.remove('active');
    });
})

// setting box
let iItem = document.querySelector('.setng-box .icon i');
let icon = document.querySelector('.setng-box .icon');
let open = document.querySelector('.setng-box');

iItem.onclick = function (e) {
    if (!icon.classList.contains('click') && !open.classList.contains('open')){
        icon.classList.add('click')
        open.classList.add('open');
        iItem.style.animation = 'rotate-sett 2s infinite linear';
    }else{
        icon.classList.remove('click');
        open.classList.remove('open');
        iItem.style.animation = 'none';
    }
}

// Save color in local storage to change main colors

let colors = document.querySelectorAll('.colors li');

colors.forEach(function (item) {
    item.onclick = function (ele) {
        colors.forEach(function (params) {
            params.classList.remove('active');
        })
        let mainColor = this.className;
        document.documentElement.style.setProperty('--main-color',mainColor)
        window.localStorage.setItem('mainColor', mainColor);
        this.classList.add('active');
    }
})


if (window.localStorage.getItem('mainColor')){

    document.documentElement.style.setProperty('--main-color',window.localStorage.getItem('mainColor'));

    colors.forEach(element => {
        element.classList.remove('active');
        if (element.className === window.localStorage.getItem('mainColor')){
            element.classList.add('active')
        }
    });
}
// Random Backgrounds
let ckeckRandomBackground = document.querySelectorAll('.random-back a');

ckeckRandomBackground.forEach(function (item) {
    item.onclick = function () {
        ckeckRandomBackground.forEach(function (ele) {
            ele.classList.remove('active');

        })
        if (this.className === 'yes') {
            ckeck = 1;
            randomBackground();
            window.localStorage.setItem('ckeck',ckeck);
        }else {
            ckeck = 0;
            randomBackground();
            window.localStorage.setItem('ckeck',ckeck);
        }
        this.classList.add('active');
    }
})

if (window.localStorage.getItem('ckeck')){
    ckeck = +(window.localStorage.getItem('ckeck'));

    ckeckRandomBackground.forEach(element => {
        element.classList.remove('active')
    });
    
    if (ckeck){
        ckeckRandomBackground[0].classList.add('active')
    }else {
        ckeckRandomBackground[1].classList.add('active')
    }
    randomBackground();
    console.log(window.localStorage.getItem('ckeck'))
}

// Show bullets
let showBullets = document.querySelectorAll('.show-bull a');
let ulItems = document.querySelector('.ul');

showBullets.forEach(function (item) {
    item.onclick = function () {
        showBullets.forEach(function (ele) {
            ele.classList.remove('active');

        })
        if (this.className === 'yes') {
            ulItems.style.display = 'block';
            window.localStorage.setItem('display','block');
        }else {
            ulItems.style.display = 'none';
            window.localStorage.setItem('display','none');
        }
        this.classList.add('active');
    }
})

if (window.localStorage.getItem('display')){

    ulItems.style.display = window.localStorage.getItem('display')
    showBullets.forEach(element => {
        element.classList.remove('active');
    });

    if (window.localStorage.getItem('display') === 'block'){
        showBullets[0].classList.add('active')
    }else{
        showBullets[1].classList.add('active')
    }
}

// Reset Options

let resetBtn = document.querySelector('.setng-box .setng button');

resetBtn.onclick = function (params) {
    window.localStorage.clear();
    location.reload();
}

// Scroll Section Skills
let skills = document.querySelector('.skills')
let scrollskills = document.querySelectorAll('.skills .container div .brogress span');

window.onscroll = function (ele) {
    if (window.scrollY > (skills.offsetTop + skills.offsetHeight - this.innerHeight)){
        for (let index = 0; index < scrollskills.length; index++) {
            scrollskills[index].style.width = scrollskills[index].getAttribute('data-progress')
            
        }
    }
}

// Manage Section Gallery
let imgItems = document.querySelectorAll('.gallery .container .imgs img');

imgItems.forEach(element => {
        // Create Div
        let boxImg = document.createElement('div');
        boxImg.style.cssText = 'position: fixed; z-index: 1000; width: 100%; height: 100%; left: 0; top: 0; background-color: rgba(0, 0, 0, 0.6); display: flex; justify-content: center; align-items: center;'

        // Create Content 
        let contentImg = document.createElement('div');
        contentImg.style.cssText = 'padding: 20px; background-color: white; text-align: center; position: relative; width:50%'

        // Create H4 Ele
        let h4Element = document.createElement('h4');
        h4Element.innerHTML = element.alt;
        h4Element.style.cssText = 'color: var(--main-color); margin-bottom: 20px;'

        // Create Image
        let eleImg = document.createElement('img');
        eleImg.src = element.src;
        eleImg.style.maxWidth = '100%';

        // Create Icon
        let iconElement = document.createElement('i');
        iconElement.className = 'fa-solid fa-xmark fa-xl';
        iconElement.style.cssText = 'position: absolute; top:-15px; right:-15px; width:40px; height:40px; border-radius:50%; background-color: var(--main-color); color:white; display: flex; justify-content: center; align-items: center; cursor: pointer;'

        contentImg.appendChild(h4Element);
        contentImg.appendChild(eleImg);
        contentImg.appendChild(iconElement)

        boxImg.appendChild(contentImg);

    element.onclick = function (params) {
        document.body.appendChild(boxImg);
        
        iconElement.onclick = function (params) {
            boxImg.remove();
        }
    }
});