// JavaScript Document
const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

// show bar//
menuBtn.addEventListener('click',() =>{
	sideMenu.style.display = 'block';
});
	
closeBtn.addEventListener('click', () =>{
	
	
	sideMenu.style.display = 'none';	
});
// show bar//

themeToggler.addEventListener('click',() => {
	
	
	document.body.classList.toggle('dark-theme');
	themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
	themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
});


// JavaScript Document

