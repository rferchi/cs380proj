window.addEventListener( "load", createItemEntry )

const urlParams = new URLSearchParams( window.location.search );
const itemname = urlParams.get( 'item' );
const item = FindItemByName( itemname );

function createItemEntry()
{
    let section = document.getElementById( "item-container" );
    let div2 = document.getElementById( "item-card" );
    let div3 = document.getElementById( "item-images" );
    let div4 = document.getElementById("featuredimg");

    let img = document.createElement( "img" );
    // add big image thing
    img.setAttribute( "id", "image-big-preview");
    img.setAttribute( "class", "image-big-preview" );
    img.setAttribute( "src", `${ item.imageNames[0][0] }`);
    img.setAttribute( "alt", `${ item.name }` );
    div4.appendChild( img );

    let div5 = document.getElementById( "image-small-preview" );

    let length = item.imageNames[0].length;

    // loop through the images
    for ( let i = 0; i < length; i++ )
    {
        let img_small = document.createElement( "img" );
        
        img_small.setAttribute( "class", "image-small-preview" );
        img_small.setAttribute( "src", `${ item.imageNames[0][i] }` );
        img_small.setAttribute( "alt", `${ item.name }` );
        img_small.addEventListener( "click", () =>
        {
            let bigimg = document.getElementById( "image-big-preview" );
            bigimg.setAttribute( "src", `${item.imageNames[0][i]}`);
            bigimg.setAttribute( "alt", `${ item.name }` );
        });

        div5.appendChild( img_small );
    }


    let section2 = document.getElementById( "item-details" );

    let div6 = document.getElementById( "item-info" );

    let div7 = document.getElementById( "color-displays" );
    
    // name
    let h1 = document.getElementById( "item-name" );
    h1.appendChild( document.createTextNode( `${ item.name }` ) );

    // price
    let p = document.getElementById( "item-price" );
    p.appendChild( document.createTextNode( `$${ item.price }` ) );
    
    let p2 = document.getElementById( "item-desc" );
    let text = document.createTextNode(`${item.description}`);
    p2.appendChild( text );
    // TODO ADD READ MORE/READ LESS THING

    // inline
    let colors_length = item.colors.length;
    for ( let i = 0; i < colors_length; i++ )
    {
        let span = document.createElement( "span" );
        span.setAttribute( "class", "filled-circle inline" );
        span.style.backgroundColor = item.colors[i];
        //span.addEventListener( "click", changeColor );
        // click to change image colors
        div7.appendChild( span );
    }   

}

/*
function changeColor( e )
{
    console.log(color);
    
    let idx = item.colors.indexOf( color );

    if ( idx == -1 )
    {
        console.error("Color " + color + " does not exist in the list!");
        return;
    }

    let bigimg = document.querySelector("#featuredimg img");
    bigimg.setAttribute( "src", `${item.imageNames[idx][0]}` );

    let length = item.imageNames[idx];
    for ( let i = 0; i < length; i++ )
    {
        let img = document.querySelectorAll("img.image-small-preview");
        img.setAttribute( "src", `${item.imageNames[idx][i]}` );
    }
}
*/