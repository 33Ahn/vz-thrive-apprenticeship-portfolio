import React, { createRef, useState } from "react";

import { Avatar, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import UploadIcon from "@mui/icons-material/CloudUpload";

const imageUpload = (props) => {
  const [image, _setImage] = useState("");
  const inputFileRef = createRef();

  const cleanup = () => {
    URL.revokeObjectURL(image && props.image);
    inputFileRef.current.value = null;
  };

  const setImage = (newImage) => {
    if (image) {
      cleanup();
    }
    _setImage(newImage);
  };

  const handleOnChange = (event) => {
    const newImage = event.target.files[0];

    if (newImage) {
      setImage(URL.createObjectURL(newImage));
    }

    props.imageUpload(event);
  };

  const uploadButton = (
    <Button
      color="primary"
      component="span"
      style={{
        marginBottom: "100px",
        width: "138px",
        borderRadius: "25px",
        fontFamily: "arial",
        textAlign: "center",
        padding: "5px",
      }}
      startIcon={image ? <DeleteIcon /> : <UploadIcon />}
    >
      {image ? "uploaded" : "upload"}
    </Button>
  );

  return (
    <div style={{ textAlign: "center" }}>
      <Avatar
        alt="Avatar"
        src={image}
        style={{
          width: "100px",
          borderRadius: "50%",
          height: "100px",
          // marginLeft: "-10%",
          // border: "1px solid grey",
          marginTop: "10%",
          boxShadow: "1px 1px 10px 5px rgba(0,0,0,.3)",
        }}
      />
      <input
        ref={inputFileRef}
        accept="image/*"
        hidden
        id="avatar-image-upload"
        type="file"
        onChange={handleOnChange}
      />
      <label htmlFor="avatar-image-upload">{uploadButton}</label>
    </div>
  );
};

export default imageUpload;
