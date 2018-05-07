$(document).ready(function() {


var setter = true;
var setter1 = true;
var backgroundSetter = true;
var skillsSetter = true;



	$('#editBox').click(function(){

		  			$('#myBody').velocity({'background-color': '#87CEFA'});
					$('#editProfileBox').velocity({'top': '10%'}, 250);
					$('#createSubmissionList').velocity({'top': '-300%'}, 250);
					$('#manageCompetitionList').velocity({'left': '200%'}, 250);

						
	});

	$('#createBox').click(function(){

					$('#myBody').velocity({'background-color': '#FFFACD'});	
					$('#createSubmissionList').velocity({'top': '10%'}, 250);
					$('#manageCompetitionList').velocity({'left': '200%'}, 250);
					$('#editProfileBox').velocity({'top': '200%'}, 250);

					
				
				


		});

		$('#createSubmissionButton').click(function(){

					$('#myBody').velocity({'background-color': '#F9F9F9'});
					$('#manageCompetitionList').velocity({'left': '35%'}, 250);
					$('#createSubmissionList').velocity({'top': '200%'}, 250);
					$('#editProfileBox').velocity({'top': '200%'}, 250);


	});



	$('#manageBox').click(function(){

				
					//$(this).velocity({'color': '#ffffff'}, 50);


  					$('#myBody').velocity({'background-color': '#F9F9F9'});


					//$('#loginInfo').velocity({'color': '#ffffff'}, 50);
  				




					$('#manageCompetitionList').velocity({'left': '35%'}, 250);
					$('#createSubmissionList').velocity({'top': '200%'}, 250);
					$('#editProfileBox').velocity({'top': '200%'}, 250);

  				

				

				


		});

	

	



	});
