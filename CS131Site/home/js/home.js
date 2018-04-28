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
		ClearFields();

		  			$('#myBody').velocity({'background-color': '#87CEFA'});
					$('#editProfileBox').velocity({'top': '10%'}, 250);
					$('#createCompetitionList').velocity({'top': '-300%'}, 250);
					$('#manageCompetitionList').velocity({'left': '200%'}, 250);

						
	});

	$('#createBox').click(function(){

					$('#myBody').velocity({'background-color': '#FFFACD'});	
					$('#createCompetitionList').velocity({'top': '-66%'}, 250);
					$('#manageCompetitionList').velocity({'left': '200%'}, 250);
					$('#editProfileBox').velocity({'top': '200%'}, 250);

					
				
				


		});

		$('#createCompetitionButton').click(function(){
					ClearFields();

					$('#myBody').velocity({'background-color': '#F9F9F9'});
					$('#manageCompetitionList').velocity({'left': '35%'}, 250);
					$('#createCompetitionList').velocity({'top': '200%'}, 250);
					$('#editProfileBox').velocity({'top': '200%'}, 250);


	});



	$('#manageBox').click(function(){

		ClearFields();
				
					//$(this).velocity({'color': '#ffffff'}, 50);


  					$('#myBody').velocity({'background-color': '#F9F9F9'});


					//$('#loginInfo').velocity({'color': '#ffffff'}, 50);
  				




					$('#manageCompetitionList').velocity({'left': '35%'}, 250);
					$('#createCompetitionList').velocity({'top': '200%'}, 250);
					$('#editProfileBox').velocity({'top': '200%'}, 250);

  				

				

				


		});

	



	});
