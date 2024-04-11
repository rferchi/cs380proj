//window.addEventListener( "load", createItemEntry )

function createItemEntry()
{
    const urlParams = new URLSearchParams( window.location.search );
    const itemname = urlParams.get( 'item' );

    let item = FindItemByName( itemname );

    let div = document.getElementById( "item-container" );

    let div2 = document.getElementById( "item-card" );

    let div3 = document.getElementById( "item-images" );

    let img = document.createElement( "img" );
    // add big image thing
    img.setAttribute( "id", "image-big-preview");
    img.setAttribute( "src", `${ item.imageNames[0][0] }`);
    img.setAttribute( "alt", `${ item.name }` );
    div3.appendChild( img );

    let div4 = document.getElementById( "image-small-preview" );

    let length = item.imageNames[0].length;

    // loop through the images
    for ( let i = 0; i < length; i++ )
    {
        let img_small = document.createElement( "img" );
        
        img_small.setAttribute( "class", "image-small-preview inline" );
        img_small.setAttribute( "src", `${ item.imageNames[0][i] }` );
        img_small.setAttribute( "alt", `${ item.name }` );
        img_small.addEventListener( "click", () =>
        {
            let bigimg = document.getElementById( "image-big-preview" );
            bigimg.setAttribute( "src", `${item.imageNames[0][i]}`);
            bigimg.setAttribute( "alt", `${ item.name }` );
        });

        div4.appendChild( img_small );
    }


    let div5 = document.getElementById( "item-details" );

    // name
    let h1 = document.createElement( "h1" );
    h1.appendChild( document.createTextNode( `${ item.name }` ) );
    div5.appendChild( h1 );

    // price
    let p = document.createElement( "p" );
    p.appendChild( document.createTextNode( `$${ item.price }` ) );
    div5.appendChild( p );

    let div6 = document.createElement( "div" );

    // inline
    let colors_length = item.colors.length;
    for ( let i = 0; i < colors_length; i++ )
    {
        let span = document.createElement( "span" );
        span.setAttribute( "class", "filled-circle" );
        span.style.backgroundColor = item.colors[i];

        // click to change image colors
        div6.appendChild( span );
    }






}