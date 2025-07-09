function toggle_el() {
    const hamb_icon = document.getElementsByClassName("hamb_icon")[0];
    const dropdwn = document.getElementsByClassName("dropdwn")[0];

    if (dropdwn.hidden == true) {
        hamb_icon.classList.add("open");
        dropdwn.hidden = false;
        dropdwn.style.display = "flex";
    } else {
        hamb_icon.classList.remove("open");
        dropdwn.hidden = true;
        dropdwn.style.display = "none";
    }
}