import assert from "assert";
import { Problem } from "../types/problem";

export const mergeIntervalsHandler = (fn: any) => {
	try {
		const tests = [
			{
				intervals: [
					[1, 3],
					[2, 6],
					[8, 10],
					[15, 18],
				],
				expected: [
					[1, 6],
					[8, 10],
					[15, 18],
				],
			},
			{
				intervals: [
					[1, 4],
					[4, 5],
				],
				expected: [
					[1, 5],
				],
			},
		];
		for (const test of tests) {
			const result = fn(test.intervals);
			assert.deepStrictEqual(result, test.expected);
		}
		return true;
	} catch (error: any) {
		console.log("Error from mergeIntervalsHandler: ", error);
		throw new Error(error);
	}
};

const starterCodeMergeIntervals = `// Do not edit function name
function merge(intervals) {
    // Write your code here
}`;

export const mergeIntervals: Problem = {
	id: "merge-intervals",
	title: "7. Merge Intervals",
	problemStatement: `
    <p class="mt-3">Given an array of <code>intervals</code> where <code>intervals[i] = [start<sub>i</sub>, end<sub>i</sub>]</code>, merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.</p>
    `,
	examples: [
		{
			id: 0,
			inputText: `intervals = [[1,3],[2,6],[8,10],[15,18]]`,
			outputText: `[[1,6],[8,10],[15,18]]`,
		},
		{
			id: 1,
			inputText: `intervals = [[1,4],[4,5]]`,
			outputText: `[[1,5]]`,
		},
	],
	constraints: `
  <li class="mt-2"><code>1 <= intervals.length <= 10<sup>4</sup></code></li>
  <li class="mt-2"><code>intervals[i].length == 2</code></li>
  <li class="mt-2"><code>0 <= start<sub>i</sub> <= end<sub>i</sub> <= 10<sup>4</sup></code></li>
  `,
	starterCode: starterCodeMergeIntervals,
	handlerFunction: mergeIntervalsHandler,
	starterFunctionName: "function merge",
	order: 7,
};
