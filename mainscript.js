window.addEventListener("scroll", () => {
  let header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

const menuList = () => {
  console.log("thành công");
  let listMN = document.getElementById("listMenuChose");
  listMN.classList.toggle("active");
};
/// hàm reponsive phần skill
const collHeaderArr = document.querySelectorAll(".collHeader");
console.log(collHeaderArr);
collHeaderArr.forEach((collHeader) => {
  collHeader.addEventListener("click", () => {
    collHeader.classList.toggle("active");
  });
});

window.addEventListener("scroll", () => {
  let scrollDistance = $(window).scrollTop();
  const Arrsection = document.querySelectorAll("section");
  console.log(Arrsection);
  Arrsection.forEach((Section, i) => {
    if ($(Section).position().top <= scrollDistance) {
      console.log("đã được", Section);
      $("nav a.activePosition").removeClass("activePosition");
      $("nav a").eq(i).addClass("activePosition");
    }
  });
});
