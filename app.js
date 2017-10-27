window.addEventListener("DOMContentLoaded", function () {

  // Grab elements, create settings, etc.
  var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    video = document.getElementById("video"),
    videoObj = {
      video: true,
      audio: true
    }

    errBack = function (error) {
      console.log("Video capture error: ", error.code);
    };

    if (navigator.getUserMedia) {
      navigator.webkitGetUserMedia(videoObj, function (stream) {
        video.src = window.URL.createObjectURL(stream);

        video.crossOrigin = 'anonymous';
        var prom = video.play();

      }, errBack);
    } else if (navigator.webkitGetUserMedia) { // WebKit-prefixed
      navigator.webkitGetUserMedia(videoObj, function (stream) {
        video.src = window.webkitURL.createObjectURL(stream);
        video.play();
      }, errBack);
    }

    document.getElementById("snap").addEventListener("click", function() {
      context.drawImage(video, 0, 0, 640, 480);
    });
});
