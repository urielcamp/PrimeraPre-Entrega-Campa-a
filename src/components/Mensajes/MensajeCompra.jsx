import React from 'react'
import Alert from '@mui/material/Alert';



const MensajeCompra = ({ purchaseId }) => {
    return (
        <Alert severity="success">Gracias por su compra, su codigo de compra es: {purchaseId}</Alert>
    )
}

export default MensajeCompra