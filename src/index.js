import "./styles.css";

function dropdownManipulation(event) {
  const dropDownBtn = event.target.matches(".dropdown-btn");
  let currentDropDownMenu;

  const getMenu = document.querySelector(".dropdown-menu");

  if (event.target === getMenu || getMenu.contains(event.target)) return;

  if (dropDownBtn) {
    const dropDown = event.target.closest(".dropdown");
    const dropDownMenu = dropDown.childNodes[3];
    dropDownMenu.classList.toggle("visible");
    dropDownMenu.classList.toggle("top-position");
    currentDropDownMenu = dropDownMenu;
    console.log(currentDropDownMenu);
  }

  document.querySelectorAll(".dropdown-menu.visible").forEach((active) => {
    if (active !== currentDropDownMenu) {
      active.classList.toggle("top-position");
      active.classList.toggle("visible");
      console.log(active);
      console.log(currentDropDownMenu);
    }
  });
}

document.addEventListener("click", dropdownManipulation);

// FOR CLICKING ON OTHER BUTTONS, BUT CAN BE SIMPLIFIED TO JUST CLICKING ON ANYTHING ELSE IN THE ABOVE FUNCTION
// function checkMenus(event) {
//   if (event.target.matches(".dropdown-btn")) {
//     const btns = document.querySelectorAll(".dropdown-btn");
//     const btnsArray = [...btns];
//     btnsArray.forEach((btn) => {
//       if (
//         event.target !== btn &&
//         btn.parentNode.childNodes[3].classList.contains("visible")
//       ) {
//         btn.parentNode.childNodes[3].classList.toggle("visible");
//       }
//     });
//   }
// }

// document.addEventListener("click", checkMenus);

// IF WE CLICK ANYTHING THAT IS NOT WITHIN THE DROPDOWN AND IF THE DROPDOWN IS ACTIVE (VISIBLE) SO LIKE DROPDOWN MENU/DROPDOWN ITEMS, THEN WE WANT TO CLOSE THE CURRENTLY ACTIVE DROPDOWN.
