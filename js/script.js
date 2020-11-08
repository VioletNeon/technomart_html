
/* Message-modal-elements */
const writeMessage = document.querySelector(".button-write-message");
const messagePopup = document.querySelector(".modal-feedback");
const messageClose = messagePopup.querySelector(".modal-close");
const messageForm = document.querySelector(".name-form");
const writeName = document.querySelector(".name-container input");
const writeEmail = document.querySelector(".email-container input");
const messageEntryField = document.querySelector(".email-container input");

/* Map-modal-elements */
const mapLink = document.querySelector(".contacts-button-map");
const mapPopup = document.querySelector(".modal-map");
const mapClose = mapPopup.querySelector(".modal-close");

/* Slider-elements */
const pushBackward = document.querySelector(".button-backward");
const pushForward = document.querySelector(".button-forward");
const indicators = document.querySelectorAll(".slider-indicators button");
const slidersHead = document.querySelectorAll(".slider-item");
const sliders = document.querySelector(".catalog-puncher-drill");

/* Message-modal-options */
let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("name");
  storage = localStorage.getItem("email");
  storage = localStorage.getItem("message-field");
} catch (err) {
  isStorageSupport = false;
}

writeMessage.addEventListener("click", function (evt) {
  evt.preventDefault();
  messagePopup.classList.add("modal-show");
  if (storage) {
    writeName.value = storage;
    writeEmail.value = storage;
    messageEntryField.value = storage;
  }
  writeName.focus();
});

messageClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  messagePopup.classList.remove("modal-show");
  messagePopup.classList.remove("modal-error");
});

messageForm.addEventListener("submit", function (evt) {
  if (!writeName.value || !writeEmail.value || !messageEntryField) {
    evt.preventDefault();
    messagePopup.classList.remove("modal-error");
    messagePopup.offsetWidth = messagePopup.offsetWidth;
    messagePopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", writeName.value);
      localStorage.setItem("email", writeEmail.value);
      localStorage.setItem("message-field", messageEntryField.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (messagePopup.classList.contains("modal-show")) {
      evt.preventDefault();
      messagePopup.classList.remove("modal-show");
      messagePopup.classList.remove("modal-error");
    }
  }
});

/* Map-modal-options */
mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
    }
  }
});

/* Slider-options */
let eventArrayIndicators = [];
for (let i = 0; i < indicators.length; i++) {
  eventArrayIndicators.push(indicators[i].addEventListener("click", function (evt) {
    for (let j = 0; j < indicators.length; j++) {
      slidersHead[j].classList.remove("slide-current");
      indicators[j].classList.remove("current");
    }
    evt.preventDefault();
    slidersHead[i].classList.add("slide-current");
    indicators[i].classList.add("current");
  }))
}

pushForward.addEventListener("click", function (evt) {
  for (let i = 0; i < slidersHead.length-1; i++) {
    if (slidersHead[i].classList.contains("slide-current")) {
      slidersHead[i].classList.remove("slide-current");
      indicators[i].classList.remove("current");
      slidersHead[i+1].classList.add("slide-current");
      indicators[i+1].classList.add("current");
      evt.preventDefault();
    }
  }
});

pushBackward.addEventListener("click", function (evt) {
  for (let i = slidersHead.length-1; i > 0; i++) {
    if (slidersHead[i].classList.contains("slide-current")) {
      slidersHead[i].classList.remove("slide-current");
      indicators[i].classList.remove("current");
      slidersHead[i-1].classList.add("slide-current");
      indicators[i-1].classList.add("current");
      evt.preventDefault();
    }
  }
})
