
function betterThanAverage(classPoints, yourPoints) {
    // Your code here
    let sum = 0
    for (let i = 0; i < classPoints.length; i++) {
        sum += classPoints[i];}
        
  let average = sum/classPoints.length
        if (yourPoints> average) {
            return true
            
        } else {
            return false
            
        }
        
    }
  