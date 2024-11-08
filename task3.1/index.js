const loading = document.querySelector(".loading");
const usersList = document.querySelector(".users");
const errorMessage = document.querySelector(".error");

async function fetchRandomUsers() {
  loading.style.display = "block";
  errorMessage.textContent = "";

  try {
    const response = await fetch("https://randomuser.me/api/?results=10");
    const data = await response.json();
    const users = data.results;
    usersList.innerHTML = "";

    users.forEach((user) => {
      const li = document.createElement("li");
      li.innerHTML = `
            <img src="${user.picture.thumbnail}" alt="Пользователь">
            <div>
                <p>${user.name.first} ${user.name.last}</p>
                <p>${user.email}</p>
            </div>
        `;
      usersList.appendChild(li);
    });
  } catch (error) {
    errorMessage.textContent = "Не удалось загрузить пользователей";
    console.error("Ошибка:", error);
  } finally {
    loading.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", fetchRandomUsers);
