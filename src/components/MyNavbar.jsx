import { Link } from "react-router-dom";

function MyNavbar({ logo, name, nav_items }) {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src={logo} className="img-fluid" alt={name} />
                    {name}
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="#navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        {nav_items.map((item, index) => (
                            <li className="nav-item ms-auto " key={index}>
                                <Link className={`nav-link ${item.disabled ? 'disabled' : ''}${item.active ? 'active' : ''}`} to={item.href} disabled={item.disabled}>{item.text}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default MyNavbar;