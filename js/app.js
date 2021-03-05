/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/
const sections = document.querySelectorAll("section");
const navbarList = document.querySelector("#navbar__list");
let sectionName,
    navItem,
    sectionId,
    sectionView;

/**
 * End Global Variables
 * Start Helper Functions
 *
*/



/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

function buildNavItems() {
  for (section of sections) {
    sectionName = section.getAttribute("data-nav");
    sectionId = section.getAttribute("id");
    navItem = document.createElement("li");
    navItemLink = document.createElement("a");
    navItemLink.className = "menu__link";
    navItemLink.href = `#${sectionId}`
    navItemLink.textContent = `${sectionName}`;
    navbarList.appendChild(navItem);
    navItem.appendChild(navItemLink);

  }
}

function addActiveClass() {
  for (section of sections) {
    sectionInView = section.offsetTop >= 0;
    if (sectionInView) {
      if (!section.classList.contains("your-active-class")) {
        section.classList.add("your-active-class");
      }
    } else {
      section.classList.remove("your-active-class");
    }
  }

}



// build the nav
buildNavItems();

// Add class 'active' to section when near top of viewport

document.addEventListener("scroll", addActiveClass);

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click
// document.addEventListener('scroll', function(){
//
// });

// Set sections as active
