const emailInput = document.querySelector(
  'input[placeholder="이메일을 입력하세요."]'
);
const nameInput = document.querySelector(
  'input[placeholder="이름을 입력하세요."]'
);
const passwordInput = document.querySelector(
  'input[placeholder="비밀번호를 입력하세요."]'
);
const confirmPasswordInput = document.querySelector(
  'input[placeholder="비밀번호를 다시 입력하세요."]'
);
const phoneNumberInputs = document.querySelectorAll(".phoneNumberInput");
const regionSelect = document.querySelector(".choose");
const genderInputs = document.querySelectorAll('input[name="gender"]');
const submitButton = document.querySelector(".button3");

submitButton.addEventListener("click", () => {
  const email = emailInput.value;
  const name = nameInput.value;
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;
  const phoneNumber = Array.from(phoneNumberInputs)
    .map((input) => input.value)
    .join("-");
  const region = regionSelect.value;
  const gender = Array.from(genderInputs).find((input) => input.checked)?.value;

  console.log("이메일:", email);
  console.log("이름:", name);
  console.log("비밀번호:", password);
  console.log("비밀번호 확인:", confirmPassword);
  console.log("전화번호:", phoneNumber);
  console.log("지역:", region);
  console.log("성별:", gender);
});
