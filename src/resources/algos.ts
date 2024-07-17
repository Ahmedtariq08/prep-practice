/* Get all indexes of a substring inside a string */
export const findAllSubstringIndexes = (str: string, subStr: string) => {
    const indexes: number[] = [];
    let i = str.indexOf(subStr);
    while (i !== -1) {
        indexes.push(i);
        i = str.indexOf(subStr, i + 1);
    }
    return indexes;
};

/* Get all permutations of a string array */
export const getPermutations = (arr: string[]): string[][] => {
    if (arr.length === 0) return [[]];

    const result: string[][] = [];
    arr.forEach((element, index) => {
        const remainingElements = [...arr.slice(0, index), ...arr.slice(index + 1)];
        const remainingPermutations = getPermutations(remainingElements);
        remainingPermutations.forEach((permutation) => {
            result.push([element, ...permutation]);
        });
    });

    return result;
};
