// let propose = new Promise((accept,reject)=> {
//     let proposal = false
//     if (proposal)
//         accept("kindness")
//     else
//         reject("ego")
// })
// propose.then((kind)=> {console.log(`she is loving me because of ${kind}`);
// }).catch((ego)=>{console.log(`she is reject me because of my ${ego}`);
// })

// function cointoss(){
//     return new Promise((Head,Tail)=>{
//         var tossed = Math.floor(Math.random() *2)
//         if (tossed==0)
//             Head("head")
//         else
//             Tail("tail")
//     })}

// cointoss().then((head)=>{
//     console.log(`Hey there! you won because of you have ${head}`);
// }).catch((tail)=>{
//     console.log(`Hey there! you lose because of you have ${tail}`);    
// })


// const reachA = new Promise((resolve,reject)=>{
//     let reached = false
//     if (reached==true)
//         setTimeout(resolve,1000,"nandis is reached..")
//     else
//         reject("Nandhis is not reached..")
// })

// const reachB = new Promise((resolve,reject)=>{
//     let reached = true
//     if (reached==true)
//         setTimeout(resolve,2000,"Nagaprakash is reached..")
//     else
//         reject("Nagaprakash is not reached..")
// })

// const reachC = new Promise((resolve,reject)=>{
//     let reached = false
//     if (reached==true)
//         setTimeout(resolve,3000,"Sabarinathan is reached..")
//     else
//         reject("Sabarinathan is not reached..")
// })

// Promise.allSettled([reachA,reachB,reachC]).then((message)=>{
//     console.log(message);
// }).catch((message)=>{
//     console.log(message); 
// })


// async function naga() {
//     return 'hello'
// }

// console.log(naga());

// async function synch() {
//     console.log("async function is used..");
//     try{
//     fun = await reachC
//     console.log(fun);}
//     catch(msg){
//         console.log(msg)
//     }   
// }

// synch()
 
// "If You Win, You Live. If You Lose, You Die. If You Don't Fight, You Can't Win!"


//  fetch('https://aot-api.vercel.app/quote')
// .then((result)=>(result.json()))
// .then((nothing)=>{
//     console.log(nothing);
// })
// .catch((err)=>{
//     console.log(err);   
// })

// fetch('https://aot-api.vercel.app/quote')
//     // {
//     // method:'POST',
//     // headers:{'content-type':'application/json'},
//     // body:JSON.stringify({
//     //     author:"Smile Kawchiha",
//     //     quote:"You get tired, learn to rest not a quit"
//     // })}

// .then((msg)=>{
//     if (msg.ok)
//         console.log('sucess')
//     else
//         console.log('Fail')
//     return msg.json()})
// .then(res => console.log(res.author,":",res.quote))
// .catch((err)=> console.log(err))


// let xp = 10;
// let xpn = 100;
// let levels = 1;

// function level(){
//     xp = xp-xpn;
//     levels++;
//     xpn+100;
//     console.log(levels)
//     console.log(xpn)
// }
// level()

let naga = document.getElementById("smile")
function AOT(){
fetch('https://aot-api.vercel.app/quote')
.then(result => result.json())
.then(output => {
    smile.innerHTML= (output.author +" : "+output.quote);
    console.log(output.author,":",output.quote);
})

.catch((result)=>{
    console.log(result);
})
}
