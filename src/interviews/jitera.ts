/* Code for a coderbyte assessment for Jitera - 11 Sep, 2024 */

// Problem: Given a string, return the longest recurring pattern of substring (at least occured twice);

/**
 * This algorithm divides the string into halves and checks for substring
 * duplication first from left to right and then right to left.
 */
function SearchingChallenge(str: string) {
    const len = str.length;
    let div = len / 2;
    const patterns: string[] = [];

    /**
     * If a substring (piece) is included in rest of the string (rest), then
     * it is a pattern. It is then checked if its length is greater than previous pattern
     * If it is, it is added and previous one is removed.
     */
    const addIfPattern = (piece: string, rest: string) => {
        const isPattern = piece.length > 1 && rest.includes(piece);
        const pLen = patterns.length;
        if (isPattern) {
            if (pLen > 0) {
                const addedPattern = patterns[pLen - 1];
                if (piece.length > addedPattern.length) {
                    patterns.pop();
                    patterns.push(piece);
                }
            } else {
                patterns.push(piece);
            }
        }
    };

    // left
    while (div > 0) {
        let piece = str.slice(0, div);
        let rest = str.slice(div);
        addIfPattern(piece, rest);
        div--;
    }

    // right
    div = len / 2;
    while (div < len) {
        let piece = str.slice(div);
        let rest = str.slice(0, div);
        addIfPattern(piece, rest);
        div++;
    }

    if (patterns.length > 0) {
        return `yes ${patterns[0]}`;
    }
    return "no null";
}

const res_search = SearchingChallenge("sslkss23bbb9bbb"); // bb
