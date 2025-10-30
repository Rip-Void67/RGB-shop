// This event listener ensures that the script runs only after the entire HTML document has been loaded and parsed.
document.addEventListener('DOMContentLoaded', () => {

    /* --- Mobile Navigation (Hamburger Menu) --- */
    // This function handles the opening and closing of the mobile navigation menu.

    // Select the hamburger icon and the navigation links container
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    // Add a click event listener to the hamburger icon
    hamburger.addEventListener('click', () => {
        // Toggle the 'nav-active' class on the nav-links to slide it in and out
        navLinks.classList.toggle('nav-active');

        // Toggle the 'toggle' class on the hamburger to animate it into an 'X'
        hamburger.classList.toggle('toggle');
    });


    /* --- Animate on Scroll --- */
    // This feature makes elements fade in as they enter the viewport during scrolling.

    // Select all elements that have the 'animate-on-scroll' class
    const scrollElements = document.querySelectorAll('.animate-on-scroll');

    // A function to check if an element is currently in the viewport
    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
    };

    // A function to add the 'is-visible' class, which triggers the animation
    const displayScrollElement = (element) => {
        element.classList.add('is-visible');
    };

    // The main function that handles the scroll event
    const handleScrollAnimation = () => {
        // Loop through each of the selected elements
        scrollElements.forEach((el) => {
            // If the element is in view, display it
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            }
        });
    };
    
    // Run the function once on page load to check for elements already in view
    handleScrollAnimation();
    // Add an event listener to run the function every time the user scrolls
    window.addEventListener('scroll', handleScrollAnimation);
    

    /* --- Q&A Accordion --- */
    // This creates a collapsible FAQ section where only one answer is visible at a time.

    // Select all Q&A items
    const qaItems = document.querySelectorAll('.qa-item');

    // Loop through each Q&A item
    qaItems.forEach(item => {
        const question = item.querySelector('.qa-question');
        const answer = item.querySelector('.qa-answer');

        // Add a click event listener to the question button
        question.addEventListener('click', () => {
            // Before opening the clicked item, close any other items that are already open
            qaItems.forEach(otherItem => {
                if(otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.qa-answer').style.maxHeight = 0;
                }
            });

            // Toggle the 'active' class for the clicked item
            item.classList.toggle('active');
            if (item.classList.contains('active')) {
                // If it's active, set max-height to its scroll height to smoothly open it
                answer.style.maxHeight = answer.scrollHeight + 'px';
            } else {
                // If it's not active, set max-height to 0 to smoothly close it
                answer.style.maxHeight = 0;
            }
        });
    });

});