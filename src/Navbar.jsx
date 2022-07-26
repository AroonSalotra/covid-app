import { Link } from "react-router-dom"

const Navbar = () => {

    const listItems = [
        { text: "Home", id: 1, redirect: "/covid-app" },
        // { text: "About", id: 2, redirect: "/About" },
        { text: "Credit", id: 3, redirect: "/Credit" },
    ]

    // listItems.push({text: "Debug", id: 4, redirect: "/debug"})

    return (
        <nav className="navbar-container">
            {/* <ul className="navbar-list">
                {listItems.map(({ text, id, redirect }) => {
                    return <Link to={redirect} key={id} className="link">
                        <li>{text}</li>
                    </Link>
                })}
            </ul> */}
            <h1>COVID-19 Data by Country</h1>
        </nav>
    );
}

export default Navbar;