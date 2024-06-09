import React, { useState } from 'react';
import Auth from './components/Auth';
import DataEntry from './components/DataEntry';
import Summary from './components/Summary';

function App() {
const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));

return (
    <div className="App">
    {!isAuthenticated ? (
        <Auth setAuth={setIsAuthenticated} />
    ) : (
        <>
        <DataEntry />
        <Summary />
        </>
    )}
    </div>
);
}

export default App;
