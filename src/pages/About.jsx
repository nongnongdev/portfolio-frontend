// src/pages/About.jsx
const About = () => {
  return (
    <div className="page">
      <h1>About Me</h1>
      <p>
        공공 SI 환경에서 백엔드 중심으로 일해왔고, eGovFramework 3.10과 Spring
        기반 시스템을 유지보수/개선해왔습니다. KLIP(국토이용정보통합플랫폼)
        백엔드/연계 개발을 담당하면서 행정기관 연계 안정화, 배포 프로세스 정리,
        Axis SOAP 전송 성공률 개선을 경험했습니다.
      </p>
      <p>
        eGov → Spring Boot → React 순으로 스택을 확장하고 있고, 실제로 React +
        Spring Boot 분리형 구조 포트폴리오를 만들면서 MSA 전환 여지가 있는
        설계를 연습 중입니다.
      </p>

      <h2>핵심 키워드</h2>
      <ul className="bullets">
        <li>eGov 3.10 / Spring / MyBatis / PostgreSQL</li>
        <li>Axis 1.4 SOAP 연계 안정화 (92% → 99.4%)</li>
        <li>JBoss, Jenkins, 배포 자동화 경험</li>
        <li>React + Spring Boot 포트폴리오 구축</li>
      </ul>

      <h2>실무 성과 요약</h2>
      <div className="info-card">
        <h3>KLIP 연계 안정화</h3>
        <p>SOAP 전송 실패 케이스를 분석해 예외 처리 및 재전송 로직 정리</p>
        <p>전송 성공률 92% → 99.4%로 개선</p>
      </div>
    </div>
  );
};

export default About;
