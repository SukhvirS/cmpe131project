$(document).ready(function() {


var setter = true;
var setter1 = true;
var backgroundSetter = true;
var skillsSetter = true;

function ClearFields() {

     document.getElementById("competitionInput").value = "";
     document.getElementById("hostInput").value = "";
     document.getElementById("startingDayInput").value="";
     document.getElementById("startingMonthInput").value="";
     document.getElementById("startingYearInput").value="";
     document.getElementById("endDayInput").value="";
     document.getElementById("endMonthInput").value="";
     document.getElementById("endYearInput").value="";
     document.getElementById("categoryInput").value="";


}

	$('#homeBox').click(function(){
		ClearFields();

		  						window.location.href = '../home/home.html';

						
	});

	$('#createBox').click(function(){

					$('#myBody').velocity({'background-color': '#FFFACD'});	
					$('#createCompetitionList').velocity({'top': '-66%'}, 250);
					$('#manageCompetitionList').velocity({'left': '200%'}, 250);
					$('#editProfileBox').velocity({'top': '200%'}, 250);

					$('#addUserBox').velocity({'top': '200%'}, 250);

					$('#addJudgeBox').velocity({'top': '200%'}, 250);
					$('#addUserInputBox').velocity({'top': '200%'}, 250);

					$('#addJudgeInputBox').velocity({'top': '200%'}, 250);
					
				
				


		});

		$('#createCompetitionButton').click(function(){
					ClearFields();

					$('#myBody').velocity({'background-color': '#F9F9F9'});
					$('#manageCompetitionList').velocity({'left': '200%'}, 250);
					$('#createCompetitionList').velocity({'top': '200%'}, 250);
					$('#editProfileBox').velocity({'top': '200%'}, 250);

					$('#addUserBox').velocity({'top': '200%'}, 250);

					$('#addJudgeBox').velocity({'top': '200%'}, 250);
					$('#addUserInputBox').velocity({'top': '200%'}, 250);

					$('#addJudgeInputBox').velocity({'top': '200%'}, 250);


	});



	$('#manageBox').click(function(){

				ClearFields();
				
					//$(this).velocity({'color': '#ffffff'}, 50);


  					$('#myBody').velocity({'background-color': '#F9F9F9'});


					//$('#loginInfo').velocity({'color': '#ffffff'}, 50);
  				




					$('#manageCompetitionList').velocity({'left': '35%'}, 250);
					$('#createCompetitionList').velocity({'top': '200%'}, 250);
					$('#editProfileBox').velocity({'top': '200%'}, 250);

  				
					$('#addUserBox').velocity({'top': '200%'}, 250);
					$('#addJudgeBox').velocity({'top': '200%'}, 250);

				$('#addUserInputBox').velocity({'top': '200%'}, 250);

					$('#addJudgeInputBox').velocity({'top': '200%'}, 250);

				


		});

	$('#addBox').click(function(){
				ClearFields();


					$('#addUserBox').velocity({'top': '53%'}, 250);

					$('#addJudgeBox').velocity({'top': '10%'}, 250);

					$('#addUserInputBox').velocity({'top': '53%'}, 250);

					$('#addJudgeInputBox').velocity({'top': '10%'}, 250);

					$('#manageCompetitionList').velocity({'left': '200%'}, 250);

					$('#createCompetitionList').velocity({'top': '200%'}, 250);
					$('#editProfileBox').velocity({'top': '200%'}, 250);


	});


	



	});
