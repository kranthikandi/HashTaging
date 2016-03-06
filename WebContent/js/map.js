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
		},
		plots: {
			'california' : {
				latitude: 37.0000,
				longitude: -120.0000,
                value: "Value 1"
			},
			'Silicon valley' : {
				latitude: 37.3876,
				longitude: -122.0575,
                value: "Value 1"
			},
			'Austin' : {
				latitude: 30.2500, 
				longitude: -97.7500,
                value: "Value 2"
			},
			'sf' : {
				latitude: 37.792032,
				longitude: -122.394613,
                value: "Value 1"
			},
			'ny' : {
				latitude: 40.7127,
				longitude: -74.0059,
                value: "Value 1"
			},
			'santaclara' : {
				latitude: 37.3544,
				longitude: -121.9692,
                value: "Value 2"
			},
            'bayarea' : {
				latitude:37.6910,
				longitude: -122.3108,
                value: "Value 1"
			},
            'dallas' : {
				latitude: 32.784881,
				longitude: -96.808244,
                value: "Value 2"
			},
            'miami' : {
				latitude: 25.789125,
				longitude:  -80.205674,
                value: "Value 2"
			},
            'sunnyvale' : {
				latitude: 37.3711,
				longitude:  -122.0375,
                value: "Value 2"
			},
            'paloalto' : {
				latitude: 37.4292,
				longitude: -122.1381,
                value: "Value 1"
			},
			'fremont' : {
				latitude: 37.5483,
				longitude: -121.9886,
                value: "Value 1"
			}
		}
	});
});