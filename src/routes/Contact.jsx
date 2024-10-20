// Assets
import '../App.scss';
import Logo from '../assets/logo.png';

// Import necessary Components
import MyNavbar from '../components/MyNavbar';
import Input from '../components/Input';
import Textarea from '../components/Textarea';
import Footer from '../components/Footer';
import Button from '../components/Button';

export default function Contact() {
    return (
        <div className="container-fluid">

            <div className="container">
                <MyNavbar
                    logo={Logo}
                    name="QuantumSky Solutions"
                    nav_items={[
                        { text: 'Home', href: "/" },
                        { text: 'Solutions', href: "/contact", disabled: true },
                        { text: 'About us', href: "/about", disabled: true },
                        { text: 'Pricing', href: "/pricing", disabled: true },
                        { text: 'Contact', href: "/contact", active: true },
                    ]}
                />
            </div>

            <div className="container mb-5">
                <Input
                    input_name='name'
                    label_text='Your name'
                    input_type='text'
                    input_placeholder='John Doe'
                    input_styling='my-3'
                />

                <Input
                    input_name='email'
                    label_text='Your email'
                    input_type='email'
                    input_placeholder='someoen@example.com'
                    input_styling='my-3'
                />

                <Textarea
                    textarea_name='message'
                    label_text='Leave a message'
                    textarea_placeholder='Lorem ipsum'
                    textarea_styling='my-3'
                />

                <Button text="Submit" />
            </div>

            <div className="container-fluid position-absolute bottom-0">
                <Footer
                    logo={Logo}
                    logo_name="QuantumSky Solutions"
                    list_name='Pages'
                    items={[
                        { text: 'Home', href: "/", },
                        { text: 'Solutions', href: "/contact", disabled: true },
                        { text: 'About us', href: "/about", disabled: true },
                        { text: 'Pricing', href: "/pricing", disabled: true },
                        { text: 'Contact', href: "/contact", active: true },
                    ]}
                    textbox_title='About us'
                    textbox_content={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"}
                />
            </div>

        </div>
    );
}