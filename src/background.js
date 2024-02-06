let isRecording = false;
let linkInfoArray = [];

chrome.contextMenus.create({
  id: "startRecording",
  title: "Start recording",
  contexts: ["all"],
});

chrome.contextMenus.create({
  id: "startRecordingWithCurrentPage",
  title: "Start recording with current page",
  contexts: ["all"],
});

chrome.contextMenus.create({
  id: "stopRecording",
  title: "Stop recording",
  contexts: ["all"],
  enabled: false,
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "startRecording") {
    startRecording();
  } else if (info.menuItemId === "startRecordingWithCurrentPage") {
    startRecordingWithCurrentPage(tab);
  } else if (info.menuItemId === "stopRecording") {
    stopRecording();
  }
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "recordLink") {
    const linkInfo = {
      textContent: message.textContent,
      url: message.url,
    };
    linkInfoArray.push(linkInfo);
  }
});

function startRecording() {
  isRecording = true;
  linkInfoArray = [];

  chrome.contextMenus.update("startRecording", { enabled: false });
  chrome.contextMenus.update("startRecordingWithCurrentPage", {
    enabled: false,
  });
  chrome.contextMenus.update("stopRecording", { enabled: true });
}

function startRecordingWithCurrentPage(tab) {
  startRecording();

  const linkInfo = {
    textContent: tab.title,
    url: tab.url,
  };
  linkInfoArray.push(linkInfo);
}

function stopRecording() {
  isRecording = false;

  chrome.contextMenus.update("startRecording", { enabled: true });
  chrome.contextMenus.update("startRecordingWithCurrentPage", {
    enabled: true,
  });
  chrome.contextMenus.update("stopRecording", { enabled: false });

  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {
      action: "copyToClipboard",
      linkInfoArray,
    });
  });
}
