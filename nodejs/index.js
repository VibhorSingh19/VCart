var rect=require('./callback');
function solveRect(l,b){
    console.log(`L=${l} and B=${b}`);
    
    rect(l,b,(err,rectangle)=>{
        if(err)
        console.log("Error:"+err.message);
        else
        {
            console.log("Area:"+rectangle.area());
            console.log("Perimeter:"+rectangle.perimeter());
            
        }
    });
    
    console.log("OUTSIDE");
    
}
solveRect(2,3);