<?php 

if(! defined( 'ABSPATH')) exit;

?>

<?php 

$options = get_option('woocompare_options');

add_action( $options['compare_placement'], 'bbloomer_custom_action', $options['compare_position'] );

$unique_id = 'x';

function bbloomer_custom_action() {
    global $product; 
    $sku = $product->get_sku(); 
    echo '<div class="wocompare-add-button" id="woocompareAddButton'.$unique_id.'" product_id_data="'.$sku.'"> &#9744; Compare</div>';
}

?>
