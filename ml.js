// =============================
// OPEN MODAL
// =============================

function openModal(productName){

    const modal =
    document.getElementById("modal");

    const title =
    document.getElementById("modalTitle");

    title.innerText = productName;

    modal.style.display = "flex";
}

// =============================
// CLOSE MODAL
// =============================

function closeModal(){

    const modal =
    document.getElementById("modal");

    modal.style.display = "none";
}

// =============================
// CLOSE MODAL OUTSIDE
// =============================

window.onclick = function(e){

    const modal =
    document.getElementById("modal");

    if(e.target == modal){

        modal.style.display = "none";
    }
}