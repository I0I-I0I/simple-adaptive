;(function () {
	const button = document.getElementById("toggle-menu")
	button.addEventListener("click", function (event) {
		event.preventDefault()
		const menu = document.getElementById("main-menu")
		menu.classList.toggle("is-open")
	})
})()
