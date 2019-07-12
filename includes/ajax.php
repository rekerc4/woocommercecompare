<?php    

function ajax_public_enqueu($hook){

    $script_url = plugins_url( '/ajax-public.js', __FILE__ );

	wp_enqueue_script( 'ajax-public', $script_url, array( 'jquery' ) );

    //$nonce = wp_create_nonce( 'public_ajax' ); 
    $nonce = wp_create_nonce( 'ajax_public' );

    $ajax_url = admin_url( 'admin-ajax.php');

    $script = array( 'woocompare_nonce' => $nonce, 'woocompare_ajax_url' => $ajax_url); 

    wp_localize_script( 'ajax-public', 'ajax_public', $script );
}

add_action('wp_enqueue_scripts', 'ajax_public_enqueu'); 

function woocompare_ajax_handler(){

    check_ajax_referer( 'ajax_public', 'nonce' ); 

    $new = wc_get_product(79); 

    echo esc_html( $new );

	wp_die();

}

add_action( 'wp_ajax_woocompare_public_hook', 'woocompare_ajax_handler' );

add_action( 'wp_ajax_nopriv_woocompare_public_hook', 'woocompare_ajax_handler' );

?>