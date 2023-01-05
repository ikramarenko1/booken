'use strict'

// Add event on elements
const addEventOnElem = (elem, type, callback) => {
	if (elem.length > 1) {
		for (let i = 0; i < elem.length; i++) {
			elem[i].addEventListener(type, callback)
		}
	} else { 
		elem.addEventListener(type, callback)
	}
}


// Navbar toggle
const navbar = document.querySelector("[data-navbar]")
const navTogglers = document.querySelectorAll("[data-nav-toggler]")
const overlay = document.querySelector("[data-overlay]")

const toggleNavbar = () => {
	navbar.classList.toggle("active")
	overlay.classList.toggle("active")
}

addEventOnElem(navTogglers, "click", toggleNavbar)


// Active header when window scroll down to 100px
const header = document.querySelector("[data-header]")

const activeElemOnScroll = () => {
	if (window.scrollY > 100) {
		header.classList.add("active")
	} else { 
		header.classList.remove("active")
	}
}

addEventOnElem(window, "scroll", activeElemOnScroll)


// Timer
const timerHours = document.getElementById('hours')
const timerMinutes = document.getElementById('minutes')
const timerSeconds = document.getElementById('seconds')

setInterval(() => {
	let date = new Date()
	let hours = 23 - date.getHours()
	let minutes = 59 - date.getMinutes()
	let seconds = 59 - date.getSeconds()

	timerHours.innerHTML = hours

	if (minutes < 10 && seconds < 10) {
		timerMinutes.innerHTML = "0" + minutes
		timerSeconds.innerHTML = "0" + seconds
	} else if (minutes < 10 && seconds >= 10) {
		timerMinutes.innerHTML = "0" + minutes
		timerSeconds.innerHTML = seconds
	} else if (seconds < 10 && minutes >= 10) {
		timerMinutes.innerHTML = minutes
		timerSeconds.innerHTML = "0" + seconds
	} else {
		timerMinutes.innerHTML = minutes
		timerSeconds.innerHTML = seconds
	}
}, 1000)