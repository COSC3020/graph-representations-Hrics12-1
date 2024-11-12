function convertToAdjList(adjMatrix) {
    const adList =[];// realized I was returning an object and not an arrary of arrays
    for (let i = 0; i < adjMatrix.length; i++){
        adList[i] = [];
        for ( let j = 0; j < adjMatrix[i].length;j++){
            if (adjMatrix[i][j] === 1) {
                adList[i].push(j);
            }
        }
    }
    return adList;
}
