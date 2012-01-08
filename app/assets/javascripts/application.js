// This is a manifest file that'll be compiled into including all the files listed below.
// Add new JavaScript/Coffee code in separate files in this directory and they'll automatically
// be included in the compiled file accessible from http://example.com/assets/application.js
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

$(function(){
	$('#navbackground').corner('top 8px cc:#ededed'); 
	$('#footer').corner('bottom 8px cc:#ededed'); 
	
	$('.link_to_full_bio').click(function(){
		if($(this).closest('div').find('.full_bio').css('display') == 'none')
		     $(this).closest('div').find('.full_bio').show("blind");
		else
		{
		     $(this).closest('div').find('.full_bio').hide("blind");                      
		}
		
		$(this).text() == "More..." ? $(this).text('Hide') : $(this).text('More...');
	});
});

function initialize() {
   var latlng_sf = new google.maps.LatLng(37.7927966, -122.4042678);
	var latlng_wc = new google.maps.LatLng(37.9093827, -122.0671188);
   var myOptions_sf = {
     zoom: 15,
     center: latlng_sf,
     mapTypeId: google.maps.MapTypeId.ROADMAP
   };
var myOptions_wc = {
     zoom: 15,
     center: latlng_wc,
     mapTypeId: google.maps.MapTypeId.ROADMAP
   };

	if (document.getElementById("sf_map") != undefined) {
		var map_sf = new google.maps.Map(document.getElementById("sf_map"),
		       myOptions_sf);
		var marker_sf = new google.maps.Marker({
		      position: latlng_sf, 
		      map: map_sf,
		      title:"Putterman Logan & Giles - San Francisco Office"
		  });
	}
	
	if (document.getElementById("wc_map") != undefined) {
		var map_wc = new google.maps.Map(document.getElementById("wc_map"),
		       myOptions_wc);
		var marker_wc = new google.maps.Marker({
		      position: latlng_wc, 
		      map: map_wc,
		      title:"Putterman Logan & Giles - Walnut Creek Office"
		  });
	}
 }
