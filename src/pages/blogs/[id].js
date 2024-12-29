import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const SingleBlogPage = () => {
  const router = useRouter();
  const [blogs, setBlogs] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (router.query.id) {
      fetch("https://sheetdb.io/api/v1/y847pkw1uau79")
        .then((res) => res.json())
        .then((data) => {
          setBlogs(data[router.query.id - 1]);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching data:", err);
          setLoading(false);
        });
    }
  }, [router.query.id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: blogs.fullBlog }} />
    </div>
  );
};

export default SingleBlogPage;
