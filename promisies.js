// const promis1 = new Promise(function(resolve , reject){

//         setTimeout(function(){
//             console.log('async task')
//             resolve()
//         },5000)
        
// });

// promis1.then(function(){
//     console.log('After async')
// })


// new Promise((resolve , reject)=>{
// setTimeout(() =>{
//    for(let i = 1; i<=10 ; i++){
//     console.log(i)
//    }
//    resolve()
// },7000)

// }).then(()=>{
//     console.log("task done")
// })


// new Promise((resolve , reject)=>{
//     setTimeout(()=>{
//         resolve({username:"chetan mishra",
//             age:20,
//             corse:"bca",
//             email:"chetan@gmail.com"

//         });
//     },3000)
// }).then((userData)=>{
//     console.log(userData)
// })

// new Promise((resolve , reject)=>{
//     setTimeout(()=>{
//         let error = false;
//         if(error){
//             reject()
//         }else{
//             resolve({username:"chetan mishra",
//                 age:20,
//                 corse:"bca",
//                 email:"chetan@gmail.com",
//                 password:1234
    
//             });
//         }
//     },0)
// }).then((userData)=>{
//     console.log(userData)
//     return userData.age
// }).then((username)=>{
//     console.log(`user name is: ${username}`)
// }).catch(()=>{
//     console.log("somthing went wrong")
// }).finally(()=>{
//     console.log("work done")
// })


// const promisFive = new Promise((resolve , reject)=>{
//     setTimeout(()=>{
//         let error = true;
//         if(error){
//             reject('jS went Wrong: ')
//         }else{
//             resolve({username:"Java Script",
//                 age:20,
//                 corse:"bca",
//                 email:"chetan@gmail.com",
//                 password:1234
    
//             });
//         }
//     },1000)
// })
// async function promis6() {
//    try{
//     const response = await promisFive;
//     console.log(response)
//    }catch(error){
//     console.log(error)
//    }
// }
// promis6()


// fetch('https://api.github.com/users/ChaitanyMishra').then((response)=>{
// return response.json()
// }).then((data)=>{
// console.log(data)
// }).catch(()=>{
//     console.log("Somthing went Wrong")
// })


const newVar = async()=>{
    const result = await new Promise((resolve , reject)=>{
        setTimeout(()=>{
            console.log('hello after 3second')
            resolve('work done');
        },3000)
    })
    console.log('work done2')
}
newVar()