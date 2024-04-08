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
        this.shippingInfo = window.localStorage.getItem( this.shippingInfo );
        this.paymentMethods = window.localStorage.getItem( this.paymentMethods );

        // Find a cart, if not then make a new cart.
        this.cart = window.localStorage.getItem( this.cart );
        if ( this.cart )
        {
            cart = new Cart();
        }
        console.log( this );
    }
}


// Item object constructor
function Item( _name, _description, _price, _sale )
{
    this.name = _name;
    this.description = _description;
    this.price = _price;
    this.sale = _sale;
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
        if ( Item.length > 1)
        {
            for ( let i = 0; i < Item.length; i++ )
            {
                
            }
        }
        else
        {
            this.Items = this.Items.filter(v => v !== Item);
        } 
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
class ShippingInfo {

}

class PaymentInfo {

}
