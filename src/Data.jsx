import { type } from '@testing-library/user-event/dist/type';
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import Flag from './Flag';
import ScrollToTop from './ScrollToTop';
import { BsFillArrowUpCircleFill } from "react-icons/bs"
import Sort from './Sort';
import UseGetAPI from './useGetAPI';
import LocalData from "./LocalData.json"



const Data = (props) => {
    // const [data, setData] = useState(LocalData)
    // const [data, setData] = useState(null)
    const [index, setIndex] = useState(1)
    const [amount, setAmount] = useState(16)
    const [color, setColor] = useState("red")
    const [state, setState] = useState([])
    const url = "https://covid-api.mmediagroup.fr/v1/cases"
    const [sortDescending, setSortDescending] = useState(false)

    const elemRef = useRef()


    // Get API
    const { data } = UseGetAPI(url)

    // console.log(data)

    const testObj = { name: "Test", age: 24 }

    const handleClick = () => {
        const target = elemRef.current
        return target.scrollTop = 0 + props.setDisplay("hide")
    }

    useEffect(() => {
        const listener = "wheel"

        const handleScroll = event => {
            const target = elemRef.current
            let result = target.scrollHeight
            // result > 1500 ? props.setDisplay("") : props.setDisplay("hide")
            // console.log(result)
            if (result % 800 <= 50) setAmount(amount + 8)
        }

        window.addEventListener(listener, handleScroll);

        return () => { window.removeEventListener(listener, handleScroll); };

    }, [amount]);

    // const sortData = () => {
    //     if (data) {
    //         return Object.entries(data)
    //             .sort((a, b) =>
    //                 a[1].All.confirmed - b[1].All.confirmed
    //             )
    //     }
    // }

    const getData = () => {
        let target = Object.entries(data)
        switch (props.value) {
            case "cases-high":
                return target.sort((a, b) =>
                    b[1].All.confirmed - a[1].All.confirmed
                )
                break;
            case "cases-low":
                // return sortData()
                return target.sort((a, b) =>
                    a[1].All.confirmed - b[1].All.confirmed
                )
            default:
                return Object.entries(data)
        }
    }

    return (
        <>
            <Sort value={props.value}
                setValue={props.setValue}
            />
            <button onClick={() => setAmount(amount + 8)}>ADD</button>
            <main className="main-container">
                <div className='content-container' ref={elemRef} >
                    {data ?
                        data.slice(0, amount)
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


            </main>
            <div className={`scroll-container ${props.display}`}>
                <BsFillArrowUpCircleFill
                    className="icon-scroll"
                    onClick={handleClick} />
                <p className='icon-text'>Scroll To Top</p>
            </div>
        </>
    );
}

export default Data;