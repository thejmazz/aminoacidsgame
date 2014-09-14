<?php include 'header.php'; ?>
	<body>
		<div class="container">
			<a href="index.php">home</a><br>
			<span>Set image height:</span> <span id="size"></span>
			<div id="slider"></div>
			<ul id="structuresWrap">
				<div id="structures">
					
				</div>
			</ul>
			<ul id="myUl">
				<div id="forms"> 
					<li>
						<input class="name" type="text" value="name"></input> <br>
						<input class="short" type="text" value="short"></input> <br>
						<input class="code" type="text" value="code"></input> <br>
					</li>
					<button type="button" class="btn btn-success"><a href=# id="next">Next<a href=# id="restart">Restart</a></a></button>
					<br><span id="counter" class="label label-default"></span>
				</div>
			</ul>
			
			<!-- uncomment this if you want to cheat lol -->
			<!--<div id="testName"></div>-->
		</div>
	</body>
</html>