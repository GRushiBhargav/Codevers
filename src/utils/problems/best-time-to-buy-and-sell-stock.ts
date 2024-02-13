import assert from "assert";
import { Problem } from "../types/problem";

export const maxProfitHandler = (fn: any) => {
	try {
		const tests = [
			{ prices: [7, 1, 5, 3, 6, 4], expected: 5 },
			{ prices: [7, 6, 4, 3, 1], expected: 0 },
			{ prices: [1, 2], expected: 1 },
			{ prices: [2, 4, 1], expected: 2 },
		];
		for (const test of tests) {
			const result = fn(test.prices);
			assert.strictEqual(result, test.expected);
		}
		return true;
	} catch (error: any) {
		console.log("Error from maxProfitHandler: ", error);
		throw new Error(error);
	}
};

const starterCodeMaxProfit = `// Do not edit function name
function maxProfit(prices) {
    // Write your code here
}`;

export const maxProfit: Problem = {
	id: "best-time-to-buy-and-sell-stock",
	title: "Best Time to Buy and Sell Stock",
	problemStatement: `
    <p class="mt-3">You are given an array <code>prices</code> where <code>prices[i]</code> is the price of a given stock on the <code>i<sup>th</sup></code> day.</p>
    <p class="mt-3">You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.</p>
    <p class="mt-3">Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return <code>0</code>.</p>
    `,
	examples: [
		{ id: 0, inputText: `prices = [7,1,5,3,6,4]`, outputText: `5` },
		{ id: 1, inputText: `prices = [7,6,4,3,1]`, outputText: `0` },
		{ id: 2, inputText: `prices = [1,2]`, outputText: `1` },
		{ id: 3, inputText: `prices = [2,4,1]`, outputText: `2` },
	],
	constraints: `
  <li class="mt-2"><code>1 <= prices.length <= 10<sup>5</sup></code></li>
  <li class="mt-2"><code>0 <= prices[i] <= 10<sup>4</sup></code></li>
  `,
	starterCode: starterCodeMaxProfit,
	handlerFunction: maxProfitHandler,
	starterFunctionName: "function maxProfit",
	order: 0,
};
