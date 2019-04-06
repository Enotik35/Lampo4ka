
const appl = document.getElementById('answer');

function texting(ipt) {		// new function for texting in global chat
			var textElem = document.createElement('div');
			textElem.className = "msg "
			textElem.innerHTML = ipt;
			appl.appendChild(textElem);
};

const newlam = document.getElementById('newlamp')
let onclick = 0;
let onsum = -1;

function newlamp(){
	onclick++;
	var newlampo4ka = document.createElement('input');

	newlampo4ka.className = "inp";
	newlampo4ka.setAttribute('placeholder', "Ведите количество лампочек");
	newlampo4ka.id = "inpt"+onclick+"";

	var newlampo4katwo = document.createElement('input');
	newlampo4katwo.className = "inp";
	newlampo4katwo.setAttribute('placeholder', "Введите номинальную мощность лампочки");
	newlampo4katwo.id = "intp"+onclick+"";

	var br = document.createElement('br');

	newlam.appendChild(newlampo4ka);
	newlam.appendChild(newlampo4katwo);
	newlam.appendChild(br);

	var sum = document.createElement('button');
	sum.id = "suma"+onclick+"";
	sum.className = "but";
	sum.innerHTML = "Посчитать";
	sum.setAttribute('onclick', "calc"+onclick+"()");

	var newla = document.createElement('button');
	newla.className = "but";
	newla.innerHTML = "Добавить другой вид лампочек";
	newla.setAttribute('onclick', "newlamp()");

	var total = document.createElement('button');
	total.className = "but";
	total.innerHTML = "Итого"
	total.setAttribute('onclick', "total()");

	var newdiv = document.createElement('div');

	newlam.appendChild(sum);
	newlam.appendChild(newla);
	newlam.appendChild(total);
	newlam.appendChild(newdiv);

	onsum++;
	retrn(onsum)
};
function total(){
	return;
}

function calculate(x, y){
	console.log(x,y);
	var ipt = x + y;
	return ipt
};

function retrn(l){
	return l;
};
function calc(){
	var lamp = document.getElementById('inpt0').value;
	var watt = document.getElementById('intp0').value;
	texting(calculate(Number(lamp), Number(watt)));
};

function calc1(){
	var lamp = document.getElementById('inpt1').value;
	var watt = document.getElementById('intp1').value;
	texting(calculate(Number(lamp), Number(watt)));	
};

function calc2(){
	var lamp = document.getElementById('inpt2').value;
	var watt = document.getElementById('intp2').value;
	texting(calculate(Number(lamp), Number(watt)));	
};

function calc3(){
	var lamp = document.getElementById('inpt3').value;
	var watt = document.getElementById('intp3').value;
	texting(calculate(Number(lamp), Number(watt)));	
};

function calc4(){
	var lamp = document.getElementById('inpt4').value;
	var watt = document.getElementById('intp4').value;
	texting(calculate(Number(lamp), Number(watt)));	
};

function calc5(){
	var lamp = document.getElementById('inpt5').value;
	var watt = document.getElementById('intp5').value;
	texting(calculate(Number(lamp), Number(watt)));	
};

function calc6(){
	var lamp = document.getElementById('inpt6').value;
	var watt = document.getElementById('intp6').value;
	texting(calculate(Number(lamp), Number(watt)));	
};

function calc7(){
	var lamp = document.getElementById('inpt7').value;
	var watt = document.getElementById('intp7').value;
	texting(calculate(Number(lamp), Number(watt)));	
};
