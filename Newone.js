let x=[1,2,3,4,5]
function myFunction() {
document.getElementById("demo").innerHTML = x;
}
function myFu(value) {
    x.push(value)
document.getElementById("demo").innerHTML = x;
}
function myF() {
    x.pop()
document.getElementById("demo").innerHTML = x;
}
function my(value) {
    let c=[0,1,2,3,4,5]
    var v=0;
    for(let x=0;x<c.length;x++){
    if(value==c[x]){
        v=x;
    }
}
document.getElementById("as").innerHTML = v;
};
let v1;
let v2;
function m(value){
    v1=parseInt(value);
}
function n(value){
    v2=parseInt(value);
}
function add(v1,v2) {
    let x=v1+v2;
document.getElementById("calc").innerHTML = x; 
}    
function sub(v1,v2) {
    let x=v1-v2;
document.getElementById("calc").innerHTML = x; 
} 
function mul(v1,v2) {
    let x=v1*v2;
document.getElementById("calc").innerHTML = x; 
}
function div(v1,v2) {
    let x=v1/v2;
document.getElementById("calc").innerHTML = x; 
}


