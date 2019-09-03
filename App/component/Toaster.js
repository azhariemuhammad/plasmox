import React, {useState} from 'react'
import {Toast} from "native-base";


const Toaster = (props) => {
    return (
        Toast.show({
            text: props.text,
            buttonText: "Tutup",
            position: "top",
            duration: 3000,
            type: props.err ? "danger" : "success",
        })
    )
}

export default Toaster
