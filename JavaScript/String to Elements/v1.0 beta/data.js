var elements = {
	"H" 	: "Hydrogen",	"He" 	: "Helium",		"Li" 	: "Lithium",
	"Be" 	: "Beryllium",	"B" 	: "Boron",		"C" 	: "Carbon",
	"N" 	: "Nitrogen",	"O" 	: "Oxygen",		"F" 	: "Fluorine",
	"Ne" 	: "Neon",		"Na" 	: "Sodium",		"Mg" 	: "Magnesium",
	"Al" 	: "Aluminum",	"Si" 	: "Silicon",	"P" 	: "Phosphorus",
	"S" 	: "Sulfur",		"Cl" 	: "Chlorine",	"Ar" 	: "Argon",
	"K" 	: "Potassium",	"Ca" 	: "Calcium",	"Sc" 	: "Scandium",
	"Ti" 	: "Titanium",	"V" 	: "Vanadium",	"Cr" 	: "Chromium",
	"Mn" 	: "Manganese",	"Fe" 	: "Iron",		"Co" 	: "Cobalt",
	"Ni" 	: "Nickel",		"Cu" 	: "Copper",		"Zn" 	: "Zinc",
	"Ga" 	: "Gallium",	"Ge" 	: "Germanium",	"As" 	: "Arsenic",
	"Se" 	: "Selenium",	"Br" 	: "Bromine",	"Kr" 	: "Krypton",
	"Rb" 	: "Rubidium",	"Sr" 	: "Strontium",	"Y" 	: "Ytrrium",
	"Zr" 	: "Zirconium",	"Nb" 	: "Niobium",	"Mo" 	: "Molybdenum",
	"Tc" 	: "Technetium",	"Ru" 	: "Ruthenium",	"Rh" 	: "Rhodium",
	"Pd" 	: "Palladium",	"Ag" 	: "Silver",		"Cd" 	: "Cadmium",
	"In" 	: "Indium",		"Sn" 	: "Tin",		"Sb" 	: "Antimony",
	"Te" 	: "Tellurium",	"I" 	: "Iodine",		"Xe" 	: "Xenon",
	"Cs" 	: "Cesium",		"Ba" 	: "Barium",		"Hf" 	: "Halfnium",
	"Ta" 	: "Tantalum",	"W" 	: "Tungsten",	"Re" 	: "Rhenium",
	"Os" 	: "Osmium",		"Ir" 	: "Iridium",	"Pt" 	: "Platinum",
	"Au" 	: "Gold",		"Hg" 	: "Mercury",	"Tl" 	: "Thallum",
	"Pb" 	: "Lead",		"Bi" 	: "Bismuth",	"Po" 	: "Polonium",
	"At" 	: "Astatine",	"Rn" 	: "Radon",		"Fr" 	: "Francium",
	"Ra" 	: "Radium",		"Rf" 	: "Rutherfordium","Db" 	: "Dubnium",
	"Sg" 	: "Seaborgium",	"Bh" 	: "Bohrium",	"Hs" 	: "Hassium",
	"Mt" 	: "Meitnerium",	"Ds" 	: "Darmstadtium","Rg" 	: "Roentgenium",
	"Cn" 	: "Copernicium","Uut" 	: "Ununtrium",	"Fl" 	: "Flerovium",
	"Uup" 	: "Ununpentium","Lv" 	: "Livermorium","Uus" 	: "Ununseptium",
	"Uuo" 	: "Ununoctium",	"La" 	: "Lanthanum",	"Ce" 	: "Cerium",
	"Pr" 	: "Praseodymium","Nd" 	: "Neodymium",	"Pm" 	: "Promethium",
	"Sm" 	: "Samarium",	"Eu" 	: "Europium",	"Gd" 	: "Gadolinium",
	"Tb" 	: "Terbium",	"Dy" 	: "Dysprosium",	"Ho" 	: "Holmium",
	"Er" 	: "Erbium",		"Tm" 	: "Thulium",	"Yb" 	: "Ytterbium",
	"Lu" 	: "Lutetium",	"Ac" 	: "Actinium",	"Th" 	: "Thorium",
	"Pa" 	: "Protactinium","U" 	: "Uranium",	"Np" 	: "Neptunium",
	"Pu" 	: "Plutonium",	"Am" 	: "Americium",	"Cm" 	: "Curium",
	"Bk" 	: "Berkelium",	"Cf" 	: "Californium","Es" 	: "Einsteinium",
	"Fm" 	: "Fermium",	"Md" 	: "Mendelevium","No" 	: "Nobelium",
	"Lr" 	: "Lawrencium",	"Nh" 	: "Nihonium", 	"Mc" 	: "Moscovium",
	"Ts" 	: "Tennesine", 	"Og" 	: "Oganesson"
};


/**/

//Instead of writing all Element symbols
var temp = [];
function getData(){
	if(temp.length != 0) return temp;
	
	for(var index in elements){
		temp.push(index.toLowerCase());
	}
	
	return temp;
}

function getElement(symbol){
	return (symbol) ? elements[symbol] : elements; 
}