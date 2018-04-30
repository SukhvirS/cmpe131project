$(document).ready(function() {


var setter = true;
var setter1 = true;
var backgroundSetter = true;
var skillsSetter = true;

function ClearFields() {




}

	$('#editBox').click(function(){
		ClearFields();

		  					$('#myBody').velocity({'background-color': '#87CEFA'});


					$('#editProfileBox').velocity({'top': '10%'}, 250);
					$('#enterCompetition').velocity({'top': '-300%'}, 250);
					$('#manageCompetitionList').velocity({'left': '200%'}, 250);

						
	});

	$('#enterBox').click(function(){
		

							$('#myBody').velocity({'background-color': '#FFFACD'});


			
					//$(this).velocity({'color': '#ffffff'}, 50);


  					

					//$('#myBody').velocity({'background-color': '#2c353e'});
					//$('#loginInfo').velocity({'color': '#ffffff'}, 50);
  				



  					
				
					$('#enterCompetition').velocity({'top': '-66%'}, 250);

					$('#manageCompetitionList').velocity({'left': '200%'}, 250);
  				
					$('#editProfileBox').velocity({'top': '200%'}, 250);

					
				
				


		});

		$('#enterCompetitionButton').click(function(){
					ClearFields();

					  $('#myBody').velocity({'background-color': '#F9F9F9'});

					$('#manageCompetitionList').velocity({'left': '35%'}, 250);
					$('#enterCompetition').velocity({'top': '200%'}, 250);
					$('#editProfileBox').velocity({'top': '200%'}, 250);


	});



	$('#manageBox').click(function(){

		ClearFields();
				
					//$(this).velocity({'color': '#ffffff'}, 50);


  					$('#myBody').velocity({'background-color': '#F9F9F9'});


					//$('#loginInfo').velocity({'color': '#ffffff'}, 50);
  				




					$('#manageCompetitionList').velocity({'left': '35%'}, 250);
					$('#enterCompetition').velocity({'top': '200%'}, 250);
					$('#editProfileBox').velocity({'top': '200%'}, 250);

  				

				

				


		});

	



	});
