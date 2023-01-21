const ages = [12, 14, 17, 21];
const ages2 = [15, 11];
const ages3 = [10, 18];
//old method
const allAges = ages.concat(ages2);
const allAges2 = ages.concat(ages2).concat([5]).concat(ages3);
console.log(allAges);
console.log(allAges2);

const allAges3 = [ages, ages2, 7, ages3];
console.log(allAges3);


//threedots method - array splits out
const allAges4 = [...ages, ...ages2, 7, ...ages3];
console.log(allAges4);

//max using threedots
const business = 750;
const minister = 450;
const sochib = 250;
//const maximum = Math.max(business, minister, sochib);
const takaPoisa = [850, 450, 250]; //array
const maximum = Math.max(...takaPoisa);
console.log(maximum);