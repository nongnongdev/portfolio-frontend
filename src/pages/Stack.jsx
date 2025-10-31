const TechStack = () => {
  return (
    <div className="page">
      <h1>Tech Stack</h1>
      <p className="stack-sub">
        카테고리화해서 실제로 써본 기술만 정리했습니다.
      </p>
      <div className="stack-wrap">
        <div className="stack-item">
          <div className="icon">🖥️</div>
          <h3>Backend</h3>
          <p>
            Java, Spring Boot, MyBatis, JPA 기초, eGovFramework 3.10, PostgreSQL
          </p>
          <span className="tag">REST · SOAP</span>
        </div>
        <div className="stack-item">
          <div className="icon">🪟</div>
          <h3>Frontend</h3>
          <p>React, JavaScript, HTML/CSS</p>
          <span className="tag">SPA</span>
        </div>
        <div className="stack-item">
          <div className="icon">⚙️</div>
          <h3>DevOps</h3>
          <p>Jenkins, Docker, AWS(EC2/S3/RDS), GitLab CI</p>
          <span className="tag">배포 자동화</span>
        </div>
        <div className="stack-item">
          <div className="icon">🔗</div>
          <h3>Etc</h3>
          <p>Axis SOAP, REST API, JSON/XML, 공공SI 연계</p>
          <span className="tag">DB 튜닝 경험</span>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
