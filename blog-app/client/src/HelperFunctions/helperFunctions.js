import axios from "axios";

export const profileUpload = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "kbv6cgjk");
  let data = "";
  await axios
    .post("https://api.cloudinary.com/v1_1/dxj1hjblv/image/upload", formData)
    .then((response) => {
      data = response.data["secure_url"];
      return data;
      //   setImage(data);
    })
    .catch((error) => {
      console.log(error);
      return error;
      //   toast.error("Please add an Image");
    });
  return data;
};

export const updatePost = async (id, text, image, userId) => {
  const token = await localStorage.getItem("token");

  try {
    const res = await axios.put(
      `https://blog-server-production-27a6.up.railway.app/api/posts/${id}`,
      {
        data: {
          text: text,
          image: image,
        },
        userId,
      },
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    return res;
  } catch (error) {
    return error;
  }
};
