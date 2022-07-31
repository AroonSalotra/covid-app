import { type } from '@testing-library/user-event/dist/type';
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import Flag from './Flag';
import ScrollToTop from './ScrollToTop';
import { BsFillArrowUpCircleFill } from "react-icons/bs"



const Data = (props) => {
    const [data, setData] = useState(null)
    const [index, setIndex] = useState(1)
    const [color, setColor] = useState("red")
    const url = "https://covid-api.mmediagroup.fr/v1/cases"
    const [sortDescending, setSortDescending] = useState(false)

    const elemRef = useRef()

    useEffect(() => {
        axios.get(url)
            .then(response => {
                // console.log("connected")
                setData(response.data)
                setColor("green")
                // console.log(Object.keys(data))
                // console.log(data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    const handleClick = () => {
        const target = elemRef.current
        let y = target.scrollTop
        return target.scrollTop = 0 + props.setDisplay("hide")
    }

    const setSort = () => {
        (sortDescending ? setSortDescending(false) : setSortDescending(true))
    }

    useEffect(() => {
        const handleScroll = event => {
            const target = elemRef.current
            let result = target.scrollTop
            // console.log(result)
            result > 1500 ? props.setDisplay("") : props.setDisplay("hide")
        }

        const listener = "wheel"

        window.addEventListener(listener, handleScroll);
        return () => {
            window.removeEventListener(listener, handleScroll);
        };

    }, []);

    const sortData = () => {
        if (data) {
            return Object.entries(data)
                .sort((a, b) =>
                    b[1].All.confirmed - a[1].All.confirmed
                )
        }
    }

    const test = () => {

        if (sortDescending) {
            return sortData()
        } else {
            return Object.entries(data)
        }
    }

    return (
        <div className=''>
            <button onClick={() => setSort()}>Test</button>
            <div className="main-container">
                <div className='content-container' ref={elemRef} >
                    {data ? test()
                        .map((elem) => {
                            return <div key={elem} className="data-container">
                                {elem[1].All.abbreviation ? <Flag code={elem[1].All.abbreviation} /> : <div className='img-placeholder'></div>}
                                <p className='data-title'>{elem[1].All.location}</p>
                                <p className='data-capital'>{elem[0]}</p>
                                <div className='data-text'>
                                    <p className='data-subtitle'>Population
                                        <span className='data-num'>{elem[1].All.population > 0 ? elem[1].All.population : "[NO DATA]"}</span></p>
                                    <p className='data-subtitle'>Cases
                                        <span className={`data-num ${elem[1].All.deaths < 50000 ? "col-orange" : "col-red"}`}>
                                            {elem[1].All.confirmed}</span></p>
                                    <p className='data-subtitle'>Deaths
                                        <span className={`data-num ${elem[1].All.deaths < 1000 ? "col-orange" : "col-red"}`}>
                                            {elem[1].All.deaths}</span></p>

                                </div>
                            </div>
                        })
                        : null}
                </div>

                {/* <ScrollToTop
                    display={props.display}
                    handleClick={handleClick} /> */}

                <div className={`scroll-container ${props.display}`}>
                    <BsFillArrowUpCircleFill
                        className="icon-scroll"
                        onClick={handleClick} />
                    <p className='icon-text'>Scroll To Top</p>
                </div>

            </div>
        </div>
    );
}

export default Data;