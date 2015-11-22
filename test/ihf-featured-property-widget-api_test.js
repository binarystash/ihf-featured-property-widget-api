(function ($) {
	module('jQuery.ihfFeaturedPropertyWidgetApi');

	test('assert.async() count', function (assert) {
		
		var done = assert.async();
		
		$.ihfFeaturedPropertyWidgetApi({
			'clientId':40772,
			'alternativeUrl':'http://0.0.0.0:9000/test/alternativeUrl.js'
		},function(settings,data) {
			assert.equal(data.length,6,"Wrong number of properties");
			done();
		});
		
	});
	
	test('assert.async() data', function (assert) {
		
		var done = assert.async();
		
		$.ihfFeaturedPropertyWidgetApi({
			'clientId':40772,
			'alternativeUrl':'http://0.0.0.0:9000/test/alternativeUrl.js'
		},function(settings,data) {
			
			var expected = "[{\"url\":\"http://ihomefinder.idxre.com/homes/13/40772/2352-BECKETT-DRIVE-EL-DORADO-HILLS-CA-95762/15060308\",\"imageSrc\":\"http://pix.idxre.com/pix/CAMETROLIST/main/0/15060308_0.jpg\",\"title\":\"2352 BECKETT DRIVE EL DORADO HILLS, CA 9576\",\"price\":\"$719,000\",\"stats\":\"5 Beds - 4 Baths\"},{\"url\":\"http://ihomefinder.idxre.com/homes/13/40772/2092-OUTRIGGER-DRIVE-EL-DORADO-HILLS-CA-95762/15046373\",\"imageSrc\":\"http://pix.idxre.com/pix/CAMETROLIST/main/0/15046373_0.jpg\",\"title\":\"2092 OUTRIGGER DRIVE EL DORADO HILLS, CA 9576\",\"price\":\"$1,248,000\",\"stats\":\"6 Beds - 4 Full | 1 Partial Baths\"},{\"url\":\"http://ihomefinder.idxre.com/homes/13/40772/5136-BREESE-CIRCLE-EL-DORADO-HILLS-CA-95762/15060216\",\"imageSrc\":\"http://pix.idxre.com/pix/CAMETROLIST/main/0/15060216_0.jpg\",\"title\":\"5136 BREESE CIRCLE EL DORADO HILLS, CA 9576\",\"price\":\"$1,598,000\",\"stats\":\"4 Beds - 3 Full | 1 Partial Baths\"},{\"url\":\"http://ihomefinder.idxre.com/homes/13/40772/1862-SHOREVIEW-DRIVE-EL-DORADO-HILLS-CA-95762/15059618\",\"imageSrc\":\"http://pix.idxre.com/pix/CAMETROLIST/main/0/15059618_0.jpg\",\"title\":\"1862 SHOREVIEW DRIVE EL DORADO HILLS, CA 9576\",\"price\":\"$1,848,000\",\"stats\":\"5 Beds - 5 Baths\"},{\"url\":\"http://ihomefinder.idxre.com/homes/13/40772/4908-BREESE-CIRCLE-EL-DORADO-HILLS-CA-95762/15059971\",\"imageSrc\":\"http://pix.idxre.com/pix/CAMETROLIST/main/0/15059971_0.jpg\",\"title\":\"4908 BREESE CIRCLE EL DORADO HILLS, CA 9576\",\"price\":\"$229,000\",\"stats\":\"\"},{\"url\":\"http://ihomefinder.idxre.com/homes/13/40772/5021-DA-VINCI-DRIVE-EL-DORADO-HILLS-CA-95762/14011728\",\"imageSrc\":\"http://pix.idxre.com/pix/CAMETROLIST/main/0/14011728_0.jpg\",\"title\":\"5021 DA VINCI DRIVE EL DORADO HILLS, CA 9576\",\"price\":\"$245,000\",\"stats\":\"\"}]";
			var actual = JSON.stringify(data);
			
			assert.equal(actual,expected,"Wrong data");
			done();
		});
		
	});
	
	
  
}(jQuery));
