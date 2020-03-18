const wrap = document.querySelector(".wrap");
const loader = document.querySelector(".loader");
const t1 = new TimelineMax();

setTimeout(() => {
  t1.fromTo(wrap, 1, { height: "100%" }, { height: "100%" });
  t1.fromTo(loader, 0.3, { opacity: "1" }, { opacity: "0" });
}, 3000);

setTimeout(() => {
  $(".loader").remove();
}, 5500);
