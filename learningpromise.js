const mypromise=new Promise((resolve,reject)=>{
    resolve('promise is resolved');
    reject('promise is rejected');
})
console.log(mypromise);

// const mypromise = new Promise()
// console.log(mypromise);

mypromise.then((res)=>{ console.log(res);}).catch((err)=>{console.log(err);});
// Output: promise is resolved

// mypromise.then.catch((err)=>{console.log(err);}).then((res)=>{console.log(res);});
// Output: promise is rejected
//         promise is resolved

let fulfildata = res;
let newvalue= Object.keys(fulfildata);
console.log(newvalue);
// Output: []



// const mypromise= new Promise((resolve,reject)=>{
//     const success = true; // Change this to false to test rejection

//     if (success) {
//         resolve('promise is resolved');
//     } else {
//         reject('promise is rejected');
//     }
// })
// mypromise
// .then((res) => console.log(res))
// .catch((err) => console.log(err));