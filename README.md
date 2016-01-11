CKEditor Widget for Yii2
========================

Based on [2amigos/yii2-ckeditor-widget](https://github.com/2amigos/yii2-ckeditor-widget)

Renders a [CKEditor WYSIWYG text editor plugin](http://www.ckeditor.com) widget.

Installation
------------
The preferred way to install this extension is through [composer](http://getcomposer.org/download/).

Either run

```
composer require sibds/yii2-ckeditor-widget:~1.0
```
or add

```json
"sibds/yii2-ckeditor-widget" : "~1.0"
```

to the require section of your application's `composer.json` file.

Skins & Plugins
---------------

Default: `Office2013`

This widget works with default's `dev-full/stable` branch of CKEditor, with a set of plugins and skins. If you wish to
configure a different skins or plugins that the one proposed, you will have to download them separately and configure
the widget's `clientOptions` attribute accordingly.

Plugins:

* [AutoCorrect](http://ckeditor.com/addon/autocorrect)
* [FontAwesome](http://ckeditor.com/addon/fontawesome)
* [Save as Submit form](http://ckeditor.com/addon/save)
* [Upload Image](http://ckeditor.com/addon/uploadimage)
* [Table](http://ckeditor.com/addon/table)
* [Bootstrap](http://ckeditor.com/addon/widgetbootstrap)
* [Media (oEmbed) Plugin](http://ckeditor.com/addon/oembed)
* [Find and Replace](http://ckeditor.com/addon/find)
* Text Transform
* Floating Tools
* Translate
* [Google Web Fonts](http://ckeditor.com/addon/ckeditor-gwf-plugin)

Usage
-----
The library comes with two widgets: `CKEditor` and `CKEditorInline`. One is for classic edition and the other for inline
editing respectively.

Using a model with a basic preset:

```

use dosamigos\ckeditor\CKEditor;


<?= $form->field($model, 'text')->widget(CKEditor::className(), [
        'options' => ['rows' => 6],
        'preset' => 'basic'
    ]) ?>
```
Using inline edition with basic preset:

```

use dosamigos\ckeditor\CKEditorInline;

<?php CKEditorInline::begin(['preset' => 'basic']);?>
    This text can be edited now :)
<?php CKEditorInline::end();?>
```

License
-------

The BSD License (BSD). Please see [License File](LICENSE.md) for more information.


> [![2amigOS!](http://www.gravatar.com/avatar/55363394d72945ff7ed312556ec041e0.png)](http://www.2amigos.us)  
<i>Web development has never been so fun!</i>  
[www.2amigos.us](http://www.2amigos.us)
