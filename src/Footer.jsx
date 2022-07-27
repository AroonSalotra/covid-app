const Footer = () => {
    // https://www.countryflagsapi.com/
    // https://github.com/M-Media-Group/Covid-19-API

    return (
        <div className="footer">
            <p>This website was created using</p>
            <ul className="list">
                <li>Flags API: <a href="" className="link">https://www.countryflagsapi.com/</a></li>
                <li>Covid API: <a href="https://github.com/M-Media-Group/Covid-19-API" target={"_blank"} rel="noreferrer"
                    className="link">https://github.com/M-Media-Group/Covid-19-API</a></li>
            </ul>
        </div>
    );
}

export default Footer;