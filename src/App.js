import React from 'react';
import './App.css';
import Journal from './components/Journal';

const App = () => {
    return (
        <div>
            <div className="container-right">
                <Journal />
            </div>
        </div>
    );
};

export default App;
