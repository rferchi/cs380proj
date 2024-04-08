// Store these if the user wants it to be stored
// Shipping Info to store.
class ShippingInfo 
{
    // Generated by the webpage.
    constructor( fname, lname, aLine1, aLine2, _city, _area, _pNumber, _ZIP, _Country )
    {
        this.firstName = fname;
        this.lastName = lname;
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
    //Country = "";
}

// Credit/Debit Card Info.
class PaymentInfo 
{
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
    // Billing address. (ShippingInfo object)
    billingAddress = null;
}

// An "account". Every object in here will be stored locally.
class User
{
    // Multiple shipping addresses possible.
    shippingInfo = [];

    // Multiple payment methods possible.
    paymentMethods = [];

    // Cart with items.
    cart = null;

    // Set up the user!!!
    constructor() 
    {
        // It's fine if these are null, it just means that there's no info for them yet
        // Get the keys for the shipping info, and payment methods

        try {
            this.shippingInfo = JSON.parse( window.localStorage.getItem( "user" ) ).shippingInfo;
            this.paymentMethods = JSON.parse( window.localStorage.getItem( "user" ) ).paymentMethods;
            // Find a cart, if not then make a new cart.
            this.cart = JSON.parse( window.localStorage.getItem( "user" ) ).cart;
        }
        catch ( err )
        {
            // Give them something so they're not empty.
            this.shippingInfo[0] = new ShippingInfo();
            this.paymentMethods[0] = new PaymentInfo();
            this.cart = new Cart();
        }

        console.log( this );
    }

    // Create a user given a json object (extract from localstorage).
    static CreateUser( jsonObj = null )
    {
        let _user = null;
        if ( !jsonObj )
        {
            _user = new User();    
        }
        else
        {
            _user = JSON.parse(jsonObj);
        }

        return _user;
    }
    // Add the item via object.
    AddItemToCart( ...Item )
    {
        this.Items.push( ...Item );
        User.Save( this );
    }

    // Remove the item name.
    RemoveItemFromCart( itemname )
    {
        // get the index for the item
        let idx = this.Items.indexOf( itemname );

        // If it's valid, remove the item.
        if ( idx > -1 )
        {
            this.Items = this.Items.splice( idx, 1 );
        }

        User.Save( this );
    }

    //
    DisplayCartContents()
    {
        let ul = document.getElementById( "cart-list" );

        let itemslength = this.Items.length;

        if ( itemslength <= 0 )
        {
            // Display: You have no items in the cart.
            return;
        }

        // 
        for ( let i = 0; i < itemslength; i++ )
        {
            let li = document.createElement( "li" );
            ul.appendChild(li);


            // list of divs, start here.
            let div = document.createElement("div");

            div.setAttribute("id", `cart-item${(i+1)}`)

            li.appendChild( div );
        }   
    }

    // Static function to save your progress on shopping.
    static SaveUser( user )
    {
        window.localStorage.clear();
        window.localStorage.setItem( "user", JSON.stringify( user ) );
    }

    // items in the wishlist to display to the user. Show to user in /wishlists.html
    Wishlist = [];
}