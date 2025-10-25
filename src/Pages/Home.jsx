import { useStyle } from '../states/StyleContext';
import SmokeyCursor from '../components/lightswind/smokey-cursor';
import BasicHome from '../components/BasicHome';
import AdvancedHome from '../components/AdvancedHome';

function Home() {
    const { style } = useStyle();

    return (
        <div className='min-w-100 flex'>
            { style == 'advanced' ? 
                <SmokeyCursor 
                    curl={1}
                    splatForce={4}
                    densityDissipation={10}
                    colorUpdateSpeed={2}
                    backgroundColor={{ r: 100, g: 0, b: 0 }}
                /> :
                ''
            }

            { style == 'basic'
                ? <BasicHome
                    className={`max-w-screen lg:px-7`}
                />
                : <BasicHome
                    className={`max-w-0 overflow-hidden`}
                />
            }
            { style == 'advanced'
                ? <AdvancedHome
                    className={`max-w-screen lg:px-7 text-gray-100`}
                />
                : <AdvancedHome
                    className={`max-w-0 overflow-hidden`}
                />
            }
        </div>
    );
}

export default Home;