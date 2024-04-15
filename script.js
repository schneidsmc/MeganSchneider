window.addEventListener("scroll", setScrollVar)
window.addEventListener("resize", setScrollVar)

function setScrollVar() {
  const htmlElement = document.documentElement
  const percentOfScreenHeightScrolled =
    htmlElement.scrollTop / htmlElement.clientHeight
  console.log(Math.min(percentOfScreenHeightScrolled * 100, 100))
  htmlElement.style.setProperty(
    "--scroll",
    Math.min(percentOfScreenHeightScrolled * 100, 100)
  )
}

setScrollVar()

const observer = new IntersectionObserver(entries => {
  for (let i = entries.length - 1; i >= 0; i--) {
    const entry = entries[i]
    if (entry.isIntersecting) {
      document.querySelectorAll("[data-img]").forEach(img => {
        img.classList.remove("show")
      })
      const img = document.querySelector(entry.target.dataset.imgToShow)
      img?.classList.add("show")
      break
    }
  }
})

document.querySelectorAll("[data-img-to-show]").forEach(section => {
  observer.observe(section)
})

window.onscroll = function() {stickyNav()};

var navbar = document.getElementById('navbar');
var sticky = navbar.offsetTop;


function stickyNav() {
    if(window.pageYOffset >= sticky){
        navbar.classList.add('sticky')
    } else {
        navbar.classList.remove('sticky')
    }
}

// JavaScript for dropdown menu
document.addEventListener("DOMContentLoaded", function() {
  const dropdownBtn = document.querySelector(".dropbtn");
  const dropdownContent = document.querySelector(".dropdown-content");

  console.log(dropdownBtn); // Check if dropdownBtn is correctly selected
  console.log(dropdownContent); // Check if dropdownContent is correctly selected

  dropdownBtn.addEventListener("click", function() {
    console.log("Dropdown button clicked"); // Check if click event is triggered
    dropdownContent.classList.toggle("show");
    console.log(dropdownContent.classList.contains("show")); // Check if class is toggled
  });
});
