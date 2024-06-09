import React, {useState} from "react";
import axios from "axios";

const DataEntry= () =>{
    const [denomination,setDenomination]= useState('');
    const [quantity, setQuantity]= useState('');


    const addEntry =async(e)=>{
        e.preventDefault();
        const token = localStorage.getItem('token');
        const config={
            headers: {
                'x-auth-token': token,
            },
        };
        try {
            await axios.post('/api/cash-register/add', { denomination, quantity }, config);
            alert('Entry added');
        } catch (err) {
            console.error(err);
        }
        };

        return (

            <form onSubmit={addEntry}>
                <input
                    type="text"
                    placeholder="Denomination"
                    value={denomination}
                    onChange={(e) => setDenomination(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                />
                <button type="submit">Add Entry</button>

            </form>
    );
};

export default DataEntry;