/*
Tu dois écrire une fonction permettant de déterminer si une année est bissextile.
Elle renverra true si l'année passée en paramêtre est bissextile et false si ce n'est pas le cas.
Pour rappel, une année est bissextile:
 - si elle est divisible par 4 sans être divisible par 100,
 ou
 - si elle est divisible par 400.
Les années 2004, 2016 et 2020 sont bissextiles.
Autre rappel: Tu dois utiliser l'opérateur modulo (%) pour vérifier si un nombre est divisible par un autre.
*/

//   function isLeapYear(year) {
//   	 year%400 ? 'bissextiles' : 'non bissextiles'
//   	if ((year % 4 === 0 && year % 100 != 0) || year%400 === 0){
//   		return true
//   	}else {
//   		return false
//   	}
//   }



//   function isLeapYear(year) {
//  	 return (year % 4 === 0 && year % 100 != 0) || year%400 === 0 ? true : false
//   }
//   console.log(isLeapYear(2010))
//   console.log(isLeapYear(2005))
//   console.log(isLeapYear(2000))
//   console.log(isLeapYear(2020))

  const isLeapYear = (year) => {
	 return (year % 4 === 0 && year % 100 != 0) || year%400 === 0 ? true : false
  }
 console.log(isLeapYear(2010))
 console.log(isLeapYear(2005))
 console.log(isLeapYear(2000))
 console.log(isLeapYear(2020))