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