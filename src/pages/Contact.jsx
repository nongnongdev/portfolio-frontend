// src/pages/Contact.jsx
const Contact = () => {
  return (
    <div className="page">
      <h1>Contact</h1>
      <p>이메일, GitHub, Tistory 등 연결 정보</p>
      <ul className="bullets">
        <li>📧 Email: ldh-1000@naver.com</li>
        <li>💻 GitHub: https://github.com/nongnongdev</li>
        <li>📝 Tistory: https://nongnongdev.tistory.com</li>
      </ul>
      <p>
        나중에 Spring Boot로 문의 폼을 만들고, 여기서 POST로 보내게 하면
        완성됩니다.
      </p>
    </div>
  );
};

export default Contact;
