function createCartList()
{
    let ul = document.getElementById( "cart-list" );

    let length = user.cart.Items.Length;

    if ( length > 0 )
    {
        for ( let i = 0; i < length; i++ )
        {
            let li = document.createElement( "li" );
            ul.appendChild( li );

            let div = document.createElement( "div" );
            div.setAttribute( "class", "item-entry" );
            li.appendChild( div );

            let img = document.createElement( "img" );
            img.setAttribute( "src", `${user.cart.Items[i].imageName}` );
            img.setAttribute( "alt", `${user.cart.Items[i].name}` );
            div.appendChild( img );

            //TODO: FINISH THIS !!!
        }
    }
    else
    {
        let p = document.createElement( "p" );
        ul.appendChild( p );
        p.appendChild( document.createTextNode( "You have no items in your cart." ) );
    }

    //ul.appendChild( document.body );
}
