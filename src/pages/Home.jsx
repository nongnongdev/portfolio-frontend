// src/pages/Home.jsx
import React, { useState } from "react";

const Home = () => {
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const API_BASE = process.env.REACT_APP_API_BASE || "http://localhost:8080";

  const testBackend = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/api/ping`);
      const text = await res.text();
      setMsg(text);
    } catch (e) {
      setMsg("요청 실패: " + e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <p className="badge">Backend-centered Fullstack</p>
      <h1>백엔드 중심 풀스택 개발자, 이다훈입니다 👋</h1>
      <p className="lead">
        eGovFramework와 Spring Boot 경험 기반으로 공공 SI부터 MSA까지 폭넓게
        이해하고 있습니다.
      </p>
      <ul className="bullets">
        <li>eGov 3.10 / Spring Boot / PostgreSQL / Jenkins / JBoss</li>
        <li>SOAP · REST API · React</li>
        <li>실무 성과: Axis SOAP 전송성공률 92% → 99.4% 개선</li>
        <li>개인 역량: React + Spring Boot 풀스택 포트폴리오 구축 중</li>
      </ul>
      <div className="actions">
        <a className="btn primary" href="/projects">
          👉 Projects 바로가기
        </a>
        <a
          className="btn"
          href="https://github.com/nongnongdev"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <button className="btn" onClick={testBackend} disabled={loading}>
          {loading ? "요청중..." : "백엔드 테스트"}
        </button>
      </div>
      {msg && <p style={{ marginTop: "1rem" }}>백엔드 응답: {msg}</p>}
    </div>
  );
};

export default Home;
