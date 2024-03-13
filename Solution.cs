
using System;
using System.Collections.Generic;

public class Solution
{
    public int[] FindBuildings(int[] heights)
    {
        int currentMaxHeight = 0;
        IList<int> buildingsWithAnOceanView = new List<int>();

        for (int i = heights.Length - 1; i >= 0; --i)
        {
            if (heights[i] > currentMaxHeight)
            {
                buildingsWithAnOceanView.Add(i);
                currentMaxHeight = heights[i];
            }
        }

        int[] arrayBuildingsWithAnOceanView = new int[buildingsWithAnOceanView.Count];
        for (int i = arrayBuildingsWithAnOceanView.Length - 1; i >= 0; --i)
        {
            arrayBuildingsWithAnOceanView[buildingsWithAnOceanView.Count - i - 1] = buildingsWithAnOceanView[i];
        }

        return arrayBuildingsWithAnOceanView;
    }
}
