module.exports = function(value){
    return value && typeof value === 'object' || typeof value === 'function';
};