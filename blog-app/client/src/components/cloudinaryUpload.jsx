import ImageUpload from "./imageUpload";

import React, { useState } from "react";
import Axios from "axios";
import Button from "@mui/material/Button";
const cloudinaryUpload = (props) => {
  const [logo, setLogo] = useState("");
  const [imageUpload] = useState({});
  const [, setImg] = useState({});
  const handleImg = (e) => {
    if (e.target.files[0]) {
      setImg({
        src: URL.createObjectURL(e.target.files[0]),
        alt: e.target.files[0].name,
      });
      setLogo(e.target.files[0]);
    }
  };
  const profileUpload = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "kbv6cgjk");
    let data = "";
    await Axios.post(
      "https://api.cloudinary.com/v1_1/dxj1hjblv/image/upload",
      formData
    ).then((response) => {
      data = response.data["secure_url"];
      props.fetchImage(data);
    });
    return data;
  };
  const handleSubmit = async (e) => {
    imageUpload.image = logo;
    await profileUpload(logo);
  };
  return (
    <>
      <div>
        <div style={{ marginLeft: "50px", marginTop: "50px" }}>
          <ImageUpload imageUpload={handleImg} image={imageUpload.image} />{" "}
          //input
        </div>
        <div
          style={{
            marginleft: "10px",
            marginBottom: "50px",
            marginTop: "-135px",
            borderRadius: "25px",
            fontFamily: "arial",
          }}
        >
          <Button
            type="submit"
            color="primary"
            onClick={(e) => handleSubmit(e)}
          >
            submit
          </Button>
        </div>
      </div>
    </>
  );
};
export default cloudinaryUpload;
