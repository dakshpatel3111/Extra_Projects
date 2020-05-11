//Name : Daksh Patel Date:5/6/2019 
function ctf(value){

	value  = parseFloat(value);
	document.getElementById('output').innerHTML = ((value*9/5) + 32).toFixed(2);

}
function ctf2(value){
    
	value  = parseFloat(value);
	document.getElementById('output').innerHTML = ((value - 32)*5/9).toFixed(2);

}

function feet(value) {
	
	document.getElementById('output').innerHTML = (value * 3.2808).toFixed(2) ;
	
}

function feet2(value) {
	
	document.getElementById('output').innerHTML = (value / 3.2808).toFixed(2) ;
}

function itc(value) {
    value = parseFloat(value);
    document.getElementById('output').innerHTML = (value * 2.54).toFixed(2);
	
}
function itc2(value) {
    value = parseFloat(value);
    document.getElementById('output').innerHTML = (value / 2.54).toFixed(2);
	
}

function pound(value) {

	value = parseInt(value);
	document.getElementById('output').innerHTML = (value * 2.20).toFixed(2);
}

function pound2(value) {

	value = parseInt(value);
	document.getElementById('output').innerHTML = (value / 2.20).toFixed(2);
}
