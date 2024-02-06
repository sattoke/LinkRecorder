document.addEventListener("click", function (event) {
  const closestLink = event.target.closest("a");
  if (closestLink) {
    const textContent = closestLink.textContent.trim();
    const url = closestLink.href;
    sendMessageToBackground({ action: "recordLink", textContent, url });
  }
});

function sendMessageToBackground(message) {
  chrome.runtime.sendMessage(message);
}

function normalizeWhitespace(text) {
  // テキストコンテントに大量の空白文字(改行も含む)が
  // 含まれている場合があるので
  // 連続する空白文字を1つのスペースに置き換える
  return text.replace(/[\s]+/g, " ");
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "copyToClipboard") {
    const linkInfoStringArray = message.linkInfoArray.map(
      (info) => `[${normalizeWhitespace(info.textContent)}](${info.url})`,
    );
    // ひとまずデリミタを " > " 固定でリンク情報を結合する
    const clipboardText = linkInfoStringArray.join(" > ");
    copyToClipboard(clipboardText);
  }
});

function copyToClipboard(text) {
  const copyTextarea = document.createElement("textarea");
  copyTextarea.value = text;
  document.body.appendChild(copyTextarea);
  copyTextarea.select();
  document.execCommand("copy");
  document.body.removeChild(copyTextarea);
}
