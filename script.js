function insert(num) {
	document.getElementById("result").value += num;
}

function clearResult() {
	document.getElementById("result").value = "";
}

function calculate() {
	let result = document.getElementById("result").value;
	let finalResult = eval(result);
	document.getElementById("result").value = finalResult;
}