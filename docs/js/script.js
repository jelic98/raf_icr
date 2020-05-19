function showParkingMap() {
	var address = {lat: 44.815719, lng: 20.457367};
	var map = new google.maps.Map(document.getElementsByClassName('map')[0], {zoom: 15, center: address});
	var marker = new google.maps.Marker({position: address, map: map});
}

function showAddressMap() {
	var address = {lat: 44.815455, lng: 20.459757};
	var map = new google.maps.Map(document.getElementsByClassName('map')[0], {zoom: 15, center: address});
	var marker = new google.maps.Marker({position: address, map: map});
}

function showHistogram() {
	var x = [];

	for(var i = 0; i < 1000; i++) {
		x[i] = Math.floor(Math.random() * 25);
	}

	Plotly.newPlot('histogram',
		[{x: x, type: 'histogram', xbins: {start: 0,end: 24,size: 1}}],
		{margin: {l: 20, r: 20, b: 20, t: 20}, showlegend: false},
		{displayModeBar: false});
}

function showTooltips() {
	$.each($('[data-toggle="tooltip"]'), function() {
		var src = $(this).attr('data-tooltip');
		$(this).tooltip({
			animated: 'fade',
			placement: 'bottom',
			html: true,
			title: '<img class="tooltip-img" src="' + src + '">'
		});
	});
}

$(function() {
	showTooltips();
	showHistogram();
});
