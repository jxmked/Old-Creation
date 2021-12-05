//RGB value to hex
//x = Int: min 0, max 255
//return Hex string
function toHex(x){
	if((typeof x != "number") || (x < 0 || x > 255)){ return; }
	var hexs = ["0","1","2","3","4","5","6","7",
		"8","9","a","b","c","d","e","f"];
	const core = function(a, b){
		return (a>15)?core((a-16),b+1):hexs[b]+hexs[a];
	}; return core(x, 0);
}

//Math function Sigma
//from = start from, to = To, value = N
//return int
function sigma(from, to, value){
	if( (typeof from != "number") || 
		(typeof to != "number") || 
		(typeof value != "number")){
		return 0;}
	var res = 0, i = from;
	for(i; i <= to; i++){
		res += value * i; 
	} return res;
}

//render For all same class Name 
//Index = target class name , Value = value, insert = (innerHTML, *attributes, etc)
//return void
function renderClass(index, value, insert){
	var classes = document.getElementsByClassName(index);
	for(var i = 0; i < classes.length;  i++){
		classes[i].insert = value;
	}
}

//document.getElementById shortcut
//x = index
//return object
function _id(x){
	return document.getElementById(x);
}

//Php Function count the length of the string
//x = String / Int
//return Int
function strlen(x){
	switch(typeof x){
		case "number":
			return x.toString().length;
		break; 
		case "string":
			return x.length; 
		break; 
	}
}

//Adding Extra Zero from first char
//num = Current Number (Int), length = Length of zero you wanted (Int)
//Return String/Int
function addZero(num, length){
	if(typeof num != "number"){
		return;
	}
	
	var len = num.toString().length; 
	var zlen = parseInt(length - len), res = "";
	
	//repeat object is not available for my
	//js version so...
	for(var i = 0; i < zlen; i++){
		res = res + "0";
	}
	
	return res + num;
}

//Count the value from Object 
//x = object
//return Int length
function count(x){
	var len = 0;
	for(var i in x){ len++; }
	return len;
}

//Append to body 
//x = Value (Mix)
//Return Void 
function println(){
	var args = Array.prototype.slice.call(arguments);
	var elem = document.createElement("pre");
	var br = document.createElement("br");
	elem.appendChild(br);
	elem.appendChild(document.createTextNode(args.join(" : ")));
	document.body.appendChild(elem);
}

function print(){
	var args = Array.prototype.slice.call(arguments);
	var elem = document.createElement("pre");
	elem.appendChild(document.createTextNode(args.join(" : ")));
	document.body.appendChild(elem);
}
//Print on Console
//x = value (mix)
//return void
function logd(){
	var args = Array.prototype.slice.call(arguments);
	console.log(args.join(" : "));
}

function Alert(){
    var args = Array.prototype.slice.call(arguments);
    alert(args.join(" : "));
}

//Html Helpers
function _(index){
	var x = index.substr(1);
	switch(index[0]){
		case "#":
			return document.getElementById(x);
		break; 
		case ".":
			return document.getElementsByClassName(x);
		break; 
	}
	return document.getElementsByTagName(x);
}
function _td(){
	var args = Array.prototype.slice.call(arguments);
	
	var res = [];
	
	for(var i in args){
		var arg = args[i];
		
		if(typeof arg == "object"){
			throw new Exception("Object is not allowed");
			return; 
		}
		
		var td = "<td>" + arg + "</td>";
		res.push(td);
	}
	
	return res.join("");
}

function _tr(){	
	var args = Array.prototype.slice.call(arguments);
	var res = [];
	
	for(var i in args){
		var arg = args[i];
		
		if((arg.indexOf("<td>") == -1) || (typeof arg == "object")){
			throw new Exception("Only fron _td() function can pass through _tr()");
			return; 
		}
		
		var tr = "<tr>" + arg + "</tr>";
		res.push(tr);
	}
	
	return res.join(""); /**/
}


function _table(){
	var args = Array.prototype.slice.call(arguments);
	
	var res = [];
	
	for(var i in args){
		var arg = args[i];		
		
		if((arg.indexOf("<tr>") == -1) || (typeof arg == "object")){
			throw new Exception("Only fron _tr() function can pass through _table()");
			return; 
		}
		
		var tab = "<table>" + arg + "</table>";
		
		res.push(tab);
	}
	return res.join("");;
}

/**PHP FUNCTION**/


function dirname(str){
	str = str.toString();
	
	var len = str.length; 
	var res = "";
	
	for(var i = len; i > 0; i--){
		if(str.charAt(i - 1) == "/"){
			//Since JavaScript don't have a reverse function
			//For String So I did this...
			return str.replace(res.split("").reverse().join(""), "");
		}
		res += str.charAt(i - 1);
	}
}

function ucfirst(str){
	var f = " ";
	var i = 0;
	
	if(str.length == 0 || str == " " || str == null || str == ""){
		return str;
	}
	
	while((f == " " || f == null || f == "")){
		i = i + 1;
		f = str[i]
	}
	
	f = f.toUpperCase();
	return f + str.substr(i + 1);
}


/**Custom Function with PHP FUNCTION**/
function ucnames(str){
	if(typeof str != "string"){
		str = str.toString();
	}

	str = str.toLowerCase();
	
	var arr = str.split(" ");

	if(arr.length > 0){
		var res = [];
		for(var i = 0; i < arr.length;  i++){
			res.push(ucfirst(arr[i]));
		}
		return res.join(" ");
	}
	return ucfirst(str);
}