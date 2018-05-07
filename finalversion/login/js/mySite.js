$(document).ready(function() {


var setter = true;
var setter1 = true;
var backgroundSetter = true;
var skillsSetter = true;

function ClearFields() {

  	 document.getElementById("loginEmailInput").value = "";
     document.getElementById("passwordInput").value = "";
     document.getElementById("firstNameInput").value="";
     document.getElementById("lastNameInput").value="";
     document.getElementById("createEmailInput").value="";

     document.getElementById("createPasswordInput").value="";
     document.getElementById("createConfirmPasswordInput").value="";

}



	$('#titleBox').velocity({'top':'10%'});

	$('#titleBox').velocity({'right':'42%'}, 1000, function(){

		


		
	});

	$('#loginBox').velocity({'top':'55%'});

	$('#loginBox').velocity({'right':'42%'}, 1000, function(){

			$('#loginBox').click(function(){

				if(setter == true){
				
					$(this).velocity({'color': '#ffffff'}, 50);


  					$('#loginBox').velocity({'top':'7%'});
					$('#titleBox').velocity({'top': '-30%'});
					$('#createAccountBox').velocity({'top': '-30%'});

					$('#myBody').velocity({'background-color': '#2c353e'});
					$('#loginInfo').velocity({'color': '#ffffff'}, 50);
  				



					$('#loginInfo').velocity({'top': '25%'});
  					
				

					$('#loginInfo').velocity({'left': '82.5%'}, 150);
  				

					
					setter = false;
					
					
					
				}


				


		});

	});

	$('#cancelBox').click(function(){

						ClearFields();
						setter = false;

					if (setter == false){



					$('#myBody').velocity({'background-color': '#F9F9F9'}, 250);
					$('#loginBox').velocity({'color': '#000000'}, 50);
					

					$('#titleBox').velocity({'top': '10%'}, 350);
					$('#loginBox').velocity({'top': '55%'}, 400);
					$('#createAccountBox').velocity({'top': '65%'}, 450);

					$('#loginInfo').velocity({'left': '-60%'});
  					

					setter = true;

				}
						

					});

	$('#createAccountBox').velocity({'top':'65%'});

	$('#createAccountBox').velocity({'right':'37%'}, 1000, function(){



			$('#createAccountBox').click(function(){

				if(setter == true){

				$(this).velocity({'color': '#ffffff'}, 50);


  					$('#loginBox').velocity({'top':'-30%'});
					$('#titleBox').velocity({'top': '-30%'});
					$('#createAccountBox').velocity({'top': '7%'});

					$('#myBody').velocity({'background-color': '#2c353e'});
					$('#createAccountBox').velocity({'color': '#ffffff'}, 50);
  				



					$('.createAccount1').velocity({'top': '20%'});
  					$('.createAccount2').velocity({'top': '20%'});

				

					$('.createAccount1').velocity({'left': '60%'}, 150);
					$('.createAccount2').velocity({'left': '100%'}, 150);



  				setter = false;

			}

			else if (backgroundSetter == false){
  				


  				$('#container').hide();

  		
  				backgroundSetter = true;



			}

			});


			

		});

	$('#cancelBox2').click(function(){
					ClearFields();
						
						setter = false;

					if (setter == false){

					$('.createAccount1').velocity({'left': '-60%'});
					$('.createAccount2').velocity({'left': '-100%'});	

					$('#myBody').velocity({'background-color': '#F9F9F9'}, 250);
					$('#createAccountBox').velocity({'color': '#000000'}, 20);
					

					$('#titleBox').velocity({'top': '10%'}, 350);
					$('#loginBox').velocity({'top': '55%'}, 450);
					$('#createAccountBox').velocity({'top': '65%'}, 400);


  					

					setter = true;

				}
						

					});



var x, i, j, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < selElmnt.length; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        h = this.parentNode.previousSibling;
        for (i = 0; i < s.length; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            for (k = 0; k < y.length; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
  });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  for (i = 0; i < y.length; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);


	});
