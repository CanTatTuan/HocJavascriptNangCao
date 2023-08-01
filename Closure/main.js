// function cretae()
// {
//     let couter = 0;
//     function imm()
//     {
//         return ++couter;
//     }

//     return imm;
// }


// const couter1 = cretae();
// console.log(couter1());  //1
// console.log(couter1());  //2
// console.log(couter1()); //3




// viet code ngan hon

function createlogger(namespace){

    function logger(){
        console.log(`[${namespace}]`)
    }
    
    return logger;

}


const logger1 = createlogger(" info");
console.log(logger1()); //  