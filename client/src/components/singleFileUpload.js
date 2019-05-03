import React, { useState } from "react";
import axios from "axios";

const SingleFileUpload = props => {
    const [state, setState] = useState({ file: null });

    const setFilehandler = event => {
        setState({ file: event.target.files[0] });
        console.log(event.target.files[0]);
    };

    const handleSubmit = event => {
        event.preventDefault();
        const data = new FormData();
        if (state.file) {
            data.append("file", state.file);
            axios
                .post("http://localhost:5555/single-upload", data, {})
                .then(res => {})
                .catch(err => {
                    throw new Error("Kaik Thayu la , Solve kr !!");
                });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>SingleFile Upload</h3>
            <input
                type="file"
                name="myFile"
                multiple={false}
                onChange={setFilehandler}
            />
            <input type="submit" value="Upload a file" />
            <hr />
            <div>{state.file ? state.file.name : null}</div>
        </form>
    );
};

export default SingleFileUpload;
