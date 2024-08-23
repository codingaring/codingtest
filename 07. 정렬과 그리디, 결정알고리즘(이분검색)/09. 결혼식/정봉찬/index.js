/*
✅문제 제목: 결혼식

✅문제 유형: 정렬

✅문제 풀이 날짜: 2024-08-16

💡문제 분석 요약
  - 피로연 장소에 동시에 존재하는 최대 인원수를 구하세요.
  - 오는 시간 13, 가는 시간 15라면 13시 정각에 피로연 장소에 존재하고 15시 정각에는 존재하지 않는다.

💡알고리즘 설계
  - times의 요소 time을 저장하는 큐 역할의 변수 queue를 선언하고 빈배열로 초기화한다.
  - times를 끝나는 시간 기준으로 오름차순 정렬한다. 만약 같은 시간에 끝나면 시작 시간을 기준으로 오름차순 정렬한다.
  - times의 0번째 요소를 queue에 push한다.
  - i = 1 부터 times.length 만큼을 반복하는 반복문을 선언한다.
  - queue의 0번째 인덱스의 종료시간이 현재 인덱스의 시작시간과 같거나 작다면 queue를 shift한다.
  - 현재 요소를 queue에 push하고 queue가 answer보다 크다면 answer에 queue를 대입한다.
*/

function solution(times) {
  let answer = Number.MIN_SAFE_INTEGER;
  const queue = [];

  times.sort((a, b) => a[1] - b[1] || a[0] - b[0]);

  for (let i = 0; i < times.length; i++) {
    while (queue[0]?.[1] <= times[i][0]) {
      queue.shift();
    }

    queue.push(times[i]);

    if (queue.length > answer) {
      answer = queue.length;
    }
  }

  return answer;
}

let arr = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
];
console.log(solution(arr)); // 2

/*
✅문제 제목: 결혼식

✅문제 유형: 정렬

✅문제 풀이 날짜: 2024-08-23

💡문제 분석 요약
  - 피로연 장소에 동시에 존재하는 최대 인원수를 구하세요.
  - 오는 시간 13, 가는 시간 15라면 13시 정각에 피로연 장소에 존재하고 15시 정각에는 존재하지 않는다.

💡알고리즘 설계
  - 하나의 타임라인을 관리할 timeLine을 빈배열로 초기화한다.
  - 각 인원의 입실시간과 퇴실시간을 각각 분리한다. 그리고 입실시간은 [입실시간, START_CODE], 퇴실시간은 [퇴실시간, END_CODE]으로 timeLine에 push한다.
  - timeLine을 정렬하는데 입실시간과 퇴실시간이 같다면 퇴실시간이 더 앞에 오게 정렬한다.
  - 동시에 존재하는 인원을 저장할 people 변수를 0으로 초기화한다.
  - timeLine을 반복문 돌면서 입실시간일 때 people을 1 더하고 퇴실시간일 때 1 빼준다.
  - answer와 people 중에서 큰 값을 answer에 할당한다.
*/

function solution2(times) {
  let answer = Number.MIN_SAFE_INTEGER;
  const START_CODE = 'START';
  const END_CODE = 'END';

  const timeLine = [];

  for (t of times) {
    timeLine.push([t[0], START_CODE]);
    timeLine.push([t[1], END_CODE]);
  }

  timeLine.sort((a, b) => a[0] - b[0] || a[1].charCodeAt() - b[1].charCodeAt());

  let people = 0;
  for (t of timeLine) {
    if (t[1] === START_CODE) {
      people++;
    } else {
      people--;
    }

    answer = Math.max(answer, people);
  }

  return answer;
}

console.log(solution2(arr)); // 2
