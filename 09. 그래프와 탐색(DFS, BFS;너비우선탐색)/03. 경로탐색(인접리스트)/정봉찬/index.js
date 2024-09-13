/*
✅문제 제목: 경로탐색(인접리스트)

✅문제 유형: DFS

✅문제 풀이 날짜: 2024-09-07

💡문제 분석 요약
  - 방향그래프가 주어지면 1번 정점에서 N번 정점으로 가는 모든 경로의 가지 수를 출력하라.
  - 정점의 수 N(1<=N<=20), 간선의 수 M

💡알고리즘 설계
  - 각 노드가 방문할 수 있는 노드 리스트를 저장할 graph 배열을 선언한다. 내부는 빈 배열로 만든다.
  - 노드의 방문 여부를 체크할 ch 배열을 선언한다. 각 요소는 0으로 초기화한다.
  - arr를 순회하며 해당 노드를 인덱스 탐색으로 방문 노드를 push한다.
  - 재귀 함수로 현재노드를 의미하는 v를 매개변수로 받는다.
  - v가 n에 도달하면 answer를 1 더하고 함수를 종료한다.
  - graph에서 현재노드가 탐색 가능한 노드 리스트를 뽑아낸다.
  - 탐색 가능한 노드 리스트로 반복문을 돌면서 탐색한다.
*/

function solution(n, arr) {
  let answer = 0;

  const graph = Array.from({ length: n + 1 }, () => Array());
  const ch = Array.from({ length: n + 1 }, () => 0);

  for (const [s, e] of arr) {
    graph[s].push(e);
  }

  function DFS(v) {
    if (v === n) {
      answer++;
      return;
    }

    const destinations = graph[v];

    for (let i = 0; i < destinations.length; i++) {
      const destination = destinations[i];

      if (ch[destination]) {
        continue;
      }

      ch[destination] = 1;
      DFS(destination);
      ch[destination] = 0;
    }
  }

  ch[1] = 1;
  DFS(1);

  return answer;
}

let arr = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5],
];
console.log(solution(5, arr)); // 6
