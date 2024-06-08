import React from "react";

function Home() {
    return (
        <>
            <div
                className="container d-flex justify-content-center"
                style={{ height: "85vh" }}
            >
                {/* Heading for the Home page */}
                <div className="container">
                    <h1 align="center ">Home page</h1>
                    <img className="img_banner" src={'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=400'} alt="" />
                </div>

            </div>
        </>
    );
}

export default Home;