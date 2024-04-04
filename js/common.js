// Important global variables!!!

// Parse our store items.
var items = JSON.parse( storecontent );
// Username.
var user = null;

// End global variables

// Let's start here!!!
function startAccount()
{  
   window.localStorage.clear();

   var _user = User.CreateUser( window.localStorage.getItem( "user" ) );
   user = _user;
   User.SaveUser( user );
}

// clamp: function to clamp a value between the min and max values.
// value: the value being clamped
// min: the minimum value possible
// max: the maximum value possible
// output: Number
function clamp( value, min, max )
{
   if ( value < min )
   {
      value = min;
   }
   else if ( value > max )
   {
      value = max;
   }
   
   return value;
}

/* Helpful functions */

// Find an item from the store data.
function FindItemByName( itemname )
{
   let size = items.length;
   for ( let i = 0; i < size; i++ )
   {
      if ( items[i].name == itemname )
      {
         return items[i];
      }
   }

   // Couldn't find it.
   return null;
}

/* Display functions */

// table elements, via items parsed
// show image, name, price, and sale 
function createItemDisplay()
{
   // <table id="items-display">
   let table = document.getElementById( "items-display" );

   // <tbody>
   let tbody = table.createTBody();

   // Only display the amount of items possible, in the list, don't render after that.
   let counter = 0;

   // Items in that parsed list
   let itemslength = items.length;
   for ( let r = 0; r < 5; r++ )
   {
      // <tr>
      let row = table.insertRow( r );
      for ( let c = 0; c < 4; c++ )
      {
         // <td class="item-element">
         let cell = row.insertCell(c);
         cell.setAttribute( "class", "item-element" );
         
         // <a href="itempage.html">
         let a = document.createElement( "a" );
         a.setAttribute( "href", "itempage.html");
         cell.appendChild( a );

         // <img src="IMAGENAME" alt="ITEMNAME">
         let img = document.createElement( "img" );
         img.setAttribute( "src", `${items[counter].imageName}` );
         img.setAttribute( "alt", `${items[counter].name}`);
         a.appendChild( img );

         // <p class="item-price">ITEMPRICE</p> 
         let p = document.createElement( "p" );
         p.setAttribute( "class", "item-price" );
         p.appendChild( document.createTextNode(`${items[counter].price}`) );
         a.appendChild( p );

         // <p class="item-name">ITEMNAME</p> 
         let p2 = document.createElement( "p" );
         p2.setAttribute( "class", "item-name" );
         p2.appendChild( document.createTextNode(`${items[counter].name}`) );
         a.appendChild( p2 );

         // <button id="button-addtocart" name="button-addtocart" onclick="user.AddItemToCart(ITEM)">Add To Cart</button>
         let button = document.createElement( "button" );
         button.setAttribute( "id", "button-addtocart");
         button.setAttribute( "name", "button-addtocart");
         button.setAttribute( "onclick", `user.AddItemToCart( ${ items[counter].name } )`);
         button.appendChild( document.createTextNode( "Add To Cart" ) );

         // Attach the button to the cell itself, not the a
         cell.appendChild( button );

         // Increment the counter
         counter++;

         // Is the 
         if ( counter >= itemslength )
         {
            // Return early, we've run out of items to display.
            return;
         }
      }
   }
}