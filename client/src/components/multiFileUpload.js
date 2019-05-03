import React, { useState } from "react";
import axios from "axios";

const MultiFileUpload = props => {
    const [state, setState] = useState({ files: null, loaded: 0 });

    const handleFiles = event => {
        setState({ ...state, files: event.target.files });
        console.log(event.target.files.length);
    };

    const handleSubmit = event => {
        console.log("thase thase , na thay to tari err 6");
        event.preventDefault();
        const data = new FormData();
        for (let x = 0; x < state.files.length; x++) {
            data.append("file", state.files[x]);
        }
        console.log("length", state.files);
        data.append("files", state.files);
        axios
            .post("http://localhost:5555/multi-upload", data, {
                onUploadProgress: progressEvent => {
                    setState({
                        ...state,
                        loaded:
                            (progressEvent.loaded / progressEvent.total) * 100
                    });
                }
            })
            .then(res => {})
            .catch(err => {
                throw new Error("Kaik Thayu la , Solve kr !!");
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>MultiFile Upload</h3>
            <input
                type="file"
                name="myFile"
                multiple={true}
                onChange={handleFiles}
            />
            <input type="submit" value="Upload a files" />
            <div>{state.files ? state.files.length : null} </div>
            <div>{state.loaded} ...</div>
            <hr />
        </form>
    );
};

export default MultiFileUpload;
