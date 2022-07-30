import { BsFillArrowUpCircleFill } from "react-icons/bs"

const ScrollToTop = (props) => {

    return (
        <div className={`scroll-container ${props.display}`}>
            {/* <div className="scroll-top" onClick={props.handleClick} /> */}
            <BsFillArrowUpCircleFill
                className="icon-scroll"
                onClick={props.handleClick} />
        </div>
    );
}

export default ScrollToTop;