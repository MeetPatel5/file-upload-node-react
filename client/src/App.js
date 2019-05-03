import React from "react";
import "./App.css";
import SingleFileUpload from "./components/singleFileUpload";
import MultiFileUpload from "./components/multiFileUpload";
import ImageUpload from "./components/imageUpload";

function App() {
    return (
        <div className="App">
            <div>
                <SingleFileUpload />
            </div>
            <div>
                <MultiFileUpload />
            </div>
            <div>
                <ImageUpload />
            </div>
        </div>
    );
}

export default App;
