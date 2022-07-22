import { type } from '@testing-library/user-event/dist/type';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Flag from './Flag';


const Data = () => {
    const [data, setData] = useState(null)
    const [index, setIndex] = useState(1)
    const [color, setColor] = useState("red")
    const url = "https://covid-api.mmediagroup.fr/v1/cases"

    useEffect(() => {
        axios.get(url)
            .then(response => {
                // console.log("connected")
                setData(response.data)
                setColor("green")
                // console.log(Object.keys(data))
                console.log(data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    const dataClass = () => {

    }


    return (
        <div>
            <button onClick={() => console.log(data)}>Data</button>
            <div className='main-container'>

                {data ? Object.entries(data).map((elem) => {
                    return <div key={elem} className="data-container">
                        {elem[1].All.abbreviation ? <Flag code={elem[1].All.abbreviation} /> : null}
                        <p className='data-title'>{elem[1].All.location}</p>
                        <p className='data-capital'>{elem[0]}</p>
                        <div className='data-text'>
                            <p className='data-subtitle'>Population
                                <span className='data-num'>{elem[1].All.population > 0 ? elem[1].All.population : "[NO DATA]"}</span></p>
                            <p className='data-subtitle'>Cases
                                <span className={`data-num ${elem[1].All.deaths < 50000 ? "col-orange" : "col-red"}`}>
                                    {elem[1].All.confirmed}</span></p>
                            {/* <p className='data-subtitle'>Deaths:
                                <span className={elem[1].All.deaths < 1000 ? "col-orange" : "col-red"}>
                                    {elem[1].All.deaths}</span></p> */}
                            <p className='data-subtitle'>Deaths
                                <span className={`data-num ${elem[1].All.deaths < 1000 ? "col-orange" : "col-red"}`}>
                                    {elem[1].All.deaths}</span></p>

                        </div>
                    </div>
                })
                    : null}
            </div>
        </div>
    );
}

export default Data;