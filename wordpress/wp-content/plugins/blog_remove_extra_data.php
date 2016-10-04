<?php
/*
 Plugin Name: JSON Filter Plugin
 Description: This plugin will filter the data returned by the WP REST API
 Version: 1
 Author: Shantia Grimes
 */
defined('ABSPATH') or die('No mas');

add_action( 'rest_api_init', 'blog_remove_extra_data');
// add_action( 'rest_api_init', 'register_api_hooks');


/* The two functions below can be used to strip the html tags from the JSON response Gotta check if works with wp-api v1
function register_api_hooks() {
// Add the plaintext content to GET requests for individual posts

    
    register_api_field(
        'post',
        'plaintext',
        array (
            'get_callback'  => 'return_plaintext_content',
        )
    );
}

function return_plaintext_content($object, $field_name, $request) {
    return strip_tags (html_entity_decode ($object['content']['rendered']));
}
*/

function blog_remove_extra_data($data, $post, $context) {
    if($context !=='view' || is_wp_error($data) ) {
        return $data;
    }
    unset($data['comment_status']);
    unset($data['date_gmt']);
    unset($data['date_tz']);
    unset($data['modified_tz']);
    unset($data['status']);
    unset($data['content_raw']);
    unset($data['excerpt_raw']);
    unset($data['parent']);
    unset($data['guid']);
    unset($data['menu_order']);
    unset($data['ping_status']);
    unset($data['sticky']);
    unset($data['post_format']);
    unset($data['terms']);
    unset($data['modified']);
    unset($data['format']);
    unset($data['modified_gmt']);
    unset($data['meta']);
    
    
    return $data;
}

add_filter('json_prepare_post', 'blog_remove_extra_data', 12, 3)

?>