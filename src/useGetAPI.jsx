import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const UseGetAPI = (url, amount) => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(url)
            .then(response => {
                // setData(response.data)
                setData(Object.entries(response.data))
                // console.log(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [url])

    return { data }

}

export default UseGetAPI;