<?php
global $woocommerce;  
$ids = explode('|', $_COOKIE['woocompareProducts']);
var_dump($ids); 
// $test = wc_get_product('24'); 
var_dump(function_exists('add_action'));
foreach($ids as $key => $value){
    $new_product = wc_get_product($value);
    // array_push($products, $new_product);
    var_dump($new_product); 
}


 ?>
