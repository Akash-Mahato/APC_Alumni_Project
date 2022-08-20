//founder card structure
/*
  >div.founder    ->event attached
    >img
    >div
      >p
      >h5
      >span
*/
const founders = document.querySelectorAll(".founder");
founders.forEach((founder) =>
  founder.addEventListener("mouseover", maximiseCard)
);
founders.forEach((founder) =>
  founder.addEventListener("mouseleave", minimiseCard)
);
let pTag = null;
let imgTag = null;
function maximiseCard(e) {
  if (e.target.classList.toString().includes("founder")) {
    // console.log("founder");
    console.log(e.target.children);
    pTag = e.target.children[1].children[0];
    imgTag = e.target.childNodes[1];
  } else if (
    e.target.tagName === "SPAN" ||
    e.target.tagName === "H5" ||
    e.target.tagName === "B"
  ) {
    pTag = e.target.parentNode.firstElementChild;
    imgTag = e.target.parentNode.parentNode.previousElementSibling;
    console.log(imgTag);
  } else if (e.target.tagName === "IMG") {
    pTag = e.target.nextElementSibling.children[0];
    imgTag = e.target;
  } else if (e.target.tagName === "DIV") {
    pTag = e.target.children[0];
    imgTag = e.target.previousElementSibling;
  } else {
    console.log(e.target.tagName);
    console.log("unknown property");
  }
  if (pTag && imgTag) {
    pTag.style.display = "block";
    pTag.style.marginTop = "50px";
    imgTag.style.width = "113px";
    imgTag.style.height = "113px";
  }
}
function minimiseCard(e) {
  //console.log(e.target.id);
  if (pTag && imgTag) {
    pTag.style.display = "none";
    imgTag.style.width = "200px";
    imgTag.style.height = "200px";
    pTag = imgTag = null;
  }
}
