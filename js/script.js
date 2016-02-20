var link = document.querySelector(".adress .feedback");
var popup = document.querySelector(".popup-wrap");
var close = popup.querySelector(".popup-close");
var overlay = popup.querySelector(".popup-overlay")
var form = popup.querySelector("form");
var login = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=feedback-email]");

link.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.add("popup-wrap-show");
	login.focus();
});

close.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.remove("popup-wrap-show");
	form.classList.remove("popup-error");
});

overlay.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.remove("popup-wrap-show");
	form.classList.remove("popup-error");
});

form.addEventListener("submit", function(event) {
	if (!email.value) {
		event.preventDefault();
		form.classList.remove("popup-error");
		form.offsetWidth = popup.offsetWidth;
		form.classList.add("popup-error");
	}
});

window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		if (popup.classList.contains("popup-wrap-show")) {
			popup.classList.remove("popup-wrap-show");
			form.classList.remove("popup-error");
		}
	}
});

ymaps.ready(function () {
	var myMap = new ymaps.Map('map', {
		center: [59.938536, 30.3224549],
		zoom: 16
	}, {
		searchControlProvider: 'yandex#search'
	}),
	myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
		hintContent: 'Теплое мороженое',
		balloonContent: 'Налетай'
	}, {
		iconLayout: 'default#image',
		iconImageHref: 'img/Index/map_pin.png',
		iconImageSize: [218, 142],
		iconImageOffset: [-15, -150]
	});

	myMap.behaviors.disable('scrollZoom');
	myMap.geoObjects.add(myPlacemark);
});