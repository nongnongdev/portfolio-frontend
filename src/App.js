import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/posts")
      .then((response) => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("게시글 불러오기 실패 : ", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>⌛ 로딩 중...</p>;
  }

  return (
    <div style={{ padding: "30px", textAlign: "center" }}>
      <h1>📚 게시글 목록</h1>
      {posts.length === 0 ? (
        <p>게시글이 없습니다.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {posts.map((post) => (
            <li
              key={post.id}
              style={{
                border: "1px solid #ddd",
                marginBottom: "10px",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              <h2>{post.title}</h2>
              <p>{post.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
