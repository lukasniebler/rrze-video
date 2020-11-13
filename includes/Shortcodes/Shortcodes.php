<?php

namespace RRZE_Video\Shortcodes;

defined('ABSPATH') || exit;

use RRZE_Video\Main;
use RRZE_Video\Shortcodes\Video;


/**
 * Laden und definieren der Shortcodes
 */
class Shortcodes {
    protected $pluginFile;
    private $settings = '';
    
     public function __construct($pluginFile, $settings) {
        $this->pluginFile = $pluginFile;
        $this->settings = $settings;
    }

    public function onLoaded() {
	$video_shortcode = new Video($this->pluginFile,  $this->settings);
	$video_shortcode->onLoaded();

    }
}

