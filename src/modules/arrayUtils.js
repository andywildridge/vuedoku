const removeArrayElements = (params) => params.baseArray.filter((i) => !params.elementsToRemove.includes(i));

const unionArrays = (...args) => [...new Set(args.flat())];

export { removeArrayElements, unionArrays };