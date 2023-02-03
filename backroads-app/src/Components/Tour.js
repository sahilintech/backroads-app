const Tour = (props) => {
    const { id, img, tourDate, title, text, country, days, price } = props;
    return (
        <article className="tour-card" key={id}>
            <div className="tour-img-container">
                <img src={img} className="tour-img" alt="" />
                <p className="tour-date">{tourDate}</p>
            </div>
            <div className="tour-info">
                <div className="tour-title">
                    <h4>{title}</h4>
                </div>
                <p>
                    {text}
                </p>
                <div className="tour-footer">
                    <p>
                        <span><i className="fas fa-map"></i></span> {country}
                    </p>
                    <p>{days}</p>
                    <p>{price}</p>
                </div>
            </div>
        </article>
    )
}
export default Tour;