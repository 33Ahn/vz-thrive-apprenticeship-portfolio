import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./TextEditor.css";
import ImageUpload from "./imageUpload";
import { updatePost, profileUpload } from "../HelperFunctions/helperFunctions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import { UserContext } from "../App";

function TextEditorUpdatePost(props) {
  const { user } = React.useContext(UserContext);
  const [logo, setLogo] = React.useState("");
  const [imageUpload] = React.useState({});
  const [, setImg] = React.useState({});

  const [text, setText] = React.useState(props?.text || "");
  const [image, setImage] = React.useState(null);
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

  const updatePostData = async () => {
    imageUpload.image = logo;
    await useprofileUpload(logo);

    const userId = user._id;
    if (image) {
      try {
        const res = updatePost(props?.id, text, image, userId);
        props.getPosts();
        props.showResponse(res, null);
      } catch (error) {
        props.showResponse(null, error);
      }
    }
  };
  return (
    <div className="parent-quill" style={{ minHeight: "100vh" }}>
      {/* <div style={{ marginLeft: "50px", marginTop: "50px" }}>
        <ImageUpload imageUpload={handleImg} image={imageUpload.image} />
      </div> */}
      <div
        className="quill-container"
        style={{
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-evenly",
          // border: "1px solid black",
          width: "600px",
          // marginTop: "-5em",
          marginBottom: "5em",
          gap: "2em",
        }}
      >
        <ImageUpload imageUpload={handleImg} image={imageUpload.image} />
        <ReactQuill
          value={text}
          onChange={setText}
          theme="snow"
          style={{ width: "600px", margin: "0 auto" }}
        />

        <button
          onClick={updatePostData}
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
            marginBottom: "1em",
          }}
        >
          Update
        </button>
      </div>
    </div>
  );
}

export default TextEditorUpdatePost;
