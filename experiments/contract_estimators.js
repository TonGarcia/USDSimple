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
  
  const startAfter = 10;
  const stopAfter = startAfter + 5;
  startTime = Math.floor(addMinutes(startAfter));
  endTime = Math.floor(addHours(stopAfter));
  
  depositAmount = 10000000; // 10000000 / (10**6)
  finalEndTime = roundDelta(depositAmount, startTime, endTime);
  console.log('depositAmount: ', depositAmount, 'startTime: ', startTime, 'finalEndTime: ', finalEndTime);