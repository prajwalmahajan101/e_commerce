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