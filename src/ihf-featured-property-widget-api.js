/*
 * Copyright (c) 2015 BinaryStash
 * Licensed under the MIT license.
 */
(function ($) {
	$.ihfFeaturedPropertyWidgetApi = function (options,callback) {

		var settings;
	
		function __construct() {
			 
			 var defaults = {
				'clientId':40772, 			//client id
				'mode':'featured',			//(hotsheet or featured)
				'hotsheetId':'',			//hotsheet id,
				'alternativeUrl':''			//alternative url
			 };
			 
			 settings = $.extend(defaults,options);
			 
			 loadData();
			 
		}
		
		function loadData() {
			
			//Format URL based on mode
			var slideshowURL;
			
			if ( settings.alternativeUrl !== '' ) {
				slideshowURL = settings.alternativeUrl+"?cid="+settings.clientId+"&hid="+settings.hotsheetId;
			}
			else {
				if ( settings.mode === 'hotsheet' ) {
					slideshowURL = "http://ihomefinder.idxre.com/idx/hotSheetslideshow.cfm?cid="+settings.clientId+"&hid="+settings.hotsheetId;
				}
				else {
					slideshowURL = "http://ihomefinder.idxre.com/idx/featuredslideshow.cfm?cid="+settings.clientId;
				}
			}
			
			//Load ihomefinder script
			
			$.getScript(slideshowURL, function() {
				//Extract details
				
				var jsonOutput = [];
				
				$(SLIDES.slides).each( function(i,value) {
					var imgsrc = value.src.trim();
					var text = value.text.trim();
					var url = value.link.trim();
					
					var el =  $("&lt;li&gt;"  + text + "&lt;/li&gt;");
					
					//Find price
					var price = el.find("b").html().trim();
					
					//Find property title
					if ( el.find("br").eq(0).next("br").length > 0 ) {
						el.find("br").eq(0).remove();
					}
					var title = el.find("a").html();
					var index = ( ( title.indexOf("<br") - 1 ) > 0 ) ? title.indexOf("<br") - 1 : title.indexOf("<BR") - 1;
					title = title.substring(0,index).trim();
					
					//Find stats
					el.find("br").eq(0).remove();
					el.find("b").remove();
					var statsStart = ( ( el.html().indexOf("<br") ) > 0 ) ? el.html().indexOf("<br") : el.html().indexOf("<BR");
					var statsEnd = ( ( el.html().indexOf("</a") ) > 0 ) ? el.html().indexOf("</a") : el.html().indexOf("</A");
					var stats = el.html().substring(statsStart+4,statsEnd).trim();
					
					//Append to output
					jsonOutput.push({
						url:url,
						imageSrc:imgsrc,
						title:title,
						price:price,
						stats:stats
					});
					
				});
				
				//Execute 'afterInit'
				callback.call(this,settings,jsonOutput);
				
			});
			
		}
		
		__construct();

	};

}(jQuery));
