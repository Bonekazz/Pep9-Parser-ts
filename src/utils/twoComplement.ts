export default function twoComplement(numString: string): string {
    while (numString.length < 4) {
        numString = '0' + numString
    }

    return numString;
}

export function halfTwoComplement(numString: string): string {
    while (numString.length < 2) {
        numString = '0' + numString
    }

    return numString;
}