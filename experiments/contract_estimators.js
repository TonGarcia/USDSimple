function addHours(numOfHours, date = new Date()) {
    date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);
    return date.getTime() / 1000;
}

function addMinutes(numOfMinutes, date = new Date()) {
    date.setTime(date.getTime() + numOfMinutes * 60 * 1000);
    return date.getTime() / 1000;
}
  
function roundDelta(deposit, startTime, endTime) {
    let duration = endTime - startTime;
    let finalEndTime = endTime;
    while(true) {
        if(deposit % duration === 0) {
            console.log('roundDelta', 'deposit', deposit, 'duration', duration, 'finalEndTime', finalEndTime, 'startTime', startTime);
            return finalEndTime;
        }

        finalEndTime++;
        duration = finalEndTime - startTime;
    }
}

startTime = Math.floor(addMinutes(2));
endTime = Math.floor(addHours(2));

depositAmount = 10000000;
finalEndTime = roundDelta(depositAmount, startTime, endTime);
console.log('depositAmount: ', depositAmount, 'startTime: ', startTime, 'finalEndTime: ', finalEndTime)
