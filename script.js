let sliderImages = document.querySelectorAll('.image-bg');
let sliderText = document.querySelectorAll('.container');
let	arrowLeft = document.querySelector('.prev');
let	arrowRight = document.querySelector('.next');
let current=0;
	
//clear all
function reset() {
  for (i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display='none';	
        sliderText[i].style.display='none';
		sliderImages[i].style.animation='moveForward .8s ease-out';
        sliderText[i].style.animation='moveForward .9s ease-out';	
    }	
};
//init slider			
function startSlide() {
		reset();
		sliderImages[0].style.display='block';
        sliderText[0].style.display='block';
		sliderImages[0].style.animation='moveForward .8s ease-out';
        sliderText[0].style.animation='moveForward .9s ease-out';	
};		
		
//show previous
function slideLeft() {
		reset();	
		sliderImages[current-1].style.display='block';
        sliderText[current-1].style.display='block';
        sliderImages[current-1].style.animation='moveReverse .8s ease-out';	
        sliderText[current-1].style.animation='moveReverse .9s ease-out';		
		current--;
};
		
//show next
function slideRight() {
		reset();	
		sliderImages[current+1].style.display='block';
        sliderText[current+1].style.display='block';
        sliderImages[current+1].style.animation='moveForward .8s ease-out';
        sliderText[current+1].style.animation='moveForward .9s ease-out';	
		current++;
};
		
arrowLeft.addEventListener('click',function () {
        if (current === 0) {
			current=sliderImages.length;	
	    }
		slideLeft();		
});
		
arrowRight.addEventListener('click',function () {
       if (current === sliderImages.length - 1) {
			current=-1;	
		}
		slideRight();		
});

document.addEventListener('keydown', e => {
	if (e.keyCode === 37) {
		if (current === 0) {
			current=sliderImages.length;	
	    }
		slideLeft();	
	}
})

document.addEventListener('keydown', e => {
	if (e.keyCode === 39) {
		if (current === sliderImages.length - 1) {
			current=-1;	
		}
		slideRight();		
	}
})
		
startSlide();
