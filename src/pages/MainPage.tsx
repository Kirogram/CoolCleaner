import React from 'react';
import HeadCarousel from "../components/HeadCarousel";
import CleaningService from "../components/CleaningService";
import PriceContent from "../components/PriceContent";
import Portfolio from "../components/Portfolio";
import Benefit from "../components/Benefit";
import Locale from "../components/Locale";
import CheckPoint from "../components/CheckPoint";
import Reviews from "../components/Reviews";
import ServiceList from "../components/ServiceList";
import GoodPoint from "../components/GoodPoint";

const MainPage = () => {
    return (
        <>
            <HeadCarousel></HeadCarousel>
            <ServiceList></ServiceList>
            <Portfolio></Portfolio>
            <Benefit></Benefit>
            <GoodPoint></GoodPoint>
            <PriceContent></PriceContent>
            <CheckPoint></CheckPoint>
            <Reviews></Reviews>
            <CleaningService></CleaningService>
            {/*<MyComponent></MyComponent>*/}
            <Locale></Locale>
        </>
    )
}

export default MainPage;
