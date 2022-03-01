const input = document.querySelector("input");
const btn = document.querySelector("button");
const infoBlock = document.querySelector(".info");
const btnExit = document.querySelector(".exit");
const unorderList = document.querySelector(".unorder-list");
const bodySelector = document.querySelector("body");

btn.disabled = true;

input.addEventListener("keyup", (event) => {
  if (event.target.value === "") {
    btn.disabled = true;
  } else {
    btn.disabled = false;
  }
});

btn.addEventListener("click", () => {
  infoBlock.classList.remove("hidden");

  const getLink = `https://api.github.com/users/${input.value}/repos`;

  const req = new XMLHttpRequest();
  req.open("GET", getLink);
  req.send();

  req.addEventListener("load", () => {
    const res = JSON.parse(req.response);

    for (let i = 0; i < res.length; i++) {
      const newList = document.createElement("li");
      newList.classList.add("list-items");
      unorderList.append(newList);
      newList.textContent = res[i].full_name;
    }
  });
  unorderList.innerHTML = "";
});

btnExit.addEventListener("click", () => {
  infoBlock.classList.add("hidden");
});

document.addEventListener("click", (event) => {
  if (!bodySelector.contains(event.target)) {
    infoBlock.classList.add("hidden");
  }
});
