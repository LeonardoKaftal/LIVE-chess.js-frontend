import { useState } from "react";
import { Link } from "react-router-dom";
import  ChessLogo from"../assets/chess_logo.png";
import "../assets/chessLogin.css"
import { io } from "socket.io-client";

const ChessLogin = () => {
    const [username, setUsername] = useState(""); 
    const [roomId, setRoomId] = useState("");
    const serverAdress = `localhost:8080/?username=${username}`
    let socket;

    return (
    <div>
        <div className="chess-title-container"><img src={ChessLogo} alt="chess logo" /><h1>Online Chess</h1></div> 
        <div className="App-flex-container">
            
            <div className="login-flex-container">
                    <div className="login-container">
                        <div className="title-container">

                            <h1>Join a match</h1>
                            <h5>Enter your name and a room id to enter in a match</h5>
                        </div>

                        <div className="input-container">
                            <input type="text" placeholder='Name'

                                onChange={(event) => {
                                    setUsername(event.target.value);
                                } } />
                        </div>

                        <div className="input-container">
                            <input type="text" placeholder='Room id'

                                onChange={(event) => {
                                    setRoomId(event.target.value);
                                } } />
                        </div>

                        <div className="join-container">
                            {username !== "" && roomId !== "" &&
                                <button 
                                // @ts-ignore
                                onClick={
                                        socket = io(serverAdress)
                                }>
                                <Link 
                                    to={{
                                        pathname: '/chess',
                                        search: `?username=${encodeURIComponent(username)}`
                                    }}><h3>Join match</h3></Link>
                                    
                                </button>}
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    );
}

export default ChessLogin
