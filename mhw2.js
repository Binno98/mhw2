function bikeImageOpen(index)
{
  return function(){
    const new_image = document.createElement('img');
    new_image.src = BIKES_PHOTO_LIST[index];
    document.body.classList.add('no-scroll');
    new_image.removeEventListener('click', bikeImageOpen);
    modalView.style.top = window.scroll + 'px';
    modalView.appendChild(new_image);
    modalView.classList.remove('hidden');
  }
}

function onModalClick() {
  document.body.classList.remove('no-scroll');
  modalView.classList.add('hidden');
  modalView.innerHTML = '';
}



const items = document.querySelectorAll('.item-row');
const modalView = document.querySelector('#modal-view');


for(let i = 0; i < items.length; i++){
  items[i].addEventListener('click', bikeImageOpen(i));
}

modalView.addEventListener('click', onModalClick);




/*function onThumbnailClick(event) {
  const image = createImage(event.currentTarget.src);
  document.body.classList.add('no-scroll');
  modalView.style.top = window.scroll + 'px';
  modalView.appendChild(image);
  modalView.classList.remove('hidden');
}

function onModalClick() {
  document.body.classList.remove('no-scroll');
  modalView.classList.add('hidden');
  modalView.innerHTML = '';
}

// Main
function createImage(src) {
  const image = document.createElement('img');
  image.src = src;
  return image;
}

const albumView = document.querySelector('#bike-album');
for (let i = 0; i < BIKES_PHOTO_LIST.length; i++) {
  const photoSrc = BIKES_PHOTO_LIST[i];
  const image = createImage(photoSrc);
  image.addEventListener('click', onThumbnailClick);
  albumView.appendChild(image);
}

const modalView = document.querySelector('#modal-view');
modalView.addEventListener('click', onModalClick);
*/


/////////////////////////////


