function createItemEntry()
{
    const urlParams = new URLSearchParams(window.location.search);
    const itemname = urlParams.get( 'item' );

    let item = items[FindItemByName( itemname )];

    let div = document.getElementById( "item-card" );

    
    let bigimg = document.createElement( "img" );
    bigimg.setAttribute( "src", item.imageName );
    // NOT DONE...
}