/*
✅문제 제목: 동전교환

✅문제 유형: 재귀

✅문제 풀이 날짜: 2024-08-30

💡문제 분석 요약
  - 거스름돈을 가장 적은 수의 동전으로 교환해주자.
  - 동전의 종류 개수 N(1<=N<=12), 거슬러 줄 금액 M(1<=M<=500)

💡알고리즘 설계
  - 동전의 종류를 내림차순 정렬한다.(정렬이 안 되어 있다고 가정)
  - 재귀함수로 인덱스와 거스름돈을 매개변수로 받는다.
  - 거스름돈을 현재 인덱스의 동전으로 나누었을 때 0보다 크다면 나눈 값을 내림연산하여 동전의 카운트를 더한다.
  - 나머지 연산자로 남은 거스름돈과 다음 인덱스 값을 재귀함수로 넘겨준다.
  - 거스름돈이 0원이 되는 조건으로 얼리 리턴한다.
*/

function solution(m, arr) {
  let answer = Number.MAX_SAFE_INTEGER;
  let coinTotal = 0;

  const sortedArr = arr.sort((a, b) => b - a);

  function DFS(index, change) {
    if (!change || index === arr.length) {
      return;
    }

    const coin = Math.trunc(change / sortedArr[index]);

    if (coin) {
      coinTotal += coin;
      DFS(index + 1, change % sortedArr[index]);
      return;
    }

    DFS(index + 1, change);
  }

  DFS(0, m);

  answer = coinTotal;

  return answer;
}

let arr = [1, 2, 5];
console.log(solution(15, arr)); // 3(5동전 3개)
console.log(solution(19, arr)); // 5(5동전 3개, 2동전 2개)
