import { useStyle } from '../states/StyleContext';
import SmokeyCursor from '../components/lightswind/smokey-cursor';
import BasicHome from '../components/BasicHome';
import AdvancedHome from '../components/AdvancedHome';
import MobileFooter from '../Layout/MobileFooter';

function Home() {
    const { style } = useStyle();
    const chaos = 6000;

    return (
        <div className='h-full'>
            <div className={`flex ${style == 'advanced' ? 'bg-zinc-950' : ''}`}>
                { style == 'advanced' ? 
                    <SmokeyCursor 
                        curl={10}
                        splatForce={chaos}
                        densityDissipation={1.5}
                        colorUpdateSpeed={4}
                        backgroundColor={{ r: 100, g: 0, b: 0 }}
                    /> :
                    null
                }

                { style == 'basic'
                    ? <BasicHome
                        className={`max-w-screen lg:px-7`}
                    />
                    : <BasicHome
                        className={`max-w-0 max-h-0 overflow-hidden`}
                    />
                }
                { style == 'advanced'
                    ? <AdvancedHome
                        className={`max-w-screen lg:px-7 text-gray-100`}
                    />
                    : <AdvancedHome
                        className={`max-w-0 max-h-0 overflow-hidden`}
                    />
                }
            </div>
            <MobileFooter />
        </div>
    );
}

export default Home;