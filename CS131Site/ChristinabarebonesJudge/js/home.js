$(document).ready(function() {


var setter = true;
var setter1 = true;
var backgroundSetter = true;
var skillsSetter = true;


	$('#titleBox').velocity({'top':'10%'});

	$('#titleBox').velocity({'right':'42%'}, 1000, function(){

		


		
	});

	$('#loginBox').velocity({'top':'55%'});

	$('#loginBox').velocity({'right':'42%'}, 1000, function(){

			

	});


	$('#manageBox').click(function(){

				setter = true;

				if(setter == true){
				
					//$(this).velocity({'color': '#ffffff'}, 50);


  					

					//$('#myBody').velocity({'background-color': '#2c353e'});
					//$('#loginInfo').velocity({'color': '#ffffff'}, 50);
  				



					$('#loginInfo').velocity({'top': '25%'});
  					
				

					$('#manageCompetitionList').velocity({'left': '35%'}, 250);
					$('#createCompetitionList').velocity({'top': '-300%'}, 250);

  				

					
					setter = false;
					
					
					
				}


				


		});

	$('#createBox').click(function(){

				setter = true;

				if(setter == true){
				
					//$(this).velocity({'color': '#ffffff'}, 50);


  					

					//$('#myBody').velocity({'background-color': '#2c353e'});
					//$('#loginInfo').velocity({'color': '#ffffff'}, 50);
  				



					$('#loginInfo').velocity({'top': '25%'});
  					
				
					$('#createCompetitionList').velocity({'top': '-66%'}, 250);

					$('#manageCompetitionList').velocity({'left': '200%'}, 250);
  				

					
					setter = false;
					
					
					
				}


				


		});




	});
