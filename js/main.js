$(document).ready(function() {
	main();
});

var aminos = [{
		"structure" : "glycine.svg",
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

function main() {
	 $(function() {
	    $( "#slider" ).slider({
	      range: "min",
	      value: 200,
	      min: 150,
	      max: 700,
	      slide: function( event, ui ) {
	        $( "#size" ).html(ui.value + 'px' );
	        $('img').each(function(){
		    	$(this).height($( "#slider" ).slider( "value" ));
		    });
	      }
	    });
	    $( "#size" ).html($( "#slider" ).slider( "value" )+ 'px' );
	    
	  });
	$(function() {
	   $("#structuresWrap").mousewheel(function(event, delta) {
	      this.scrollLeft -= (delta * 30);
	      event.preventDefault();
	   });
	});
	
	var numbers = [];
	var counter = 1;
	for(var i = 0; i < aminos.length; i++){
		numbers.push(i);
	}
	
	var chosenStructure;
	var rand;
	var rands = [0];
	genHTML();
	
	function genHTML(){
		nums = shuffle(numbers);
		var s = '';
		var t = '';
		for(var i = 0; i < nums.length; i++){
			var name = aminos[nums[i]].name;
			var shortName = aminos[nums[i]].short;
			var code = aminos[nums[i]].code;
			var struct = aminos[nums[i]].structure;
			//console.log(name, shortName, code);
			rand = Math.random();
			rands.push(rand);
			s += '<li>';
			if (rand <= (1/4)){
				s += '<img class="givenStruct" id="' + struct.slice(0,-4) + 'Svg' + '"src="svg/' + struct + '"></img>';
				s += '<input class="name" type="text" value="" placeholder="name"></input><i class="name fa"></i> <br>';
				s += '<input class="short" type="text" value="" placeholder="shortName"></input><i class="short fa"></i><i class="short fa"></i> <br>';
				s += '<input class="code" type="text" value="" placeholder="code"></input><i class="code fa"></i> <br>';
			} else if (rand <= (2/4)){
				s += '<input class="name" type="text" value="" placeholder="name"></input><i class="name fa"></i> <br>';
				s += '<input class="short" type="text" value="' + shortName + '"></input><i class="short fa"></i> <br>';
				s += '<input class="code" type="text" value="" placeholder="code"></input><i class="code fa"></i> <br>';
			} else if (rand <= (3/4)){
				s += '<input class="name" type="text" value="" placeholder="name"></input><i class="name fa"></i> <br>';
				s += '<input class="short" type="text" value="" placeholder="shortName"></input><i class="short fa"></i> <br>';
				s += '<input class="code" type="text" value="' + code + '"></input><i class="code fa"></i> <br>';
			} else {
				s += '<input class="name" type="text" value="" placeholder="name"></input><i class="name fa"></i> <br>';
				s += '<input class="short" type="text" value="" placeholder="shortName"></input><i class="short fa"></i> <br>';
				s += '<input class="code" type="text" value="' + code + '"></input><i class="code fa"></i> <br>';
			}
			
			s += '<button id="nextButton" type="button" class="btn btn-success"><a href=# id="next">Next</a><a href=# id="restart">Restart</a></button>';
			s += '<h3 style="margin:0;"><span id="counter" class="label label-default"></span></h3>';
			s += '<div class="clear"></div>';
			s += '</li>';
		}
		
		var numbers2 = [];
		for(var i = 0; i < aminos.length; i++){
			numbers2.push(i);
		}
		var nums2 = shuffle(numbers2);
		
		if(rands[counter] > (1/4)){
			for(var i = 0; i < nums2.length; i++){
				if (i == nums2.length - 1){
					t += '<li class="last"><img id="' + aminos[nums2[i]].structure.slice(0,-4) + 'Svg' + '"src="svg/' + aminos[nums2[i]].structure + '"></img></li>';
				} else {
					t += '<li><img id="' + aminos[nums2[i]].structure.slice(0,-4) + 'Svg' + '"src="svg/' + aminos[nums2[i]].structure + '"></img></li>';
				}
			}
		}
		t += '<div class="clear"></div>';
		
		$('#forms').html(s);
		$('#structures').html(t);
		$('#counter').html('' + counter + '/20');
	}
	
	$('#nextButton').click(function(){
		clicked();
	});
	$('input').keypress(function (e) {
	  if (e.which == 13) {
	    clicked();
	    return false;
	  }
	});
	console.log(counter);
	console.log(rands[counter]);
	if (rands[counter] > (1/4)){
		chosenStructure = 'null';
		$('#structures img').click(function(){
			console.log($(this)[0]);
			$('#structures img').each(function(){
				$(this).removeClass('chosen');
			});
			$(this).addClass('chosen');
			var u = $($(this)[0]).attr('src').slice(4,-4);
			chosenStructure = u;
			$('#testName').html(u);
		});
	}
	
	function clicked(){
		var correct = true;
		var current = $('#myUl').find('li')[counter-1];
		if (rands[counter] <= (1/4)){
			chosenStructure = $($(current).find('.givenStruct')[0]).attr('src').slice(4,-4);
		}
		console.log(aminos[nums[counter-1]].name, aminos[nums[counter-1]].short, aminos[nums[counter-1]].code);
		if(chosenStructure == aminos[nums[counter-1]].name){
			console.log(chosenStructure + '==' + aminos[nums[counter-1]].name);
			$('#structures img').each(function(){
				$(this).removeClass('correct');
			});
			$('#structures img').each(function(){
				$(this).removeClass('wrong');
			});
			$($('#' + chosenStructure + 'Svg')[0]).addClass('correct');
		} else {
			correct = false;
			var id = '#' + chosenStructure + '.svg';
			console.log($('#' + chosenStructure + 'Svg')[0]);
			$('#structures img').each(function(){
				$(this).removeClass('wrong');
			});
			$('#structures img').each(function(){
				$(this).removeClass('correct');
			});
			$($('#' + chosenStructure + 'Svg')[0]).addClass('wrong');
			//$(id).css({'border':'2px solid red'});
			console.log(chosenStructure + '!=' + aminos[nums[counter-1]].name);
		}
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
					$($(current).find('i.short')[0]).css({
						'transform' : 'scale(1.5,1.5)'
					});
					setTimeout(function(){
						$($(current).find('i.short')[0]).css({
							'transform' : 'scale(1,1)'
						});
					}, 500);
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
					$($(current).find('i.code')[0]).css({
						'transform' : 'scale(1.5,1.5)'
					});
					setTimeout(function(){
						$($(current).find('i.code')[0]).css({
							'transform' : 'scale(1,1)'
						});
					}, 500);
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
					$($(current).find('i.name')[0]).css({
						'transform' : 'scale(1.5,1.5)'
					});
					setTimeout(function(){
						$($(current).find('i.name')[0]).css({
							'transform' : 'scale(1,1)'
						});
					}, 500);
					console.log($(this).val() + '!=' + aminos[nums[counter-1]].name);
				}
			}
		});
		
		if(correct){
			setTimeout(function(){
				$('#forms').css({
					'margin-left': '-' + counter*200 + 'px'
				});
				$('#structures img').each(function(){
					$(this).removeClass('correct');
				});
				$('#structures img').each(function(){
					$(this).removeClass('wrong');
				});
				$('#structures img').each(function(){
					$(this).removeClass('chosen');
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
				if (rands[counter] > (1/4)){
					chosenStructure = 'null';
					$('#structures img').click(function(){
						console.log($(this)[0]);
						$('#structures img').each(function(){
							$(this).removeClass('chosen');
						});
						$(this).addClass('chosen');
						var u = $($(this)[0]).attr('src').slice(4,-4);
						chosenStructure = u;
						$('#testName').html(u);
					});
				}
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