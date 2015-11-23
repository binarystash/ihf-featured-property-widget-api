[![Build Status](https://travis-ci.org/binarystash/jquery-ihf-featured-property-widget-api.svg)](https://travis-ci.org/binarystash/jquery-ihf-featured-property-widget-api)

# iHomefinder Featured Property Widget API

This plugin returns an iHomefinder Featured Property Widget as a JSON object which is ideal for creating complex custom layouts. It also supports hotsheets.

## Getting Started

Download the [production version][min] or the [development version][max].

[min]: https://raw.githubusercontent.com/binarystash/jquery-ihf-featured-property-widget-api/master/dist/jquery.ihf-featured-property-widget-api.min.js
[max]: https://raw.githubusercontent.com/binarystash/jquery-ihf-featured-property-widget-api/master/dist/jquery.ihf-featured-property-widget-api.js

In your web page:

```html
<script src="jquery.js"></script>
<script src="dist/jquery.ihf-featured-property-widget-api.js"></script>
```

## Fetching the featured property widget as a JSON object

```javascript
	jQuery(document).ready( function() {
			
		jQuery.ihfFeaturedPropertyWidgetApi({
			'clientId':'<your_client_id>'
		},function(settings,data) {
			
			//Build your layout
			var container = jQuery("<ul></ul>");
			
			jQuery(data).each( function(i,v) {
				var item = jQuery("<li><ul></ul></li>");
				var ul = item.find("ul");
				ul.append("<li>Url: "+v.url+"</li>");
				ul.append("<li>Image: "+v.imageSrc+"</li>");
				ul.append("<li>Title: "+v.url+"</li>");
				ul.append("<li>Price: "+v.price+"</li>");
				ul.append("<li>Stats: "+v.stats+"</li>");
				container.append(item);
			});
			
			jQuery("body").append(container);
		
		});
		
	});
```

## Fetching a hotsheet widget as a JSON object

```javascript
	jQuery(document).ready( function() {
			
		jQuery.ihfFeaturedPropertyWidgetApi({
			'clientId':'<your_client_id>',
			'mode':'hotsheet',
			'hotsheetId':'<your_hotsheet_id>'
		},function(settings,data) {
			
			//Build your layout
			var container = jQuery("<ul></ul>");
			
			jQuery(data).each( function(i,v) {
				var item = jQuery("<li><ul></ul></li>");
				var ul = item.find("ul");
				ul.append("<li>Url: "+v.url+"</li>");
				ul.append("<li>Image: "+v.imageSrc+"</li>");
				ul.append("<li>Title: "+v.url+"</li>");
				ul.append("<li>Price: "+v.price+"</li>");
				ul.append("<li>Stats: "+v.stats+"</li>");
				container.append(item);
			});
			
			jQuery("body").append(container);
		
		});
		
	});
```

##Compatibility
Tested on IE8; latest versions of Firefox and Chrome

##Support
Report bugs at https://github.com/binarystash/jquery-ihf-featured-property-widget-api/issues.

