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

    $product_ids = $_POST['theCurIds']; 

    $products_array = array(); 

    $object_response = array(); 

    foreach($product_ids as $key => $p_id){
        $product = wc_get_product($p_id); 
        $get_cat_args = array('orderby' => 'name'); 
        $prod_cats = get_the_term_list( $p_id, 'product_cat' );
        $image =   get_the_post_thumbnail_url($p_id); 
        $obj_constructor = array('name' => $product->get_name(), 'type' => $product->get_type(), 'image' => $image, 'sku' => $product->get_sku(), 'categories' => $prod_cats); 
        if($product->is_type( 'variable' )){

        }
        else{

        }
        array_push($products_array, $product); 
        array_push($object_response, $obj_constructor); 
    }

    echo json_encode($object_response);

	wp_die();

}

add_action( 'wp_ajax_woocompare_public_hook', 'woocompare_ajax_handler' );

add_action( 'wp_ajax_nopriv_woocompare_public_hook', 'woocompare_ajax_handler' );

?>