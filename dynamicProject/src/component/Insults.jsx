// Insults.jsx
import React from 'react';

const insultsData = [
    { insult: 'Were such things here as we do speak about? Or have we eaten on the insane root That takes the reason prisoner?', play: 'Macbeth' },
    { insult: 'Never hung poison on a fouler toad', play: 'Richard III' },
    {insult : 'He thinks too much: such men are dangerous', play :'Julius Ceasar'}
];

export const getInsultTexts = () => insultsData.map(insult => insult.insult);

export const filterInsultsByPlay = (playName) => insultsData.filter(insult => insult.play === playName);
const Insults = ({ data }) => {
    return (
        <div>
            {data.map((insult, index) => (
                <div key={index}>
                    <p>{insult.insult}</p>
                    <em>{insult.play}</em>
                </div>
            ))}
        </div>
    );
};

export default Insults;