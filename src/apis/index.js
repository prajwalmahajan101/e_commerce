import {API_URLS} from "../utils";


const customFetch = async (url, { body, ...customConfig }) => {
    const headers = {
        "content-type": "application/json",
        Accept: "application/json",
    };
    const config = {
        ...customConfig,
        header: {
            ...headers,
            ...customConfig.headers,
        },
    };
    if (body) {
        // config.body = JSON.stringify(body);
        config.body = body;
    }
    try {
        const response = await fetch(url, config);
        const data = await response.json();
        return {
            data,
            success: true,
        };
    } catch (err) {
        console.log("Error will fetching Data", err);
        return {
            message: "error while fetching",
            success: false,
        };
    }
};





export const getProducts = () =>{
    const url = API_URLS.getProducts();
    const method = "GET";
    return customFetch(url, { method });
}


export const createProduct= (data) => {
    const url = API_URLS.createProduct();
    const method = "POST";
    const body = Object.keys(data).map((key) => {
        return encodeURIComponent(key) + '=' + encodeURIComponent(data[key]);
    }).join('&');
    const headers = {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    };

    return customFetch(url, { body, method, headers });
};