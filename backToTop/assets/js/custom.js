jQuery(document).ready(function() {
            // Exibe ou oculta o botão
            jQuery(window).scroll(function() {
                if (jQuery(this).scrollTop() > 200) {
                    jQuery('.backtotop').fadeIn(200);
                } else {
                    jQuery('.backtotop').fadeOut(200);
                }
            });
            
            // Faz animação para subir
            jQuery('.backtotop').click(function(event) {
                event.preventDefault();
                jQuery('html, body').animate({scrollTop: 0}, 300);
            })
        });
