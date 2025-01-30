import React from 'react';
import {CleaningList} from "../components/cleaningService/CleaningList";
import {CleaningProcess} from "../components/cleaningProcess/cleaningProcess";

export function ServiceRange() {
    return (
        <>
            <CleaningProcess></CleaningProcess>
            <CleaningList></CleaningList>
        </>
    )
}
