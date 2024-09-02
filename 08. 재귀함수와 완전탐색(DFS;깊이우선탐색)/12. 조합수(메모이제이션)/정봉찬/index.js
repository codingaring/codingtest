/*
✅문제 제목: 조합수(메모이제이션)

✅문제 유형: 재귀

✅문제 풀이 날짜: 2024-09-02

💡문제 분석 요약
  - 다음 공식을 사용하여 재귀를 이용해 조합수를 구하라.
  - nCr = n-1Cr-1 + n-1Cr
  - n(3<=n<=33), r(0<=r<=n)

💡알고리즘 설계
  - n === r이면 1개, 그리고 return으로 종료.
  - r === 1이면 n개
  - r > n이면 return으로 종료.
  - 재귀함수로 _n, _r을 받는다.
  - DFS(n - 1, r - 1) + DFS(n - 1, r)로 재귀를 돈다.
*/

function solution(n, r) {
  let answer = [];

  function DFS(_n, _r) {
    if (_r > _n) {
      return 0;
    }

    if (_n === _r) {
      return 1;
    }

    if (_r === 1) {
      return _n;
    }

    return DFS(_n - 1, _r - 1) + DFS(_n - 1, _r);
  }

  answer = DFS(n, r);

  return answer;
}

console.log(solution(5, 3)); // 10
console.log(solution(33, 19)); // 818809200
