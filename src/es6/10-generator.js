function* iterate(arr){
    for(let ele of arr){
        ele = ele+"s";
        yield ele;
    }
}

const it = iterate(["jau","dsafd","david","ana","carlos","jeff"]);
console.log(it.next().ele);
console.log(it.next().ele);
console.log(it.next().ele);