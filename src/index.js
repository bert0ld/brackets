module.exports = function check(str, bracketsConfig) {
	for (let i = 0; i < bracketsConfig.length;) {
	    bracketSequence = bracketsConfig[i][0] + bracketsConfig[i][1];
	    if (str.includes(bracketSequence)) {
	        str = str.replace(bracketSequence, '');
	        i = 0;
	    } else i ++;
	  }
	if (str === '') 
		return true;
	else 
		return false;
}