# Exercise 1 – Minimum Task Cost 💻

## 📌 Problem Statement
You are given a list of tasks, each with a cost of execution.  
For each task, you can either:

- **Keep the task** → pay its cost directly.  
- **Remove the task** → by using a *bundle of clean-up operations*.  

### Bundles
- Each bundle costs **bundleCost**.
- Each bundle allows **operationsPerBundle** clean-up operations.
- You may buy multiple bundles (unused operations are wasted).

👉 The goal is to **minimize the total cost** =  
`sum of kept tasks + cost of bundles used`.

---

## 🧩 Example
taskCosts = [7, 1, 6, 3, 6]
operationsPerBundle = 2
bundleCost = 10


- Average cost per clean-up = `bundleCost / operationsPerBundle = 10 / 2 = 5`.
- Tasks with cost > 5 are better removed.  
- Remove {7, 6}, keep {1, 3, 6}.  

✅ Minimum total cost = `10 (bundle) + 10 (kept tasks) = 20`.

---

## 💡 Solution Idea
1. Sort tasks in descending order (most expensive first).  
2. Process tasks in groups of `operationsPerBundle`.  
3. For each group:
   - Compare the **sum of the group** vs. **bundleCost**.
   - If the sum is larger, use a bundle (cheaper).  
   - Otherwise, pay tasks individually.  
4. Add all costs and return the minimum total.

---

## 📜 Pseudocode
sort taskCosts descending
totalCost = 0

for each group of size operationsPerBundle:
sumGroup = sum(tasks in group)
if sumGroup > bundleCost:
totalCost += bundleCost
else:
totalCost += sumGroup

return totalCost

---

## 💻 Java 21 Implementation
See file: `MinimumTaskCost.java`

---

## ▶️ How to Run
```bash
javac MinimumTaskCost.java
java MinimumTaskCost
```
✅ Sample Output


Costo mínimo total: 299
⚡ Complexity
Time: O(n log n) (sorting the tasks).

Space: O(1) (in-place sorting, only variables).

🧪 Edge Cases
Empty list of tasks → cost = 0.

All tasks cheaper than bundleCost / operationsPerBundle → no bundles used.

Very large inputs (use long to avoid overflow).

pgsql
---

# 📄 MinimumTaskCost.java (ejercicio 1)