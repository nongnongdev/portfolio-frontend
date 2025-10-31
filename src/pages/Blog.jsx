const Blog = () => {
  return (
    <div className="page">
      <h1>Blog / Articles</h1>
      <p>
        Tistory나 velog 글을 React에서 가져와 노출시키는 걸 목표로 하고
        있습니다. (Spring Boot에서 RSS/API로 내려주고 React에서 표시하는 구조)
      </p>
      <h2>주제 예시</h2>
      <ul className="bullets">
        <li>Spring Boot REST API 설계 정리</li>
        <li>Jenkins CI/CD 구축 과정</li>
        <li>PostgreSQL 성능 튜닝</li>
        <li>eGovFramework 구조 분석</li>
      </ul>
      <p>“문제를 해결한 과정을 공유하는 개발자”로 브랜딩하는 영역입니다.</p>
    </div>
  );
};

export default Blog;
