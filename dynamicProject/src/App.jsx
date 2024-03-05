// App.jsx
import React from 'react';
import Insults, { getInsultTexts, filterInsultsByPlay } from './component/Insults';

function App() {
    const insultTexts = getInsultTexts();
    console.log('Insult texts:', insultTexts);

    const filteredInsults = filterInsultsByPlay();
    console.log('Filtered insults from :', filteredInsults);

    return (
        <div>
            <h1>All Insults</h1>
            <Insults data={filteredInsults} />
        </div>
    );
}

export default App;
