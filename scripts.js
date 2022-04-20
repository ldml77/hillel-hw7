'use strict';
function CreateCalculator (base) {
	return {
		add: (b)=>(base +=b),
		sub: (b)=>(base -=b),
		mult: (b)=>(base *=b),
		div: (b)=>(base /=b),
		set: (b)=>(base =b),
		get: ()=>base,
	};
}
const calc=CreateCalculator(100);
console.log (calc.add(50));//150
console.log (calc.add(600));//750
calc.sub (500);//250
calc.mult(2);//500
calc.div(100);//5
calc.set(400);
calc.add(100);//500
console.log(calc.get());//500