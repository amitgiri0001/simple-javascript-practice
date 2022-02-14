const splitValues = ['/', '.'];

function compress(str) {
    const parts = findParts(str);
    const compression1 = compressBySlash(parts);

    console.log(compression1);
}

let finalString = ''
function compressBySlash(parts, depth = 0) {
    return parts.reduce((finalString, part) => {
        let currentPart = '';
        if(Array.isArray(part)) {
            currentPart = compressBySlash(part, depth + 1);
        }
        else {
            currentPart = `${part.charAt(0)}${part.length -2}${part.charAt(part.length - 1)}`;
        }

        return [finalString, currentPart].join(splitValues[depth]);

    }, finalString);
}


function findParts(str) {
    return str.split('/').map((part) => {
        const temp = part.split('.');
        if(temp.length == 1) {
            return part
        }
        else {
            return temp;
        }
    });
}

console.log(compress('stripe.com/payments/checkout/customer.john.doe'));