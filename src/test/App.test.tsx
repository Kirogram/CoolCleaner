import {defaultFallbackInView} from 'react-intersection-observer';
import {fireEvent, render, screen} from "@testing-library/react";
import {Provider} from "react-redux";
import reducer from "../reducers/reducer";
import React from "react";
import ServiceList from "../components/ServiceList";
import App from "../App";

defaultFallbackInView(true);

describe("Main Page Render & Order popup Event Tests", () => {
    it("Main Page Render Test", async () => {
        render(
            <Provider store={reducer}>
                <ServiceList/>
            </Provider>
        );

        //find element DOM
        const element = screen.getByText("데이터로 증명합니다");
        expect(element).toBeInTheDocument();

        //check element class
        expect(element).toHaveClass("content1-title");

    });

    it("Order Click Event & set Redux Value Test", async () => {
        render(
            <Provider store={reducer}>
                <App/>
            </Provider>,
        );
        //open Order Popup
        fireEvent.click(screen.getByText("빠른 상담 신청"));
        expect(screen.getByText("빠른 상담 신청")).toBeInTheDocument();

        //check redux order value
        expect(reducer.getState().order.value.cleaning).toEqual("");

        //Click Button Event
        fireEvent.click(screen.getByRole("button", {name: '입주 청소'}));

        //check change redux order value
        expect(reducer.getState().order.value.cleaning).toEqual("입주청소");

        //same event
        fireEvent.click(screen.getByRole("button", {name: '서울'}));
        expect(reducer.getState().order.value.locale).toEqual("서울");

        //change selectBox option
        fireEvent.change(screen.getByRole("combobox"), {target: {value: '11평형 ( 36.3㎡ )'}});
        expect(reducer.getState().order.value.py).toEqual("11평형 ( 36.3㎡ )");

        //change input value
        fireEvent.change(screen.getByRole("textbox"), {target: {value: "01092371531"}});
        expect(reducer.getState().order.value.phone).toEqual("01092371531");
    });
});
