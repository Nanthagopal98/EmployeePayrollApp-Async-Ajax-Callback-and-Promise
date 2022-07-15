function getTime() {
    let date = new Date;
    return date.getHours()+' hr : '+date.getMinutes()+' min : '+date.getSeconds()+' sec';
}

function sessionExpire(){
    console.log("Sesssion Expiret At :"+ getTime());
}

console.log("Session Started at :"+getTime());
setTimeout(sessionExpire,5000);   // 5 sec Wait time
console.log("Session will End 5 Sec From :"+ getTime());