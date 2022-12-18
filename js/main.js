let a=parseInt(prompt("enter the number"))
let b;
let c=a;
let d=0;
for(i=2;a%i!==0;i++){
    b=a%i
}
if(i==a){
    document.write("The Number is Prime")
}
else{
    document.write("The Number is NotPrime")
}