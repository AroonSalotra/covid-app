const Navbar = () => {

    const listItems = [
        { text: "Home", id: 1 },
        { text: "About", id: 2 },
        { text: "Credit", id: 3 }
    ]

    return (
        <div className="navbar-container">
            <ul className="navbar-list">
                {listItems.map(({ text, id }) => {
                    return <li key={id}>{text}</li>
                })}
            </ul>
        </div>
    );
}

export default Navbar;