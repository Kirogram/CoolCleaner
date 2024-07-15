import React from 'react';
import '../App.scss';
import {Header} from "./Header";
import {Footer} from "./Footer";

export function Layout(props: { children: React.ReactNode }) {
    return (
        <>
            <div className="body">
                <Header></Header>
                <main className="component-body">{props.children}</main>
                <Footer></Footer>
            </div>
        </>
    )
}
