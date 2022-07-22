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
            <div className='main-container'>
                {data ? Object.entries(data).map((elem) => {
                    return <div key={elem} className="data-container">
                        {elem[1].All.abbreviation ? <Flag code={elem[1].All.abbreviation} /> : null}
                        <h1 className='data-title'>{elem[0]}</h1>
                        <div className='data-text'>
                            <h2 className='data-subtitle'>Deaths: <em />
                                <span className={elem[1].All.deaths < 1000 ? "col-green" : "col-orange"}>
                                    {elem[1].All.deaths}</span></h2>
                            <h2 className='data-subtitle'>Cases <em />
                                <span className={elem[1].All.cases < 50000 ? "col-green" : "col-orange"}>
                                    {elem[1].All.confirmed}</span></h2>
                        </div>
                    </div>
                })
                    : null}
            </div>
            {/* <button onClick={() => console.log(data)}>Data</button> */}
        </div>
    );
}

export default Data;