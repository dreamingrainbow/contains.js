const contains = (item, list, cb = x => { return x }) => {

    /* Start looping through the list */
    for (let i = 0; i < list.length; i++) {
        if(typeof list[i] === 'object' ) return 
        /* Each Loop check if the item "item" passed in is the same as the current item "list[i]" in the loop */
        if (item === list[i]) {
            /* if both the item and the list[i] item match pass cb true */
            return cb(true);
        }
        /* Exit the loop */
    };
    /* since we have not return true must not be there */
    return cb(false);    
};
console.log('Loaded');
