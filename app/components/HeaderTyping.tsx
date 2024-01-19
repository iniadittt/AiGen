import { TypeAnimation } from 'react-type-animation';

const HeaderTyping = ({ className }: any) => {
    return (
        <TypeAnimation
            sequence={[
                'Connect',
                3000,
                'Connect Dengan Keluarga',
                2000,
                'Connect Dengan Sahabat Atau Teman',
                2000,
                'Connect Dengan Orang Disekitarmu',
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