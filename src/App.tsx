import React, {useEffect} from 'react';
import './App.scss';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Privacy from "./components/legal/Privacy";
import Terms from "./components/legal/Terms";
import {MainPage} from "./pages/MainPage";
import {Popup} from "./popup/Popup";
import {Modal} from "./modal/Modal";
import {insertLog} from "./api/api";
import {Layout} from "./layout/Layout";
import {AboutCool} from "./pages/AboutCool";
import {ServicePortfolio} from "./pages/ServicePortfolio";
import {ServicePrice} from "./pages/ServicePrice";
import {ServiceRange} from "./pages/ServiceRange";
import {ServiceReview} from "./pages/ServiceReview";


const App = () => {
    useEffect(() => {
        const referrer = document.referrer;
        insertLog({referrer: referrer});
    }, []);

    return (
        <>
            <BrowserRouter>
                <Layout>
                    <Popup></Popup>
                    <Modal></Modal>
                    <Routes>
                        <Route path="/" element={<MainPage/>}/>
                        <Route path="about" element={<AboutCool/>}/>
                        <Route path="servicePrice" element={<ServicePrice/>}/>
                        <Route path="serviceRange" element={<ServiceRange/>}/>
                        <Route path="servicePortfolio" element={<ServicePortfolio/>}/>
                        <Route path="serviceReview" element={<ServiceReview/>}/>
                        <Route path="privacy" element={<Privacy/>}/>
                        <Route path="terms" element={<Terms/>}/>
                    </Routes>
                </Layout>
            </BrowserRouter>
        </>
    );
}

export default App;
