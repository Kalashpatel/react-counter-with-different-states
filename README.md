# Redux Reducer Challenge: Multi-Structure State Handler

## 🎯 Task Objective
The goal of this project was to create a single Redux-style reducer capable of handling four different initial state structures. The reducer must safely update specific values (`count` and `count2`) without crashing, regardless of which state shape is currently active.

---

## 🔢 Initial State Scenarios
The reducer is designed to work with any of the following structures:
1. **Case 1:** `[10]` (Simple Numeric Array)
2. **Case 2:** `[{ count: 0 }]` (Array of Single Object)
3. **Case 3:** `[{ count: 0 }, { count2: 0 }]` (Split Objects)
4. **Case 4:** `[{ count: 0, count2: 0 }]` (Merged Object)

---

##🚀 Key Features
Immutability: Uses .map() and the spread operator ({...item}) to ensure the original state is never mutated, following Redux best practices.

Defensive Checks: Uses typeof and the in operator to identify data structures before attempting updates, preventing runtime errors.

Type Safety: Explicitly casts values to Number() to prevent the common JavaScript bug where numbers and strings accidentally concatenate (e.g., preventing 0 + 1 becoming "01").

Clean UI: The UI only displays the active values found within the state, providing a user-friendly view of the underlying complex data structure.

📸 Final Result
![App Screenshot](./public/screenshot/Screenshot%202026-01-19%20175459.png)