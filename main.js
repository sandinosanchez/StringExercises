
$(document).ready(function(){

      var height = $(window).height();

      $('#main').height(height);
});

$('#ammountOfInputs').keypress(function(e){
	var key = e.charCode ? e.charCode : e.keyCode ? e.keyCode : 0;
	if (key == 13){
		if ($(this).val() <= 10 && $(this).val() > 1) {
			let parentDiv = '';
			for (var i = 0; i < $(this).val(); i++) {
				parentDiv = '<div class="input-group flex-nowrap pb-2">' +
			'<div class="input-group-prepend">' + '<span class="input-group-text" id="addon-wrapping">Insert String</span>' +
			'</div>' + '<input type="text" id="input_data_' + i + '" class="form-control" placeholder="sample" aria-label="Username" aria-describedby="addon-wrapping">' +
			'<span class="input-group-text" id="addon-wrapping">Sum of similars suffixes</span>'+  '<input id="input_result_' + i + '"type="text"class="form-control" disabled="disabled" placeholder="" aria-label="Username" aria-describedby="addon-wrapping">' + 
			'</div>';
				$('#content-row').append(parentDiv);
			}
		} else if($(this).val() < 1) {
			alert("Minimum amount of test cases is 1");
		} else if ($(this).val() > 10){
			alert("Maximum amount of test cases is 10");
		}
	}
	
});

function checkConstraints(inputString){
	if (inputString.length <= 5000 && inputString.length > 0){
		return true;
	}
}

function zAlgorithm(inputString){

	let amount = inputString.length;
	let index = 0;
	let index2 = 1;

	for (let charIndex = 1; charIndex < inputString.length; charIndex ++){
		while (inputString[index] == inputString[index2]){
			amount ++;
			index2 ++;
			index ++;
		}
		index = 0;
		index2 = charIndex +1;
	}
	return amount;
}


function main() {
	let amountOfIterations = $('#ammountOfInputs').val();
	let arrayOfValues = new Array(amountOfIterations);
	for (var i = 0; i < amountOfIterations; i++) {
		arrayOfValues[i] = $('#input_data_'+i).val();
	}
	if (checkConstraints(amountOfIterations)){
		for (let i = 0; i < arrayOfValues.length; i++) {
			$('#input_result_' + i).val(zAlgorithm(arrayOfValues[i]));
		}
	}
}