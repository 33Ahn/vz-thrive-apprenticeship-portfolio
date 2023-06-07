import React from "react";
import axios from "axios";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../App";
import DeleteOutline from "@mui/icons-material/DeleteOutline";
import UpdateIcon from "@mui/icons-material/Update";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../components/Profile.css";
import TextEditorUpdatePost from "../components/TextEditorUpdatePost";

function Profile() {
  const { user } = useContext(UserContext);
  const [posts, setPosts] = useState(null);
  const [open, setOpen] = useState(false);
  const [updatePostComponent, setUpdatePostComponent] = useState(null);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = () => {
    axios
      .post(
        "https://blog-server-production-27a6.up.railway.app/api/posts/get",

        {
          userId: user._id,
        },
        {
          headers: {
            authorization: `Bearer ${user.token}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deletePost = (id) => {
    axios
      .delete(
        `https://blog-server-production-27a6.up.railway.app/api/posts/${id}`,

        {
          headers: {
            authorization: `Bearer ${user.token}`,
          },
        }
      )
      .then((response) => {
        toast.success("Post was deleted Successfully!");
        console.log(response.data);
        getPosts();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const closePopup = () => {
    setOpen(false);
  };

  const showResponse = (res, err) => {
    console.log("in show Response");
    console.log(res, err);
    if (res) {
      getPosts();
      toast.success("Succesfully updated the post");
    } else if (err) {
      toast.error("There was a problem updating the post");
    }
    closePopup();
  };
  const updatePost = (id, text, image) => {
    //set image and set the text
    console.log("we are in the update fs");
    setUpdatePostComponent(
      <TextEditorUpdatePost
        getPosts={getPosts}
        showResponse={showResponse}
        closePopup={closePopup}
        id={id}
        text={text}
        image={image}
      />
    );
    setOpen(true);
  };

  return (
    <>
      <ToastContainer />

      {open && updatePostComponent}
      <div>
        {posts &&
          posts.map((post, key) => {
            return (
              <div
                className="post-box"
                // style={{
                //   marginBottom: "20px",
                //   display: "flex",
                // }}
                key={post._id}
              >
                <div
                  className="text-display"
                  dangerouslySetInnerHTML={{ __html: post.text }}
                />
                <div className="wrapper-img-del">
                  <div className="wrapper-icons">
                    <DeleteOutline
                      onClick={() => deletePost(post._id)}
                      color="error"
                      sx={{ marginTop: "20px" }}
                    />

                    {/* //set Open to true , and it will populate the form as well/> */}
                    <UpdateIcon
                      color="success"
                      onClick={() =>
                        updatePost(post._id, post.text, post.image)
                      }
                    />
                  </div>

                  <figure>
                    <img className="img" src={post.image} />
                  </figure>
                </div>
              </div>
            );
          })}
        {open ? updatePostComponent : null}
      </div>
    </>
  );
}

export default Profile;
