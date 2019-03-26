const timeout = 2000

const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve([1,4,7])
        reject('things went wrongs!')
    }, timeout);
})

doWorkPromise.then((result) => {
  console.log("sucess", result)
}).catch((error) => {
   console.log('Error',error)
})
