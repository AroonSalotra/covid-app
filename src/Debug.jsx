import { useState, useEffect, useRef } from "react"

const Debug = () => {

    const [dataSort, setDataSort] = useState(false)
    const refOne = useRef()
    const refTwo = useRef()
    const refThree = useRef()

    const [result, setResult] = useState("")

    const [data, setData] = useState(
        [
            { name: "Aroon", age: 25 },
            { name: "Mitch", age: 47 },
            { name: "Sam", age: 17 },
            { name: "Karl", age: 21 }
        ]
    )

    useEffect(() => {
        const handleScroll = event => {
            console.log(event.target.ref)
        }
        const listener = "click"

        window.addEventListener(listener, handleScroll);
        return () => {
            window.removeEventListener(listener, handleScroll);
        };
    }, []);

    const handleClick = () => {
        console.log(result)
    }
    // console.log(test)

    const dataSorted = () => {
        return [...data].sort((a, b) =>
            a.age - b.age
        )
    }

    const handleClick2 = (event) => {
        setResult(event.target.value)
        console.log(result)
    }

    // console.log(dataSorted())


    const sortedData = [...data].sort((a, b) => b.age - a.age)

    return (
        <div ref={refOne}>

            {/* <button onClick={() => handleClick()}>Debug</button> */}
            <h1>current value: {result}</h1>

            <select name="" id="" onChange={handleClick2}>
                <option value="1" id="one" >One</option>
                <option value="2" id="two"  >Two</option>
                <option value="3">Three</option>
            </select>

        </div>
    );
}

export default Debug;