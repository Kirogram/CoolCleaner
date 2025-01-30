import React from 'react';
import {HeroSection} from "../components/heroSection/HeroSection";
import {CleaningList} from "../components/cleaningService/CleaningList";
import {Portfolio} from "../components/portfolio/Portfolio";
import {CleaningProcess} from "../components/cleaningProcess/cleaningProcess";
import {CleaningEvent} from "../components/cleaningEvent/CleaningEvent";
import {CleaningPrice} from "../components/cleaningPrice/CleaningPrice";
import {CleaingPoint} from "../components/cleaningPoint/CleaingPoint";
import {CleaningReview} from "../components/cleaningReview/CleaningReview";
import {CleaningInformation} from "../components/cleaningInformation/CleaningInformation";
import {CleaningDistance} from "../components/cleaningDistance/CleaningDistance";
import {Statistics} from "../components/statistics/Statistics";

export function MainPage() {
    return (
        <>
            <HeroSection></HeroSection>
            <div className="flex-default option-flex-center-vertical">
                <Statistics></Statistics>
                <CleaningList></CleaningList>
            </div>
            <Portfolio></Portfolio>
            <CleaningProcess></CleaningProcess>
            <CleaningEvent></CleaningEvent>
            <CleaningPrice></CleaningPrice>
            <CleaingPoint></CleaingPoint>
            <CleaningReview></CleaningReview>
            <CleaningInformation></CleaningInformation>
            <CleaningDistance></CleaningDistance>
        </>
    )
}
