/*
✅문제 제목: 송아지 찾기(BFS)

✅문제 유형: BFS

✅문제 풀이 날짜: 2024-09-08

💡문제 분석 요약
  - 현수는 송아지를 찾는다. 송아지는 움직이지 않고 제자리에 있다.
  - 한 번의 점프로 앞으로 1, 뒤로 1, 앞으로 5를 이동할 수 있다.
  - 최소 몇 번의 점프로 현수가 송아지의 위치까지 갈 수 있는지 구하는 프로그램을 작성하라.
  - 수직선상의 좌표는 1부터 10,000까지이다.
  - 현수의 위치 S와 송아지의 위치 E가 주어진다.
  - 답은 1 이상이다.

💡알고리즘 설계
  - 방문 노드를 넣을 큐를 빈 배열로 선언한다.
  - 방문 여부를 저장할 ch를 빈 배열로 선언한다.
  - queue에 시작값과 레벨을 배열로 묶어서 push한다.
  - while문을 돌면서 queue에서 값을 꺼낸다.
  - 꺼낸 노드가 방문한 노드면 continue한다.
  - 꺼낸 노드가 e에 도달하면 answer에 레벨을 할당하고 break한다.
  - 꺼낸 노드를 방문처리 한다.
  - 반복문을 돌면서 꺼낸 노드가 방문할 수 있는 노드를 queue에 push한다.
*/

function solution(s, e) {
  let answer = 0;

  const queue = [];
  const ch = Array.from({ length: 10001 }, () => 0);

  queue.push([s, 0]);
  while (queue.length) {
    const [current, L] = queue.shift();

    if (current === e) {
      answer = L;
      break;
    }

    ch[current] = 1;

    for (const next of [current + 1, current - 1, current + 5]) {
      if (next < 1 || next > 10000 || ch[next]) {
        continue;
      }
      queue.push([next, L + 1]);
    }
  }

  return answer;
}

console.log(solution(8, 3)); // 5
console.log(solution(5, 14)); // 3

/*
✅문제 제목: 송아지 찾기(BFS)

✅문제 유형: BFS

✅문제 풀이 날짜: 2024-09-08

💡문제 분석 요약
  - 현수는 송아지를 찾는다. 송아지는 움직이지 않고 제자리에 있다.
  - 한 번의 점프로 앞으로 1, 뒤로 1, 앞으로 5를 이동할 수 있다.
  - 최소 몇 번의 점프로 현수가 송아지의 위치까지 갈 수 있는지 구하는 프로그램을 작성하라.
  - 수직선상의 좌표는 1부터 10,000까지이다.
  - 현수의 위치 S와 송아지의 위치 E가 주어진다.
  - 답은 1 이상이다.

💡알고리즘 설계
  - ⭐ dis를 활용한 풀이
  - 노드를 담을 큐를 빈 배열로 선언한다.
  - 노드 방문 여부를 확인할 배열을 10001의 길이로 각 요소를 0으로 선언한다.
  - 탐색 레벨을 확인할 배열을 10001의 길이로 각 요소를 0으로 선언한다.
  - 출발지의 방문 여부를 1로 탐색 레벨을 0으로 할당한다.
  - 큐에 출발지를 넣는다.
  - 큐의 길이가 0이 아닌 경우를 조건으로 while문을 돈다.
  - 큐에서 값을 꺼내고 꺼낸 값이 방문할 수 있는 노드를 배열로 묶어서 반복문을 돈다.
  - 만약 방문할 수 있는 노드가 e에 도달하면 꺼낸 값의 탐색 레벨 + 1로 return한다.
  - 방문할 수 있는 노드가 1~10000의 조건을 벗어나거나 이미 방문했다면 continue한다.
  - 그 외에는 방문 여부를 1로 변경하고 탐색 레벨을 꺼낸 값의 탐색 레벨 + 1하고 큐에 담는다.
*/

function solution2(s, e) {
  let answer = 0;

  const queue = [];
  const ch = Array.from({ length: 10001 }, () => 0);
  const dis = Array.from({ length: 10001 }, () => 0);

  ch[s] = 1;
  dis[s] = 0;
  queue.push(s);

  while (queue.length) {
    const current = queue.shift();

    for (const next of [current + 1, current - 1, current + 5]) {
      if (next === e) {
        return dis[current] + 1;
      }

      if (next < 1 || next > 10000 || ch[next]) {
        continue;
      }

      ch[next] = 1;
      dis[next] = dis[current] + 1;
      queue.push(next);
    }
  }

  return answer;
}

console.log(solution2(8, 3)); // 5
console.log(solution2(5, 14)); // 3

/*
✅문제 제목: 송아지 찾기(BFS)

✅문제 유형: BFS

✅문제 풀이 날짜: 2024-09-08

💡문제 분석 요약
  - 현수는 송아지를 찾는다. 송아지는 움직이지 않고 제자리에 있다.
  - 한 번의 점프로 앞으로 1, 뒤로 1, 앞으로 5를 이동할 수 있다.
  - 최소 몇 번의 점프로 현수가 송아지의 위치까지 갈 수 있는지 구하는 프로그램을 작성하라.
  - 수직선상의 좌표는 1부터 10,000까지이다.
  - 현수의 위치 S와 송아지의 위치 E가 주어진다.
  - 답은 1 이상이다.

💡알고리즘 설계
  - ⭐ 레벨을 활용한 풀이
  - 노드를 담을 큐를 빈 배열로 선언한다.
  - 노드 방문 여부를 확인할 배열을 10001의 길이로 각 요소를 0으로 선언한다.
  - 탐색 레벨을 확인할 배열을 10001의 길이로 각 요소를 0으로 선언한다.
  - 출발지의 방문 여부를 1로 탐색 레벨을 0으로 할당한다.
  - 큐에 출발지를 넣는다.
  - 큐의 길이가 0이 아닌 경우를 조건으로 while문을 돈다.
  - 
*/

function solution3(s, e) {
  let answer = 0;

  const queue = [];
  const ch = Array.from({ length: 10001 }, () => 0);
  const dis = Array.from({ length: 10001 }, () => 0);

  ch[s] = 1;
  let L = 0;
  queue.push(s);

  while (queue.length) {
    const len = queue.length;

    for (let i = 0; i < len; i++) {
      const current = queue.shift();

      for (const next of [current + 1, current - 1, current + 5]) {
        if (next === e) {
          return L + 1;
        }

        if (next < 1 || next > 10000 || ch[next]) {
          continue;
        }

        ch[next] = 1;
        queue.push(next);
      }
    }
    L++;
  }

  return answer;
}

console.log(solution3(8, 3)); // 5
console.log(solution3(5, 14)); // 3
