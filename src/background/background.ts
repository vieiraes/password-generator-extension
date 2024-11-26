console.log('Background script iniciado');

chrome.runtime.onInstalled.addListener(() => {
    console.log('Extensão instalada');
});
