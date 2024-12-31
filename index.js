
const videoCards = document.querySelectorAll('.video-grid-container.videos .video-box video, .video-grid-container.vfx .video-box video, .video-grid-container.matching .video-box video, .video-grid-container.rotoscoping .video-box video, .video-grid-container.visual .video-box video');


const modal = document.createElement('div');
modal.id = 'video-modal';
modal.style.display = 'none'; 
modal.style.position = 'fixed';
modal.style.top = '0';
modal.style.left = '0';
modal.style.width = '100vw';
modal.style.height = '100vh';
modal.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
modal.style.zIndex = '1000';
modal.style.justifyContent = 'center';
modal.style.alignItems = 'center';


const closeButton = document.createElement('i');
closeButton.className = 'fa-regular fa-circle-xmark';
closeButton.style.color = 'red';
closeButton.style.fontSize = '30px';
closeButton.style.position = 'absolute';
closeButton.style.top = '20px';
closeButton.style.right = '20px';
closeButton.style.cursor = 'pointer';
closeButton.title = 'Close';
modal.appendChild(closeButton);


const modalVideo = document.createElement('video');
modalVideo.controls = true;
modalVideo.style.width = '90%';
modalVideo.style.maxHeight = '80%';
modal.appendChild(modalVideo);


document.body.appendChild(modal);


videoCards.forEach(video => {
  video.addEventListener('click', () => {
    modal.style.display = 'flex'; 
    modalVideo.src = video.src; 
    modalVideo.play(); 
  });
});


function closeModal() {
  modal.style.display = 'none'; 
  modalVideo.pause(); 
  modalVideo.currentTime = 0; 
}

closeButton.addEventListener('click', (e) => {
  e.stopPropagation(); 
  closeModal();
});

closeButton.addEventListener('touchstart', (e) => {
  e.stopPropagation(); 
  closeModal();
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) { 
    closeModal();
  }
});


const isMobile = window.innerWidth <= 768; 


if (!isMobile) {
  videoCards.forEach(video => {
    video.addEventListener('mouseover', () => {
      video.play(); 
    });

    video.addEventListener('mouseout', () => {
      video.pause(); 
      video.currentTime = 0; 
    });
  });
}

if (isMobile) {
  videoCards.forEach(video => {
    video.addEventListener('mouseover', () => {
      video.play(); 
    });

    video.addEventListener('mouseout', () => {
      video.pause(); 
      video.currentTime = 0; 
    });

    
    video.addEventListener('click', (e) => {
      e.preventDefault(); 
      const videoUrl = video.src; 
      window.open(videoUrl, '_blank'); 
    });
  });
}

const filterButtons = document.querySelectorAll('.filter-buttons button');
const allSections = document.querySelectorAll('.video-grid-container');


function removeActiveClass() {
  filterButtons.forEach((button) => button.classList.remove('active'));
}


function addShuffleAnimation(section) {
  section.classList.add('shuffling');
  setTimeout(() => {
    section.classList.remove('shuffling');
  }, 800); 
}


filterButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
   
    removeActiveClass();
    button.classList.add('active');

   
    allSections.forEach((section, idx) => {
      if (index === idx) {
        section.style.display = 'grid'; 
        addShuffleAnimation(section); 
      } else {
        section.style.display = 'none'; 
      }
    });
  });
});

const graphicsImages = document.querySelectorAll('.video-grid-container.graphics .video-box img');


const graphicsModal = document.createElement('div');
graphicsModal.id = 'graphics-modal';
graphicsModal.style.display = 'none'; 
graphicsModal.style.position = 'fixed';
graphicsModal.style.top = '0';
graphicsModal.style.left = '0';
graphicsModal.style.width = '100vw';
graphicsModal.style.height = '100vh';
graphicsModal.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
graphicsModal.style.zIndex = '1000';
graphicsModal.style.justifyContent = 'center';
graphicsModal.style.alignItems = 'center';


const graphicsCloseButton = document.createElement('i');
graphicsCloseButton.className = 'fa-regular fa-circle-xmark';
graphicsCloseButton.style.color = 'red';
graphicsCloseButton.style.fontSize = '30px';
graphicsCloseButton.style.position = 'absolute';
graphicsCloseButton.style.top = '20px';
graphicsCloseButton.style.right = '20px';
graphicsCloseButton.style.cursor = 'pointer';
graphicsModal.appendChild(graphicsCloseButton);


const modalImage = document.createElement('img');
graphicsModal.appendChild(modalImage);


document.body.appendChild(graphicsModal);


graphicsImages.forEach((image) => {
  image.addEventListener('click', () => {
    graphicsModal.style.display = 'flex'; 
    modalImage.src = image.src; 
  });
});


graphicsCloseButton.addEventListener('click', () => {
  graphicsModal.style.display = 'none'; 
});


graphicsModal.addEventListener('click', (e) => {
  if (e.target === graphicsModal) {
    graphicsModal.style.display = 'none'; 
  }
});

