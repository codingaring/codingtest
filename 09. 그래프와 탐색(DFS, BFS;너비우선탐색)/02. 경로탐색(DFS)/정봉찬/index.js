/*
✅문제 제목: 경로탐색(DFS)

✅문제 유형: DFS

✅문제 풀이 날짜: 2024-09-07

💡문제 분석 요약
  - 방향그래프가 주어지면 1번 정점에서 N번 정점으로 가는 모든 경로의 가지 수를 출력하는 프로그램을 작성하세요.
  - 정점의 수 N(1<=N<=20), 간선의 수 M

💡알고리즘 설계
  - 인접행렬 그래프를 정점 + 1 만큼의 크기로 이중배열을 만든다. 이중배열의 값은 0으로 초기화한다.
  - 방문한 노드를 저장할 ch 배열을 선언하고 0으로 초기화한다.
  - arr을 반복문 돌면서 그래프의 값을 1로 할당한다.
  - 재귀 함수로 출발 노드와, 도착 노드를 받는다.
  - 도착 노드가 n에 도달하면 answer를 1 더하고 함수를 종료한다.
  - 1부터 n만큼의 반복문을 돌면서 현재 출발 노드가 갈 수 없는 요소의 경우 continue한다.
  - 이미 방문한 요소의 경우에도 continue한다.
  - 그 외에는 방문 처리하고 DFS(출발 노드 + 1, 도착 노드)로 재귀 탐색한다.
  - 재귀 탐색이 끝나면 방문 처리를 0으로 변경한다.
*/

function solution(n, arr) {
  let answer = 0;

  const graph = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(0));
  const ch = Array.from({ length: n + 1 }, () => 0);

  for (const [start, end] of arr) {
    graph[start][end] = 1;
  }

  function DFS(L, end) {
    if (end === n) {
      answer++;
      return;
    }

    for (let i = 1; i <= n; i++) {
      if (!graph[L][i] || ch[i]) {
        continue;
      }

      ch[i] = 1;
      DFS(L + 1, i);
      ch[i] = 0;
    }
  }

  DFS(1, 0);

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

/*
✅문제 제목: 경로탐색(DFS)

✅문제 유형: DFS

✅문제 풀이 날짜: 2024-09-07

💡문제 분석 요약
  - 방향그래프가 주어지면 1번 정점에서 N번 정점으로 가는 모든 경로의 가지 수를 출력하는 프로그램을 작성하세요.
  - 정점의 수 N(1<=N<=20), 간선의 수 M

💡알고리즘 설계
  - 노드는 v, 간선은 e로 표현한다.
  - 각 노드가 방문할 수 있는 노드를 저장할 이차원 배열 graph를 선언하고 0으로 초기화한다.
  - 노드의 방문 여부를 저장할 ch 배열을 선언하고 0으로 초기화한다.
  - arr을 반복문 돌면서 graph에 방문 여부를 1로 할당한다.
  - 재귀함수의 매개변수로 현재 노드를 나타내는 v를 받는다.
  - 첫 재귀함수 호출할 때 인수로 1을 넘겨주며 ch[1]을 체크한다.
  - v가 n에 도달하면 answer를 1 더하고 함수를 종료한다.
  - 1부터 n만큼 반복문을 돌면서 노드를 탐색한다.
  - graph를 통해서 현재 노드가 방문할 수 없는 노드면 continue한다.
  - ch를 통해서 이미 방문한 노드의 경우 continue한다.
*/

function solution2(n, arr) {
  let answer = 0;

  const graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
  const ch = Array.from({ length: n + 1 }, () => 0);

  for (const [s, e] of arr) {
    graph[s][e] = 1;
  }

  function DFS(v) {
    if (v === n) {
      answer++;
      return;
    }

    for (let i = 1; i <= n; i++) {
      if (!graph[v][i] || ch[i]) {
        continue;
      }

      ch[i] = 1;
      DFS(i);
      ch[i] = 0;
    }
  }

  ch[1] = 1;
  DFS(1);

  return answer;
}

console.log(solution2(5, arr)); // 6
