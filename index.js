console.log('Hello From the Beautiful PNW');
const gWink = gsap.to("#cfish-path_eye", {
  duration: 0.1,
  yoyo: true,
  easing: "circular",
  scaleY: 0,
  transformOrigin: "25% 75%",
  repeat: 1,
  paused: true
});

for (const id of ["title", "subtitle", "cfish"]) {
    document.getElementById(id).addEventListener("click", () => gWink.play(0));
}
