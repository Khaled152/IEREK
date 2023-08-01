const coursel =  document.querySelector("#card1")
const fullDiscriptionText = document.querySelector("#full-discription")
var selectedReadMe
fullDiscriptionText.style.display = "none"


coursel.addEventListener("click" , (event)=>{
  
    target = event.target;
    
    if(target.classList.contains("read-more")){
      if(selectedReadMe != undefined &&selectedReadMe != target){
        selectedReadMe.classList.remove("selected")
        selectedReadMe.textContent =  "Read More"
      }

      selectedReadMe = target
      if(!target.classList.contains("selected")){
        fullDiscriptionText.style.display = "block"
        discription = target.previousElementSibling
        fullDiscriptionText.innerText = discription.innerText
        target.classList.add("selected")
        target.textContent =  "Read Less"
      }else{
        fullDiscriptionText.style.display = "none"
        target.classList.remove("selected")
        target.textContent =  "Read More"
      }
    }
})

const scrollContainer = document.querySelector('.scroll-container');

// Add a scroll event listener to update the custom scrollbar
scrollContainer.addEventListener('scroll', updateScrollbar);

// Function to update the custom scrollbar
function updateScrollbar() {
  // Calculate the scrollbar position based on the scroll percentage
  const scrollThumbPosition = (scrollContainer.scrollTop / (scrollContainer.scrollHeight - scrollContainer.clientHeight)) * 100;

  // Apply the calculated position to the custom scrollbar thumb
  scrollContainer.style.setProperty('--scroll-thumb-position', `${scrollThumbPosition}%`);
}