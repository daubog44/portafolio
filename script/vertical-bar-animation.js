export default function (arg, index) {
  let liquid = document.querySelectorAll(".li" + index);

  new TimelineMax()
    .staggerTo(
      liquid,
      0.7,
      {
        x: "-=200",
        ease: Linear.easeNone,
        repeat: -1,
      },
      0.9
    )
    .time(100);
}
