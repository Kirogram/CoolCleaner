import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import '../../App.scss';

const Layout = (props: {
    children: React.ReactNode
}) => {
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
export default Layout;
