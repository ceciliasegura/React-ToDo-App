export default function TaskMenu({ tags, filterTag }) {

    const clickTag = (e, tag, clear) => {
        e.preventDefault();
        filterTag(tag, clear);
    }

    return (
        <div className="menu-tag">
            <ul>
                {tags.map((v, i) => {
                    return <li onClick={(e) => clickTag(e, v)} key={i}>{v}</li>
                })}
                <li onClick={(e) => clickTag(e, "", true)}>All tags</li>
            </ul>
        </div>
    )
}