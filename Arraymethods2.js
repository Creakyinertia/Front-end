function joinS(){
    let n=['Danny','Angel','Sarah','Winston'];
    let s=n.join('-');
    document.getElementById("qw").innerHTML = s; 
}
let v1;
let v2;
function m(value){
    v1=parseInt(value);
}
function n(value){
    v2=parseInt(value);
}
function sliceS(){
    let n=['Danny','Angel','Sarah','Winston'];
    let s=n.slice(v1,v2)
    document.getElementById("asd").innerHTML = s; 
}

function forsEach(){
    let nums=[1,2,3,4,5,6];
    let doubled=nums.map((n)=>n*2);
    document.getElementById("asde").innerHTML = doubled;
}
