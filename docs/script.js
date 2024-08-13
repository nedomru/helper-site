const versionsUrl =
  "https://api.github.com/repos/AuthFailed/domru-helper/releases";
const downloadForm = document.getElementById("download-form");
const versionSelect = document.getElementById("version-select");
const releaseDescription = document.getElementById("release-description");

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
