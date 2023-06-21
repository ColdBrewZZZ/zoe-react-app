import waves from 'nice-waves'

import React, {useEffect} from 'react';

const WaveComponent = () => {
    useEffect(
        () => {
            const waveElement = waves(
                {
                    fills: ['rgba(73, 153, 147, 0.82)', 'rgba(57, 54, 109, 0.5)'],
                    flowRate: 2       
                }
            ).mount('#waves')
        },
    []); 

    return (
        <div id="waves" style={{ position: 'absolute', width: '100%', height: '100%', zIndex: '-1' }}></div>   
    )
}

export default WaveComponent;