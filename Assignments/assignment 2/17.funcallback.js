function downloadFile(file, callback) {
    setTimeout(() => {
        console.log("Downloading " + file + "...");
        callback();
    }, 2000);
}

function finish() {
    console.log("Download complete!");
}

downloadFile("doc.pdf", finish);
