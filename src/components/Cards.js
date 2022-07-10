import Button from './Button';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './Cards.css';
function Cards() {
    let colors = [];
    let copied, setColor;

    const hexaDecimals = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    let colorString = '#';
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 6; j++) {
            colorString += hexaDecimals[Math.floor(Math.random() * 15)];
        }
        colors[i] = colorString;
        colorString = '#';


    }

    return <>
        <div className="container">
            <div className='cards'>
                {colors.map((color, index) => (

                    <div className="card" key={index} style={{ backgroundColor: color, boxShadow: `10px 5px 5px ${color} ` }}>
                        <CopyToClipboard onCopy={() => { copied = true; setColor = color; }} text={color}>
                            {color == '#FFFFFF' ? <div className='text' style={{ color: 'black' }}>{color}</div> : <div className='text' style={{ color: 'white' }}>{color}</div>}
                        </CopyToClipboard>
                    </div>

                ))
                }

            </div>
            {/* copied message */}
            {copied ? <div className='copy-text'>{setColor} Copied!!</div> : null}

            <div>
                <Button />
            </div>
        </div>
    </>
}
export default Cards;