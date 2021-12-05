"use strict"

// POPUP====================================================================================================================================================================================
const popupLinks = document.querySelectorAll('.popup-link');
const lockPadding = document.querySelectorAll('.lock-padding');
const body = document.querySelector('body');
let unlock = true;
const timeout = 300;

if (popupLinks.length>0) {
	for(let index = 0; index<popupLinks.length; index++){
		const popupLink = popupLinks[index];
		popupLink.addEventListener("click", function(e){
			const popupName = popupLink.getAttribute('href').replace('#', '');
			const curentPopup = document.getElementById(popupName);
			popupOpen(curentPopup);
			e.preventDefault();
		});
	}
}

 //Закрывающий объект
const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length>0) {
	for(let index = 0; index < popupCloseIcon.length; index ++){
		const el = popupCloseIcon[index];
		el.addEventListener('click', function(e){
			popupClose(el.closest('.popup'));
			e.preventDefault();
		});
	}
}

 //Функция открытия POPUP
 function popupOpen(curentPopup){
 	if (curentPopup && unlock) {
 		const popupActive = document.querySelector('.popup._open');
 		if (popupActive) {
 			popupClose(popupActive, false);
 		} else{
 			bodyLock();
 		}
 		curentPopup.classList.add('_open');
 		curentPopup.addEventListener("click", function(e){
 			if (!e.target.closest('.popup__content')) {
 				popupClose(e.target.closest('.popup'));
 			}
 		});
 	}
 }


function popupClose(popupActive, doUnlock = true){
	if (unlock) {
		popupActive.classList.remove('_open');
		if (doUnlock) {
			bodyUnLock();
		}
	}
}


 function bodyLock(){
 	const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

 	if (lockPadding.length>0) {
	 	for(let index = 0; index < lockPadding.length; index++){
	 		const el = lockPadding[index];
	 		el.style.paddingRight = lockPaddingValue;
	 	}
	}
 	body.style.paddingRight = lockPaddingValue;
 	body.classList.add('_lock');

 	unlock = false;
 	setTimeout(function(){
 		unlock = true;
 	}, timeout);
 }

 function bodyUnLock(){
 	setTimeout(function(){
 		if (lockPadding.length>0) {
	 		for(let index = 0; index < lockPadding.length; index++){
	 			const el = lockPadding[index];
	 			el.style.paddingRight = '0px';
	 		}
	 	}	
 		body.style.paddingRight = '0px';
 		body.classList.remove('_lock');
 	}, timeout);

 	unlock = false;
 	setTimeout(function(){
 		unlock = true;
 	}, timeout);
 }
//======================================================================================================================================================================================================

//ibg photo ==================================================================================================================================================================================
function ibg(){
	let ibg=document.querySelectorAll("._ibg");
  for (var i = 0; i < ibg.length; i++) {
	if(ibg[i].querySelector('img')){
		ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
	}
  }
}
ibg();
//==================================================================================================================================================================================

//Динамический адаптив=====================================================================================================
const parent_orig = document.querySelector('.main');
const parent = document.querySelector('.main__container');
const item = document.querySelector('.main__social');

	// Слушаем изменение размера экрана
window.addEventListener('resize', function(event){
	const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	if (viewport_width<=560) {
		if (!item.classList.contains('_done')) {
			parent.insertBefore(item,parent.children[1]);
			item.classList.add('_done');
		}
	} else{
		if (item.classList.contains('_done')) {
			parent_orig.insertBefore(item,parent_orig.children[1]);
			item.classList.remove('_done');
		}
	}
});
//=====================================================================================================

// Меню бургер на чистом JS ===========================================================================================================================================================
const iconMenu = document.querySelector('.icon-menu');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
	iconMenu.addEventListener("click", function(e){
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}
//===============================================================================================================================================================================

// Slider Swiper ===============================================================================================================================================================================
new Swiper('.material__slider',{
	pagination: {
		el: '.swiper-pagination',
		clickable:true,
	},
	grabCursor: true,
        effect: "creative",
        creativeEffect: {
          prev: {
            shadow: true,
            translate: ["-20%", 0, -1],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        },
    loop:true,
});
//=================================================================================================================================================================================

