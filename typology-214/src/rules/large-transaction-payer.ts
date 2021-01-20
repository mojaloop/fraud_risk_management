function getStandardDeviation(array: number[]) {
    const n = array.length;
    const mean = array.reduce((a, b) => a + b) / n;
    return Math.sqrt(array.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n)
}

const handleLargeTransactionPayer = (
    transfer: any,
    historicalData: any,
): boolean => {
    if (!historicalData || historicalData.length === 0)
        return false;

    const tranAmt = transfer.Amount;
    let amounts: number[] = [];
    let total = 0;
    historicalData.forEach((element: any) => {
        const amt = Number(element.Amount);
        //add all transaction amounts in an array
        amounts.push(amt);
        //sum all payments so we can calculate average
        total += amt;
    });

    const standDev = getStandardDeviation(amounts) * 3;
    //calculate average
    total = total / amounts.length;

    if (tranAmt > (standDev + total))
        return true;

    return false;
}

export default handleLargeTransactionPayer;