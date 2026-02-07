function toggleCV() {
    const overlay = document.getElementById('cvOverlay');
    if (overlay.style.display === "flex") {
        overlay.style.display = "none";
    } else {
        overlay.style.display = "flex";
    }
}

function playVideo(videoName) {
    alert("سيتم تشغيل الفيديو: " + videoName);
    // هنا مستقبلاً هنضيف كود تشغيل الفيديو الحقيقي
}
