function extractValue(arr, key) {
    return arr.map(function(obj){
        return obj[key]
    })
}

function vowelCount(str){
    const arr = [...(str.toLowerCase())]
    const vowelOnly = arr.reduce(function(obj, letter){
        if('aeiou'.indexOf(letter) !== -1){
            if (obj[letter]) {
                obj[letter] += 1
            } else {
                obj[letter] = 1
            }
        }
        return obj
    }, {})
    return vowelOnly
}

function addKeyAndValue(arr, key, value){
    return arr.map(function(obj){
        obj[key] = value
        return obj
    })
}

function partition(arr, callback) {
    const trueVals = []
    const falseVals = []
    arr.map( function(val) {
        const status = callback(val)
        if (status) { 
            trueVals.push(val)
        } else {
            falseVals.push(val)
        }
    })
    return [trueVals, falseVals]
}
