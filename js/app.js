const openNav = () => {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

const closeNav = () => {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

// const dropbtn = document.querySelector(".dropbtn")

// dropbtn.addEventListener("click", () => {
//     dropdown_content.style.display = "none";
// })