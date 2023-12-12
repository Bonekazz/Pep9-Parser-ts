export default function decToHex(num: number): string {
    let negative = false;
    if (num < 0) {
        negative = true;
        num = num - (num * 2)
    }

    let result = "";
    let quot = num;

    do {
        result = (quot % 16).toString(16) + result
        quot = Math.floor(quot / 16);
    } while (quot !== 0)

    while (result.length < 4) {
        result = '0' + result
    }

    if (negative === true) {
        return String(0xFFFF - Number(`0x${result}`) + 1)
    }

    return result;
}
