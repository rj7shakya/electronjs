function errorCallback(e) {
  console.log("Error", e);
}
const path = require("path");

const { desktopCapturer } = require("electron");
// navigator.getUserMedia(
//   { video: { width: 800, height: 600 }, audio: true },
//   (localMediaStream) => {
//     var video = document.querySelector("video");
//     video.srcObject = localMediaStream;
//     video.onloadedmetadata = (e) => {
//       video.play();
//       // Ready to go. Do some stuff.
//     };
//   },
//   errorCallback
// );

desktopCapturer.getSources(
  { types: ["window", "screen"] },
  (error, sources) => {
    if (error) throw error;
    for (let i = 0; i < sources.length; ++i) {
      if (sources[i].name === "Your Window Name here!") {
        navigator.webkitGetUserMedia(
          {
            audio: false,
            video: {
              mandatory: {
                chromeMediaSource: "desktop",
                chromeMediaSourceId: sources[i].id,
                minWidth: 1280,
                maxWidth: 1280,
                minHeight: 720,
                maxHeight: 720,
              },
            },
          },
          handleStream,
          handleError
        );
        return;
      }
    }
  }
);

function handleStream(stream) {
  document.querySelector("video").src = URL.createObjectURL(stream);
}

function handleError(e) {
  console.log(e);
}
