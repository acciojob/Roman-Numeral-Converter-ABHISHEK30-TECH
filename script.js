function convertToRoman(num) {
  	const arr = [
      0:['M',1000],
		['CM',900],
      1:['D', 500],
		['CD',400],
      2:['C', 100], 
		['XC',90],
      3:['L', 50], 
		['XL',40],
      4:['X', 10], 
		['IX',9],
      5:['V', 5], 
		['IV',4],
      6:['I', 1]
    ];

  //your code here
	let roman="";
	for(let i=0;i<romanNum.length,i++){
		while (num>romanNum[i].value) {
			roman+=romanNum[i].num;
			num-=romanNum[i].value;
		}
	}
	return roman;
}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
