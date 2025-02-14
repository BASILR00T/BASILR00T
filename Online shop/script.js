// Get the modal
let modal = document.getElementById('id01');
let modal2 = document.getElementById('id02');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
const modal = document.getElementById("id01");
if (event.target == modal) {
    modal.style.display = "none";
}
};
document.addEventListener("keydown", function (event) {
if (event.key === "Escape") {
    document.getElementById("id01").style.display = "none";
    document.getElementById("id02").style.display = "none";
}
});