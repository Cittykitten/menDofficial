        // Mobile menu toggle
        document.querySelector('.hamburger').addEventListener('click', function() {
            document.querySelector('.nav-links').classList.toggle('active');
            this.querySelector('i').classList.toggle('fa-bars');
            this.querySelector('i').classList.toggle('fa-times');
        });

        // Close menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                document.querySelector('.nav-links').classList.remove('active');
                document.querySelector('.hamburger i').classList.remove('fa-times');
                document.querySelector('.hamburger i').classList.add('fa-bars');
            });
        });

        // Gallery Filter Functionality
        $(document).ready(function(){
            $('.filter-btn').click(function(){
                const filter = $(this).data('filter');
                $('.filter-btn').removeClass('active');
                $(this).addClass('active');
                
                if (filter === 'all') {
                    $('.gallery-item').fadeIn(300);
                } else {
                    $('.gallery-item').hide();
                    $(`.gallery-item.${filter}`).fadeIn(300);
                }
            });

            // Lightbox configuration
            lightbox.option({
                'resizeDuration': 200,
                'wrapAround': true,
                'albumLabel': 'Project %1 of %2'
            });
        });
