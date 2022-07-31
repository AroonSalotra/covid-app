import { useState } from "react"

const Debug = () => {

    const [dataSort, setDataSort] = useState(false)

    const [data, setData] = useState(
        [
            { name: "Aroon", age: 25 },
            { name: "Mitch", age: 47 },
            { name: "Sam", age: 17 },
            { name: "Karl", age: 21 }
        ]
    )

    const handleClick = () => {
        dataSort ? setDataSort(false) : setDataSort(true)
    }

    const test = dataSort ? "true" : "false"

    // console.log(test)

    const dataSorted = () => {
        return [...data].sort((a,b) => 
            a.age - b.age
        )
    }

    console.log(dataSorted())


    const sortedData = [...data].sort((a, b) => b.age - a.age)

    return (
        <div>

        <button onClick={() => handleClick()}>Debug</button>

            {
                (dataSort ? dataSorted() : data )
                .map(({ name, age }) => {
                    return <div key={age}>
                        <h1>{name}</h1>
                        <h2>{age}</h2>
                    </div>
                })}



        </div>
    );
}

export default Debug;