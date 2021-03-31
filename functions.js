
const functions = {
    add: (n1, n2) => n1 + n2,
    sub: (n1, n2) => n1 - n2,
    mult: (n1, n2) => n1 * n2,
    div: (n1, n2) => n1 / n2,
    checkValue: x => x,
    getNameAsString: name => {
        return [
            name.substring(0, name.indexOf(" ")),
            name.substring(name.indexOf(" ") + 1)
        ]
    },
    arrToObject: arr => {
        return {
            firstName: arr[0],
            lastName: arr[1]
        }
    }
}


module.exports = functions;