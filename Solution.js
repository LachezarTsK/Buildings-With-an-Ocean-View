
/**
 * @param {number[]} heights
 * @return {number[]}
 */
var findBuildings = function (heights) {
    let currentMaxHeight = 0;
    const buildingsWithAnOceanView = new Array();

    for (let i = heights.length - 1; i >= 0; --i) {
        if (heights[i] > currentMaxHeight) {
            buildingsWithAnOceanView.push(i);
            currentMaxHeight = heights[i];
        }
    }

    return buildingsWithAnOceanView.reverse();
};
