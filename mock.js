let arr=[2,4,8,9,9,1,11,3];
console.log(arr.reverse());
console.log(add(arr));


function add(arr){
    var arr1=[]
    for(var i=0; i<arr.length; i++){
        for(var j=i+1; j<arr.length; j++){
            
           var result=arr[i]+arr[j];
           if(result==14){
            let x=arr[i];
            let y=arr[j];
            return x;
           }
           else return result;
        }
    
    }
    
}