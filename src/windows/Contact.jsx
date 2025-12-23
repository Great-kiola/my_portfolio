import { WindowControls } from "#components";
import { socials } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper"

const Contact = () => {
  return (
    <>
        <div id="window-header">
            <WindowControls target="contact" />
            <h2>Contact Me</h2>
        </div>

        <div className="p-5 space-y-5">
            <img src="/images/ola.jpg" alt="Ola" className="w-25 rounded-xl"/>
            <h3>Let's connect</h3>
            <p>Got an idea, Let's Talk</p>
            <p>hollabodey.kilaso@gmail.com</p>

            <ul>
                {socials.map(({id, bg, link, icon, text}) => (
                    <li key={id} style={{ backgroundColor: bg}}>
                        <a href={link} target="_blank" rel="noopener noreferrer" title={text}>
                            <img src={icon} alt={text} className="size-5" />
                            <p>{text}</p>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    </>
  )
}


const ContactWindow = WindowWrapper(Contact, 'contact')

export default ContactWindow;