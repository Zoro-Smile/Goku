let propose = new Promise((accept,reject)=> {
    let proposal = false
    if (proposal)
        accept("kindness")
    else
        reject("ego")
})
propose.then((kind)=> {console.log(`she is loving me because of ${kind}`);
}).catch((ego)=>{console.log(`she is reject me because of my ${ego}`);
})

function cointoss(){
    return new Promise((Head,Tail)=>{
        var tossed = Math.floor(Math.random() *2)
        if (tossed==0)
            Head("head")
        else
            Tail("tail")
    })}

cointoss().then((head)=>{
    console.log(`Hey there! you won because of you have ${head}`);
}).catch((tail)=>{
    console.log(`Hey there! you lose because of you have ${tail}`);    
})


const reachA = new Promise((resolve,reject)=>{
    let reached = false
    if (reached==true)
        setTimeout(resolve,1000,"nandis is reached..")
    else
        reject("Nandhis is not reached..")
})

const reachB = new Promise((resolve,reject)=>{
    let reached = true
    if (reached==true)
        setTimeout(resolve,2000,"Nagaprakash is reached..")
    else
        reject("Nagaprakash is not reached..")
})

const reachC = new Promise((resolve,reject)=>{
    let reached = false
    if (reached==true)
        setTimeout(resolve,3000,"Sabarinathan is reached..")
    else
        reject("Sabarinathan is not reached..")
})

Promise.allSettled([reachA,reachB,reachC]).then((message)=>{
    console.log(message);
}).catch((message)=>{
    console.log(message); 
})