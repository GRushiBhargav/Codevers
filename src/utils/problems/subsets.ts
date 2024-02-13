import assert from "assert";
import { Problem } from "../types/problem";

export const subsetsHandler = (fn: any) => {
	try {
		const tests = [
			{ nums: [1, 2, 3], expected: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]] },
			{ nums: [0], expected: [[],[0]] },
			{ nums: [1, 2], expected: [[],[1],[2],[1,2]] },
		];
		for (const test of tests) {
			const result = fn(test.nums);
			assert.deepStrictEqual(result, test.expected);
		}
		return true;
	} catch (error: any) {
		console.log("Error from subsetsHandler: ", error);
		throw new Error(error);
	}
};

const starterCodeSubsets = `// Do not edit function name
function subsets(nums) {
    // Write your code here
}`;

export const subsets: Problem = {
	id: "subsets",
	title: "10. Subsets",
	problemStatement: `
    <p class="mt-3">Given an integer array <code>nums</code>, return <strong>all possible subsets (the power set)</strong>.</p>
    <p class="mt-3">The solution set <strong>must not</strong> contain duplicate subsets. Return the solution in <strong>any order</strong>.</p>
    `,
	examples: [
		{ id: 0, inputText: `nums = [1,2,3]`, outputText: `[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]` },
		{ id: 1, inputText: `nums = [0]`, outputText: `[[],[0]]` },
		{ id: 2, inputText: `nums = [1,2]`, outputText: `[[],[1],[2],[1,2]]` },
	],
	constraints: `
  <li class="mt-2"><code>1 <= nums.length <= 10</code></li>
  <li class="mt-2"><code>-10 <= nums[i] <= 10</code></li>
  `,
	starterCode: starterCodeSubsets,
	handlerFunction: subsetsHandler,
	starterFunctionName: "function subsets",
	order: 10,
};
