import React, { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../App";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
// import ContentDisplay from "./ContentDisplay";
import CloudinaryUpload from "./cloudinaryUpload";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ImageUpload from "./imageUpload";
import TextEditorUpdatePost from "./TextEditorUpdatePost";
import { profileUpload } from "../HelperFunctions/helperFunctions";
import "./TextEditor.css";

import Button from "@mui/material/Button";
function TextEditor() {
  const { user } = useContext(UserContext);
  const [value, setValue] = useState("");
  const [image, setImage] = useState(null);

  //useStates for image
  const [logo, setLogo] = useState("");
  const [imageUpload] = useState({});
  const [, setImg] = useState({});
  //functions for image
  const handleImg = (e) => {
    if (e.target.files[0]) {
      setImg({
        src: URL.createObjectURL(e.target.files[0]),
        alt: e.target.files[0].name,
      });
      setLogo(e.target.files[0]);
    }
  };

  const useprofileUpload = async (file) => {
    profileUpload(file)
      .then((data) => setImage(data))
      .catch((error) => toast.error("Please add an Image"));
  };

  //functions for post
  const getValue = (value) => {
    setValue(value);
    console.log(value);
  };

  const uploadPost = async () => {
    imageUpload.image = logo;
    await useprofileUpload(logo);
    image &&
      axios
        .post(
          "https://blog-server-production-27a6.up.railway.app/api/posts/",
          {
            text: value,
            image: image,
            userId: user._id,
          },
          {
            headers: {
              authorization: `Bearer ${user.token}`,
            },
          }
        )
        .then((response) => {
          toast.success("Post was added Successfully!");
          console.log(response);
        })
        .catch((error) => {
          console.log(error, "errpr");
          toast.error("Please add an image as well");
          console.log(error);
        });
  };

  return (
    <>
      <ToastContainer />

      <div
        className="editor-container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "2em",
          height: "50vh",
        }}
      >
        <ReactQuill
          theme="snow"
          value={value}
          onChange={getValue}
          style={{
            boxShadow: "5px 5px 10px rgba(0,0,0,0.4)",
            width: "500px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        />
        {/* <ContentDisplay content={value}></ContentDisplay> */}

        <ImageUpload imageUpload={handleImg} image={imageUpload.image} />

        <button
          className="publish-btn"
          onClick={uploadPost}
          style={{
            width: "10em",
            padding: ".5em",
            backgroundColor: "#2b8a3e",
            color: "#f8f9fa",
            border: "none",
            boxShadow: "5px 5px 10px rgba(0,0,0,0.4)",
            letterSpacing: ".1rem",
            fontWeight: 400,
            marginTop: "3em !important",
          }}
        >
          Publish
        </button>
        {/* <button
          className="update-btn"
          style={{
            width: "10em",
            padding: ".5em",
            backgroundColor: "transparent",
            border: "1px solid #ddd",
            boxShadow: "5px 5px 10px rgba(0,0,0,0.4)",
            marginLeft: "1em",
            color: "#2b8a3e",
            letterSpacing: ".1rem",
            fontWeight: 400,
          }}
        >
          Update
        </button> */}
      </div>
    </>
  );
}

export default TextEditor;
