import '../App.scss';
import MyNavbar from '../components/MyNavbar';
import Logo from '../assets/logo.png';

export default function Contact() {
    return (
        <div className="container">

            <MyNavbar
                logo={Logo}
                name="QuantumSky Solutions"
                nav_items={[
                    { text: 'Home', href: "/"},
                    { text: 'Solutions', href: "/contact", disabled: true },
                    { text: 'About us', href: "/about", disabled: true },
                    { text: 'Pricing', href: "/pricing", disabled: true },
                    { text: 'Contact', href: "/contact",  active: true },
                ]}
            />

        </div>
    );
}