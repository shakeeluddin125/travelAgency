// Initialize EmailJS with your Public Key
(function() {
    emailjs.init("4FgevdoxJ7q7O-eIl"); 
})();

// Wait for DOM to load before attaching event listener
document.addEventListener('DOMContentLoaded', function() {
    const travelForm = document.getElementById('contactForm');
    
    if (travelForm) {
        travelForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const destination = document.getElementById('destinationInterest').value;
            const message = document.getElementById('message').value;

            // Send email using EmailJS
            emailjs.send("service_hqw6nyy", "template_xbj9f1e", {
                from_name: name,
                from_email: email,
                destination: destination,
                message: message
            })
            .then(() => {
                // Show success message
                document.getElementById('successMessage').classList.remove('hidden');
                
                // Reset form
                travelForm.reset();
                
                // Hide success message after 3 seconds
                setTimeout(() => {
                    document.getElementById('successMessage').classList.add('hidden');
                }, 3000);
            }, (error) => {
                alert('Error sending your travel inquiry: ' + error.text);
                console.error('EmailJS Error:', error);
            });
        });
    } else {
        console.error("Travel contact form not found - check your HTML element ID");
    }
});