!function(e){"function"!=typeof e.matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),n=0;o[n]&&o[n]!==t;)++n;return Boolean(o[n])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null})}(window.Element.prototype);

function showContentWithAnimation() {
    const body = document.body;
  
    if (!body) {
      console.error("Body element not found");
      return;
    }
  
    body.classList.add('loaded_hiding');
  
    setTimeout(function () {
      body.classList.add('loaded');
      body.classList.remove('loaded_hiding');
      body.style.overflowY = 'auto';
    }, 200);
}

window.onload = function () {
    showContentWithAnimation();
};

document.addEventListener('DOMContentLoaded', function() {

   var modalButtons = document.querySelectorAll('.js-open-modal'),
       closeButtons = document.querySelectorAll('.js-modal-close');
       modalImg = document.querySelectorAll('.modal-imgs');
       modalButtons.forEach(function(item){
        item.addEventListener('click', function(e) {
          e.preventDefault();
      
          var modalId = this.getAttribute('data-modal'),
              modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');
      
          modalElem.classList.add('active');
      
          document.body.style.overflow = 'hidden';
        });
      });
      closeButtons.forEach(function(item){
        item.addEventListener('click', function(e) {
          var parentModal = this.closest('.modal');
      
          parentModal.classList.remove('active');
          document.body.style.overflowY = 'auto';
        });
      });


    document.body.addEventListener('keyup', function (e) {
        var key = e.keyCode;

        if (key == 27) {
            document.querySelector('.modal.active').classList.remove('active');
            
            document.body.style.overflowY = 'auto';
        };
    }, false);


//-----------------------------------------------------

const videosos = document.querySelectorAll('.home-img video');

videosos.forEach(video => {
    video.removeAttribute('controls');
});

//-----------------------------------------------------

const pTags = document.querySelectorAll(".home-text-mobil-p");
let index = 0;

const toggleVisibility = () => {
    pTags[index].style.opacity = 0; // Скрываем текущий тег с помощью opacity
    setTimeout(() => {
        pTags[index].style.display = "none"; // После анимации скрываем элемент полностью
        index = (index + 1) % pTags.length;
        pTags[index].style.display = "block"; // Отображаем следующий тег
        pTags[index].style.opacity = 1; // Плавно показываем его снова
    }, 1000); // Задержка 1 секунда для завершения анимации скрытия
};

// Изменяем теги каждые 3 секунды с анимацией
setInterval(toggleVisibility, 3000);
toggleVisibility();

//-----------------------------------------------------

function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.bottom >= 0 &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

    var fixedButton = document.querySelector(".fixed-button");
    fixedButton.style.opacity = "0";
    fixedButton.style.zIndex = "-1";
     

  function toggleFixedButtonVisibility() {
    var fixedButton = document.querySelector(".fixed-button");
    var blocksToShowOn = ["hello-end", "triple-order", "home-text"];
  
    if (fixedButton) {
      var shouldShow = blocksToShowOn.some(function (blockId) {
        var block = document.getElementById(blockId);
        return block && isElementInViewport(block);
      });
  
      if (shouldShow) {
        fixedButton.style.opacity = "0";
        fixedButton.style.zIndex = "-1";
      } else {
        fixedButton.style.opacity = "1";
        fixedButton.style.zIndex = "99";
      }
    }
  }
  
  window.addEventListener("scroll", toggleFixedButtonVisibility);
  
  
      
//-----------------------------------------------------


function addMouseEvents(target, image, offsetX, offsetY, defaultTop, defaultLeft) {
  target.addEventListener('mouseenter', () => {
      image.style.top = `${offsetY}%`;
      image.style.left = `${offsetX}%`;
      image.style.animation = 'none';
  });

  target.addEventListener('mouseleave', () => {
      image.style.top = `${defaultTop}%`;
      image.style.left = `${defaultLeft}%`;
      image.style.animation = 'moveImage 15s infinite alternate';
  });

  target.addEventListener('mousemove', (event) => {
      const x = event.clientX - target.getBoundingClientRect().left;
      const y = event.clientY - target.getBoundingClientRect().top;
      image.style.transform = `translate(${x}px, ${y}px)`;
  });
}

// const homeText = document.querySelector('.home');
// const homeTextImg = document.querySelector('.home-text-img');
const mineralTitle = document.querySelector('.mineral');
const mineralTitleImg = document.querySelector('.mineral-img');

function getScreenWidth() {
  return window.innerWidth;
}

function initializeMouseEvents() {
  if (windowWidth <= 480) {
      // addMouseEvents(homeText, homeTextImg, -40, -60, -50, 0);
      addMouseEvents(mineralTitle, mineralTitleImg, -25, -22, 0, 0);
  } else if (windowWidth <= 768) {
      // addMouseEvents(homeText, homeTextImg, -40, -55, -50, 0);
      addMouseEvents(mineralTitle, mineralTitleImg, -25, -25, 0, 0);
  } else if (windowWidth <= 1024) {
      // addMouseEvents(homeText, homeTextImg, -40, -70, -50, 0);
      addMouseEvents(mineralTitle, mineralTitleImg, -25, -25, 0, 0);
  } else if (windowWidth <= 1100) {
      // addMouseEvents(homeText, homeTextImg, -40, -55, -50, 0);
      addMouseEvents(mineralTitle, mineralTitleImg, -25, -25, 0, 0);
  } else if (windowWidth <= 1400) {
      // addMouseEvents(homeText, homeTextImg, -40, -65, -50, 0);
      addMouseEvents(mineralTitle, mineralTitleImg, -25, -35, 0, 0);
  } else if (windowWidth > 1400) {
      // addMouseEvents(homeText, homeTextImg, -25, -35, 10, 0);
      addMouseEvents(mineralTitle, mineralTitleImg, -25, -32, 0, 0);
  } else if (windowWidth <= 480) {
    // addMouseEvents(homeText, homeTextImg, -25, -35, 10, 0);
    addMouseEvents(mineralTitle, mineralTitleImg, -25, -20, 0, 0);
  }
}


let windowWidth = getScreenWidth();

initializeMouseEvents();

window.addEventListener('resize', () => {
  windowWidth = getScreenWidth();
  initializeMouseEvents();
});


//-----------------------------------------------------


const listItems = document.querySelectorAll(".vitamin ul li");

listItems.forEach((item) => {
    const hiddenVitamin = item.querySelector(".hidden-vitamin");

    const showHiddenVitamin = () => {
        hiddenVitamin.style.display = "block";
        hiddenVitamin.style.opacity = "1";
    };

    const hideHiddenVitamin = () => {
        hiddenVitamin.style.opacity = "0";
        hiddenVitamin.style.display = "none";
    };

    item.addEventListener("mouseenter", showHiddenVitamin);

    item.addEventListener("mouseleave", hideHiddenVitamin);

    item.addEventListener("click", (e) => {
        e.stopPropagation();
        hiddenVitamin.style.display = "block";
        hiddenVitamin.style.opacity = "1";
    });
});




//-----------------------------------------------------



//-----------------------------------------------------------------------

const paragraphItems = document.querySelectorAll('.modal-top ul li');
const imagePointer = document.querySelector('.image-pointer');
const modalImages = document.querySelectorAll('.modal-imgs img');

function updateImagePointerTop(index) {
  const windowWidth = window.innerWidth;

  if (windowWidth <= 1024) {
    imagePointer.style.top = `${-23 + index * 52}px`;
    imagePointer.style.left = `-15%`;
  } else if (windowWidth <= 1100) {
    imagePointer.style.top = `${-17 + index * 61}px`;
    imagePointer.style.left = `-12.5%`;
  } else if (windowWidth <= 1400) {
    imagePointer.style.top = `${-17 + index * 70}px`;
    imagePointer.style.left = `-10.5%`;
  } else {
    imagePointer.style.top = `${-17 + index * 77}px`;
    imagePointer.style.left = `-8.5%`;
  }
}

window.addEventListener('resize', () => {
  paragraphItems.forEach((paragraph, index) => {
    if (paragraph.classList.contains('active')) {
      updateImagePointerTop(index);
    }
  });
});

paragraphItems.forEach((paragraph, index) => {
  paragraph.addEventListener('mouseenter', () => {
    const imageUrl = paragraph.getAttribute('data-image');

    modalImages.forEach((img, imgIndex) => {
      if (imgIndex === index) {
        img.src = imageUrl;
        img.classList.add('active');
      } else {
        img.classList.remove('active');
      }
    });

    updateImagePointerTop(index);
  });
});

updateImagePointerTop(0);



//-----------------------------------------------------------------------

const mask = document.querySelector(".mask");
const researchButton = document.querySelector(".research-button");
const researchLinks = document.querySelector(".research-links");
const production = document.querySelector(".production");
const research = document.querySelector(".research");

researchButton.addEventListener("click", function () {
   mask.style.background = "linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 100%)";
   researchButton.classList.add('hidden');
   researchLinks.style.maxHeight = "none"; 
   production.style.marginTop = "0";
   researchLinks.style.setProperty("--before-display", "none");
});

function isOutOfViewport(element) {
   const rect = element.getBoundingClientRect();
   return (
      rect.bottom < 0 ||
      rect.right < 0 ||
      rect.left > window.innerWidth ||
      rect.top > window.innerHeight
   );
}

function checkResearchVisibility() {
   if (isOutOfViewport(research)) {
      mask.style.background = "linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 75%)";
      researchButton.classList.remove('hidden');
   }
}

window.addEventListener('scroll', checkResearchVisibility);

checkResearchVisibility();

//-----------------------------------------------------------------------

const videos = document.querySelectorAll('.videos video');
const extraDistance = 100;

videos.forEach(video => {
    video.removeAttribute('controls');
});

function showVideo(video) {
    video.style.opacity = 1;
}

function hideVideo(video) {
    video.style.opacity = 0;
}

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    if (videos[0].getBoundingClientRect().top + extraDistance -100 <= windowHeight / 2) {
        showVideo(videos[0]);
    } else {
        hideVideo(videos[0]);
    }

    if (videos[1].getBoundingClientRect().top + extraDistance <= windowHeight / 2) {
        showVideo(videos[1]);
    } else {
        hideVideo(videos[1]);
    }

    if (videos[2].getBoundingClientRect().top + extraDistance + 100 <= windowHeight / 2) {
        showVideo(videos[2]);
    } else {
        hideVideo(videos[2]);
    }

    lastScrollY = scrollY;
});


//-----------------------------------------------------------------------

const images = document.querySelectorAll(".how-to-motion img");
let topPosition = 0;
let scrollYBefore = window.scrollY;
let lastVisibleImageIndex = 0;

let valueForSmallScreens = 30;

if (window.matchMedia("(max-width: 768px)").matches) {
  valueForSmallScreens = 15;
}

function updateImagePositions() {
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;
  const firstImage = images[0];

  images.forEach((image, index) => {
    const newPosition = topPosition + index * valueForSmallScreens;
    image.style.top = newPosition + "px";

    const centerY = windowHeight / 2;
    const imageCenterY = image.getBoundingClientRect().top + image.height / 2;
    const distanceToCenter = Math.abs(centerY - imageCenterY);

    if (index <= lastVisibleImageIndex) {
      image.style.opacity = 1;
    } else if (distanceToCenter < 50 && imageCenterY >= 0) {
      image.style.opacity = 1;
      lastVisibleImageIndex = index;
    } else {
      if (scrollY < scrollYBefore && index < lastVisibleImageIndex) {
        image.style.opacity = 0;
      } else {
        image.style.opacity = 0;
      }
    }
  });

  firstImage.style.opacity = 1;

  scrollYBefore = scrollY;
}

window.addEventListener("scroll", updateImagePositions);

window.addEventListener("load", updateImagePositions);



});