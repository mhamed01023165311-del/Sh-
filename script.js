function showCV(name, job, bio) {
    const modal = document.getElementById('cvModal');
    const content = document.getElementById('modalData');
    
    content.innerHTML = `
        <h2 style="color: #38bdf8">${name}</h2>
        <h3>${job}</h3>
        <hr style="border: 0.5px solid rgba(255,255,255,0.1)">
        <p>${bio}</p>
        <div style="margin-top: 20px;">
            <button style="background:#38bdf8; border:none; padding:10px 20px; border-radius:8px; cursor:pointer; font-weight:bold;">تحميل الـ CV (PDF)</button>
        </div>
    `;
    
    modal.style.display = "block";
}

function closeModal() {
    document.getElementById('cvModal').style.display = "none";
}

// قفل النافذة لو ضغطت في أي مكان بره
window.onclick = function(event) {
    let modal = document.getElementById('cvModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

