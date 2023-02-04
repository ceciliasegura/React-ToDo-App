export default function TaskMenu({ tags, filterTag }) {

    const clickTag = (e, tag) => {
        e.preventDefault();
        filterTag(tag);
    }

    return (
        <div className="menu-tag">
            <ul>
                {tags.map((v, i) => {
                    return <li onClick={(e) => clickTag(e, v)} key={i}>{v}</li>
                })}
            </ul>
        </div>
    )
}