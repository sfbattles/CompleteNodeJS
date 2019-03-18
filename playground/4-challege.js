//mport { setTimeout } from "timers";

const timeout = 2000;

// setTimeout(() => {
//    console.log('two second are up');
// }, timeout);

// const names = ['andrew', 'jen', 'richard' ];

// const shortnames = names.filter((names) => {
//   return names.length <= 4;
// });

// const geocode = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             latitude: 0,
//             longitude: 0
//         };

//         callback(data); 
//     }, 2000);
// };

// geocode('quakertown',(latLongData) => {
//   console.log(latLongData);
// });

const add = (a,b,callback) => {
 setTimeout(() => {
   const sum = a + b; 
   callback(sum);
}, timeout);
};

add(1,4,(sum) => {
    console.log(sum);
});
