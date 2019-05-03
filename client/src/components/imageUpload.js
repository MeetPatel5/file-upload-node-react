import React from "react";

function ImageUpload(props) {
    return (
        <form>
            <h3>Image Upload</h3>
            <input
                type="file"
                name="myFile"
                multiple={false}
                accept="image/*"
            />
            <input type="submit" value="Upload a file" />
            <hr />
        </form>
    );
}

export default ImageUpload;
