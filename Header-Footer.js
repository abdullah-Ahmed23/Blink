window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');

    if (window.scrollY > 50) { // Adjust the scroll value as needed
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
});


// Check if the user's preference is for dark mode and apply it
if (localStorage.getItem('dark-mode') === 'enabled') {
    enableDarkMode();
}

const darkModeToggle = document.querySelector('.theme-switch__checkbox');

// Set the initial state of the toggle based on the user's preference
darkModeToggle.checked = document.body.classList.contains('dark-mode');

darkModeToggle.addEventListener('change', () => {
    if (darkModeToggle.checked) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});

function enableDarkMode() {
    document.body.classList.add('dark-mode');
    localStorage.setItem('dark-mode', 'enabled');
}

function disableDarkMode() {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('dark-mode', 'disabled');
}
var checkbox = document.getElementById('check');
var mobileNav = document.querySelector('.mobile');

// Toggle the visibility of the mobile navigation when the checkbox is clicked
checkbox.addEventListener('change', function() {
    mobileNav.style.visibility = checkbox.checked ? 'visible' : 'hidden';
    mobileNav.style.opacity = checkbox.checked ? '1' : '0';
    mobileNav.style.left = checkbox.checked ? '0' : '-34vh';
});

// Optional: Add event listeners to close the menu when a link is clicked
document.querySelectorAll('.mobile a').forEach(function(link) {
    link.addEventListener('click', function() {
        checkbox.checked = false;

        mobileNav.style.visibility = 'visible';
        
        mobileNav.style.transtion = '0.3s';
       
            

    });
});
// Function to start the counter animation
function startCounter(id, targetNumber, step = 1, duration = 3000) {
    let currentNumber = 0;
    const interval = Math.floor(duration / (targetNumber / step));
    const counter = setInterval(() => {
        currentNumber += step;
        document.getElementById(id).innerText = currentNumber;

        if (currentNumber >= targetNumber) {
            clearInterval(counter);
            document.getElementById(id).innerText = targetNumber;
        }
    }, interval);
}

function startCounter(id, targetNumber, step = 1, duration = 3000) {
    let currentNumber = 0;
    const increment = targetNumber / (duration / 30); // 60 frames per second

    function updateCounter() {
        currentNumber += increment;
        if (currentNumber >= targetNumber) {
            currentNumber = targetNumber;
        }

        document.getElementById(id).innerText = Math.floor(currentNumber);

        if (currentNumber < targetNumber) {
            requestAnimationFrame(updateCounter);
        }
    }

    updateCounter();
}

function startCountersOnScroll() {
    const satisfactionElement = document.querySelector('.counter:nth-child(1)');
    const happyUsersElement = document.querySelector('.counter:nth-child(2)');
    const downloadsElement = document.querySelector('.counter:nth-child(3)');

    function checkVisibility() {
        const scrollPosition = window.scrollY;

        if (satisfactionElement.getBoundingClientRect().top < window.innerHeight) {
            startCounter('satisfaction', 100);
            window.removeEventListener('scroll', checkVisibility);
        }

        if (happyUsersElement.getBoundingClientRect().top < window.innerHeight) {
            startCounter('happyUsers', 120, 10);
            window.removeEventListener('scroll', checkVisibility);
        }

        if (downloadsElement.getBoundingClientRect().top < window.innerHeight) {
            startCounter('downloads', 125, 5);
            window.removeEventListener('scroll', checkVisibility);
        }
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility();
}

startCountersOnScroll();

