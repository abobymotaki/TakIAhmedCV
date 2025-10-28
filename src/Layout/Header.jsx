import { useStyle } from '../states/StyleContext';

function Header() {
    const { style, updateStyle } = useStyle();

    return (
        <div className='fixed top-0 left-0 w-full z-1000 backdrop-blur-md'>
            <div className={`flex justify-between items-center max-w-[1440px]
                text-sm lg:text-md py-1 mx-auto
            `}>
                <div className="space-x-2 px-5">
                    <a className={style === 'basic' ? 'navButton-basic' : 'navButton-advanced'} href={`${ style == 'basic' ? '#FrameOne' : '#FrameOneAdvanced'}`}>Home</a>
                    <a className={style === 'basic' ? 'navButton-basic' : 'navButton-advanced'} href={`${ style == 'basic' ? '#FrameTwo' : '#FrameTwoAdvanced'}`}>About</a>
                    <a className={style === 'basic' ? 'navButton-basic' : 'navButton-advanced'} href={`${ style == 'basic' ? '#FrameThree' : '#FrameThreeAdvanced'}`}>Experience</a>
                    {/* <a className={style === 'basic' ? 'navButton-basic' : 'navButton-advanced'} href={`${ style == 'basic' ? '#FrameFour' : '#FrameFourAdvanced'}`}>Projects</a> */}
                </div>
                <div className="px-5">
                    <abbr title="A lot of people like simple designs, while others like Fancy. Switch the mode to your liking!">
                        <button
                            onClick={updateStyle}
                            className={`cursor-pointer p-2 text-sm lg:text-md
                                    ${ style == 'basic' ? 'text-black' : 'text-white' }
                                `}
                        >
                            {style === 'basic' ? 'Fancy View' : 'Simple View'}
                        </button>
                    </abbr>
                </div>
            </div>
        </div>
    );
}

export default Header;