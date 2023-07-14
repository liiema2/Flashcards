let elementA = document.getElementsByClassName("rounded-pill");

// for (let i = 0; i < elementA.length; i++) {
//   elementA[i].addEventListener("click", function(){
//     elementA[i].classList.toggle("checked");
//   });
// }
for (let i = 0; i < elementA.length; i++) {
  elementA[i].addEventListener("click", function(event) {
    event.preventDefault();
    for (let j = 0; j < elementA.length; j++) {
      elementA[j].classList.remove("checked");
    }
    elementA[i].classList.add("checked");         
  });
}

function onClick() {
  let moreDisplay = document.getElementsByClassName("folder_add_white_more");
  let moreList = document.getElementsByClassName("folder_add_white_more_list");
  for (let i = 0; i < moreDisplay.length; i++) {
    moreDisplay[i].addEventListener("click", function(event) {
      event.stopPropagation(); // 
      for (let j = 0; j < moreList.length; j++) {
        moreList[j].style.display = "none";
      }
      moreList[i].style.display = "block";

      document.body.addEventListener("click", function() {
        moreList[i].style.display = "none";
      });
    });
  }
}

onClick();


