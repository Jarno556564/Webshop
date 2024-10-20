// Assets
import '../App.scss';
import Logo from '../assets/logo.png';
import shipImage from '../assets/ship.png';
import { ShieldOutlined, ShieldFilled } from "@ricons/material";

import { Icon, IconConfigProvider } from "@ricons/utils";

// Import necessary Components
import MyNavbar from '../components/MyNavbar';
import Hero from '../components/Hero';
import Card from '../components/Card';
import Button from '../components/Button';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <div className="container-fluid">

            <div className="container">
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
            </div>

            <div className="container-fluid mb-5">
                <Hero
                    bg_image="https://placehold.co/2560x600"
                    title="Lorem ipsum"
                    text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                />
            </div>

            <div className="container">
                <div className="row mb-5">
                    <div className="col-lg">
                        <img src={shipImage} className="img-fluid" alt="Rocket Ship" />
                    </div>
                    <div className="col-lg">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>
                <div className="row d-flex flex-row-reverse mb-5">
                    <div className="col-lg">
                        <img src={shipImage} className="img-fluid" alt="Rocket Ship" />
                    </div>
                    <div className="col-lg">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>
            </div>

            <div className="container text-center mb-5">
                <h1>Why QuantumSky</h1>
                <div className="row row-cols-lg-3">
                    <div className="col">
                        <IconConfigProvider color="blue" size="42">
                            <Icon>
                                <ShieldFilled />
                            </Icon>
                        </IconConfigProvider>
                        <Card
                            title="DDOS Protection"
                            text="Lorem ipsum dolor sit amet"
                            card_styling=""
                            button={
                                <Button text="View more" href="#" />
                            }
                        />
                    </div>
                    <div className="col">
                        <IconConfigProvider color="blue" size="42">
                            <Icon>
                                <ShieldOutlined />
                            </Icon>
                        </IconConfigProvider>
                        <Card
                            title="DDOS Protection"
                            text="Lorem ipsum dolor sit amet"
                            card_styling=""
                            button={
                                <Button text="View more" href="#" variant="info" />
                            }
                        />
                    </div>
                    <div className="col">
                        <IconConfigProvider color="blue" size="42">
                            <Icon>
                                <ShieldFilled />
                            </Icon>
                        </IconConfigProvider>
                        <Card
                            title="DDOS Protection"
                            text="Lorem ipsum dolor sit amet"
                            card_styling=""
                            button={
                                <Button text="View more" href="#" />
                            }
                        />
                    </div>
                    <div className="col">
                        <IconConfigProvider color="blue" size="42">
                            <Icon>
                                <ShieldOutlined />
                            </Icon>
                        </IconConfigProvider>
                        <Card
                            title="DDOS Protection"
                            text="Lorem ipsum dolor sit amet"
                            card_styling=""
                            button={
                                <Button text="View more" href="#" variant="info" />
                            }
                        />
                    </div>
                    <div className="col">
                        <IconConfigProvider color="blue" size="42">
                            <Icon>
                                <ShieldFilled />
                            </Icon>
                        </IconConfigProvider>
                        <Card
                            title="DDOS Protection"
                            text="Lorem ipsum dolor sit amet"
                            card_styling=""
                            button={
                                <Button text="View more" href="#" />
                            }
                        />
                    </div>
                    <div className="col">
                        <IconConfigProvider color="blue" size="42">
                            <Icon>
                                <ShieldOutlined />
                            </Icon>
                        </IconConfigProvider>
                        <Card
                            title="DDOS Protection"
                            text="Lorem ipsum Dolor sit amet"
                            card_styling=""
                            button={
                                <Button text="View more" href="#" variant="info" />
                            }
                        />
                    </div>
                </div>
            </div>

            <Footer
                logo={Logo}
                logo_name="QuantumSky Solutions"
                list_name='Pages'
                items={[
                    { text: 'Home', href: "/", active: true },
                    { text: 'Solutions', href: "/contact", disabled: true },
                    { text: 'About us', href: "/about", disabled: true },
                    { text: 'Pricing', href: "/pricing", disabled: true },
                    { text: 'Contact', href: "/contact" },
                ]}
                textbox_title='About us'
                textbox_content={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"}
            />
        </div>
    );
}