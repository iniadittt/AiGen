import { TypeAnimation } from 'react-type-animation';

const HeaderTyping = ({ className }: any) => {
    return (
        <TypeAnimation
            sequence={[
                'AiGen',
                3000,
                'AiGen Dapat Membantu Anda Dalam Melihat Saham',
                2000,
                'AiGen Dapat Membantu Anda Dalam Memprediksi Saham',
                2000,
                'AiGen Dapat Membantu Anda Dalam Merekomendasikan Saham',
                2000,
            ]}
            wrapper="span"
            speed={16}
            repeat={Infinity}
            className={className}
        />
    );
};

export default HeaderTyping