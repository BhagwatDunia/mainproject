import BlogsPage from "@/components/common/Blog";
import React, { useEffect, useState } from "react";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://sheetdb.io/api/v1/y847pkw1uau79")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <BlogsPage blogs={blogs} />
    </div>
  );
};

export default Blogs;
