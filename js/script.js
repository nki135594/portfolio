document.addEventListener("DOMContentLoaded", function () {

// Function to animate the HEADING ABOUT ME
function animateHeading() {
  const heading = document.getElementById("animate-heading");
  const originalText = heading.textContent;
  const textLength = originalText.length;
  let currentIndex = 0;

  heading.textContent = ""; // Clear the text in the <h2> element

  function addLetter() {
    if (currentIndex < textLength) {
      heading.style.visibility = "visible"; // Reset visibility
      heading.textContent += originalText[currentIndex]; // Add the letter
      currentIndex++;

      // Delay adding the next letter
      setTimeout(addLetter, 200); // You can adjust the delay here
    }
  }

  // Start the animation
  addLetter();
}

// Options for the Intersection Observer
const options = {
  root: null, // Use the viewport as the root
  rootMargin: "0px", // No margin
  threshold: 0.5, // Trigger when 50% of the element is in the viewport
};

// Callback function for the Intersection Observer
function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // If the element is in the viewport, animate the heading
      animateHeading();
      // Stop observing once it's animated to avoid repeating the animation
      observer.unobserve(entry.target);
    }
  });
}

// Create an Intersection Observer
const observer = new IntersectionObserver(handleIntersection, options);

// Observe the "about" section element
const aboutSection = document.getElementById("about");
observer.observe(aboutSection);

//Animate PROJECT
// Function to check if an element is in the viewport
        function isInViewport(element) {
            var rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
            );
        }

        // Function to animate the heading when it's in the viewport
        function animateProject(headingId) {
            const heading = document.getElementById(headingId);

            if (isInViewport(heading) && !heading.classList.contains("animated")) {
                heading.classList.add("animated");

                const originalText = heading.textContent;
                const textLength = originalText.length;
                let currentIndex = 0;

                heading.textContent = "";

                function addLetter() {
                    if (currentIndex < textLength) {
                        heading.style.visibility = "visible";
                        heading.textContent += originalText[currentIndex];
                        currentIndex++;

                        setTimeout(addLetter, 200);
                    }
                }

                addLetter();
            }
        }

        // Add a scroll event listener to trigger the animation for the "My Projects" section heading
        window.addEventListener("scroll", function () {
            animateProject("animate-projects"); // Use the ID of your "My Projects" heading here
        });
	
// Reuse the existing animateHeading function
        function animateHeadingHobbies(headingId) {
            const heading = document.getElementById(headingId);
            const originalText = heading.textContent;
            const textLength = originalText.length;
            let currentIndex = 0;

            heading.textContent = ""; // Clear the text in the <h2> element
            heading.style.visibility = "visible"; // Make the heading visible

            function addLetter() {
                if (currentIndex < textLength) {
                    heading.textContent += originalText[currentIndex]; // Add the letter
                    currentIndex++;

                    // Delay adding the next letter
                    setTimeout(addLetter, 200); // You can adjust the delay here
                }
            }

            // Start the animation
            addLetter();
        }

        // Trigger the animation for the "My Hobbies" heading
        animateHeadingHobbies("hobbies-top animate-hobbies"); // Use the ID of your "My Hobbies" heading here

   // Hole alle Project-Cards
  let projectCards = document.querySelectorAll('.project-card');

  // Funktion, um zu überprüfen, ob eine Karte im sichtbaren Bereich des Bildschirms ist
  function isCardInViewport(card) {
    var rect = card.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }

  // Funktion, um die Karten nacheinander anzuzeigen, wenn sie im sichtbaren Bereich sind
  function loadCardsOnScroll() {
    projectCards.forEach((card, index) => {
      if (isCardInViewport(card) && !card.classList.contains('visible')) {
        setTimeout(() => {
          card.classList.add('visible');
        }, index * 5); // Ändere die Verzögerung nach deinen Wünschen
      }
    });

    // Sobald alle Karten geladen wurden, entferne das Scroll-Ereignis
    if (document.querySelectorAll('.project-card.visible').length === projectCards.length) {
      window.removeEventListener('scroll', loadCardsOnScroll);
    }
  }

  // Füge das Scroll-Ereignis hinzu, um die Karten zu laden
  window.addEventListener('scroll', loadCardsOnScroll);

  // Initialüberprüfung der Karten beim Laden der Seite
  loadCardsOnScroll();
	
  // toggle icon navbar
  // scroll sections
  let sections = document.querySelectorAll('section');
  let navLinks = document.querySelectorAll('header nav a');

  window.onscroll = () => {
    sections.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 100;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');

      if (top >= offset && top < offset + height) {
        navLinks.forEach(links => {
          links.classList.remove('active');
          document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        });
      }
    });
    // sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 110);
  }
});
  
  const menuIcon = document.querySelector('.menu-icon');
  const mobileMenu = document.querySelector('.mobile-menu');

function openMobileMenu() {
  mobileMenu.classList.add('active');
  menuIcon.querySelector('i').classList.remove('fa-bars'); // Remove hamburger icon
  menuIcon.querySelector('i').classList.add('fa-times'); // Add cross (X) icon
}

// Function to close the mobile menu
function closeMobileMenu() {
  mobileMenu.classList.remove('active');
  menuIcon.querySelector('i').classList.remove('fa-times'); // Remove cross (X) icon
  menuIcon.querySelector('i').classList.add('fa-bars'); // Add hamburger icon
}

// Event listener for clicking the menu icon to toggle the mobile menu
  menuIcon.addEventListener('click', function () {
    if (mobileMenu.classList.contains('active')) {
      closeMobileMenu(); // If mobile menu is open, close it
    } else {
      openMobileMenu();  // If mobile menu is closed, open it
    }
    checkScreenWidth(); // Check screen width after the menu is toggled
  });
	
	// Adjusted checkScreenWidth function to handle menu icon click
  function checkScreenWidth() {
    if (window.innerWidth <= 1150) {
      menuIcon.style.display = 'block';
      if (mobileMenu.classList.contains('active')) {
        mobileMenu.style.display = 'block';
        document.querySelector('.navbar').style.display = 'none';
      } else {
        mobileMenu.style.display = 'none';
        document.querySelector('.navbar').style.display = 'none';
      }
    } else {
      menuIcon.style.display = 'none';
      mobileMenu.style.display = 'none';
      document.querySelector('.navbar').style.display = 'flex';
    }
  }
	
// Initialüberprüfung der Bildschirmbreite
  checkScreenWidth();
  window.addEventListener('resize', checkScreenWidth);

 
    const letsTalkButton = document.getElementById('lets-talk-button');
	const popupContainer = document.getElementById('popup-container');
	const popupModal = document.getElementById('popup-modal');
	const popupClose = document.getElementById('popup-close');

	letsTalkButton.addEventListener('click', function () {
		popupContainer.style.display = 'block';
		popupModal.style.display = 'block';
	});

popupClose.addEventListener('click', function () {
    closePopup();
});

function closePopup() {
    popupContainer.style.display = 'none';
    popupModal.style.display = 'none';
}

    letsTalkButton.addEventListener('click', function () {
        popupContainer.style.display = 'block';
        popupModal.style.display = 'block';
    });

// Function to check if an element is in the viewport
  function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }

  // Function to handle animations on scroll
  function handleAnimations() {
    var animatedParagraph = document.getElementById("animated-paragraph");

    if (isInViewport(animatedParagraph)) {
      var letters = animatedParagraph.querySelectorAll("span");
      letters.forEach((letter, index) => {
        setTimeout(() => {
          letter.style.animationDelay = index * 200 + "ms";
        }, index * 0.01);
      });
    }
  }

  // Add a scroll event listener
  window.addEventListener("scroll", handleAnimations);

  // Initial check on page load
  handleAnimations();

/*lebenslauf*/
	$(document).ready(function() {
		const correctPassword = 'nao_ims';
		const passwordBox = $('#password-box');
		const content = $('#content');
		const passwordInput = $('#password-input');
		const passwordSubmit = $('#password-submit');
		const passwordError = $('#password-error');

		passwordInput.on('keydown', function(event) {
			if (event.key === 'Enter') {
				const enteredPassword = passwordInput.val();
				if (enteredPassword === correctPassword) {
					passwordBox.hide();
					content.show();
				} else {
					passwordError.text("Incorrect password. Please try again.");
				}
			}
		});

		passwordSubmit.on("click", function() {
			const enteredPassword = passwordInput.val();
			if (enteredPassword === correctPassword) {
				passwordBox.hide();
				content.show();
			} else {
				passwordError.text("Incorrect password. Please try again.");
			}
		});
	});
