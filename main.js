function removeOddSum(numbersList) {
    numbersList.forEach((element, index)=> {
        if ((element.a + element.b) % 2 != 0) {
            numbersList.splice(index, 1);
        }    
    })
    return numbersList;     
}

module.exports = removeOddSum;
