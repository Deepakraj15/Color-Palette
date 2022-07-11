import Button from './Button';
import { AlertContainer, alert } from 'react-custom-alert';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import copyicon from './copyicon.png';
import './Cards.css';
function Cards() {
    let colors = [];
    const hexaDecimals = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    let colorString = '#';
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 6; j++) {
            colorString += hexaDecimals[Math.floor(Math.random() * 15)];
        }

        colors[i] = colorString;
        colorString = '#';

    }
    const alertSuccess = () => alert({ message: 'Copied to clipboard', type: 'success' });

    return <>
        <div className="container">
            <div className='cards'>
                {colors.map((color, index) => (
                    <div className="card" key={index} style={{ backgroundColor: color, boxShadow: `7px 5px 5px ${color} ` }}>
                        <CopyToClipboard onCopy={() => { alertSuccess() }} text={color}>
                            {color === '#FFFFFF' ? <div className='text' style={{ color: 'black' }}>{color} <span className='icon-holder'>
                                <img className='copy-icon' src={copyicon} alt="" />
                            </span></div> : <div className='text' style={{ color: 'white' }}>{color} <span className='icon-holder'>
                                <img className='copy-icon' src={copyicon} alt="" />
                            </span></div>}
                        </CopyToClipboard>
                    </div>
                ))
                }
            </div>

            <AlertContainer floatingTime={3000} />

            <div>
                <Button />
            </div>
        </div>
    </>

}

export default Cards;