import { TypeAnimation } from 'react-type-animation';

const HeaderTyping = () => {
    return (
        <TypeAnimation
            sequence={[
                'AiGen dapat Melihat Saham',
                1000,
                'AiGen dapat Memprediksi Saham',
                1000,
                'AiGen dapat Merekomendasikan Saham',
                1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className='inline-block text-6xl font-bold leading-snug'
        />
    );
};

export default HeaderTyping