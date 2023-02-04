export default function TaskMenu({ tags, tagSelected, filterTag }) {

    const clickTag = (e, tag, clear) => {
        e.preventDefault();
        filterTag(tag, clear);
    }

    return (
        <div className="menu-tag">
            <ul>
                {tags.map((v, i) => {
                    return <li onClick={(e) => clickTag(e, v)} style={tagSelected === v ? { textDecorationLine: "underline" } : {}} key={i}>{v}</li>
                })}
                <li onClick={(e) => clickTag(e, "", true)} style={!tagSelected ? { textDecorationLine: "underline" } : {}}>All tags</li>
            </ul>
        </div>
    )
}