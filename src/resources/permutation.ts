/* Get all permutations of a string array */
const getPermutations = (arr: string[]): string[][] => {
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
