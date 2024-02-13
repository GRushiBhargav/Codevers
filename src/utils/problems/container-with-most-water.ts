import assert from "assert";
import { Problem } from "../types/problem";
import exampleImage from "./images/container-water.jpg";

export const containerWithMostWaterHandler = (fn: any) => {
	try {
		const tests = [
			{ heights: [1, 8, 6, 2, 5, 4, 8, 3, 7], expected: 49 },
			{ heights: [1, 1], expected: 1 },
			{ heights: [4, 3, 2, 1, 4], expected: 16 },
		];
		for (const test of tests) {
			const result = fn(test.heights);
			assert.strictEqual(result, test.expected);
		}
		return true;
	} catch (error: any) {
		console.log("Error from containerWithMostWaterHandler: ", error);
		throw new Error(error);
	}
};

const starterCodeContainerWithMostWater = `// Do not edit function name
function maxArea(height){
    // Write your code here
}`;

export const containerWithMostWater: Problem = {
	id: "container-with-most-water",
	title: "Container With Most Water",
	problemStatement: `
    <p class="mt-3">You are given an integer array<code>n</code> non-negative integers <code>height</code> where each represents the height of a vertical line of width <code>1</code>, find two lines which, together with the x-axis forms a container, such that the container contains the most water.</p>
    <p class="mt-3">You may not slant the container.</p>
    <p class="mt-3">Example:</p>
    <p class="mt-3">
      In this case, the max area of water (blue section) the container can contain is 49.
    </p>
    <p class="mt-3">
      Note: You may assume that the input array will not contain any duplicates and that the elements in the array are non-negative.
    </p>
    `,
	examples: [
		{
			id: 0,
			inputText: `height = [1,8,6,2,5,4,8,3,7]`,
			outputText: `49`,
			img: exampleImage.src,
		},
		{
			id: 1,
			inputText: `height = [1,1]`,
			outputText: `1`,
		},
		{
			id: 2,
			inputText: `height = [4,3,2,1,4]`,
			outputText: `16`,
		},
	],
	constraints: `
  <li class="mt-2"><code>n == height.length</code></li>
  <li class="mt-2"><code>2 <= n <= 3 * 10^4</code></li>
  <li class="mt-2"><code>0 <= height[i] <= 3 * 10^4</code></li>
  `,
	starterCode: starterCodeContainerWithMostWater,
	handlerFunction: containerWithMostWaterHandler,
	starterFunctionName: "function maxArea",
	order: 0,
};
