import React from 'react';
import {CleaningPrice} from "../components/cleaningPrice/CleaningPrice";
import {CleaningOption} from "../components/cleaningPrice/CleaningOption";

export function ServicePrice() {
    return (
        <>
            <CleaningPrice></CleaningPrice>
            <CleaningOption></CleaningOption>
        </>
    )
}
