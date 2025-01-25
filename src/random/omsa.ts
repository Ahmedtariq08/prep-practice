const financeString = `
Week 3- Financial Statement Analysis.pdf
Page
Week 3 Video Lesson Part 1 (11:44)
Page
Week 3 Video Lesson Part 2 (12:08)
Page
Week 3 Video Lesson Part 3 (10:17)
Page
Week 3 Video Lesson Part 4 (9:07)
Page
Week 3 Video Lesson Part 5 (9:00)
Page
Week 3 Video Lesson Part 6 (10:58)
Page
Week 3 Video Lesson Part 7 (16:12)
Page
Week 3 Video Lesson Part 8 (8:41)`;

const calcualteTotalTime = (text: string) => {
    let openBracketIndex = undefined;
    let totalMinutes = 0;
    let totalSeconds = 0;

    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        if (char == "(") openBracketIndex = i;
        else if (char == ")") {
            if (openBracketIndex != undefined) {
                const time = text.slice(openBracketIndex + 1, i);
                const [minutes, seconds] = time.split(":");
                totalMinutes += parseInt(minutes);
                totalSeconds += parseInt(seconds);
                openBracketIndex = undefined;
            }
        }
    }

    console.log(totalMinutes, totalSeconds);
    totalMinutes += Math.round(totalSeconds / 60);
    totalSeconds = totalSeconds % 60;
    console.log(`Total time it takes: ${totalMinutes}m ${totalSeconds}s`);
};

console.clear();
calcualteTotalTime(str);
