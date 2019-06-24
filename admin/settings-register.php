<?php 

if(! defined('ABSPATH')){
    exit; 
}

function woocommerce_compare_register_settings(){
    
    register_setting(
        'woocompare_options', 
        'woocompare_options', 
        'woocompare_validate_options'
    );

    add_settings_section(
        'button_placement', 
        'Compare Button Placement', 
        'woocompare_placement_select', 
        'woocommerce_products_compare'
    ); 

    add_settings_field(
        'woocompare_compare_button_priority', 
        'Compare Button Priority', 
        'woocompare_callback_field_number', 
        'woocommerce_products_compare', 
        'button_placement', 
        ['id' => 'compare_position', 'label' => 'Set priority of compare button']
    );

    add_settings_field(
        'woocompare_compare_button_position', 
        'Compare Button Position', 
        'woocompare_callback_field_position',
        'woocommerce_products_compare',
        'button_placement', 
        ['id' => 'compare_placement', 'label' => 'Set placement of woocommerce compare button']
    );

}

add_action('admin_init', 'woocommerce_compare_register_settings');