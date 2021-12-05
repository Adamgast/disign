"use strict"

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