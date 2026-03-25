// Coastal Collector Expo - Main JS

(function () {
  // Mobile nav toggle
  const toggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');
  const mobileOverlay = document.getElementById('mobile-menu-overlay');

  if (toggle) {
    toggle.addEventListener('click', function () {
      toggle.classList.toggle('active');

      // Desktop nav links
      if (navLinks) {
        navLinks.classList.toggle('open');
      }

      // Mobile overlay
      if (mobileOverlay) {
        mobileOverlay.classList.toggle('open');
        document.body.style.overflow = mobileOverlay.classList.contains('open') ? 'hidden' : '';
      }
    });

    // Close menu when a link is clicked (desktop)
    if (navLinks) {
      navLinks.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
          navLinks.classList.remove('open');
          toggle.classList.remove('active');
        });
      });
    }

    // Close overlay when a link is clicked (mobile)
    if (mobileOverlay) {
      mobileOverlay.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
          mobileOverlay.classList.remove('open');
          toggle.classList.remove('active');
          document.body.style.overflow = '';
        });
      });
    }
  }

  // Navbar hide on scroll down, show on scroll up
  const nav = document.getElementById('nav');
  var lastScroll = 0;

  window.addEventListener('scroll', function () {
    var currentScroll = window.scrollY;

    if (currentScroll > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }

    if (currentScroll > lastScroll && currentScroll > 200) {
      nav.classList.add('hidden');
    } else {
      nav.classList.remove('hidden');
    }

    lastScroll = currentScroll;
  });

  // Vendor form toggle
  var vendorToggle = document.getElementById('vendor-toggle');
  var vendorForm = document.getElementById('vendor-form-collapsible');

  if (vendorToggle && vendorForm) {
    vendorToggle.addEventListener('click', function () {
      vendorToggle.classList.toggle('open');
      vendorForm.classList.toggle('open');

      if (vendorForm.classList.contains('open')) {
        vendorToggle.querySelector('.vendor-toggle-text').textContent = 'Close Application';
      } else {
        vendorToggle.querySelector('.vendor-toggle-text').textContent = 'Apply to Be a Vendor';
      }
    });
  }

  // Also open vendor form if "Vendor Registration" button in show card is clicked
  document.querySelectorAll('a[href="#vendors"]').forEach(function (link) {
    link.addEventListener('click', function () {
      setTimeout(function () {
        if (vendorForm && !vendorForm.classList.contains('open')) {
          vendorToggle.classList.add('open');
          vendorForm.classList.add('open');
          vendorToggle.querySelector('.vendor-toggle-text').textContent = 'Close Application';
        }
      }, 400);
    });
  });

  // Simple fade-in on scroll for sections
  var sections = document.querySelectorAll('.section');

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1 }
  );

  sections.forEach(function (section) {
    section.classList.add('fade-in');
    observer.observe(section);
  });
})();
