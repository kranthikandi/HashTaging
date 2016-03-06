$(function(){
 	$(".mapcontainer").mapael({
		map : {
			name : "usa_states"
            , defaultArea: {
				attrs : {
					fill : "#f4f4e8"
					, stroke: "#ced8d0"
				}
				, attrsHover : {
					fill: "#a4e100"
				}
            }
		},legend: {
			            plot: {
				                title: "American cities",
				                slices: [{
				                    label: "Value 1",
				                    sliceValue: "Value 1",
				                    type: "image",
				url: "http://www.neveldo.fr/mapael/assets/img/marker.png",
				                    width:18,
				                    height:60,
				                    attrsHover :{
				                        transform : "s1.5"
				}
				                }, {
				                    label: "Value 2",
				                    sliceValue: "Value 2",
				                    type: "image",
				url: "http://www.neveldo.fr/mapael/assets/img/marker.png",
				                    width:18,
				                    height:60,
				                    attrsHover :{
				                        transform : "s1.5"
				}
				                }]
				            }
				        },
		plots: {
			'california' : {
				latitude: 37.0000,
				longitude: -120.0000,
				tooltip: {content : "california"},
                value: "Value 1"
			},
			'Silicon valley' : {
				latitude: 37.3876,
				longitude: -122.0575,
				tooltip: {content : "Silicon valley"},
                value: "Value 1"
			},
			'Austin' : {
				latitude: 30.2500, 
				longitude: -97.7500,
				tooltip: {content : "Austin"},
                value: "Value 1"
			},
			'sf' : {
				latitude: 37.792032,
				longitude: -122.394613,
				tooltip: {content : "San Francisco"},
                value: "Value 1"
			},
			'ny' : {
				latitude: 40.7127,
				longitude: -74.0059,
				tooltip: {content : "New York"},
                value: "Value 1"
			},
			'santaclara' : {
				latitude: 37.3544,
				longitude: -121.9692,
				tooltip: {content : "Santa Clara"},
                value: "Value 1"
			},
            'bayarea' : {
				latitude:37.6910,
				longitude: -122.3108,
				tooltip: {content : "Bay Area"},
                value: "Value 1"
			},
            'dallas' : {
				latitude: 32.784881,
				longitude: -96.808244,
				tooltip: {content : "Dallas"},
                value: "Value 1"
			},
            'miami' : {
				latitude: 25.789125,
				longitude:  -80.205674,
				tooltip: {content : "Miami"},
                value: "Value 1"
			},
            'sunnyvale' : {
				latitude: 37.3711,
				longitude:  -122.0375,
				tooltip: {content : "Sunnyvale"},
                value: "Value 1"
			},
            'paloalto' : {
				latitude: 37.4292,
				longitude: -122.1381,
				tooltip: {content : "Palo Alto"},
                value: "Value 1"
			},
			'fremont' : {
				latitude: 37.5483,
				longitude: -121.9886,
				tooltip: {content : "Freemont"},
                value: "Value 1"
			}
		}
	});
});

