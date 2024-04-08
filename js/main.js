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


// An "account". Every object in here will be stored locally.
class User
{
    // Multiple shipping addresses possible.
    shippingInfo = [];

    // Cart with items.
    cart = null;

    // Multiple payment methods possible.
    paymentMethods = [];

    // Set up the user!!!
    constructor() 
    {
        // It's fine if these are null, it just means that there's no info for them yet
        // Get the keys for the shipping info, and payment methods
        this.shippingInfo = window.localStorage.getItem( "shippinginfo" );
        this.paymentMethods = window.localStorage.getItem( "paymentmethods" );

        // Find a cart, if not then make a new cart.
        this.cart = window.localStorage.getItem( "cart" );
        if ( this.cart )
        {
            cart = new Cart();

            // Save this.
            window.localStorage.setItem( cart, "cart" );
        }

        console.log( this );
    }
    
    // items in the wishlist to display to the user. Show to user in /wishlists.html
    Wishlist = [];
}

class Item 
{
    constructor( _name, _description, _price, _sale )
    {
        this.name = _name;
        this.description = _description;
        this.price = _price;
        this.sale = clamp( _sale, 0.0, 1.0 );
        this.modPrice();
    }

    // Function to calculate the price given the sale and other elements
    modPrice()
    {
        // TODO: shipping/handling and taxes
        // Do nothing.
        if ( sale <= 0.0 )
            return;

        // sale.
        this.price += ( this.price * sale ); 
    }

    // Name
    name = "";
    // Description
    description = "";
    // Price
    price = "";
    // Sizes. These will be strings.
    sizes = [];
    // Colors in hex. This will be displayed on the page as a circle with the color inside.
    colors = [];
    // Sale - optional. Will modify the pricing.
    sale = 0;
    // Tax
    tax = 0;
    // Shipping Price
    shipping = 0;
}


class Cart
{
    constructor( storageObj )
    {
        // Extract from the storage object

    }

    AddToCart( ...Item )
    {
        this.Items.push( ...Item );
    }

    RemoveFromCart( ...Item )
    {
        
    }

    // Call this function to calculate the subtotal.
    CalculateSubtotal()
    {
        let result = 0;

        for ( let i = 0; i < this.Items.length; i++ )
        {
            result += this.Items[i].price; 
        }

        subtotal = result;
    }

    Items = [];

    // Calculated value based on everything in the list.
    subtotal = 0;
}

// Store these if the user wants it to be stored

// Shipping Info to store.
class ShippingInfo {

    // Generated by the webpage.
    constructor( fname, lname, aLine1, aLine2, _city, _area, _pNumber, _ZIP, _Country )
    {
        this.firstName = fname;
        this.lname = lastName;
        this.addressLine1 = aLine1;
        this.addressLine2 = aLine2;
        this.city = _city;
        this.area = _area;
        this.phoneNumber = _pNumber;
        this.ZIP = _ZIP;
        this.Country = _Country;
    }
    // Name for shipping.
    firstName = "";
    lastName = "";
    // Address 
    addressLine1 = "";
    // Apartment, suite, etc
    addressLine2 = "";
    // City 
    city = "";
    // State/Province/Region
    area = "";
    // Phone number
    phoneNumber = "";
    // ZIP or Postal Code
    ZIP = "";
    // Country
    // For this project, we're just choosing from 5.
    Country = "";
}

// Credit/Debit Card Info.
class PaymentInfo {

    // Constructor. Generated by the webpage
    constructor( _name, _cardNumber, _securityCode, _expireCode, _shippingInfo )
    {
        this.name = _name;
        this.cardNumber = _cardNumber;
        this.securityCode = _securityCode;
        this.expireCode = _expireCode;
        this.shippingInfo = _shippingInfo;
    }

    // Cardholder Name
    name = "";
    // Card Number
    cardNumber = "";
    // CVC in back of card
    securityCode = "";
    // Expiration Date for card
    expireDate = new Date( "1-1-2100" );

    // Shipping Info.
    shippingInfo = null;

}
