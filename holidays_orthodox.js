'use strict';
let thisYear = new Date().getFullYear(); 

function orthodoxEaster(year)
{ 	//Check full Moon relation by Gauss method
	let a = (19 * (year % 19) + 15) % 30; 
    let b = ((2*(year % 4) + 4*(year % 7) + 6*a + 6) % 7);
    if(a + b > 10)
        return new Date(year, 3, a + b - 9 + 13);
    else
        return new Date(year, 2, 22 + a + b + 13);
}
// object witd dates to Orthodox Easter
let hodPrazdnik={
    'Масленица':-56,
    'Вербное воскресенье':-7,
    'Пасха': 0,
    'Радоница': 9,
    'Святки': 43,
    'Троица': 50,
    'Красная горка': 9
};
function showDate (name='Пасха',year=thisYear){
    const pasha = orthodoxEaster(year);
    if (name in hodPrazdnik === false) 
        alert ("Check the name of the Holyday");
    let numberDays = hodPrazdnik[name];
    let praznikDate = new Date( pasha.setDate( pasha.getDate() + numberDays ) );
    return praznikDate;
}
var options = { year: 'numeric', month: 'long', day: 'numeric' }; //try delete year

document.write( showDate('Пасха') . toLocaleDateString('ru',options) ); // Used inline document.write() for the Search Engines. if doc.. is embedded within an inline HTML <script> tag, then it will not call document.open()


