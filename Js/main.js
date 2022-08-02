const toggle = document.querySelector(".toggle")
const menuDashboard = document.querySelector(".menu-dashboard")
const enlacesMenu = document.querySelectorAll(".enlace")

toggle.addEventListener("click", () => {
    menuDashboard.classList.toggle("open")

    if(toggle.classList.contains("bx-menu")){
        toggle.classList.replace("bx-menu", "bx-x")
    }else {
        toggle.classList.replace("bx-x", "bx-menu")
    }
})

enlacesMenu.forEach(enlace => {
    enlace.addEventListener("click", () => {
        menuDashboard.classList.add("open")
        toggle.classList.replace("bx-menu", "bx-x")
    })
})

feather.replace()