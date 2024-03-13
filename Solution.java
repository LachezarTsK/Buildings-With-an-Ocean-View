
import java.util.ArrayList;
import java.util.List;

public class Solution {

    public int[] findBuildings(int[] heights) {
        int currentMaxHeight = 0;
        List<Integer> buildingsWithAnOceanView = new ArrayList<>();

        for (int i = heights.length - 1; i >= 0; --i) {
            if (heights[i] > currentMaxHeight) {
                buildingsWithAnOceanView.add(i);
                currentMaxHeight = heights[i];
            }
        }

        int[] arrayBuildingsWithAnOceanView = new int[buildingsWithAnOceanView.size()];
        for (int i = arrayBuildingsWithAnOceanView.length - 1; i >= 0; --i) {
            arrayBuildingsWithAnOceanView[buildingsWithAnOceanView.size() - i - 1] = buildingsWithAnOceanView.get(i);
        }

        return arrayBuildingsWithAnOceanView;
    }
}
