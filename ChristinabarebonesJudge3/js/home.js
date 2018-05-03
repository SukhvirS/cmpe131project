$(document).ready(function() {


var setter = true;
var setter1 = true;
var backgroundSetter = true;
var skillsSetter = true;

function ClearFields() {

function ClearFields() {

     document.getElementById("entryInputTitle").value = "";
     document.getElementById("entryInputName").value = "";
     document.getElementById("entryDescription1").value="";
     document.getElementById("entryFile").value="";


}


}

	$('#editBox').click(function(){
		ClearFields();

		  					$('#myBody').velocity({'background-color': '#87CEFA'});


					$('#editProfileBox').velocity({'top': '10%'}, 250);
					$('#enterCompetition').velocity({'top': '-300%'}, 250);
					$('#manageEntriesList').velocity({'left': '200%'}, 250);

						
	});

	$('#enterBox').click(function(){
		

							$('#myBody').velocity({'background-color': '#FFFACD'});


			
					//$(this).velocity({'color': '#ffffff'}, 50);


  					

					//$('#myBody').velocity({'background-color': '#2c353e'});
					//$('#loginInfo').velocity({'color': '#ffffff'}, 50);
  				



  					
				
					$('#enterCompetition').velocity({'top': '-66%'}, 250);

					$('#manageEntriesList').velocity({'left': '200%'}, 250);
  				
					$('#editProfileBox').velocity({'top': '200%'}, 250);

					
				
				


		});

		$('#createSubmitButton').click(function(){
					ClearFields();

					  $('#myBody').velocity({'background-color': '#F9F9F9'});

					$('#manageEntriesList').velocity({'left': '35%'}, 250);
					$('#enterCompetition').velocity({'top': '200%'}, 250);
					$('#editProfileBox').velocity({'top': '200%'}, 250);


	});



	$('#manageBox').click(function(){

		ClearFields();
				
					//$(this).velocity({'color': '#ffffff'}, 50);


  					$('#myBody').velocity({'background-color': '#F9F9F9'});


					//$('#loginInfo').velocity({'color': '#ffffff'}, 50);
  				




					$('#manageEntriesList').velocity({'left': '35%'}, 250);
					$('#enterCompetition').velocity({'top': '200%'}, 250);
					$('#editProfileBox').velocity({'top': '200%'}, 250);

  				

				

				


		});

	$('#food_category').click(function(){
		ClearFields();

		  					$('#myBody').velocity({'background-color': '#DDA0DD'});


					$('#foodCategoryBox').velocity({'left': '35%'}, 250);
					$('#manageEntriesList').velocity({'top': '200%'}, 250);
					$('#enterCompetition').velocity({'top': '200%'}, 250);
					$('#editProfileBox').velocity({'top': '200%'}, 250);

						
	});

	



	});
