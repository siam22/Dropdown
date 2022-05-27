document.addEventListener("click", e => {
    const isDropdowm = e.target.matches("[data-dropdown-button]");
    if (!isDropdowm && e.target.closest("[data-dropdown]") != null) return

    let currentDropdown

    if(isDropdowm) {
        currentDropdown = e.target.closest("[data-dropdown]")
        currentDropdown.classList.toggle("active")
    }

    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if(dropdown === currentDropdown) return
        dropdown.classList.remove("active")
    })
})

