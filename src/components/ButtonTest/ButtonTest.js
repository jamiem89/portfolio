import { useEffect } from 'react'
import { useReward } from 'react-rewards';

const ButtonTest = () => {

    const handleScroll = () => {

        const bottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight

        if (bottom) {
            reward();
        }
    };

    useEffect(() => {

        window.addEventListener('scroll', handleScroll, {
            passive: true
        });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);

    const { reward, isAnimating } = useReward(
        'rewardId',
        'confetti',
        {
            'spread' : 140,
            'elementCount' : 180,
            'elementSize' : 10
        }
    );

    return (
        <button
            disabled={isAnimating}
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

export default ButtonTest;