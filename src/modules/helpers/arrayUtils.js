const removeArrayElements = (params) => params.baseArray.filter((i) => !params.elementsToRemove.includes(i));

const unionArrays = (...args) => [...new Set(args.flat())];

const intersectSets = (a, b) => {
  return new Set([...a].filter(x => b.has(x)));
};

export { removeArrayElements, unionArrays, intersectSets };