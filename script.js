let inputSearch = document.querySelector(".search input")
let searchDiv = document.querySelector(".search")
let closeSearch = document.querySelector(".close-search")

inputSearch.addEventListener("focus", () => {
    searchDiv.classList.add("active")
    inputSearch.setAttribute("placeholder", '')

})

document.addEventListener("click", (e) => {
    if (e.target !== inputSearch && e.target !== closeSearch) {
        searchDiv.classList.remove("active")
        inputSearch.setAttribute("placeholder", "Type A Keyword")
        closeSearch.classList.remove("active")
        inputSearch.value = ''
    }
})


closeSearch.addEventListener("click", (e) => {
    inputSearch.value = ''
    e.target.classList.remove("active")
    inputSearch.focus()
})

inputSearch.addEventListener("keyup", () => {
    closeSearch.classList.add("active")
    if (inputSearch.value === '') {
        closeSearch.classList.remove("active")
    }
})