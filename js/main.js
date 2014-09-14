var aminos = [{
		"structure" : "gylcine.svg",
		"name" : "glycine",
		"short" : "gly",
		"code" : "G"
	}, {
		"structure" : "alanine.svg",
		"name" : "alanine",
		"short" : "ala",
		"code" : "A"
	}, {
		"structure" : "valine.svg",
		"name" : "valine",
		"short" : "val",
		"code" : "V"
	}, {
		"structure" : "leucine.svg",
		"name" : "leucine",
		"short" : "leu",
		"code" : "L"
	}, {
		"structure" : "isoleucine.svg",
		"name" : "isoleucine",
		"short" : "ile",
		"code" : "I"
	}, {
		"structure" : "serine.svg",
		"name" : "serine",
		"short" : "ser",
		"code" : "S"
	}, {
		"structure" : "threonine.svg",
		"name" : "threonine",
		"short" : "thr",
		"code" : "T"
	}, {
		"structure" : "phenylalanine.svg",
		"name" : "phenylalanine",
		"short" : "phe",
		"code" : "F"
	}, {
		"structure" : "tyrosine.svg",
		"name" : "tyrosine",
		"short" : "tyr",
		"code" : "Y"
	}, {
		"structure" : "tryptophan.svg",
		"name" : "tryptophan",
		"short" : "trp",
		"code" : "W"
	}, {
		"structure" : "cysteine.svg",
		"name" : "cysteine",
		"short" : "cys",
		"code" : "C"
	}, {
		"structure" : "methionine.svg",
		"name" : "methionine",
		"short" : "met",
		"code" : "M"
	}, {
		"structure" : "aspartate.svg",
		"name" : "aspartate",
		"short" : "asp",
		"code" : "D"
	}, {
		"structure" : "glutamate.svg",
		"name" : "glutamate",
		"short" : "glu",
		"code" : "E"
	}, {
		"structure" : "asparagine.svg",
		"name" : "asparagine",
		"short" : "asn",
		"code" : "N"
	}, {
		"structure" : "glutamine.svg",
		"name" : "glutamine",
		"short" : "gln",
		"code" : "Q"
	}, {
		"structure" : "lysine.svg",
		"name" : "lysine",
		"short" : "lys",
		"code" : "K"
	}, {
		"structure" : "arginine.svg",
		"name" : "arginine",
		"short" : "arg",
		"code" : "R"
	}, {
		"structure" : "histidine.svg",
		"name" : "histidine",
		"short" : "his",
		"code" : "H"
	}, {
		"structure" : "proline.svg",
		"name" : "proline",
		"short" : "pro",
		"code" : "P"
	}];

function SimpleController($scope) {
	$scope.aminos = aminos;
	$scope.predicate = "name";
}

$(document).ready(function() {
	main();
});

function main() {
	var nums = [];
	var counter = 1;
	for(var i = 0; i < aminos.length; i++){
		nums.push(i);
	}
	
	genHTML();
	function genHTML(){
		nums = shuffle(nums);
		var s = '';
		for(var i = 0; i < nums.length; i++){
			name = aminos[nums[i]].name;
			shortName = aminos[nums[i]].short;
			code = aminos[nums[i]].code;
			//console.log(name, shortName, code);
			s += '<li>';
			s += '<input class="name" type="text" value="' + name + '"></input> <br>';
			s += '<input class="short notFilled" type="text" value="' + 'shortName' + '"></input> <br>';
			s += '<input class="code notFilled" type="text" value="' + 'code' + '"></input> <br>';
			s += '</li>';
		}
		$('#forms').html(s);
	}
	
	
	$('#next').click(function(){
		var correct = true;
		var current = $('#myUl').find('li')[counter-1];
		console.log(aminos[nums[counter-1]].name, aminos[nums[counter-1]].short, aminos[nums[counter-1]].code);
		$(current).find('.notFilled').each(function(){
			if($(this).hasClass('short')){
				if($(this).val() == aminos[nums[counter-1]].short){
					console.log($(this).val() + '==' + aminos[nums[counter-1]].short);
				} else {
					correct = false;
					$(this).css({'color':'red'});
					console.log($(this).val() + '!=' + aminos[nums[counter-1]].short);
				}
			}
			if($(this).hasClass('code')){
				if($(this).val() == aminos[nums[counter-1]].code){
					console.log($(this).val() + '==' + aminos[nums[counter-1]].code);
				} else {
					correct = false;
					$(this).css({'color':'red'});
					console.log($(this).val() + '!=' + aminos[nums[counter-1]].code);
				}
			}
		});
		
		if(correct){
			$('#forms').css({
				'margin-left': '-' + counter*200 + 'px'
			});
			if(counter < aminos.length - 1){
				counter += 1;
			} else {
				counter = 1;
				$('#next').css({
					'display' : 'none'
				});
				$('#restart').css({
					'display' : 'block'
				});
				$('#restart').click(function(){
					genHTML();
					$('#forms').css({
						'margin-left': '0px'
					});
					$('#next').css({
						'display' : 'block'
					});
					$('#restart').css({
						'display' : 'none'
					});
				});
			}	
		}
	});
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
