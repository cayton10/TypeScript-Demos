/**
 * 
 * @param data 
 * @param amountToShorten 
 */


function shortenArray<T>(data: Array<T>, amountToShorten: number): Array<T> {
    return data.splice(amountToShorten, data.length);
}



let stringArray: string[] = ['Visual Basic', 'C++', 'TypeScript', 'JavaScript'];
stringArray.forEach(element => {
    console.log(element);
});
shortenArray<string>(stringArray, 2);
stringArray.forEach(e => {
    console.log(e);
});

