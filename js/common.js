var user = null;
// Let's start here!!!
function startAccount()
{
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
      value = min;
   else if ( value > max )
      value = max;
   return value;
}

// table elements, via items parsed
// show image, name, price, and sale 
function createItemDisplay()
{
   let items = JSON.parse( storecontent );

   let table = document.getElementById("items-display");

   let tbody = table.createTBody();

   let itemslength = Math.floor( Math.random() * items.length );
   for ( let r = 0; r < 5; r++ )
   {
      let row = table.insertRow(r);
      for ( let c = 0; c < 4; c++ )
      {
         let cell = row.insertCell(c);
         cell.setAttribute("class", "item-element");
         // Okay.
         cell.innerHTML =  `<a href=\"itempage.html\"><img src=\"${items[itemslength].imageName}\" alt=\"${items[itemslength].name}\" width=\"100%\" height=\"100%\">` 
                           +
                           `<p class="item-price">$${items[itemslength].price}</p>`
                           +
                           `<p class="item-name">${items[itemslength].name}</p>`;
         
      }
   }
}