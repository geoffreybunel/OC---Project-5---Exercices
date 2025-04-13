//votre code ici
function printNumbers(n) {
    let result = '';

    for (let i = 1; i <= n; i++) {
        result += i + ' ';
    }

    return result.trim()
}
export default printNumbers


printNumbers(5); // retournera 1 2 3 4 5
