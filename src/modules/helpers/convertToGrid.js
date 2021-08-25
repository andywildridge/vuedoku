const convertToGrid = (str) => {
    return [...str.replace(/\s/g,'')].map((i)=>Number(i)); 
};

export default convertToGrid;
