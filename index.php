<?php include 'header.php'; ?>
	<body>
		<div class="container" ng-controller="SimpleController">
			<h3>Amino Acids Game by <a href="https://twitter.com/thejmazz" target="_blank">@thejmazz</a> | View <a href="https://github.com/thejmazz/aminoacidsgame" target="_blank">source on github</a> | <a href="game.php">game</a></h3>
			
			Sort by: 
			<a href=# ng-click="predicate=''">unsorted</a>
			<a href=# ng-click="predicate='name'">name</a>
			<a href=# ng-click="predicate='short'">short</a>
			<a href=# ng-click="predicate='code'">code</a> <br>
			<span>Set image height:</span> <span id="size"></span>
			<div id="slider"></div>
			<ul id="aalist">
				<li ng-repeat="amino in aminos | orderBy:predicate">
					<div class="imageContainer">
						<img src="{{ 'svg/' + amino.name + '.svg'}}"></img>
					</div> <br>
					<span>Name: </span> <span class="val" style="text-transform: capitalize;">{{amino.name}}</span> <br>
 					<span>Short: </span> <span class="val" style="text-transform: capitalize;">{{amino.short}}</span> <br> 
 					<span>Code: </span> <span class="val">{{amino.code | uppercase}}</span> 
				</li>
			</ul>
		</div>
	</body>
</html>