function addElementAtPosition(arr1, arr2, pos) {
    if(pos==arr1.length-1){
        let last = arr1[pos];
            arr1[pos] = arr2
            arr1.push(last);
            return arr1.flat();
    }else{
        let spliced=arr1.splice(pos)
            arr1[pos] = arr2
            arr1.push(spliced);
            return arr1.flat();
    }
}
console.log(addElementAtPosition([1, 2, 3], [4, 5, 6], 1))
console.log(addElementAtPosition( [1, 2, 3], [4, 5, 6], 2))
