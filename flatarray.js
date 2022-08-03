function flatArray(arr){
    let res=[];
    arr.forEach(element => {
        if(Array.isArray(element)){
            res.push(...flatArray(element));
        }else{
            res.push(element);
        }
    });
    return res;
}


console.log(flatArray([1,[4,[2,3],[4,5],[[9,8]]]]))
