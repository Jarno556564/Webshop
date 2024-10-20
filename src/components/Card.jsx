function Card({
    styling = null,
    title = null,
    text = null,
    image = null,
    imageAlt = null,
    button = null,
}) {
    return (
        <div className={`card ${styling}`}>
            {image && <img className='card-img-top' src={image} alt={imageAlt} />}
            <div className='card-body text-center'>
                {title && <div className='card-title'><h5>{title}</h5></div>}
                {text && <div className='card-text'><p>{text}</p></div>}
                {button}
            </div>
        </div>
    );
}

export default Card;