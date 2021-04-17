var rect={
 area: (l,b)=>(l*b),
 perimeter:(l,b)=>(2*(l+b))

};
function solveRect(l,b){
    console.log(`L=${l} and B=${b}`);
    console.log("Area="+(rect.area(l,b)));
    console.log("Perimeter="+(rect.perimeter(l,b)));
    
}
solveRect(2,3);