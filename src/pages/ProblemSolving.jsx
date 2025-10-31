const ProblemSolving = () => {
  return (
    <div className="page">
      <h1>Problem Solving / Algorithm</h1>
      <p>
        solved.ac, 프로그래머스, GitHub 저장소로 알고리즘 풀이를 기록하고
        있습니다. “꾸준히 학습하는 개발자” 이미지를 노리고 있습니다.
      </p>

      <h2>대표 풀이 토픽</h2>
      <ul className="bullets">
        <li>DFS/BFS 탐색 최적화</li>
        <li>이분 탐색 mid 경계 조건 정리</li>
        <li>우선순위 큐를 이용한 최단경로</li>
      </ul>

      <a
        className="btn primary"
        href="https://github.com/nongnongdev"
        target="_blank"
        rel="noreferrer"
      >
        GitHub 문제풀이 보기
      </a>
    </div>
  );
};

export default ProblemSolving;
