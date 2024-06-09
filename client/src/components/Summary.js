import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Summary = () => {
const [summary, setSummary] = useState(0);

useEffect(() => {
    const fetchSummary = async () => {
    const token = localStorage.getItem('token');
    const config = {
        headers: {
        'x-auth-token': token,
        },
    };
    try {
        const res = await axios.get('/api/cash-register/summary', config);
        setSummary(res.data.total);
    } catch (err) {
        console.error(err);
    }
    };
    fetchSummary();
}, []);

return (
    <div>
        <h2>Total Cash in Register: €{summary}</h2>
    </div>
);
};

export default Summary;
