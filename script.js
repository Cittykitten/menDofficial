// Mobile Navigation Toggle
document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
    this.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.remove('active');
        document.querySelector('.hamburger').classList.remove('active');
    });
});

// Quote Popup Functionality
const quoteButtons = document.querySelectorAll('.btn-secondary, .btn-small');
const popup = document.createElement('div');
popup.className = 'quote-popup';
popup.innerHTML = `
    <div class="popup-content">
        <span class="close-popup">&times;</span>
        <h3>Get a Quote</h3>
        <form id="quote-form">
            <div class="form-group">
                <label for="name">Full Name</label>
                <input type="text" id="name" required>
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" required>
            </div>
            <div class="form-group">
                <label for="phone">Phone</label>
                <input type="tel" id="phone">
            </div>
            <div class="form-group">
                <label for="service">Service Needed</label>
                <select id="service" required>
                    <option value="">Select a service</option>
                    <option value="engine-diagnostics">Engine Diagnostics</option>
                    <option value="brake-service">Brake System Service</option>
                    <option value="suspension">Suspension Tuning</option>
                    <option value="ecu-tuning">ECU Tuning</option>
                    <option value="turbo-install">Turbo/Supercharger Install</option>
                    <option value="exhaust">Exhaust Systems</option>
                    <option value="oil-change">Oil Change</option>
                    <option value="ac-recharge">A/C Recharge</option>
                    <option value="transmission">Transmission Flush</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div class="form-group">
                <label for="message">Additional Details</label>
                <textarea id="message" rows="4"></textarea>
            </div>
            <button type="submit" class="btn-primary">Submit Request</button>
        </form>
    </div>
`;

document.body.appendChild(popup);

// Show popup when clicking quote buttons
quoteButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popup.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });
});

// Close popup
document.querySelector('.close-popup').addEventListener('click', () => {
    popup.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Close when clicking outside content
popup.addEventListener('click', (e) => {
    if (e.target === popup) {
        popup.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Form submission
document.getElementById('quote-form').addEventListener('submit', (e) => {
    e.preventDefault();
    // Here you would normally send the form data to your server
    alert('Thank you for your request! We will contact you shortly.');
    popup.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Close mobile menu when scrolling
window.addEventListener('scroll', () => {
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');
    if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    }
});
