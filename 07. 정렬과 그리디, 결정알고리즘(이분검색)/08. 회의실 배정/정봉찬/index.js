/*
✅문제 제목: 회의실 배정

✅문제 유형: 정렬

✅문제 풀이 날짜: 2024-08-16

💡문제 분석 요약
  - 한 개의 회의실에서 각 회의가 겹치지 않게 하면서 회의실을 사용할 수 있는 최대수의 회의를 찾아라.
  - 회의는 중간에 중단될 수 없으며 한 회의가 끝나는 것과 동시에 다음 회의가 시작될 수 있다.

💡알고리즘 설계
  - Array.prototype.sort로 오름차순 정렬한다.
  - i = 0 부터 배열의 길이만큼 반복하는 반복문을 작성한다.
  - 회의 수를 저장할 count를 선언하고 1으로 초기화한다.
  - 끝나는 시간을 저장하는 endTime를 선언하고 i번 째의 1번 인덱스 값으로 초기화한다.
  - j = i + 1부터 배열의 길이만큼 반복하는 중첩 반복문을 작성한다.
  - j의 0번 인덱스가 endTime보다 작을 경우 continue한다. 그 외에는 endTime을 교체하고 count를 1 더한다.
  - 중첩 반복문이 종료돼서 answer의 값보다 count가 더 크면 answer에 count를 넣어준다.
  - 만약 answer가 배열의 길이 - 현재 인덱스 - 1 보다 크거나 같으면 break한다.
*/

function solution(meeting) {
  let answer = 0;

  meeting.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

  for (let i = 0; i < meeting.length; i++) {
    let count = 1;
    let endTime = meeting[i][1];

    for (let j = i + 1; j < meeting.length; j++) {
      if (meeting[j][0] < endTime) {
        continue;
      }

      endTime = meeting[j][1];
      count++;
    }

    if (answer < count) {
      answer = count;
    }

    if (answer >= meeting.length - i) {
      break;
    }
  }

  return answer;
}

let arr = [
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
];
console.log(solution(arr)); // 3
let arr2 = [
  [3, 3],
  [1, 3],
  [2, 3],
];
console.log(solution(arr2)); // 2

/*
✅문제 제목: 회의실 배정

✅문제 유형: 정렬

✅문제 풀이 날짜: 2024-08-23

💡문제 분석 요약
  - 한 개의 회의실에서 각 회의가 겹치지 않게 하면서 회의실을 사용할 수 있는 최대수의 회의를 찾아라.
  - 회의는 중간에 중단될 수 없으며 한 회의가 끝나는 것과 동시에 다음 회의가 시작될 수 있다.

💡알고리즘 설계
  - 끝나는 시간으로 오름차순하고 끝나는 시간이 같으면 시작 시간을 기준으로 오름차순한다.
  - 끝나는 시간을 0으로 두고 반복문 돌면서 시작 시간이 끝나는 시간보다 크거나 같으면 answer를 1 더한다.
*/

function solution2(meeting) {
  let answer = 0;

  const sortedMeetings = meeting.sort((a, b) => a[1] - b[1] || a[0] - b[0]);
  let endTime = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < sortedMeetings.length; i++) {
    if (sortedMeetings[i][0] < endTime) {
      continue;
    }

    endTime = sortedMeetings[i][1];
    answer++;
  }

  return answer;
}

console.log(solution2(arr)); // 3
console.log(solution2(arr2)); // 2
