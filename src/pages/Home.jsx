import React from 'react';
import flowersImg from "../assets/images/flowers.png"
import ReactPlayer from 'react-player/youtube';

const Home = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <img
                style={{ marginTop: 42 }}
                src={flowersImg}
                alt='An image of flowers'
                height={400}
            />
            {/* <img
                style={{ marginTop: 42 }}
                src={require("../assets/images/flowers.png")}
                alt='An image of flowers'
                height={400}
            /> */}
            <ReactPlayer
                style={{ marginTop: 42, display: "block", margin: "0 auto" }}
                url="https://www.youtube.com/watch?v=i2EcUZzk548"
                playing={true}
                volume={0.1}
                width={540}
            />
        </div>
    );
}

export default Home;