function amountOfPages(summary) {
    let result = '';
    let count = 0;
    for (let i = 1; i <= summary; i++) {
        result += i;
        if (result.length === summary) {
            count = i;
            break;
        }
    }
    return count;
}