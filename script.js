
// Abdurahmanov Refat
// 04.04.2019
// Site for calculating the benefit of replacing incandescent bulbs to light-emitting diode lamps




const appl = document.getElementById('answer');	//variable for creating answer for request

function texting(ipt) {		// new function for texting in global chat
			var textElem = document.createElement('div');	//create element div
			textElem.className = "msg " 
			textElem.innerHTML = ipt;
			appl.appendChild(textElem);
};

const newlam = document.getElementById('newlamp')
let onclick = 0;
let onsum = -1;

function newlamp(){
	onclick++;		//the variable can id and class and function name
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
	texting(totalprice)
}

function calculate(n, y){
	const d = 50;
	const w = 2.5;
	switch (y){
		case 20:
		var price = 5;
		var wdiod = 2.5;
		var diodprice = 50;
		var ipt = inerCalc(n, y, price, wdiod, diodprice, d, w); 
		break;
		case 40:
		var price = 10;
		var wdiod = 4.5;
		var diodprice = 70;
		var ipt = inerCalc(n, y, price, wdiod, diodprice, d, w);
		break;
		case 60:
		var price = 15;
		var wdiod = 9;
		var diodprice = 100;
		var ipt = inerCalc(n, y, price, wdiod, diodprice, d, w);
		break;
		case 75:
		var price = 20;
		var wdiod = 11;
		var diodprice = 120;
		var ipt = inerCalc(n, y, price, wdiod, diodprice, d, w);
		break;
		case 100:
		var price = 30;
		var wdiod = 13.5;
		var diodprice = 150;
		var ipt = inerCalc(n, y, price, wdiod, diodprice, d, w);
		break;
		case 150:
		var price = 40;
		var wdiod = 19;
		var diodprice = 170;
		var ipt = inerCalc(n, y, price, wdiod, diodprice, d, w);
		break;
		case 200:
		var price = 50;
		var wdiod = 27.5;
		var diodprice = 200;
		var ipt = inerCalc(n, y, price, wdiod, diodprice, d, w);
		break;

	};
	totalprice = totalprice + ipt;
	return ipt;
};
 let totalprice = 0;
function inerCalc(n,y,price,wdiod,diodprice,d,w){
	var k = n * y * d * w;
	console.log(k);
	var l = n * wdiod * w;
	console.log(l);
	var r = n * price * d;
	console.log(r);
	var z = n * diodprice;
	console.log(z);
	var p = k + r;
	console.log(p);
	var g = l + z;
	console.log(g);
	var u = p - g;
	console.log(u);
	return u;
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
