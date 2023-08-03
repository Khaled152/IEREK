
const selector = document.querySelector("#selector-btn")
const seletedArticleViewer = document.querySelector("#seleted-article-viewer")
const articleHref = document.querySelector("#articleHref")
var checkedItem = document.querySelector(".checkLabel")
var activeNavItem = document.querySelector(".nav-link.active")
const links = document.querySelectorAll(".nav-link")
checkedItem.previousElementSibling.checked = true
seletedArticleViewer.innerHTML = checkedItem.previousElementSibling.previousElementSibling.innerHTML

document.querySelector(".nav-tab").addEventListener("click", (e) => {

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

function chnageActiveLink(link) {
    activeNavItem.classList.remove("active")
    activeNavItem = link
    activeNavItem.classList.add("active")
}

function activeLinkFor(searchedLink) {
    for (link of links) {
        href = link.href.split("#")[1]
        if (href == searchedLink) {
            chnageActiveLink(link)
            break
        }
    }
}

/***********************Muilte selector***********************/
let dropdown = document.querySelector(".multiselect-dropdown");
let menu = document.querySelector(".menu");
let listContainer = document.querySelector(".selectedList-container");
let selectedItems = [];

dropdown.onclick = (event) => {
    event.currentTarget.classList.toggle("show");
};

menu.addEventListener("click", (event) => {
    event.stopPropagation();

    let item = event.target.innerHTML;

    if (!selectedItems.includes(item)) {
        selectedItems.push(item);
        showSelectedItems(item);
    }
});

function showSelectedItems(item) {
    let itemSpan = document.createElement("span");
    let crossIcon = document.createElement("i");

    itemSpan.innerHTML = item;
    itemSpan.classList.add("selectedItem");

    crossIcon.classList.add("fa-solid", "fa-xmark");
    itemSpan.append(crossIcon);

    itemSpan.addEventListener("click", deleteItem);
    listContainer.append(itemSpan);
}

function deleteItem(event) {
    event.stopPropagation();
    let item = event.currentTarget;

    selectedItems = selectedItems.filter((value) => value !== item.textContent);

    item.classList.add("zoomOut");

    setTimeout(() => {
        item.remove();
        item.classList.remove("zoomOut");
    }, 390);
}

/************************************/

