import java.util.*;

public class MinimumTaskCost {

    /**
     * Calculates the minimum total cost of keeping or removing tasks.
     *
     * @param taskCosts List of task costs.
     * @param operationsPerBundle Number of clean-up operations per bundle.
     * @param bundleCost Cost of one bundle.
     * @return Minimum total cost.
     */
    public static long getMinimumCost(List<Integer> taskCosts, int operationsPerBundle, int bundleCost) {
        // Sort tasks from largest to smallest (expensive tasks first)
        taskCosts.sort(Collections.reverseOrder());

        long totalCost = 0;
        int n = taskCosts.size();

        // Process tasks in groups of "operationsPerBundle"
        for (int i = 0; i < n; i += operationsPerBundle) {
            int end = Math.min(i + operationsPerBundle, n);
            long sumGroup = 0;

            // Calculate the sum of this group
            for (int j = i; j < end; j++) {
                sumGroup += taskCosts.get(j);
            }

            // If bundle is cheaper than paying tasks individually, use bundle
            if (sumGroup > bundleCost) {
                totalCost += bundleCost;
            } else {
                totalCost += sumGroup;
            }
        }

        return totalCost;
    }

    public static void main(String[] args) {
        // Example test case from problem statement
        List<Integer> taskCosts1 = Arrays.asList(7, 1, 6, 3, 6);
        System.out.println("Expected: 20, Got: " + getMinimumCost(taskCosts1, 2, 10));

        // Another test case (from IBM challenge)
        List<Integer> taskCosts2 = Arrays.asList(2, 42, 25, 30, 22, 2, 37, 90, 77, 57, 50, 85);
        System.out.println("Expected: 299, Got: " + getMinimumCost(taskCosts2, 2, 62));

        // Edge case: no tasks
        List<Integer> taskCosts3 = new ArrayList<>();
        System.out.println("Expected: 0, Got: " + getMinimumCost(taskCosts3, 3, 10));

        // Edge case: all tasks cheap (no bundles used)
        List<Integer> taskCosts4 = Arrays.asList(1, 2, 3);
        System.out.println("Expected: 6, Got: " + getMinimumCost(taskCosts4, 2, 100));
    }
}