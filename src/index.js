module.exports = function check(str, bracketsConfig) {
  let arr = str.split('')
  if (arr.length%2 ) { return false;}

  let openingBrackets = [];
  for (let i = 0; i < bracketsConfig.length; i ++) {
    openingBrackets.push( bracketsConfig[i][0])
  }
  let closingBrackets = [];
  for (let i = 0; i < bracketsConfig.length; i ++) {
    closingBrackets.push( bracketsConfig[i][1])
  }

  function spliceArr(arr) {
    if (arr.length ===0 ) return;
    for (let i = 1; i < arr.length; i ++) {
        if (closingBrackets.includes(arr[i])) {
            let index = closingBrackets.indexOf(arr[i]);
            if (closingBrackets[index] === openingBrackets[index]) {
                if (arr[i] === arr[i-1]) {
                    arr.splice(i-1,2);
                    spliceArr(arr)
                } else if (arr[i] === arr[i+1]) {
                    arr.splice(i,2);
                    spliceArr(arr)
                } else {
                    return;
                }
            } else if(arr[i-1] === openingBrackets[index]) {
                arr.splice(i-1,2);
                spliceArr(arr)  
              } else {
                return 
            }
        }
    }
  }

  spliceArr(arr)

  return arr.length === 0 
}

