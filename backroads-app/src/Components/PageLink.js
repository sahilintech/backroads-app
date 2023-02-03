const PageLink = (props) => {
    return (
        <li key={props.id}>
            <a href={props.href} className={props.itemClass}>{props.text}</a>
        </li>
    )
}
export default PageLink;