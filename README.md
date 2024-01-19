# Bydotpy Coding Challenges

This repository contains Node.js solutions for coding challenges provided by Bydotpy company.

## Problem 1: Bracket Validation

### Question
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. An input string is valid if the brackets are closed in the correct order.

### Time Complexity Analysis
- Solution 1: O(n)
- Solution 2: O(n)

## Problem 2: Remove Duplicates from Sorted Array

### Question
Given a sorted array of integers, write a function to remove duplicate elements in-place and return the modified array.

### Time Complexity Analysis
- Solution 1: O(n)
- Solution 2: O(n)

## Problem 3: Subset Sum

### Question
Given a set of non-negative integers and a value sum, determine if there is a subset of the given set with a sum equal to the given sum.

### Time Complexity Analysis
- O(n^2) - Considering the worst case

### Dynamic Programming with Memoization
The dynamic programming solution for the Subset Sum problem involves breaking the problem into smaller subproblems and storing the results of these subproblems using memoization.

While Dynamic Programming with Memoization is considered the most efficient solution for the Subset Sum problem, I acknowledge that I am in the process of learning more about this technique. I am committed to improving my understanding and implementing more advanced solutions in the future.

## Problem 4: Longest Common Prefix

### Question
Implement a function to find the longest common prefix among an array of strings.

### Time Complexity Analysis
- O(m * n) - Where m is the length of the common prefix and n is the number of strings.

## Usage

To run a specific solution, use the following commands:

```bash
node bracketValidator.js first_solution
# or
node bracketValidator.js second_solution

node removeDuplicates.js first_solution
# or
node removeDuplicates.js second_solution

node subsetSum.js

node longestCommonPrefix.js
