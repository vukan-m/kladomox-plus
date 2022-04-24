import { useState, useEffect } from 'react'

const useFetch = (url) => {

    const randomArray = [1, 2, 3, 4];

    const [data, setData] = useState(randomArray);
    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((err) => console.log(err));
    }, [url]);
    return data;
};

export default useFetch;