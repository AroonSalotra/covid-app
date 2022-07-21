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
                // console.log(data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    // const returnData = (target, code) => {
    //     if (data) {
    //         return <div className='data-container'>
    //             <Flag code={code} />
    //             <div className="data-text">
    //                 <h2><span className='data-subtitle'>Cases</span> {data[target].All.confirmed}</h2>
    //                 <h2><span className='data-subtitle'>Deaths</span> {data[target].All.deaths}</h2>
    //             </div>
    //             {/* <h2>Last Updated: {data[target].All.updated}</h2> */}
    //         </div>
    //     } else {
    //         return null
    //     }
    // }

    return (
        <div>
            <div className='main-container'>
                {/* {returnData("United Kingdom", "gb")}
                {returnData("US", "us")}
                {returnData("Denmark", "DK")}
                {returnData("Portugal", "PT")} */}
                {data ? Object.entries(data).map((elem) => {
                    return <div key={elem} className="data-container">
                        <h1>{elem[0]}</h1>
                        <div className='data-text'>
                            <h2><span className='data-subtitle'>Deaths</span> {elem[1].All.deaths}</h2>
                            <h2><span className='data-subtitle'>Cases</span> {elem[1].All.confirmed}</h2>
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