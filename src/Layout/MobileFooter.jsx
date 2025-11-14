import { useStyle } from "../states/StyleContext";

function MobileFooter() {
    const { style } = useStyle();

    return (
        <div className={`px-5 lg:hidden sticky bottom-0 z-1000 ${style === 'basic' ? 'bg-white' : 'bg-zinc-950/70 backdrop-blur-md'}
            flex
        `}>
            <a className={style === 'basic' ? 'navButton-basic-b' : 'navButton-advanced-b'} 
                href={`${ style == 'basic' ? '#FrameOne' : '#FrameOneAdvanced'}`}
            >
                <i className="fas fa-home"></i>
                <span>Home</span>
            </a>
            <a className={style === 'basic' ? 'navButton-basic-b' : 'navButton-advanced-b'} 
                href={`${ style == 'basic' ? '#FrameTwo' : '#FrameTwoAdvanced'}`}
            >
                <i className="fas fa-question"></i>
                <span>About</span>
            </a>
            <a className={style === 'basic' ? 'navButton-basic-b' : 'navButton-advanced-b'} 
                href={`${ style == 'basic' ? '#FrameThree' : '#FrameThreeAdvanced'}`}
            >
                <i className="fas fa-toolbox"></i>
                <span>Experience</span>
            </a>
            <a className={style === 'basic' ? 'navButton-basic-b' : 'navButton-advanced-b'} 
                href={`${ style == 'basic' ? '#FrameFour' : '#FrameFourAdvanced'}`}
            >
                <i className="fas fa-money-bill"></i>
                <span>Projects</span>
            </a>
        </div>
    )
}

export default MobileFooter