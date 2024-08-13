const versionsUrl =
  "https://api.github.com/repos/AuthFailed/domru-helper/releases";
const downloadForm = document.getElementById("download-form");
const versionSelect = document.getElementById("version-select");
const releaseDescription = document.getElementById("release-description");
const themeToggle = document.getElementById("theme-toggle");
const sunIcon = document.getElementById("sun-icon");
const moonIcon = document.getElementById("moon-icon");

// Проверка предпочтений темы у пользователя
if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  document.body.classList.add("dark-mode");
}

// Сохранение выбранной темы
function saveThemePreference(isDark) {
  localStorage.setItem("dark-mode", isDark ? "true" : "false");
}

// Переключение темы
function toggleTheme() {
  const isDarkMode = document.body.classList.toggle("dark-mode");
  moonIcon.style.display = isDarkMode ? "block" : "none";
  sunIcon.style.display = isDarkMode ? "none" : "block";
  saveThemePreference(isDarkMode);
}

// Установка темы на основе сохраненного предпочтения
function applySavedThemePreference() {
  const savedPreference = localStorage.getItem("dark-mode");
  if (savedPreference === "true") {
    document.body.classList.add("dark-mode");
    moonIcon.style.display = "block";
    sunIcon.style.display = "none";
  } else {
    sunIcon.style.display = "block";
    moonIcon.style.display = "none";
  }
}

// Инициализация темы
applySavedThemePreference();

themeToggle.addEventListener("click", toggleTheme);

async function fetchVersions() {
  const response = await fetch(versionsUrl);
  return response.json();
}

function populateVersionSelect(releases) {
  releases.forEach((release, index) => {
    const option = document.createElement("option");
    option.value = release.tag_name;
    option.textContent =
      release.tag_name + (index === 0 ? " (Актуальная версия)" : "");
    versionSelect.appendChild(option);
  });
  updateDownloadUrl(releases[0]);
  updateReleaseDescription(releases[0]);
}

function updateDownloadUrl(selectedRelease) {
  downloadForm.action = `https://github.com/AuthFailed/domru-helper/releases/download/${selectedRelease.tag_name}/domhelper.xpi`;
}

function updateReleaseDescription(release) {
  releaseDescription.innerHTML = marked.parse(release.body || "Нет описания");
}

versionSelect.addEventListener("change", () => {
  const selectedTag = versionSelect.value;
  fetchVersions().then((releases) => {
    const selectedRelease = releases.find((r) => r.tag_name === selectedTag);
    if (selectedRelease) {
      updateDownloadUrl(selectedRelease);
      updateReleaseDescription(selectedRelease);
    }
  });
});

// Первоначальная загрузка версий
fetchVersions().then(populateVersionSelect);
