// 담임 선생님 목록
const teachers = [
  "류근하 선생님",
  "이진솔 선생님",
  "임현지 선생님",
  "김현정 선생님",
  "이혜원 선생님",
  "이주연 선생님",
  "이현정 선생님",
  "이승현 선생님"
];

// 버튼 클릭 이벤트 연결
document.getElementById("selectButton").addEventListener("click", () => {
  const count = parseInt(document.getElementById("countInput").value);
  const resultArea = document.getElementById("resultArea");

  // 유효성 검사
  if (isNaN(count) || count < 1 || count > teachers.length) {
    resultArea.innerHTML = `<p style="color: orange;">⚠️ 1에서 ${teachers.length} 사이의 숫자를 입력하세요.</p>`;
    return;
  }

  // 랜덤으로 섞고 필요한 개수만큼 선택
  const shuffled = [...teachers].sort(() => Math.random() - 0.5);
  const selected = shuffled.slice(0, count);

  // 결과 출력
  resultArea.innerHTML = `
    <h3>🎉 선출 결과</h3>
    <ul>
      ${selected.map(name => `<li>${name}</li>`).join("")}
    </ul>
  `;
});
