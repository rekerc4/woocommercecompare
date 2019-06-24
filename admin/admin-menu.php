<?php 

if(! defined('ABSPATH')){
    exit; 
}

function woocompare_addmenu(){

    add_menu_page(
        'Woocommerce Products Compare',
        'Woocommerce Products Compare', 
        'manage_options', 
        'woocommerce_products_compare', 
        'woocompare_display_settings',
        'dashicons-admin-generic', 
        null 
    );

}

add_action('admin_menu', 'woocompare_addmenu'); 