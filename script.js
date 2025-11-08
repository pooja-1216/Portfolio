// set year
document.getElementById('year').textContent = new Date().getFullYear();

// copy email button
const copyBtn = document.getElementById('copyEmail');
if (copyBtn) {
  copyBtn.addEventListener('click', () => {
    navigator.clipboard?.writeText('mpoojitha916@gmail.com')
      .then(()=> alert('Email copied to clipboard!'))
      .catch(()=> alert('Copy failed — please copy manually: mpoojitha916@gmail.com'));
  });
}

// simple client-side validation for mailto form (just prevents empty submit in browsers)
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    // mailto with GET: cause browser opens mail client
    // no JS preventDefault — we allow default to open mail client.
  });
}
