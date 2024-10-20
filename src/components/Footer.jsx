import { Link } from "react-router-dom";

function Footer({ logo, logo_name, list_name, items, textbox_title, textbox_content, }) {
    return (
        <nav className="navbar bg-dark" data-bs-theme="dark">
            <div className="container text-light">
                <div className="row">
                    <div className="col-lg">
                        <Link className="navbar-brand" to="/">
                            <img src={logo} className="img-fluid" alt={logo_name} />
                            {logo_name}
                        </Link>
                    </div>
                    <div className="col-lg">
                        <ul className="navbar-nav footer-nav">
                            <h4 className="fw-bold">{list_name}</h4>
                            {items.map((item, index) => (
                                <li className="nav-item" key={index}>
                                    <Link className={`nav-link ${item.disabled ? 'disabled' : ''}${item.active ? 'active' : ''}`} to={item.href} disabled={item.disabled}>{item.text}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-lg">
                        <h3>{textbox_title}</h3>
                        <p>{textbox_content}</p>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Footer;