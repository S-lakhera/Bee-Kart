import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext()

export const ProductProvider = ({children}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getProducts = async () => {
            try {
                let res = await axios.get(`https://dummyjson.com/products`)
                setProducts(res.data.products)
                
            } catch (e) {
                console.log("Error -> ",e);
            }finally{
                setLoading(false)
            }
        }
        getProducts()
    },[])

    return <ProductContext.Provider value={{products,loading}}>
        {children}
    </ProductContext.Provider>
}

export const useProduct = () => {
    const context = useContext(ProductContext)
    if(!context)
    {
        throw new Error("useProduct can be used within ProductProvider only.")
    }
    return context;
}