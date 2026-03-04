document.addEventListener('DOMContentLoaded', () => {
    
    // --- Scroll Reveal Animation ---
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); 
            }
        });
    }, {
        root: null,
        threshold: 0.1, 
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // --- Form Validation & Submission (Web3Forms Integration) ---
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic client-side validation
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (!name || !email || !message) {
                formStatus.textContent = 'Please complete all fields.';
                formStatus.className = 'form-status error';
                return;
            }

            // Update UI to show sending state
            formStatus.textContent = 'Transmitting...';
            formStatus.className = 'form-status';

            // Construct payload for Web3Forms
            const payload = {
                access_key: '96ebb57b-4210-42b6-9e93-ed485289e222',
                subject: 'New Inquiry from Aurixya Website',
                from_name: 'Aurixya Web Form',
                name: name,
                email: email,
                message: message
            };

            // Send data silently via API
            fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(payload)
            })
            .then(async (response) => {
                let json = await response.json();
                if (response.status == 200) {
                    formStatus.textContent = 'Inquiry received. We will be in touch shortly.';
                    formStatus.className = 'form-status success';
                    contactForm.reset();
                } else {
                    console.error(response);
                    formStatus.textContent = json.message || 'System error. Please try again.';
                    formStatus.className = 'form-status error';
                }
            })
            .catch(error => {
                console.error(error);
                formStatus.textContent = 'Network error. Please try again later.';
                formStatus.className = 'form-status error';
            })
            .finally(() => {
                // Clear the status message after 5 seconds
                setTimeout(() => {
                    formStatus.textContent = '';
                    formStatus.className = 'form-status';
                }, 5000);
            });
        });
    }
});