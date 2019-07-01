<?php 

/*
 * Plugin Name: Woocommerce Compare
 * Plugin URI: https://woocommerce.com/
 * Description: A Single Page Product Compare Plugin.
 * Version: 0.0.0
 * Author: Kenneth Dailey
 * Author URI: https://kennethdailey.com

*/

if(! defined( 'ABSPATH')) exit;

?>
<?php 

add_filter('template_include', 'iframe_page_template'); 

require_once plugin_dir_path( __FILE__ ) . 'includes/enqueu.php';

if( is_admin()){
    require_once plugin_dir_path( __FILE__ ) . 'admin/admin-menu.php';
    require_once plugin_dir_path( __FILE__ ) . 'admin/admin-page.php';
    require_once plugin_dir_path( __FILE__ ) . 'admin/settings-register.php';
    require_once plugin_dir_path( __FILE__ ) . 'admin/settings-callbacks.php'; 
}

remove_action( 'woocommerce_after_shop_loop_item', 'woocommerce_template_loop_add_to_cart');

require_once plugin_dir_path( __FILE__ ) . 'frontend/actions.php';


function woocompare_set_defualts() {

    return array(
        'compare_position' => 20,
        'compare_placement' => 'woocommerce_after_shop_loop_item'
    );

}

function woocompare_position_selects(){
    return array(
        'woocommerce_before_shop_loop_item' => esc_html__('The very top', 'woocompare'),
        'woocommerce_before_shop_loop_item_title' => esc_html__('Around the product image', 'woocompare'), 
        'woocommerce_shop_loop_item_title' => esc_html__('Above the title', 'woocompare'),
        'woocommerce_after_shop_loop_item_title' => esc_html__('Below the title', 'woocompae'),
        'woocommerce_after_shop_loop_item' => esc_html__('Around price and add to cart button', 'woocompare')
    );
}

?>