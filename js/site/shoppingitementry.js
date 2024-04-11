window.addEventListener( "load", createItemEntry )

function createItemEntry()
{
    const urlParams = new URLSearchParams( window.location.search );
    const itemname = urlParams.get( 'item' );

    let item = FindItemByName( itemname );

    let div = document.createElement( "div" );
    div.setAttribute( "id", "item-card" );
    div.setAttribute( "class", "inline" );
    document.body.appendChild( div );

    let div2 = document.createElement( "div" );
    div2.setAttribute( "id", "item-images" );
    div.appendChild( div2 );

    let img = document.createElement( "img" );
    // add big image thing
    img.setAttribute( "id", "image-big-preview");
    img.setAttribute( "src", `${ item.imageNames[0][1] }`);
    img.setAttribute( "alt", `${ item.name }` );
    div2.appendChild( img );

    let div3 = document.createElement( "div" );
    div3.setAttribute( "id", "item-small-images" );
    //div3.setAttribute( "class", "inline" );

    // Partitioning image array for multiple colors
    let length = item.imageNames[0].length;

    // Start at 1 to skip the color definition
    for ( let i = 1; i < length; i++ )
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

        div3.appendChild( img_small );
    }
    div2.appendChild( div3 );


    let div4 = document.createElement( "div" );
    div4.setAttribute( "id", "item-details" );
    div.setAttribute( "class", "inline" );
    document.body.appendChild( div4 );

    // name
    let h1 = document.createElement( "h1" );
    h1.appendChild( document.createTextNode( `${ item.name }` ) );
    div4.appendChild( h1 );

    // price
    let p = document.createElement( "p" );
    p.appendChild( document.createTextNode( `$${ item.price }` ) );
    div4.appendChild( p );

    let div5 = document.createElement( "div" );
    div5.setAttribute( "class", "color-displays" );

    // inline
    let colors_length = item.colors.length;
    for ( let i = 0; i < colors_length; i++ )
    {
        let span = document.createElement( "span" );
        span.setAttribute( "class", "filled-circle" );
        span.style.backgroundColor = item.colors[i];

        span.addEventListener( "click", (e) =>
        {
            // add click to change all of the images to the specified color

        });

        div5.appendChild( span );
    }

    div4.appendChild( div5 );






}