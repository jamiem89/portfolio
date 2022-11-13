import { useEffect, useState } from 'react'
import { useReward } from 'react-rewards';

const ConfettiCanon = () => {

    const [isReady, setIsReady] = useState(true);

    const handleScroll = () => {

        const bottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight

        if (bottom && isReady) {
            reward();
            setIsReady(false);
            setTimeout(() => {
                setIsReady(true);
            }, 2500)
        }
    };

    useEffect(() => {

        if(isReady) {
            window.addEventListener('scroll', handleScroll, {
                passive: true
            });

            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }

    }, [isReady]);

    const { reward, isAnimating } = useReward(
        'rewardId',
        'emoji',
        {
            'spread' : 140,
            'elementCount' : 120,
            'elementSize' : 40,
            'colors': ['#80FCD3']
        }
    );

    return (
        <button
            style={{
                'position': 'fixed',
                'bottom' : '0vh',
                'left' : ' 50%',
            }}
        >
            <span id="rewardId" />
        </button>
    )

}

export default ConfettiCanon;