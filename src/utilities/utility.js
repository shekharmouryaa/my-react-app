// to Create random id of length pass length in function
export const randomId = function(length) {
    return Math.random().toString(36).substring(2, length+2);
};