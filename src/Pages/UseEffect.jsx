import { useState, useEffect } from "react"
import UpdateState from "../Components/UpdateState"
import Timer from "../Components/Timer"
import Fetch from "../Components/Fetch"

function UseEffect() {
    const [harga, setHarga] = useState(10000)
    const [qty, setQty] = useState(2)
    const [subTotal, setSubTotal] = useState(0)


    useEffect(() => {
        setSubTotal(harga * qty)
    }, [])
    
    return (
        <>
            <div className="font-bold font-medium text-xl">
                {subTotal}
            </div>
            <Timer/>
            <UpdateState/>
            <Fetch/>
        </>
    )
}

export default UseEffect

