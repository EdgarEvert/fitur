gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();
tl.fromTo(".transisi2-title", { height: 150 }, { height: 0 });

ScrollTrigger.create({
  animation: tl,
  trigger: "#section3-2",
  start: "top 80%",
  end: "top 80%",
  scrub: 1,
  // markers: true
});

const tl1 = gsap.timeline();
tl1
  .fromTo(".fitur2", { x: 1000 }, { x: 0 })
  .fromTo(".slide-indicator", { x: -10 }, { x: 290 }, "<")
  .fromTo(".fitur3", { x: 2000 }, { x: 1000 }, "<")
  .fromTo(".fitur1", { x: 0 }, { x: -1000 }, "<")
  .fromTo(".fitur3", { x: 1000 }, { x: 0 })
  .fromTo(".fitur2", { x: 0 }, { x: -1000 }, "<")
  .fromTo('.fitur1', { x: -1000 }, { x: -2000 }, "<")
  .fromTo(".slide-indicator", { x: 290 }, { x: 590 }, "<");

ScrollTrigger.create({
  animation: tl1,
  trigger: "#section3-2",
  start: "top top",
  end: "+=400",
  scrub: 1,
  pin: true,
  anticipatePin: 1,
  // markers: true
});