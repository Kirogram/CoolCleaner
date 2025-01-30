import {defaultFallbackInView} from 'react-intersection-observer';
import {render, screen} from "@testing-library/react";
import React from "react";
import App from "../App";
import {CleaningList} from "../components/cleaningService/CleaningList";

defaultFallbackInView(true);

describe("Main Page Render & Order popup Event Tests", () => {
    it("Main Page Render Test", async () => {
        render(
            <CleaningList/>
        );

        //find element DOM
        const element = screen.getByText("데이터로 증명합니다");
        expect(element).toBeInTheDocument();

        //check element class
        expect(element).toHaveClass("content1-title");

    });

    it("Order Click Event & set Redux Value Test", async () => {
        render(
            <App/>
        );
        //open Order Popup

    });
});
