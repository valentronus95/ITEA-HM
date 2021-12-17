
let pattern = /[]/;

window.addEventListener("DOMContentLoaded", () => {
  const [...allInputs] = document.querySelectorAll("input[type=text],input[type=email],input[type=tel]");
  allInputs.forEach((el) => {
    el.addEventListener("change", (e) => {
      if (e.target.value.length > 2) {
        e.target.style.border = "1px solid green";
      } else {
        e.target.style.border = "1px solid red";
      }
      switch (e.target.id) {
        case "userName":
        case "userSurname": 
        case "userCountry":
        case "userCity":
          pattern = /^[АаБбВвГгҐґДдЕеЄєЖжЗзИиІіЇїЙйКкЛлМмНнОоПпРрСсТтУуФфХхЦцЧчШшЩщЬьЮюЯя]+$/;

          if (pattern.test(e.target.value)) {
            e.target.style.border = "1px solid green";
          } else {
            e.target.style.border = "1px solid red";
          }
          break;
        case "userPhone": 
        case "userBonPhone":
          pattern = /\+38\d{10}/;

          if (pattern.test(e.target.value)) {
            e.target.style.border = "1px solid green";
          } else {
            e.target.style.border = "1px solid red";
          }
          break;
        case "userEmail":
          pattern = /\b[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,4}\b/i;

          if (pattern.test(e.target.value)) {
            e.target.style.border = "1px solid green";
          } else {
            e.target.style.border = "1px solid red";
          }
          break;
        case "userIndex":
          pattern = /d{5}/;

          if (pattern.test(e.target.value)) {
            e.target.style.border = "1px solid green";
          } else {
            e.target.style.border = "1px solid red";
          }
          break;
      }
    });
  });
});

// pattern="^[АаБбВвГгҐґДдЕеЄєЖжЗзИиІіЇїЙйКкЛлМмНнОоПпРрСсТтУуФфХхЦцЧчШшЩщЬьЮюЯя]+$"
