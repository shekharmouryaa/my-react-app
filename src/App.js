import React, { useEffect, useState } from "react";
import "./App.css"
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const App = () => {
    const [isRecording, setIsRecording] = useState(false)
    // const [yourName, setYourName] = useState([])
    const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

    const startListening = () => {
        SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
        setIsRecording(true)
    }

    useEffect(() =>{
    if(transcript.includes("women")){
        console.log(`Its your turn - ${new Date()}`);
    }

    },[transcript])
    
    const StopRecording=()=>{
        SpeechRecognition.stopListening()
        setIsRecording(false)
    }

    if (!browserSupportsSpeechRecognition) {
        alert("Please try another browser")
    }


    return (
        <>
            <div className="container">
                <h2>Speech to Text Converter</h2>
                <br/>
                <p>A React hook that converts speech from the microphone to text and makes it available to your React
                    components.</p>
                <div className="main-content">
                    {transcript}
                </div>

                <div className="btn-style">

                  {!isRecording ?  <button className={`btn m-2 btn-light`} onClick={startListening}>Start Listening</button> :
                   <button className={`btn m-2 btn-dark`} onClick={StopRecording}>Stop Listening</button> }

                </div>

            </div>

        </>
    );
};

export default App;