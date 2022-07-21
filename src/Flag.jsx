import axios from "axios";
import { useState, useEffect } from "react";

const Flag = (props) => {
    const [data, setData] = useState(null)
    const [color, setColor] = useState("red")
    const url = `https://countryflagsapi.com/png/${props.code}`

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setData(response.data)
                setColor("green")
                // console.log(data["United Kingdom"])
            })
            .catch(error => {
                console.log(error)
            })
    }, [])
    return (
        <>
            {data ?
                <div><img src={url} className="flag-container" alt="" /></div>
                : null}
        </>
    );
}

export default Flag;