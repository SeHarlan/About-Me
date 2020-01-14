export default function isYes(input) {
    const myInput = input.toLowerCase()
    
    if (myInput === 'yes' || myInput === 'y') {
        return true;
    } else {
        return false;
    }
}