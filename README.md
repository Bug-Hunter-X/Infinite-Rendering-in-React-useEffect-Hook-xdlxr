# React useEffect Infinite Loop Bug

This repository demonstrates a common bug in React's `useEffect` hook: infinite rendering caused by an incorrectly configured dependency array.

## The Bug
The `bug.js` file contains a component that uses `useEffect` to log the current count. However, the `count` variable is missing from the dependency array, causing the effect to run after every render, leading to an infinite loop and crashing the browser.

## The Solution
The `bugSolution.js` file shows the corrected code. By adding `count` to the dependency array, the effect only runs when the `count` value changes.