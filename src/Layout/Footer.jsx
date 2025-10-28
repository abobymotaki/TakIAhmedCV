import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useStyle } from "../states/StyleContext"
import { faLinkedin, faGithub, faDiscord } from "@fortawesome/free-brands-svg-icons";
import TakiAhmed from '../assets/TakiAhmed-CV.pdf';

function Footer() {
    const {style} = useStyle();

    return (
        <div className={`w-full flex justify-center z-100 backdrop-blur-md
            ${ style === "basic" ? 'bg-zinc-100' : 'bg-black/70 text-white'}
        `}>
            <div className="w-full max-w-[1440px] p-5 lg:p-10 lg:py-5 flex justify-between">
                <div>
                    <h1 className="text-lg font-bold">Connect With Me:</h1>
                    <div className="text-xl flex gap-2">
                        <a href="https://github.com/abobymotaki/" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
                        <a href="https://www.linkedin.com/in/taki-ahmed/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
                        <a href="https://discord.com/users/767613538746236928" target="_blank"><FontAwesomeIcon icon={faDiscord} /></a>
                    </div>
                </div>
                <div>
                    <a href={TakiAhmed} target="_blank"><span className={`${ style === 'basic' ? "" : 'bg-black/60'} font-bold p-2 px-8 block rounded-md border border-black`}>My CV</span></a>
                </div>
            </div>
        </div>
    )
}

export default Footer