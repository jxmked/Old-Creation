//Cases of last and first
function CLF(str, val){
	if(str.length == 0){
		return "";
	} //end if
	
	const ucfirst = function(str){
		return str[0].toUpperCase() + str.substr(1);
	}; //End function
	const lcfirst = function(str){
		return str[0].toLowerCase() + str.substr(1);
	}; //End function
	const lclast = function(str){
		return str.substr(0, (str.length - 1)) + str.substr(-1).toLowerCase();
	} //End function
	const uclast = function(str){
		return str.substr(0, (str.length - 1)) + str.substr(-1).toUpperCase();
	} //End function
	
	var split = str.split(" ");
	
	switch((val) ? val : $("#CLF").attr("data")){
		case "0":
			return str; 
			break; 

		case "1": //UF , Uppercase first character
			if(split == 1){
				return ucfirst(str);
			} //End if
			
			return split.map(function(index){
				return ucfirst(index);
			}).join(" "); //End map
			break;
		
		case "2": //LF , Lowercase first character
			if(split == 1){
				return lcfirst(str);
			} //end If
			
			return split.map(function(index){
				return lcfirst(index);
			}).join(" "); //End map
			break; 
		
		case "3": //UL , Uppercase Last character
			if(split == 1){
				return uclast(str);
			} //End if
			
			return split.map(function(index){
				return uclast(index);
			}).join(" "); //End map
			break; 
		
		case "4": // LL , Lowercase Last character
			if(split == 1){
				return lclast(str);
			} //End if
			
			return split.map(function(index){
				return lclast(index);
			}).join(" "); //end map
			break; 
		case "5": //ULF, Uppercase last and first character
			if(split == 1){
				str = ucfirst(str);
				return uclast(str);
			} //End if
			
			return split.map(function(index){
				index = ucfirst(index);
				return uclast(index);
			}).join(" "); //End map
			break; 
		case "6": //LLF , Lowercase Last and First character
			if(split == 1){
				str = lcfirst(str);
				return lclast(str);
			} //End if
			
			return split.map(function(index){
				index = lcfirst(index);
				return lclast(index);
			}).join(" "); //End map
			break;
		
		case "7": //UFLL , Uppercase First and Lowercase Last character
			if(split == 1){
				str = ucfirst(str);
				return lclast(str);
			} //End if
			
			return split.map(function(index){
				index = ucfirst(index);
				return lclast(index);
			}).join(" "); //end map
			break; 
		case "8": //LFUL , Lowercase first and Uppercase last
			if(split == 1){
				str = lcfirst(str);
				return uclast(str);
			} //End if
			
			return split.map(function(index){
				index = lcfirst(index);
				return uclast(index);
			}).join(" "); //End Map
			break; 
	} //End Switch
} // End CLF

//Shuffle characters and words 
function SHC(str, val){
	if(str.length == 0){
		return "";
	} //End if
	
	const strPlay = function(str){
		var split = str.split("");;
		return str.split("").map(function(char){
			return split.splice((Math.floor(Math.random() * split.length) - 1), 1);
		}); //End Map
	}; //End strPlay function
	
	var tmp = [];;
	var split = str.split(" ");
				
	switch((val) ? val : $("#SHC").attr("data")){
		case "0": //Off (Incase we need something to do if it is off)
			return str;
			break; //End 0, Off
			
		case "1": //SCES , Shuffle Characters Except Spaces
			var split = str.split(" ");
			
			//Check for spaces...
			if(split.length == 1){
				//If no spaces then shuffle the whole string
				return strPlay(str).join("");
			} //End if
			
			//Save the indexes of spaces...
			var wCount = [];
			
			for(var i in str){
				if(str.charAt(i) == " "){
					wCount.push(i);
				} ////End if
			} //End for Loop
			
			//End Get the spaces
			
			//Since we splitted all spaces, join those words and shuffle it
			var rand = strPlay(split.join(""));
			var pos = 0;
			
			//Include all spaces we save to the string
			for(var index in rand){
				if((wCount[pos] - pos) == index){
					tmp.push(" ");
					pos++;
				} //End if
				tmp.push(rand[index]);
			} // end loop
			
			return tmp.join("");
			break;
			
		case "2": //SAC , Shuffle all Characters
			return strPlay(str).join("");
			break; 
		
		case "3": //SCW , Shuffle all characterss from Words
			if(split.length == 1){
				return strPlay(str).join("");
			} //End If
			
			// Pass all words that separated by spaces then shuffle their characters
			return split.map(function(index){
				return strPlay(index).join("");
			}).join(" "); //End Map
			break;
		
		case "4": //SAW , Shuffle all words		
			if(split.length == 1){
				return str;
			} //End if
			
			return str.split(" ").map(function(word){
				return split.splice((Math.floor(Math.random() * split.length) - 1), 1);
			}).join(" "); //End Map
			
			break; 
	} //End Switch
} //End SHC Function

//Reverse String or Word
function RVS(str, val){
	if(str.length == 0){
		return "";
	} //End if
	
	switch((val) ? val : $("#RVS").attr("data")){
		case "0": //Off (Incase we need something to do if it is off)
			return str;
			break; //End 0, Off
			
		case "1": //RWS , Reverse whole string
			return str.split("").reverse().join("");
			break;
			
		case "2": //RWW , Reverse all word
			var split = str.split(" ");
			
			if(split.length == 1){
				return str;
			} // End If
			
			return split.reverse().join(" ");
			break; 
	} //End Switch
} //End RVS

//Translate character to Something
function TSC(str, val){

	if(str.length == 0){
		return "";
	} //End If 
	
	switch((val) ? val : $("#TSC").attr("data")){
		case "0": //Off (Incase we need something to do if it is off)
			return str;
			break; 
		case "1": //TSC Translate Character to something
			var tsc = getTSC();
			return str.split("").map(function(char){
				return (typeof tsc[char] == "undefined") ? char : tsc[char];
			}).join("");
			break;
	} //End switch
} //end of TSC function. Translate character to something...

//Count How many characters will gonna use
function CNT(str, val){
	//I don't what will happen if we pass an empty string
	//So I just prevent it
	if(str.length <= 0){
		return "";
	} //End If 
	
	//Count Each character how many times it use
	const count = function(arr){
		var res = [];
		
		//I don't know how to explain this but...
		//I know how its run =)
		arr.map(function(char){
			var lever = false;
			for(var index in res){		
				if(char == res[index]["char"]){
					res[index]["count"] = res[index]["count"] + 1;
					lever = true;
					break; 
				} //End If
			} //End for loop
				
			//Prevent Adding new Object If already existing
			if(!lever){
				res.push({"char" : char, "count" : 1});
			} //End if
		}); //End Map
		return res;
	}; //End Count Function
	
	var res;
	switch((val) ? val : $("#CNT").attr("data")){
		case "0": //Off (Incase we need something to do if it is off)
			return str;
			break; 
		case "1": //Count Count all Each Character
			res = count(str.split(""));
			break;
		case "2": //LC , Lowercase Whole string
			res = count(str.toUpperCase().split(""));
			break; //End Lowercase Whole string
	} //End switch
	
	var arr = [];
	
	for(var index in res){
		arr.push(res[index]["char"] + " => " + res[index]["count"]);
	} //End For loop
	
	return arr.join("\n"); // '\n' is a linebreak
} //End CNT Function

//Randomize the Cases each Character
function RMD(str, val){
	if(str.length <= 0){
		return "";
	} //End If 
	
	switch((val) ? val : $("#RMD").attr("data")){
		case "0": //Off (Incase we need something to do if it is off)
			return str;
			break; 
		case "1": //RmC Randomize Cases Each character
			return str.split("").map(function(char){
				if((Math.floor(Math.random()* 10)) > 5){
					return char.toUpperCase();
				} return char.toLowerCase();
			}).join(""); //End Map
			break; //End RmC
	} //End Switch
} //End RMD function

//Remove Spaces or Add Spaces Between character
function RSS(str, val){
	if(str.length <= 0){
		return "";
	} //End If 
	
	switch((val) ? val : $("#RSS").attr("data")){
		case "0": //Off (Incase we need something to do if it is off)
			return str;
			break; 
		case "1": //RS Remove Spaces
			return str.split(" ").join("");
			break; //End RS
		case "2": //SBC //Spaces Between Characters
			var a = str.split(" ");
			console.log(a);
			//Remove spaces first
			if(a.length > 1){
				str = a.join("");
			} //End If

			return str.split("").join(" ");
			break; //End SBC
	} //End Switch
} //End RSS function

//Uppercase or Lowercase the whole string
function ULA(str, val){
	if(str.length <= 0){
		return "";
	} //End If 
	
	//Upper or Lower case all characters
	switch((val) ? val : $("#ULA").attr("data")){
		case "0": //Off (Incase we need something to do if it is off)
			return str;
			break; 
		case "1": //UC //Uppercase Whole string
			return str.toUpperCase();
			break;
		case "2": //LC , Lowercase Whole string
			return str.toLowerCase();
			break; //End Lowercase Whole string
	} //End switch
} //End UL Function


//Upper/Lower the First char and Vice-versa the rest
function ULF(str, val){
	if(str.length <= 0){
		return "";
	} //End If 
	
	const Up = function(val){
		//Uppercase the First char and the rest will gonna lowercase
		return val[0].toUpperCase() + val.substr(1).toLowerCase();
	}; //End Up Function
	
	const Low = function(val){
		//Opposite of Up Function
		return val[0].toLowerCase() + val.substr(1).toUpperCase();
	}; //End Low function
	
	var a = str.split(" "); //If spaces is existing,  break it and do the function each words
	
	switch((val) ? val : $("#ULF").attr("data")){
		case "0": //Off (Incase we need something to do if it is off)
			return str;
			break; //End 0, Off
			
		case "1": //LCF , Lowercase First char and Upper the rest
			if(a.length > 1){
				return a.map(function(word){
					return Low(word);
				}).join(" "); //End Map
			} //End if
			return Low(str);
			break; //End 1, LCF
			
		case "2": //ULF, Uppercase first char and Lower the rest
			if(a.length > 1){
				return a.map(function(word){
					return Up(word);
				}).join(" "); //End Map
			} //End if
			return Up(str);
			break; //End 2, ULF
	} //End Switch
} //End ULF Function