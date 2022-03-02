const input = document.querySelector("input");
const btn = document.querySelector("button");
const infoBlock = document.querySelector(".info");
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
    const allUserData = JSON.parse(req.response);

    if (req.status === 200) {
      infoBlock.classList.add("info");
      infoBlock.classList.remove("info-not-found");
      for (let i = 0; i < allUserData.length; i++) {
        for (let [key, value] of Object.entries(allUserData[i])) {
          const newList = document.createElement("li");
          unorderList.append(newList);
          newList.append(`${key}: ${value}`);
          infoBlock.append(newList);
          newList.classList.add("list-items");
        }
        const newList = document.createElement("li");
        newList.classList.add("list-items-end");
        unorderList.append(newList);
        infoBlock.append(newList);
      }
    } else {
      const message = allUserData.message;
      const newDiv = document.createElement("div");
      infoBlock.append(newDiv);
      newDiv.textContent = `User ${message}`;
      // newDiv.append(`User ${message}`);
      newDiv.classList.add("user-not-found");
      infoBlock.classList.remove("info");
      infoBlock.classList.add("info-not-found");
    }
  });
  infoBlock.innerHTML = "";
});

document.addEventListener("click", (event) => {
  if (!bodySelector.contains(event.target)) {
    infoBlock.classList.add("hidden");
  }
});
