function solution(N, M, arr) {
  let count = 0;
  let sum = 0;
  let j = 0;

  for (let i = 0; i < N; i++) {
    sum += arr[i]; // 윈도우에 현재 값을 추가

    while (sum > M) {
      sum -= arr[j]; // 윈도우 크기 조정
      j++;
    }

    if (sum === M) {
      count++;
    }
  }

  return count;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(8, 6, a));