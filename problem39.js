/*Project Euler: Problem 39: Integer right triangles
If p is the perimeter of a right angle triangle with integral length sides, {a,b,c}, there are exactly three solutions for p = 120.

{20,48,52}, {24,45,51}, {30,40,50}

For which value of p ≤ n, is the number of solutions maximized?


*/

function intRightTriangles(n) {
	var tmax=0;
	var pmax=0;
	for (var p=Math.trunc(n/4)*2; p<n; p+=2){
		var t=0;
		for (var a=2; a<Math.ceil(p/3.4142)+1; a++) {
			if ( p*(p-2*a) % (2*(p-a)) == 0 ){
				t+=1;
				if (t>=tmax){
					tmax=t;
					pmax=p;
				}
			}
		}
	}
	return tmax;
}
  


console.log(intRightTriangles(500));