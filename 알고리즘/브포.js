function findMax(arr) {
    if (arr.length === 0) {
        return null; // 배열이 비어있으면 null 반환
    }

    let max = arr[0]; // 최댓값을 첫 번째 요소로 초기화

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]; // 현재 요소가 최댓값보다 크면 최댓값 갱신
        }
    }

    return max; // 최댓값 반환
}

// 테스트
const numbers = [5, 8, 2, 10, 3];
console.log("최댓값:", findMax(numbers)); // 출력: 10