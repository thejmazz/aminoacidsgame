var aminos = [{
		"structure" : "gylcine.svg",
		"name" : "glycine",
		"short" : "gly",
		"code" : "g"
	}, {
		"structure" : "alanine.svg",
		"name" : "alanine",
		"short" : "ala",
		"code" : "a"
	}, {
		"structure" : "valine.svg",
		"name" : "valine",
		"short" : "val",
		"code" : "v"
	}, {
		"structure" : "leucine.svg",
		"name" : "leucine",
		"short" : "leu",
		"code" : "l"
	}, {
		"structure" : "isoleucine.svg",
		"name" : "isoleucine",
		"short" : "ile",
		"code" : "i"
	}, {
		"structure" : "serine.svg",
		"name" : "serine",
		"short" : "ser",
		"code" : "s"
	}, {
		"structure" : "threonine.svg",
		"name" : "threonine",
		"short" : "thr",
		"code" : "t"
	}, {
		"structure" : "phenylalanine.svg",
		"name" : "phenylalanine",
		"short" : "phe",
		"code" : "f"
	}, {
		"structure" : "tyrosine.svg",
		"name" : "tyrosine",
		"short" : "tyr",
		"code" : "y"
	}, {
		"structure" : "tryptophan.svg",
		"name" : "tryptophan",
		"short" : "trp",
		"code" : "w"
	}, {
		"structure" : "cysteine.svg",
		"name" : "cysteine",
		"short" : "cys",
		"code" : "c"
	}, {
		"structure" : "methionine.svg",
		"name" : "methionine",
		"short" : "met",
		"code" : "m"
	}, {
		"structure" : "aspartate.svg",
		"name" : "aspartate",
		"short" : "asp",
		"code" : "d"
	}, {
		"structure" : "glutamate.svg",
		"name" : "glutamate",
		"short" : "glu",
		"code" : "e"
	}, {
		"structure" : "asparagine.svg",
		"name" : "asparagine",
		"short" : "asn",
		"code" : "n"
	}, {
		"structure" : "glutamine.svg",
		"name" : "glutamine",
		"short" : "gln",
		"code" : "q"
	}, {
		"structure" : "lysine.svg",
		"name" : "lysine",
		"short" : "lys",
		"code" : "k"
	}, {
		"structure" : "arginine.svg",
		"name" : "arginine",
		"short" : "arg",
		"code" : "r"
	}, {
		"structure" : "histidine.svg",
		"name" : "histidine",
		"short" : "his",
		"code" : "h"
	}, {
		"structure" : "proline.svg",
		"name" : "proline",
		"short" : "pro",
		"code" : "p"
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
			var rand = Math.random();
			s += '<li>';
			if (rand <= (1/3)){
				s += '<input class="name" type="text" value="' + name + '"></input><i class="name fa"></i> <br>';
				s += '<input class="short" type="text" value="" placeholder="shortName"></input><i class="short fa"></i><i class="short fa"></i> <br>';
				s += '<input class="code" type="text" value="" placeholder="code"></input><i class="code fa"></i> <br>';
			} else if (rand <= (2/3)){
				s += '<input class="name" type="text" value="" placeholder="name"></input><i class="name fa"></i> <br>';
				s += '<input class="short" type="text" value="' + shortName + '"></input><i class="short fa"></i> <br>';
				s += '<input class="code" type="text" value="" placeholder="code"></input><i class="code fa"></i> <br>';
			} else {
				s += '<input class="name" type="text" value="" placeholder="name"></input><i class="name fa"></i> <br>';
				s += '<input class="short" type="text" value="" placeholder="shortName"></input><i class="short fa"></i> <br>';
				s += '<input class="code" type="text" value="' + code + '"></input><i class="code fa"></i> <br>';
			}
			
			s += '</li>';
		}
		$('#forms').html(s);
		$('#test').html('' + counter + '/20');
	}
	
	
	$('#next').click(function(){
		clicked();
	});
	$('input').keypress(function (e) {
	  if (e.which == 13) {
	    clicked();
	    return false;
	  }
	});
	
	function clicked(){
		var correct = true;
		var current = $('#myUl').find('li')[counter-1];
		console.log(aminos[nums[counter-1]].name, aminos[nums[counter-1]].short, aminos[nums[counter-1]].code);
		$(current).find('input').each(function(){
			if($(this).hasClass('short')){
				if($(this).val().toLowerCase() == aminos[nums[counter-1]].short){
					console.log($(this).val() + '==' + aminos[nums[counter-1]].short);
					$($(current).find('i.short')[0]).removeClass('fa-close');
					$($(current).find('i.short')[0]).addClass('fa-check');
				} else {
					correct = false;
					$($(current).find('i.short')[0]).removeClass('fa-check');
					$($(current).find('i.short')[0]).addClass('fa-close');
					console.log($(this).val() + '!=' + aminos[nums[counter-1]].short);
				}
			}
			if($(this).hasClass('code')){
				if($(this).val().toLowerCase() == aminos[nums[counter-1]].code){
					console.log($(this).val() + '==' + aminos[nums[counter-1]].code);
					$($(current).find('i.code')[0]).removeClass('fa-close');
					$($(current).find('i.code')[0]).addClass('fa-check');
				} else {
					correct = false;
					$($(current).find('i.code')[0]).removeClass('fa-check');
					$($(current).find('i.code')[0]).addClass('fa-close');
					console.log($(this).val() + '!=' + aminos[nums[counter-1]].code);
				}
			}
			if($(this).hasClass('name')){
				if($(this).val().toLowerCase() == aminos[nums[counter-1]].name){
					console.log($(this).val() + '==' + aminos[nums[counter-1]].name);
					$($(current).find('i.name')[0]).removeClass('fa-close');
					$($(current).find('i.name')[0]).addClass('fa-check');
				} else {
					correct = false;
					$($(current).find('i.name')[0]).removeClass('fa-check');
					$($(current).find('i.name')[0]).addClass('fa-close');
					console.log($(this).val() + '!=' + aminos[nums[counter-1]].name);
				}
			}
		});
		
		if(correct){
			setTimeout(function(){
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
				$('#test').html('' + counter + '/20');
			}, 500);	
		}
	}
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
