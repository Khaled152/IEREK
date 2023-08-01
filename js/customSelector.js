
const selector = document.querySelector("#selector-btn")
const seletedArticleViewer = document.querySelector("#seleted-article-viewer")
const articleHref = document.querySelector("#articleHref")
var checkedItem = document.querySelector(".checkLabel")
var activeNavItem = document.querySelector(".nav-link.active")
const links = document.querySelectorAll(".nav-link")
checkedItem.previousElementSibling.checked = true
seletedArticleViewer.innerHTML = checkedItem.previousElementSibling.previousElementSibling.innerHTML

document.querySelector(".navbar-nav").addEventListener("click", (e) => {

    e.preventDefault()
    if (e.target.classList.contains("nav-link")) {
        chnageActiveLink(e.target)
        targetHref = e.target.href.split("#")[1]

        elements = document.querySelectorAll(".checkbox-button")
        for (ele of elements) {
            if (ele.getAttribute("for") == targetHref) {
                chnageSelectedItem(ele.lastElementChild)
                checkedItem.previousElementSibling.click()
                break;
            }
        }

        articleHref.click()
    }

})



selector.addEventListener("click", (e) => {
    target = e.target

    if (target.classList.contains("checkLabel")) {

        chnageSelectedItem(target)
        checkedItem.previousElementSibling.click
    }
})

function chnageSelectedItem(item) {
    console.log(item)
    checkedItem.previousElementSibling.checked = false
    checkedItem = item
    seletedArticleViewer.innerHTML = checkedItem.previousElementSibling.previousElementSibling.innerHTML
    activeLinkFor(checkedItem.parentElement.getAttribute("for"))
}

function chnageActiveLink(link){
    activeNavItem.classList.remove("active")
    activeNavItem = link
    activeNavItem.classList.add("active")
}

function activeLinkFor(searchedLink){
    for(link of links){        
         href = link.href.split("#")[1]         
         if(href == searchedLink){
            chnageActiveLink(link)
            break
         }
    }
}

