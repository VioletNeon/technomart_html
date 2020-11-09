
/* Message-modal-elements */
const writeMessage = document.querySelector(".button-write-message");
const messagePopup = document.querySelector(".modal-feedback");
const messageClose = document.querySelector(".modal-feedback .modal-close");
const messageForm = document.querySelector(".name-form");
const writeName = document.querySelector(".name-container input");
const writeEmail = document.querySelector(".email-container input");
const messageEntryField = document.querySelector(".email-container input");

/* Map-modal-elements */
const mapLink = document.querySelector(".contacts-button-map");
const mapPopup = document.querySelector(".modal-map");
const mapClose = document.querySelector(".modal-map .modal-close");

/* Slider-elements */
const pushBackward = document.querySelector(".button-backward");
const pushForward = document.querySelector(".button-forward");
const indicators = document.querySelectorAll(".slider-indicators button");
const sliders = document.querySelectorAll(".slider-item");

/* Basket-elements */
const addBasketPopup = document.querySelector(".modal-basket");
const basketClose = document.querySelector(".modal-basket .modal-close");
const pushBuy = document.querySelectorAll(".button-buy");
const proceed = document.querySelector(".modal-proceed");
const marker = document.querySelector(".marker");
const basket = document.querySelector(".basket");
const basketScore = document.querySelector(".basket-score");
const markerScore = document.querySelector(".marker-score");
const pushMarker = document.querySelectorAll(".button-marker");



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

if (writeMessage) {
  writeMessage.addEventListener("click", function (evt) {
    evt.preventDefault();
    messagePopup.classList.add("modal-show");
    if (storage) {
      writeName.value = storage;
      writeEmail.value = storage;
      messageEntryField.value = storage;
  }
  writeName.focus();
})
}

if (messageClose) {
  messageClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    messagePopup.classList.remove("modal-show");
    messagePopup.classList.remove("modal-error");
  })
}

if (messageForm) {
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
  })
}

if (messagePopup) {
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (messagePopup.classList.contains("modal-show")) {
        evt.preventDefault();
        messagePopup.classList.remove("modal-show");
        messagePopup.classList.remove("modal-error");
      }
    }
  })
}

/* Map-modal-options */
if (mapLink) {
  mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
  })
}

if (mapClose) {
  mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
  })
}

if (mapPopup) {
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
    }
  }
})
}

/* Slider-options */
let eventArrayIndicators = [];
if (indicators.length) {
  for (let i = 0; i < indicators.length; i++) {
    eventArrayIndicators.push(indicators[i].addEventListener("click", function (evt) {
      for (let j = 0; j < indicators.length; j++) {
        sliders[j].classList.remove("slide-current");
        indicators[j].classList.remove("current");
      }
      evt.preventDefault();
      sliders[i].classList.add("slide-current");
      indicators[i].classList.add("current");
    }))
  }
}

if (sliders.length) {
  pushForward.addEventListener("click", function (evt) {
    for (let i = 0; i < sliders.length - 1; i++) {
      if (sliders[i].classList.contains("slide-current")) {
        sliders[i].classList.remove("slide-current");
        indicators[i].classList.remove("current");
        sliders[i + 1].classList.add("slide-current");
        indicators[i + 1].classList.add("current");
        evt.preventDefault();
      }
    }
  });
  pushBackward.addEventListener("click", function (evt) {
    for (let i = sliders.length-1; i > 0; i++) {
      if (sliders[i].classList.contains("slide-current")) {
        sliders[i].classList.remove("slide-current");
        indicators[i].classList.remove("current");
        sliders[i-1].classList.add("slide-current");
        indicators[i-1].classList.add("current");
        evt.preventDefault();
      }
    }
  })
}

/* Message-modal-options */
let pushBuysArray = [];
let pushMarkersArray = [];
let markerItem = 0;
let basketItem = 0;

if (pushBuy.length) {
  for (let i = 0; i < pushBuy.length; i++) {
    pushBuysArray.push(pushBuy[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      addBasketPopup.classList.add("modal-show");
      basketItem++;
      basket.textContent = "Корзина: " + basketItem;
      basketScore.classList.add("add-basket");
    }))
  }
}

if (pushMarker.length) {
  for (let i = 0; i < pushMarker.length; i++) {
    pushMarkersArray.push(pushMarker[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      markerItem++;
      marker.textContent = "В закладки: " + markerItem;
      markerScore.classList.add("add-marker");
    }))
  }
}

if (basketClose) {
  basketClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    addBasketPopup.classList.remove("modal-show");
  })
}

if (proceed) {
  proceed.addEventListener("click", function (evt) {
    evt.preventDefault();
    addBasketPopup.classList.remove("modal-show");
  })
}

if (addBasketPopup) {
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (addBasketPopup.classList.contains("modal-show")) {
        evt.preventDefault();
        addBasketPopup.classList.remove("modal-show");
      }
    }
  })
}
