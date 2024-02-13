const sum={
    num1:2,
    num2:3,
};
function calcsum(){
    return result=sum.num1+sum.num2;

   
};
console.log("la somme initiale est "+ calcsum());
sum.num1=8;
console.log("la somme apres update est "+calcsum());
sum.num3=20;
console.log( sum.num3);
