import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeCountGoodTriplets = `function countGoodTriplets(arr: number[], a: number, b: number, c: number): number {
    // Write your code here
}`;

const handlerCountGoodTriplets = (fn: any) => {
    try {
        const testCases = [
            { arr: [3, 0, 1, 1, 9, 7], a: 7, b: 2, c: 3, expected: 4 },
            { arr: [1, 1, 2, 2, 3], a: 0, b: 0, c: 1, expected: 0 },
        ];

        for (const testCase of testCases) {
            const { arr, a, b, c, expected } = testCase;
            const result = fn(arr, a, b, c);
            assert.strictEqual(result, expected);
        }
        return true;
    } catch (error: any) {
        console.log("countGoodTriplets handler function error");
        throw new Error(error);
    }
};

export const countGoodTriplets: Problem = {
    id: "count-good-triplets",
    title: "Count Good Triplets",
    problemStatement: `<p>Given an array of integers <code>arr</code>, and three integers <code>a</code>, <code>b</code> and <code>c</code>. You need to find the number of good triplets.</p>
    <p>A triplet (arr[i], arr[j], arr[k]) is good if the following conditions are true:</p>
    <ul>
        <li>0 <= i < j < k < arr.length</li>
        <li>|arr[i] - arr[j]| <= a</li>
        <li>|arr[j] - arr[k]| <= b</li>
        <li>|arr[i] - arr[k]| <= c</li>
    </ul>
    <p>Where |x| denotes the absolute value of x.</p>
    <p>Return the number of good triplets.</p>`,
    examples: [
        {
            id: 1,
            inputText: "arr = [3,0,1,1,9,7], a = 7, b = 2, c = 3",
            outputText: "4",
            explanation: "There are 4 good triplets: (3,0,1), (3,0,1), (3,1,1), (0,1,1).",
        },
        {
            id: 2,
            inputText: "arr = [1,1,2,2,3], a = 0, b = 0, c = 1",
            outputText: "0",
            explanation: "There are no good triplets.",
        },
    ],
    constraints: `<li class='mt-2'>
        <code>3 <= arr.length <= 100</code>
    </li>`,
    handlerFunction: handlerCountGoodTriplets,
    starterCode: starterCodeCountGoodTriplets,
    order: 1,
    starterFunctionName: `function countGoodTriplets(`,
};
