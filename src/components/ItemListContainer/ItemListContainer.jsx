import React from "react";

const ItemListContainer = ({greeting}) => {
    return (
        <div>
            <p style={{textAlign:"center",fontSize:"100px"}}>
                {greeting}
            </p>
        </div>
    );
};

export default ItemListContainer;