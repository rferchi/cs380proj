class Item 
{
    // Create an item
    constructor( _name, _description, _price, _sale, jsonObj )
    {
        this.name = _name;
        this.description = _description;
        this.price = _price;
        this.sale = clamp( _sale, 0.0, 1.0 );
        this.modPrice();
    }

    // Function to calculate the price given the sale and other elements
    // PARSE THIS IF PARSING FROM A JSON OBJECT!!!
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
    // Filename.
    imageName = "";
    // Price
    price = "";
    // Sizes. These will be strings.
    sizes = [];
    // List of colors in hex. This will be displayed on the page as a circle with the color inside.
    colors = [];
    // Sale - optional. Will modify the pricing.
    sale = 0;
    // Tax
    tax = 0;
    // Shipping Price
    shipping = 0;
}