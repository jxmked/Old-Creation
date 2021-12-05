/***** For Messages *****/
var msgs = {
	"ULA"	: {
		"UL Off"	: "Default Cases",
		"UC"		: "Uppercase all characters",
		"LC"		: "Lowercase all characters"
	},
	"RSS"	: {
		"DS Off"	: "Default Spacing",
		"RS"		: "Remove Spacing",
		"SBC"		: "Spaces between characters"
	},
	"ULF"	: {
		"DC Off"	: "Default Cases",
		"LCF"		: "Lower first character and Upper the rest",
		"UCF"		: "Upper first character and Lower the rest"
	},
	"CNT"	: {
		"Cnt Off"	: "Count All Each Character(s) is Off",
		"Count"		: "Count All Each Character(s) is On",
		"CIn" : "Count All Each Character(s) (Case Insensitive)"
	},
	"TSC"	: {
		"TSC Off"	: "Translate All Character to Special is OFF",
		"TSC"		: "Translate All Character to Special is On"
	
	},
	"RMD"	: {
		"Rand Off"	: "Random Cases is Off",
		"RmC"		: "Randomize the case of each Character"
	},
	"CLF"	: {
		"CLF Off"	: "Cases of Last/First is off",
		"UF"		: "Uppercase First character from each word",
		"LF"		: "Lowercase First character from each word",
		"UL"		: "Uppercase Last character from each word",
		"LL"		: "Lowercase Last character from each word",
		"ULF"		: "Uppercase First and Last Character from each word",
		"LLF"		: "Lowercase First and Last Character from each word",
		"UFLL"		: "Upper First and Lower case Last Character from each word",
		"LFUL"		: "Lower First and Upper case Last Character from each word"
	},
	"SHC"	: {
		"SHC Off"	: "Shuffle is Off",
		"SCES"		: "Shuffle all Characters (Except Spaces)",
		"SAC"		: "Shuffle all characters (Nothing Excepted)",
		"SCW"		: "Shuffle all characters from words",
		"SAW"		: "Shuffle all words"
	},
	"RVS"	: { 
		"RVS Off"	: "Reverse is Off",
		"RWS"		: "Reverse whole string",
		"RWW"		: "Reverse whole word"
	}
};


function getMsgs(){
	return msgs;
}


/***** FOR TRANSLATE TO SPECIAL CHARACTER *****/
/***
	Character to be match : Character to replace
	Note: Case sensitive
***/


var tsc = {
	"a" : "ä", "A" : "Ä",
	"b" : "6", "B" : "8",
	"c" : "€", "C" : "ç",
	"e" : "є", "E" : "є",
	"f" : "£", "F" : "£",
	"g" : "9", "G" : "9",
	"h" : "4", "H" : "4",
	"i" : "ι", "I" : "ι",
	"j" : "J", "J" : "J",
	"k" : "к", "K" : "к",
	"l" : "ℓ", "L" : "ℓ",
	"m" : "m", "M" : "M",
	"n" : "и", "N" : "и",
	"o" : "Ø", "O" : "0",
	"p" : "p", "P" : "P",
	"q" : "&", "Q" : "&",
	"r" : "я", "R" : "я",
	"s" : "ѕ", "S" : "ѕ",
	"t" : "т", "T" : "т",
	"u" : "ü", "U" : "Ü",
	"v" : "▼", "V" : "▼",
	"w" : "₩", "W" : "₩",
	"x" : "×", "X" : "×",
	"y" : "ÿ", "Y" : "Ÿ",
	"z" : "2", "Z" : "2",
	" " : "_", "." : "*"
};
function getTSC(){
	return tsc;
}