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
(() => {
document.getElementById('result').append('Loaded<br\>');
document.getElementById('result').append(contains('x', '<ukljh;lojhhje') ? 'Yes x found</br>' : 'No x found</br>'); // false
document.getElementById('result').append(contains('x', '<ukljh;xlojhhje') ? 'Yes x found</br>' : 'No x found</br>' );
})();
