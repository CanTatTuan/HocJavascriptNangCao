const iphone7 ={
    name: 'iphone',
    color:'red',
    weigt : 300,
    // phuong thuc - method - de mieu ta hanh dong
    takephoto()
    {
        console.log(this);
    },
    objcon:{
        methodchild(){
            console.log(this);
        }
    }
}



// console.log(iphone7)
console.log(iphone7.objcon.methodchild())