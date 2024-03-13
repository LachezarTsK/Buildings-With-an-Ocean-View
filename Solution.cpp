
#include <vector>
#include <ranges>
#include <algorithm>
using namespace std;

class Solution {

public:
	vector<int> findBuildings(const vector<int>& heights) const {
		int currentMaxHeight = 0;
		vector<int> buildingsWithAnOceanView;

		for (int i = heights.size() - 1; i >= 0; --i) {
			if (heights[i] > currentMaxHeight) {
				buildingsWithAnOceanView.push_back(i);
				currentMaxHeight = heights[i];
			}
		}

		ranges::reverse(buildingsWithAnOceanView);
		return buildingsWithAnOceanView;
	}
};
