/**
 * @license Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
    config.extraPlugins = 'fontawesome,autocorrect,widgetbootstrap,widgetcommon,widgettemplatemenu,ckeditor-gwf-plugin,leaflet,'+
        'bt_table,btgrid,uploadimage';
    config.contentsCss = 'https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css';
    config.allowedContent = true;
    config.font_names = config.font_names+';GoogleWebFonts';
};