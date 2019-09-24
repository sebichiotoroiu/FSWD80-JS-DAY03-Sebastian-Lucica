var grades = [76, 85, 65, 93, 81];
var total = 0;
for( var i = 0; i < grades.lenght; i++) {
	total += grades[i];
}

	var avg = total / grades.length;
	
	console.log(avg);

	avg = 80

 if (avg >= 90) {
 	console.log("A");
 }

	else if (avg >= 80) {
		console.log("B");
	}

		else if (avg >= 70) {
			console.log("C");
		}

			else if (avg >= 60) {
				console.log("D");
			}

				else {
					console.log("E");
				}