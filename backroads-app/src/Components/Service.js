const Service = (props) => {
    return (
        <article className="service" key={props.id}>
            <span className="service-icon">
                <i className={props.icon}></i>
            </span>
            <div className="service-info">
                <h4 className="service-title">{props.title}</h4>
                <p className="service-text">
                    {props.text}
                </p>
            </div>
        </article>
    );
}
export default Service