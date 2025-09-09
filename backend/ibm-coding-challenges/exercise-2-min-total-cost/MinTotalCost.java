import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class MinimumTotalCost {

    /**
     * Calculates the minimum total cost to select exactly one cost entry for each item.
     *
     * @param numItems Total number of items, labeled from 0 to numItems - 1.
     * @param itemId   A list of item IDs for each cost entry.
     * @param cost     A list of costs corresponding to each entry.
     * @return Minimum total cost to cover all items, or -1 if impossible.
     */
    public long minTotalCost(int numItems, List<Integer> itemId, List<Integer> cost) {
        Map<Integer, Long> minCosts = new HashMap<>();

        // Iterate through all cost entries to find the minimum cost for each item
        for (int i = 0; i < itemId.size(); i++) {
            int currentItemId = itemId.get(i);
            long currentCost = cost.get(i);

            // Update the minimum cost for this item
            minCosts.put(
                currentItemId,
                Math.min(minCosts.getOrDefault(currentItemId, Long.MAX_VALUE), currentCost)
            );
        }

        // Check if all items are covered
        if (minCosts.size() != numItems) {
            return -1;
        }

        // Sum all the minimum costs
        long totalMinCost = 0;
        for (long minCost : minCosts.values()) {
            totalMinCost += minCost;
        }

        return totalMinCost;
    }

    public static void main(String[] args) {
        MinimumTotalCost solver = new MinimumTotalCost();

        // Example 1
        List<Integer> itemId1 = List.of(0, 1, 0, 1, 1);
        List<Integer> cost1 = List.of(4, 74, 47, 744, 7);
        System.out.println("Expected: 11, Got: " + solver.minTotalCost(2, itemId1, cost1));

        // Example 2 (missing an item, should return -1)
        List<Integer> itemId2 = List.of(0, 0, 0);
        List<Integer> cost2 = List.of(5, 10, 2);
        System.out.println("Expected: -1, Got: " + solver.minTotalCost(2, itemId2, cost2));
    }
}