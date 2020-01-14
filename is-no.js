
export default function isNo(input) {
    const myInput = input.toLowerCase();

    if (myInput === 'no' || myInput === 'n') {
        return true;
    } else {
        return false;
    }
}