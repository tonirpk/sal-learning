const innInput = document.querySelector(".inn");
// const value = document.querySelector(".value");
const bankName = document.querySelector(".bank-name");
const dropList = document.querySelector(".drop-list");
const shortTitle = document.querySelector(".short-title");
const innShow = document.querySelector(".inn");
const fullName = document.querySelector(".full-name");
const address = document.querySelector(".address");

const url =
  "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/party";
const token = "9f6530bed8abb614117cb76d896eb2df6e334589";
let query = "";

bankName.addEventListener("input", (e) => {
  query = e.target.value;
});

bankName.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    dropList.classList.remove("hidden");
    let options = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Token " + token,
      },
      body: JSON.stringify({ query: query }),
    };
    fetch(url, options)
      .then((response) => response.json())
      .then((result) => {
        const opntionsList = document.createElement("option");
        dropList.append(opntionsList);
        opntionsList.setAttribute("disabled", "");
        opntionsList.setAttribute("selected", "");
        opntionsList.setAttribute("value", "");
        opntionsList.textContent = "Select";

        result.suggestions.forEach((element) => {
          const opntionsList = document.createElement("option");
          dropList.append(opntionsList);
          opntionsList.append(element.value);
        });

        dropList.addEventListener("change", (e) => {
          const item = result.suggestions.find(
            (item) => item.value === e.target.value
          );
          innShow.value = `${item.data.inn} / ${item.data.kpp}`;
          shortTitle.value = item.data.name.short;
          fullName.value = item.data.name.full_with_opf;
          address.value = item.data.address.value;
        });

        console.log(result.suggestions);
      })
      .catch((error) => console.log("error", error));
    dropList.innerHTML = "";
    shortTitle.value = "";
    innShow.value = "";
    fullName.value = "";
    address.value = "";

  }
});
