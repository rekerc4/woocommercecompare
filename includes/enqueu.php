<?php 

if( !defined('ABSPATH')){
    exit; 
}

function woocompare_enqueues(){
    $plugin_path = plugin_dir_url(dirname(__FILE__));
    wp_enqueue_style('woocompare-style', $plugin_path . 'assets/css/styles.css');
    wp_enqueue_script('woocompare-script', $plugin_path . 'assets/js/javscript.js'); 
    wp_localize_script('woocompare-script', 'passedVars', array(
        'pluginUrl' => plugins_url('', __FILE__ )
    ));
    wp_enqueue_script('colorbox', $plugin_path . 'assets/js/jquery.colorbox-min.js');
    wp_enqueue_style('colorbox', $plugin_path . 'assets/css/colorbox.css');
}

//wp_script_is('jquery', 'enqueued')
if(!wp_script_is('jquery', 'enqueued')){
    function woocompare_enqueue_jquery(){
        $plugin_path = plugin_dir_url(dirname(__FILE__));
        wp_enqueue_script('jquery', $plugin_path . 'assets/js/jquery.js');
    }
    add_action( 'wp_enqueue_scripts', 'woocompare_enqueue_jquery'); 
}

add_action( 'wp_enqueue_scripts', 'woocompare_enqueues'); 


