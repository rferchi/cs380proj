class Item 
{
    // Create an item
    constructor( _name, _description, _price, _sale )
    {
        this.name = _name;
        this.description = _description;
        this.price = _price;
        this.sale = clamp( _sale, 0.0, 1.0 );
        this.modPrice();
    }

    // Function to calculate the price given the sale and other elements
    // CALL THIS IF PARSING FROM A JSON OBJECT!!!
    modPrice()
    {
        // TODO: shipping/handling and taxes
        // Do nothing.
        if ( this.sale <= 0.0 )
            return;

        // sale.
        this.price += ( this.price * this.sale ); 
    }
    
    // Name
    name = "";
    // Description
    description = "";
    // image names (2d array due to colors using different images)
    imageNames = [ [], [] ];
    // Which category does this item belong to? 0-General 1-Men 2-Women 3-Boys 4-Girls
    category = 0; 

    // Price
    price = "";
    // Sizes. These will be strings.
    sizes = [];
    // List of colors in hex (or css color defs). This will be displayed on the page as a circle with the color inside. MATCH THESE COLORS WITH THE IMAGE NAMES FOR COLOR IMAGES.
    colors = [];
    // Sale - optional. Will modify the pricing. 
    sale = 0;
    // Tax
    tax = 0;
    // Shipping Price
    shipping = 0;

    // Selected options if stored in a cart
    selectedColor = "";
    selectedSize = "";
}