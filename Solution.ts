
function findBuildings(heights: number[]): number[] {
    let currentMaxHeight: number = 0;
    const buildingsWithAnOceanView: number[] = new Array();

    for (let i = heights.length - 1; i >= 0; --i) {
        if (heights[i] > currentMaxHeight) {
            buildingsWithAnOceanView.push(i);
            currentMaxHeight = heights[i];
        }
    }

    return buildingsWithAnOceanView.reverse();
};
