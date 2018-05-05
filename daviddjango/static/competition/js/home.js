$(document).ready(function() {


var setter = true;
var setter1 = true;
var backgroundSetter = true;
var skillsSetter = true;

function ClearFields() {

     document.getElementById("competitionInput").value = "";
     document.getElementById("hostInput").value = "";
     document.getElementById("dayInput").value="";
     document.getElementById("dayInput").value="";
     document.getElementById("monthInput").value="";
     document.getElementById("yearInput").value="";
     document.getElementById("categoryInput").value="";


}

	

	$('#editBox').click(function(){

					$('#myBody').velocity({'background-color': '#FFFACD'});	
					$('#editCompetitionList').velocity({'top': '-66%'}, 250);

					$('#manageSubmissionList').velocity({'left': '200%'}, 250);
					$('#submitBox').velocity({'left': '200%'}, 250);

					$('#editCompetitionBox').velocity({'top': '200%'}, 250);


					
				
				


		});

	



	$('#submissionsBox').click(function(){

		ClearFields();
				
					//$(this).velocity({'color': '#ffffff'}, 50);


  					$('#myBody').velocity({'background-color': '#F9F9F9'});


					//$('#loginInfo').velocity({'color': '#ffffff'}, 50);
  				




					$('#manageSubmissionList').velocity({'left': '35%'}, 250);
					$('#submitBox').velocity({'left': '55%'}, 250);

					$('#editCompetitionList').velocity({'top': '200%'}, 250);


  				

				

				


		});

	



	});
