let pwd = document.querySelector(".password"),
  genBtn = document.querySelector("#generate"),
  passwordRange = document.querySelector("#pwd-length"),
  passwordRangeTxt = document.querySelector("#pwd-length-text"),
  clip = document.querySelector("#clip");

passwordRange.addEventListener("input", () => {
  passwordRangeTxt.innerText = "Password Length : " + passwordRange.value;
});

genBtn.addEventListener("click", () => {
  let characters =
      "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&*",
    randomPwd = "";

  for (let i = 0; i < passwordRange.value; i++) {
    randomPwd =
      randomPwd + characters[Math.floor(Math.random() * characters.length)];

    pwd.innerText = randomPwd;
  }
});

clip.addEventListener("click", () => {
  let newPwd = pwd.innerText;

  navigator.clipboard.writeText(newPwd);

  alert("Password " + newPwd + " copied to clipboard!");

  console.log(newPwd);
});

console.log(passwordRange.value);
