import React from 'react';
import flowersImg from "../assets/images/flowers.png"

const Home = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <img
                style={{ marginTop: 42 }}
                src={flowersImg}
                alt='An image of flowers'
                height={400}
            />
            <img
                style={{ marginTop: 42 }}
                src={require("../assets/images/flowers.png")}
                alt='An image of flowers'
                height={400}
            />
        </div>
    );
}

export default Home;