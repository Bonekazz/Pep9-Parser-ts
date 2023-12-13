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

    if (negative === true) {
        return (0xFFFF - Number(`0x${result}`) + 1).toString(16);
    }

    return result;
}
