const versionsUrl =
  "https://api.github.com/repos/AuthFailed/domru-helper/releases";

async function fetchLatestVersion() {
  const response = await fetch(versionsUrl);
  const releases = await response.json();
  return releases[0]; // Возвращаем последнюю версию
}

function updateDownloadUrl(selectedRelease) {
  const downloadUrl = `https://github.com/AuthFailed/domru-helper/releases/download/${selectedRelease.tag_name}/domhelper.xpi`;
  return downloadUrl;
}

function updateReleaseDescription(release) {
  releaseDescription.innerHTML = marked.parse(release.body || "Нет описания");
}

// Обработчик события для кнопки "Установить"
const installButton = document.querySelector(".btn-primary"); // Получаем кнопку
installButton.addEventListener("click", async (event) => {
  event.preventDefault(); // Отменяем стандартное поведение кнопки
  const latestRelease = await fetchLatestVersion(); // Получаем последнюю версию
  const downloadUrl = updateDownloadUrl(latestRelease); // Обновляем URL

  // Создаем временный элемент для скачивания
  const link = document.createElement("a");
  link.href = downloadUrl;
  link.download = "domhelper.xpi"; // Задаем имя файла для скачивания
  document.body.appendChild(link);
  link.click(); // Инициируем скачивание
  document.body.removeChild(link); // Удаляем элемент
  updateReleaseDescription(latestRelease); // Обновляем описание
});
