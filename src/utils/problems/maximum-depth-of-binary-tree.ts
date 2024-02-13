import assert from "assert";
import { Problem } from "../types/problem";
import exampleImage from "./images/maximum-depth-tree.png";

// Definition for a binary tree node.
class TreeNode {
	val: number;
	left: TreeNode | null;
	right: TreeNode | null;

	constructor(val: number, left: TreeNode | null = null, right: TreeNode | null = null) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}

export const maxDepthHandler = (fn: any) => {
	try {
		const tests = [
			{
				tree: new TreeNode(
					3,
					new TreeNode(9),
					new TreeNode(20, new TreeNode(15), new TreeNode(7))
				),
				expected: 3,
			},
			{
				tree: null,
				expected: 0,
			},
			{
				tree: new TreeNode(1),
				expected: 1,
			},
		];
		for (const test of tests) {
			const result = fn(test.tree);
			assert.strictEqual(result, test.expected);
		}
		return true;
	} catch (error: any) {
		console.log("Error from maxDepthHandler: ", error);
		throw new Error(error);
	}
};

const starterCodeMaxDepth = `// Do not edit function name
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
function maxDepth(root) {
    // Write your code here
}`;

export const maxDepth: Problem = {
	id: "maximum-depth-of-binary-tree",
	title: "Maximum Depth of Binary Tree",
	problemStatement: `
    <p class="mt-3">Given the root of a binary tree, return its maximum depth.</p>
    <p class="mt-3">
      A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
    </p>

    `,
	examples: [
		{
			id: 0,
			inputText: `tree = [3,9,20,null,null,15,7]`,
			outputText: `3`,
			img: exampleImage.src,
		},
		{
			id: 1,
			inputText: `tree = []`,
			outputText: `0`,
		},
		{
			id: 2,
			inputText: `tree = [1]`,
			outputText: `1`,
		},
	],
	constraints: `
  <li class="mt-2"><code>The number of nodes in the tree is in the range [0, 10<sup>4</sup>]</code></li>
  <li class="mt-2"><code>-100 <= Node.val <= 100</code></li>
  `,
	starterCode: starterCodeMaxDepth,
	handlerFunction: maxDepthHandler,
	starterFunctionName: "function maxDepth",
	order: 0,
};
