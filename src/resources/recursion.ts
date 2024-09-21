// Recursion is a method of solving a problem where the solution depends on solutions to
// smaller instances of the same problem. Specifically, when a function calls itself, it is known as recursion.

// The process of recursion follows a few steps:

// A base case: this is the simplest form of the problem, and when reached, the recursion stops
// A recursive call: this is where the function calls itself to work on a smaller version of the same problem
// A return statement: when all the recursive calls have returned, the results are combined and returned

// Example
function factorial(x: number): number {
    // base case
    if (x === 0) {
        return 1;
    }
    // recursive call
    return x * factorial(x - 1);
}

// function that reverses a string using recursion
function reverseString(s: string): string {
    // Base case: if the string is empty or has one character, return the string
    if (s.length === 0) {
        return s;
    } else {
        // Recursive case: take the last character and call the function on the rest of the string
        const lastChar = s[s.length - 1];
        const reverseRem = reverseString(s.slice(0, -1));
        console.log(lastChar, reverseRem);
        return lastChar + reverseRem;
    }
}

// function that returns number of times a character appears in string
function countCharacter(s: string, char: string): number {
    // Base case: If the string is empty, return 0
    if (s.length === 0) {
        return 0;
    } else {
        // Recursive case: Check the first character and call the function on the rest of the string
        const firstCharCount = s[0] === char ? 1 : 0;
        return firstCharCount + countCharacter(s.slice(1), char);
    }
}

// Expanding object using recursion
const obj = {
    course: "React",
    location: {
        city: "Lahore",
        country: "Pakistan",
    },
    language: "Typescript",
    companies: {
        google: {
            frontend: "Nextjs",
        },
        amazon: {
            backend: "Nodejs",
        },
    },
};

// recursion to flatten an object
function flattenObject(
    obj: any,
    parentKey: string = "",
    result: string[] = [],
): string[] {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            const newKey = parentKey ? `${parentKey}.${key}` : key;

            if (typeof obj[key] === "object" && obj[key] !== null) {
                // If the value is an object, recursively flatten it
                flattenObject(obj[key], newKey, result);
            } else {
                // If the value is a primitive, add the key-value pair to the result
                result.push(`${newKey}.${obj[key]}`);
            }
        }
    }
    return result;
}

const returnObj = flattenObject(obj);
//console.log(returnObj);

// Output:
// [
//     'course.React',
//     'location.city.Lahore',
//     'location.country.Pakistan',
//     'language.Typescript',
//     'companies.google.frontend.Nextjs',
//     'companies.amazon.backend.Nodejs'
// ]
