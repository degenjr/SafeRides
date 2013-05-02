 var geocoder;
 var map;
 var api = google.maps;
	  
		
	function initialize() 
	{
		coder = new api.Geocoder();
		
		var dc = new api.LatLng(38.4433, -78.8728);
		var mapOptions = {
			zoom: 2,
			center: dc,
			mapTypeId: api.MapTypeId.ROADMAP
		}
			map = new api.Map(document.getElementById("map_canvas"), mapOptions);
	}
	  
	function codeAddress() 
	{
		var address = document.getElementById("address").value;
			coder.geocode( { 'address': address}, function(results, status) {
			if (status == api.GeocoderStatus.OK) {
				map.setCenter(results[0].geometry.location);
				
        var marker = new api.Marker({
            map: map,
            position: results[0].geometry.location
        });
			} else {
				alert("Geocode was not successful for the following reason: " + status);
			}
		});
	}
	
	function message()
	{
		var getRide = document.rides.driver;
		
		if(getRide.options[getRide.selectedIndex].value === ride)
		{
			alert("Can you please come and pick me up?");
		}
		
		if(getRide.options[getRide.selectedIndex].value === ride2)
		{
			alert("Can you please come and pick me up?");
		}
		
		if(getRide.options[getRide.selectedIndex].value === ride3)
		{
			alert("Can you please come and pick me up?");
		}
		
		if(getRide.options[getRide.selectedIndex].value === ride4)
		{
			alert("Can you please come and pick me up?");
		}
		
		if(getRide.options[getRide.selectedIndex].value === ride5)
		{
			alert("Can you please come and pick me up?");
		}
	}