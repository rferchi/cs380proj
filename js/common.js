/* https://stackoverflow.com/a/18679592 */
// Count the amount of words in a string
function countWords( str ) 
{
    return str.split(' ').length;
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

function FindItemsByName( itemname )
{
   let size = items.length;
   for ( let i = 0; i < size; i++ )
   {
   
   }
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

   // 5 * 4 = 20 possible items on a page. This can be changed later depending on where this list
   // is going to go
   for ( let r = 0; r < 5; r++ )             // 5 rows possible
   {
      // <tr>
      let row = table.insertRow( r );
      for ( let c = 0; c < 4; c++ )          // 4 cells per row
      {
         // Did we run out of items?
         if ( counter >= itemslength )
         {
            return;
         }

         // <td class="item-element">
         let cell = row.insertCell( c );
         cell.setAttribute( "class", "item-element" );

         // <div id="item-card-1..2..3">
         let div = document.createElement( "div" );
         div.setAttribute( "id", `item-card-${counter}` );
         div.setAttribute( "data-itemIdx", `${counter}`);
         cell.appendChild( div );
         div.addEventListener( "click", () =>
         {
            // Pass the name to the url for the shopping entry page to decide
            let num = parseInt( div.dataset.itemidx );
            window.location.href = `shoppingitementry.html?item=${items[num].name}`;
         });

         // <img class="image-preview" src="IMAGENAME" alt="ITEMNAME">
         let img = document.createElement( "img" );
         img.setAttribute( "class", "image-preview" );
         img.setAttribute( "src", `${items[counter].imageNames[0][0]}` );
         img.setAttribute( "alt", `${items[counter].name}`);
         div.appendChild( img );

         // <div id="item-info-1..2..3>"
         let div2 = document.createElement( "div" );
         div2.setAttribute( "id", `item-info-${counter}` );
         div.appendChild( div2 );

         // <p class="item-name">ITEMNAME</p> 
         let p = document.createElement( "p" );
         p.setAttribute( "class", "item-name" );
         p.appendChild( document.createTextNode(`${items[counter].name}`) );
         div2.appendChild( p );

         // <p class="item-price">ITEMPRICE</p> 
         let p2 = document.createElement( "p" );
         p2.setAttribute( "class", "item-price" );
         p2.appendChild( document.createTextNode(`$${items[counter].price}`) );
         div2.appendChild( p2 );

         // Increment the counter
         counter++;
      }
   }
}