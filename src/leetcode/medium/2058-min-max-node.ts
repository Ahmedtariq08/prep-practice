import { ListNode, arrayToListNode } from "../../data-structures/list-node";

function nodesBetweenCriticalPoints(head: ListNode | null): number[] {
    let firstCritical = undefined;
    let lastCritical = undefined;
    let minDis = 1000000;
    let prevCriticalIndex = undefined;

    let prev = null;
    let currentNode = head;
    let index = 0;
    while (currentNode?.next != null) {
        const currentVal = currentNode?.val;
        const nextVal = currentNode?.next?.val;
        const isMinima = currentVal < prev?.val && currentVal < nextVal;
        const isMaxima = currentVal > prev?.val && currentVal > nextVal;

        if (isMaxima || isMinima) {
            if (prevCriticalIndex == null) {
                firstCritical = index;
            }

            const dis = index - prevCriticalIndex;
            minDis = dis < minDis ? dis : minDis;
            prevCriticalIndex = index;
            lastCritical = index;
        }

        index++;
        prev = currentNode;
        currentNode = currentNode.next;
    }

    const maxDis = (lastCritical ?? 0) - (firstCritical ?? 0);
    return [minDis == 1000000 ? -1 : minDis, maxDis == 0 ? -1 : maxDis];
}

console.clear();
const head = [5, 3, 1, 2, 5, 1, 2];
//const head = [3,1]
const listnode = arrayToListNode(head, false);
const res = nodesBetweenCriticalPoints(listnode);
console.log(res);
