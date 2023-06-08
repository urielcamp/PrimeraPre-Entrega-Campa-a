const products =  [
    {
        id: "1",
        name: "taza de star wars",
        color: "negro",
        price: 250,
        img: "https://th.bing.com/th/id/OIP.vG9ydDICQ3DvY492o2F3aQHaHa?pid=ImgDet&rs=1",
        descripcion: "taza de Darth Vader",
    },
    {
        id: "2",
        name: "taza de harry potter",
        color: "rojo",
        price: 350,
        img: "https://th.bing.com/th/id/OIP.70w6Hl26jwRsJgETlw8TpwHaHa?pid=ImgDet&rs=1",
        descripcion: "taza de Hogwarts",
    },
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve (products)
        }, 1000)
    })
}

    export const getProductsById = (productId) => {
        return new Promise ((resolve) => {
            setTimeout (() => {
                resolve (products.find(prod => prod.id === productId))
            }, 1000)
        })
}