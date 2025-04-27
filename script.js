// Example: Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

// Typing animation
// const roles = ["Full Stack Developer"];
// let roleIndex = 0;
// let charIndex = 0;
// let isDeleting = false;

function typeEffect() {
  const roleElement = document.querySelector('.role-text');
  const currentRole = roles[roleIndex];
  
  if (isDeleting) {
    roleElement.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
  } else {
    roleElement.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;
  }

  if (!isDeleting && charIndex === currentRole.length) {
    isDeleting = true;
    setTimeout(typeEffect, 2000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeEffect, 500);
  } else {
    setTimeout(typeEffect, isDeleting ? 100 : 200);
  }
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.padding = '1rem 5%';
    navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
  } else {
    navbar.style.padding = '1.5rem 5%';
    navbar.style.boxShadow = 'none';
  }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Initialize typing effect
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(typeEffect, 1000);
});

// Reveal animations on scroll
const revealElements = document.querySelectorAll('.project-card, .skill-item, .contact-item');

const revealOnScroll = () => {
  revealElements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (elementTop < windowHeight - 100) {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }
  });
};

window.addEventListener('scroll', revealOnScroll);

// Add this to your existing script.js
document.addEventListener('DOMContentLoaded', function() {
  const animateElements = document.querySelectorAll('.skill-category, .timeline-content, .project-card, .contact-item');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1
  });

  animateElements.forEach(element => {
    element.classList.add('animate-on-scroll');
    observer.observe(element);
  });
});

// Add active class to nav items based on scroll position
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  const navItems = document.querySelectorAll('.nav-item');

  window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (scrollY >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });

    navItems.forEach(item => {
      item.classList.remove('active');
      if (item.getAttribute('href').slice(1) === current) {
        item.classList.add('active');
      }
    });
  });
});

// Smooth scroll for nav items
document.querySelectorAll('.nav-item').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    window.scrollTo({
      top: targetSection.offsetTop - 100,
      behavior: 'smooth'
    });
  });
});


// Initialize EmailJS
(function() {
  // Add your public key here
  emailjs.init("6nKCKWaAqlLizRrQZ");
})();

// Get the form element
const form = document.getElementById('contact-form');
const submitBtn = form.querySelector('.submit-btn');
const btnText = submitBtn.querySelector('.btn-text');
const btnIcon = submitBtn.querySelector('.btn-icon');

// Add form submission handler
form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Add loading state
  submitBtn.disabled = true;
  btnText.textContent = 'Sending...';
  btnIcon.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';

  // Get form data
  const templateParams = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      subject: document.getElementById('subject').value,
      message: document.getElementById('message').value
  };

  // Send email using EmailJS
  emailjs.send(
      'service_ldb68qc', // Add your EmailJS service ID
      'template_wcfxv9w', // Add your EmailJS template ID
      templateParams
  )
  .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
      
      // Success state
      btnText.textContent = 'Sent Successfully!';
      btnIcon.innerHTML = '<i class="fas fa-check"></i>';
      form.reset();

      // Reset button after 3 seconds
      setTimeout(() => {
          btnText.textContent = 'Send Message';
          btnIcon.innerHTML = '<i class="fas fa-paper-plane"></i>';
          submitBtn.disabled = false;
      }, 3000);
  })
  .catch(function(error) {
      console.error('FAILED...', error);
      
      // Error state
      btnText.textContent = 'Error!';
      btnIcon.innerHTML = '<i class="fas fa-times"></i>';

      // Reset button after 3 seconds
      setTimeout(() => {
          btnText.textContent = 'Send Message';
          btnIcon.innerHTML = '<i class="fas fa-paper-plane"></i>';
          submitBtn.disabled = false;
      }, 3000);
  });
});
