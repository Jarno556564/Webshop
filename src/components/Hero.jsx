function Hero({ bg_image, title, text }) {
    return (
        <>
            <div className="card">
                <img src={bg_image} className="card-img" alt="hero" />
                <div className="card-img-overlay d-flex flex-column justify-content-center text-center">
                    <h5 className="card-title fs-1">{title}</h5>
                    <p className="card-text fs-5">{text}</p>
                </div>
            </div>
        </>
    );
}

export default Hero;
