// https://leetcode.com/problems/average-waiting-time/description/?envType=daily-question&envId=2024-07-09

// Solved 9 July, 2024

const averageWaitingTime = (customers: number[][]): number => {
    const totalCustomers = customers.length;
    let avg = 0;
    let finishTime = 0;
    customers.forEach((customerTime, index) => {
        const [arrivalTime, orderTime] = customerTime;
        finishTime += arrivalTime > finishTime ? arrivalTime - finishTime + orderTime : orderTime;
        const waitingTime = finishTime - arrivalTime;
        avg += waitingTime / totalCustomers;
    });
    return avg;
};
