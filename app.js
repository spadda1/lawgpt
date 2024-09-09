document.addEventListener('DOMContentLoaded', () => {
    const ctaButtons = document.querySelectorAll('.cta-button');
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Redirecting to the LAW GPT application...');
            // Implement the redirect to the main application or login page
            window.location.href = '/login.html';
        });
    });
    
    // Additional animations can be implemented here using GSAP or vanilla JS
});
 
document.addEventListener('DOMContentLoaded', () => {
    // Handle search button click
    const sendButton = document.querySelector('.send-button');
    const voiceButton = document.querySelector('.voice-button');
    const inputField = document.querySelector('.search-bar input');

    sendButton.addEventListener('click', () => {
        const query = inputField.value;
        if (query) {
            alert('Sending query: ' + query);
            // Implement sending query to the backend
        }
    });

    voiceButton.addEventListener('click', () => {
        alert('Voice input activated');
        // Implement voice input functionality
    });

    // Google Sign-In button implementation is handled separately
});