<?php 

if( !defined('ABSPATH')){
    exit; 
}


function woocompare_callback_field_number( $args ){ 

    $options = get_option( 'woocompare_options', woocompare_set_defualts()); 

    $id = isset( $args['id']) ? $args['id'] : ''; 
    $label = isset( $args['label'] ) ? $args['label'] : ''; 
    $value = isset( $options[$id]) ?  $options[$id] : '';

    echo '<input type="number" min="0" max="20" name="woocompare_options['.$id.']" value="'.$value.'">'; 
    echo '<label for="compare_button_priority'. $id .' "> '.  $label .' </label>'; 
}


function woocompare_callback_field_position( $args ){

    $options = get_option( 'woocompare_options', woocompare_set_defualts());

    $id = isset( $args['id']) ? $args['id'] : ''; 
    $label = isset( $args['label']) ? $args['label'] : ''; 

    $selected_option = isset( $options[$id]) ? sanitize_text_field( $options[$id]) : ''; 

    $selections = woocompare_position_selects(); 

    echo '<select id="woocomparePositionSelect'. ucwords($id).'" name="woocompare_options['.$id.']">'; 

    foreach ( $selections as $action => $name) {
        $selected = selected( $selected_option === $action, true, false); 
        echo '<option value="'.$action.'" '. $selected . ' > ' . $name . '</option>'; 
    }

    echo '</select> <label for="woocompare_options['.$id.']">' . $label . '</label>'; 
}