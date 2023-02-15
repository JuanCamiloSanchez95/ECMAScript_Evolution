    //FLAT DE NIVEL 1
const arra = [1,2,3,4,5,[1,3],[2,4,51]];
const arra2 = [1,2,3,4,5,[1,[3,4,5]],[2,4,51]];
console.log(arra.flat());
console.log(arra2.flat());
    //FLAT DE NIVEL 2
    console.log(arra2.flat(2));

    //FLATMAP 
    console.log(arra.flatMap(num => num + 2));