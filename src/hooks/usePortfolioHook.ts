import {useEffect, useState} from "react";
import {getPortfolioData} from "../api/api";

export function usePortfolioHook() {

    const [portfolioData, setPortfolioData] = useState([]);

    useEffect(() => {
        getPortfolioData().then(d => setPortfolioData(d));
    }, []);

    return portfolioData;
}
