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
  // .fromTo(".indicator", { opacity: 0 }, { opacity: 1 }, "<")
  // .fromTo(".fitur1", { x: 1000, opacity: 0 }, { x: 0, opacity: 1 })
  .fromTo(".fitur2", { x: 1500 }, { x: 0 })
  .fromTo(".indicator", { x: -10 }, { x: 490 }, "<")
  .fromTo(".fitur3", { x: 2000 }, { x: 1500 }, "<")
  .fromTo(".fitur1", { x: 0 }, { x: -1500 }, "<")
  .fromTo(".fitur3", { x: 1500 }, { x: 0 })
  .fromTo(".fitur2", { x: 0 }, { x: -1500 }, "<")
  .fromTo('.fitur1', { x: -1500 }, { x: -3000 }, "<")
  .fromTo(".indicator", { x: 490 }, { x: 990 }, "<");

ScrollTrigger.create({
  animation: tl1,
  trigger: "#section3-2",
  start: "top top",
  end: "+=1000",
  scrub: 1,
  pin: true,
  anticipatePin: 1,
  // markers: true
});