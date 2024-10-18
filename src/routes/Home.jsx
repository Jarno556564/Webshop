// Assets
import '../App.scss';
import Logo from '../assets/logo.png';

// Components
import MyNavbar from '../components/MyNavbar';
import Hero from '../components/Hero';

export default function Home() {
    return (
        <div className="container-fluid">


            <MyNavbar
                logo={Logo}
                name="QuantumSky Solutions"
                nav_items={[
                    { text: 'Home', href: "/", active: true },
                    { text: 'Solutions', href: "/contact", disabled: true },
                    { text: 'About us', href: "/about", disabled: true },
                    { text: 'Pricing', href: "/pricing", disabled: true },
                    { text: 'Contact', href: "/contact" },
                ]}
            />

            <Hero
                bg_image="https://placehold.co/2560x600"
                h_title="Lorem ipsum"
                h_text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                overlay_position="position-absolute bottom-50 end-50"
            />

        </div>
    );
}