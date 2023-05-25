/**
* @package   WarpTheme Based Theme(WarpTheme.com)
* @author    YOOtheme http://www.yootheme.com
* @copyright Copyright (C) YOOtheme GmbH
* @license   http://www.gnu.org/licenses/gpl.html GNU/GPL
*/
jQuery(function($) {
    var config = $('html').data('config') || {};
    // Social buttons
    $('article[data-permalink]').socialButtons(config);    
});
