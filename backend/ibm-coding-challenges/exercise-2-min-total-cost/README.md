# Exercise 2 – Minimum Total Cost per Item 🛒

## 📌 Problem Statement
You are given:
- `numItems` → the total number of distinct items (from `0` to `numItems - 1`).
- Two arrays/lists:
  - `itemId[]` → the ID of the item for each cost entry.
  - `cost[]` → the cost associated with that entry.

👉 The goal is to **select exactly one cost for each item** and minimize the total sum.

⚠️ If at least one item has no cost entry, return `-1`.

---

## 🧩 Example

### Input
numItems = 2
itemId = [0, 1, 0, 1, 1]
cost = [4, 74, 47, 744, 7]


### Step-by-step
- For item `0`: possible costs → `[4, 47]` → min = `4`.
- For item `1`: possible costs → `[74, 744, 7]` → min = `7`.
- Sum = `4 + 7 = 11`.


### Output
11

```yaml


---

## 💡 Solution Idea
1. Use a **map** (`HashMap`) where:
   - Key = itemId
   - Value = minimum cost found for that item
2. Iterate through all entries:
   - If the item is new → insert cost.
   - If the item already exists → update if new cost is smaller.
3. After processing:
   - If the map doesn’t contain all items (`map.size() != numItems`) → return `-1`.
   - Otherwise, sum all the minimum costs and return it.

---

```

## 📜 Pseudocode
map = empty dictionary

for each index i in itemId:
currentItem = itemId[i]
currentCost = cost[i]

```python

if currentItem not in map:
    map[currentItem] = currentCost
else:
    map[currentItem] = min(map[currentItem], currentCost)
if map.size != numItems:
return -1

return sum(map.values)
```
```yaml
---

## 💻 Java 21 Implementation
See file: `MinimumTotalCost.java`

---
```

## ▶️ How to Run
```bash
javac MinimumTotalCost.java
java MinimumTotalCost
```

✅ Sample Output

Expected: 11, Got: 11
Expected: -1, Got: -1
⚡ Complexity
Time: O(n) (iterate once through all costs).

Space: O(numItems) (store one min cost per item).

🧪 Edge Cases
Item missing in the lists → return -1.

Multiple costs per item (pick the smallest).

Empty arrays → return -1.

Large inputs (use long to avoid overflow).



---

# 📄 MinimumTotalCost.java (ejercicio 2)