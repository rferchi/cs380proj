class Cart
{
    constructor()
    {
        this.Items = null;
        this.subtotal = 0;
        console.log( this );
    }
    
    // Items 
    Items = [];

    // Calculated value based on everything in the list.
    subtotal = 0;
}