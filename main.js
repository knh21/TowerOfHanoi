// Got help from Randy's demo

document.getElementById("tower1").addEventListener("click", transferDisc)
document.getElementById("tower2").addEventListener("click", transferDisc)
document.getElementById("tower3").addEventListener("click", transferDisc)
//  This is the same as adding event listener to indiviual towers

let tower3 = document.getElementById("tower3") // To be able to see if all 4 disc are in tower 3

let mode = "inHand"
let selectedDisc = null


function transferDisc(evt) {
  const towerNode = evt.currentTarget
  if (mode === "inHand") {
    if (towerNode.hasChildNodes()) {
      selectedDisc = towerNode.lastElementChild
      towerNode.appendChild(selectedDisc)
      mode = "notInHand"
    } else {
      alert("please pick a tower with disc");
    }
  } else {
    if (towerNode.childElementCount === 0) {
      towerNode.appendChild(selectedDisc)
      mode = "inHand"
    } else {
      let towerLastDisc = document.getElementById(towerNode.lastElementChild.id)
      if (selectedDisc.dataset.width > towerLastDisc.dataset.width) {
        mode = "inHand"
        selectedDisc = ""
        alert("Disc is bigger, please try again")
        return
      } else {
        console.log(towerNode.id);
        towerNode.appendChild(selectedDisc)
        mode = "inHand"
      }

    }
    // check for all 4 disc in tower 3 using child element count
  }
  if (tower3.childElementCount === 4) {
    alert("YOU WIN!!!")
    location.reload()
  }

}