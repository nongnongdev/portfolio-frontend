const Projects = () => {
  return (
    <div className="page">
      <h1>Projects</h1>

      <div className="proj-card">
        <h2>📁 KLIP (국토이용정보통합플랫폼)</h2>
        <p className="period">2024.01 ~ 현재</p>
        <p>
          eGov 3.10, Spring, PostgreSQL, Axis SOAP, JBoss 기반 공공 플랫폼.
          백엔드/연계 개발 담당.
        </p>
        <ul className="bullets">
          <li>SOAP 전송 성공률 92% → 99.4% 개선</li>
          <li>데이터 연계 안정화 및 서버 로직 개선</li>
          <li>배포 프로세스(Jenkins) 정리</li>
        </ul>
      </div>

      <div className="proj-card">
        <h2>📁 포트폴리오 웹사이트 (React + Spring Boot)</h2>
        <p className="period">개인 • 진행 중</p>
        <p>
          React 프론트엔드 + Spring Boot 백엔드 + PostgreSQL DB 구조. RESTful
          API, AWS EC2 배포, GitHub Actions 기반 CI/CD 고려.
        </p>
        <ul className="bullets">
          <li>자기소개, 프로젝트 목록, 블로그 글 표시</li>
          <li>단일 모놀리식에서 Light MSA 전환 여지 설계</li>
        </ul>
      </div>

      <div className="proj-card">
        <h2>📁 S-100 해양 표준화 R&amp;D</h2>
        <p className="period">2023.05 ~ 2024.12</p>
        <p>C# 기반 GML 생성 프로토타입 구현, 필수 태그 100% 커버리지 달성.</p>
        <ul className="bullets">
          <li>해양 표준(S-100/S-127) 분석</li>
          <li>도메인 → GML 변환 로직 구현</li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;
