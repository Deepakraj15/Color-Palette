import { useState, useEffect } from 'react';
import Button from './Button';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import copyicon from './copyicon.png';
import './Cards.css';
function Cards() {
    let colors = [];
    const [isCopied, setCopy] = useState(false);
    const hexaDecimals = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    let colorString = '#';
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 6; j++) {
            colorString += hexaDecimals[Math.floor(Math.random() * 15)];
        }

        colors[i] = colorString;
        colorString = '#';

    } useEffect(
        () => {
            let timer1 = setTimeout(() => setCopy(false), 5000);
            return () => {
                clearTimeout(timer1);
            };
        },
        [isCopied]);

    return <>
        <div className="container">
            <div className='cards'>
                {colors.map((color, index) => (
                    <div className="card" key={index} style={{ backgroundColor: color, boxShadow: `7px 5px 5px ${color} ` }}>
                        <CopyToClipboard onCopy={() => setCopy(true)} text={color}>
                            {color === '#FFFFFF' ? <div className='text' style={{ color: 'black' }}>{color} <span className='icon-holder'>
                                <img className='copy-icon' src={copyicon} alt='image not found' />
                            </span></div> : <div className='text' style={{ color: 'white' }}>{color} <span className='icon-holder'>
                                <img className='copy-icon' src={copyicon} alt='image not found' />
                            </span></div>}
                        </CopyToClipboard>

                    </div>


                ))
                }
            </div>
            {/* copied message */}
            {isCopied ? <div className='copy-text'>Copied to clipboard!!</div> : null}

            <div>
                <Button />
            </div>
        </div>
    </>

}

export default Cards;