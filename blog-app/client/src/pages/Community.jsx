import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "../components/Community.css";

function Community() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = () => {
    axios
      .get("https://blog-server-production-27a6.up.railway.app/api/posts/getAll")
      .then((response) => {
        console.log(response.data);
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      {posts &&
        posts.map((post, key) => {
          return (
            <div
              className="postCommunity-box"
              // style={{
              //   marginBottom: "20px",
              //   display: "flex",
              // }}
              key={post._id}
            >
              <div
                className="textCommunity-display"
                // style={{ width: "200px" }}
                dangerouslySetInnerHTML={{ __html: post.text }}
              />
              <figure className="fig-community">
                <img
                  // style={{ width: "150px" }}
                  src={post.image}
                  className="img-community"
                />
              </figure>
            </div>
          );
        })}
    </div>
  );
}

export default Community;
