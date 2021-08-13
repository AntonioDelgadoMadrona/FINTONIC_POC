// RETURNS AN ARRAY OF ARRAYS, EVERY NESTED ARRAY HAS THE NUM OF ITEMS PASSED
export const splitArray = (myArray: any[], splitSize: number): any[] => {
    let index = 0;
    let arrayLength = myArray.length;
    let tempArray = [];
    let myChunk;

    for (index = 0; index < arrayLength; index += splitSize) {
        myChunk = myArray.slice(index, index + splitSize);
        tempArray.push(myChunk);
    }

    return tempArray;
};