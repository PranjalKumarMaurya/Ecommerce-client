import { useState, useEffect } from "react";
import { fetchDataFromApi } from "../utils/api";

const useFetch = (endpoint) => {
    const [data, setData] = useState();

    const makeApiCall = async () => {
        const res = await fetchDataFromApi(endpoint);
        setData(res);
    };

    useEffect( async () => {
        makeApiCall();
    }, [endpoint]);

    return {data};
}

export default useFetch;