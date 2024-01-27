import React, {useEffect} from 'react';
import './App.scss';
import Layout from "./components/layout/Layout";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage";
import AboutCool from "./pages/AboutCool";
import ServicePrice from "./pages/ServicePrice";
import ServiceRange from "./pages/ServiceRange";
import ServiceLocale from "./pages/ServiceLocale";
import ServicePortfolio from "./pages/ServicePortfolio";
import ServiceReview from "./pages/ServiceReview";
import PortfolioDetail from "./components/PortfolioDetail";
import ServiceList from "./components/ServiceList";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import {POST} from "./services/Route";
import Popup from "./components/popup/Popup";
import Modal from "./components/modal/Modal";
import Popup2 from "./components/popup/Popup2";


const App = () => {

    async function userLog() {
        const referrer = document.referrer;
        const params = {referrer: referrer};
        await POST('logHistory.do', params);
    }

    useEffect(() => {
        userLog();
    }, []);

    return (
        <>
            <Layout>
                <Popup></Popup>
                <Popup2></Popup2>
                <Modal></Modal>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<MainPage/>}/>
                        <Route path="about" element={<AboutCool/>}/>
                        <Route path="servicePrice" element={<ServicePrice/>}/>
                        <Route path="serviceRange" element={<ServiceRange/>}/>
                        <Route path="serviceLocale" element={<ServiceLocale/>}/>
                        <Route path="servicePortfolio" element={<ServicePortfolio/>}/>
                        <Route path="serviceReview" element={<ServiceReview/>}/>
                        <Route path="portfolioDetail" element={<PortfolioDetail/>}/>
                        <Route path="serviceList" element={<ServiceList/>}/>
                        <Route path="privacy" element={<Privacy/>}/>
                        <Route path="terms" element={<Terms/>}/>
                    </Routes>
                </BrowserRouter>
            </Layout>
        </>
    );
}

export default App;
