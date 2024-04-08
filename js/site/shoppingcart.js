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

            let p = document.createElement( "p" );
            p.setAttribute( "id", "item-name");
            p.appendChild( document.createTextNode( `${user.cart.Items[i].name}` ) );
            div.appendChild( p );

            let p2 = document.createElement( "p" );
            p2.setAttribute( "id", "item-price" );
            p2.appendChild( document.createTextNode( `${user.cart.Items[i].price}`) );
            div.appendChild( p2 );

            // Remove button
            let button = document.createElement( "button" );
            button.setAttribute( "name", "button-removeitem" );
            button.setAttribute( "id", "button-removeitem" );
            button.setAttribute( "onclick", `user.RemoveItemFromCart( ${user.cart.Items[i].name} )` );
            button.appendChild( document.createTextNode( "Remove" ) );
            div.appendChild( button );
            

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
