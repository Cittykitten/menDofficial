  <script>
        // FAQ Accordion
        $(document).ready(function(){
            $('.faq-question').click(function(){
                $(this).toggleClass('active');
                $(this).next('.faq-answer').slideToggle(200);
                $(this).find('i').toggleClass('fa-chevron-down fa-chevron-up');
                
                // Close other open items
                $('.faq-question').not(this).removeClass('active');
                $('.faq-question').not(this).next('.faq-answer').slideUp(200);
                $('.faq-question').not(this).find('i').removeClass('fa-chevron-up').addClass('fa-chevron-down');
            });
            
            // Form submission handling
            $('#contactForm').submit(function(e){
                e.preventDefault();
                // sent the form data to the server
                alert('Thank you for your message! We will contact you shortly.');
                this.reset();
            });
        });




        
    </script>
