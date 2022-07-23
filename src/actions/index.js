export const Add_Products = 'Add_Products';
export const addProductAction = (data) =>{

    return {
            type:Add_Products,
            products:data
    }

}


export const Create_Product = 'Create_Product';

export const createProductAction = (data) =>{
    return {
        type:Create_Product,
        product:data
    }

}

export const Delete_Product = "Delete_Product"

export const deleteProductAction = (id) =>{
    return {
        type:Delete_Product,
        product_id:id
    }
}


export const Add_To_Cart = "Add_to_Cart";

export const addToCartAction = (id) =>{
    return {
        type:Add_To_Cart,
        product_id:id
    }
}


export const Remove_From_Cart = "Remove_From_Cart";

export const removeFromCartAction = (id) =>{
    return {
        type:Remove_From_Cart,
        product_id:id
    }
}

export const Qty_Increase = "Increase_Qty"
export const increaseQtyAction = (id) =>{
    return {
        type:Qty_Increase,
        product_id:id
    }
}

export const Qty_Decrease = "Decrease_Qty"
export const decreaseQtyAction = (id) =>{
    return {
        type:Qty_Decrease,
        product_id:id
    }
}


export const Update_Product = "Update_Product"

export const updateProductAction = (data) =>{
    return {
        type:Update_Product,
        product:data
    }
}