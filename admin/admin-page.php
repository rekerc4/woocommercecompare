<?php 

if(! defined('ABSPATH')){
    exit; 
}

function woocompare_display_settings(){
    if ( ! current_user_can( 'manage_options' ) ) return;
    ?>
    <section class="woocompare_admin_wrap">
        <h1><?php echo esc_html(get_admin_page_title()); ?></h1>
        <form action="options.php" method="post">
        
            <?php
			
			    // output security fields
			    settings_fields( 'woocompare_options' );
			
			    // output setting sections
			    do_settings_sections( 'woocommerce_products_compare' );
			
			    // submit button
			    submit_button();
			
			?>

        </form>
    </section>

    <?php
}

