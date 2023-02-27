//for sticky menu scrollber
window.addEventListener('scroll',
	function(){
		let navbar = document.getElementById('sticky-menubar');
		if(window.pageYOffset >= 350){
			navbar.classList.add('sticky');
		}else{
			navbar.classList.remove('sticky');
		}
	})

/*
const observer = new IntersectionObserver(
	(entries) => {
		const ent = entries[0];
		console.log(ent);
		!ent.isIntersecting
			? document.body.classList.add("sticky")
			: document.body.classList.remove("sticky");
	}, 
	{ 
		root: null, 
		threshold: 0,
	}
);

const heroTextBox = document.querySelector(".header");

observer.observe(heroTextBox);
*/

//for mobile menu
function openNav() {
	document.getElementById('myNav').style.width = "100%";
}

function closeNav() {
	document.getElementById('myNav').style.width = "0%";
}