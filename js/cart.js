class Cart
{
    constructor()
    {
    }

    // Add the item via object.
    AddItemToCart( ...Item )
    {
        this.Items.push( ...Item );
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
    }

    // Call this function to calculate the subtotal.
    CalculateCartSubtotal()
    {
        let result = 0;

        for ( let i = 0; i < this.Items.length; i++ )
        {
            result += this.Items[i].price; 
        }

        this.subtotal = result;
    }

    // Items 
    Items = [];

    // Calculated value based on everything in the list.
    subtotal = 0;
}