let path = `M 10 80 Q 500 80 1190 80`;
let finalpath = `M 10 80 Q 500 80 1190 80`;
document.querySelector("#string").addEventListener("mousemove", (dets) => {
  path = `M 10 80 Q ${dets.x} ${dets.y - 200} 1190 80`;
  gsap.to("#svg path", {
    attr: { d: path },
    duration: 0.5,
  });
});

document.querySelector("#string").addEventListener("mouseleave", () => {
  gsap.to("#svg path", {
    attr: { d: finalpath },
    duration: 1.5,
    ease: "elastic.out(1,0.2)",
  });
});
document.querySelector(".RR").addEventListener("mouseover", () => {
  console.log("working");
  gsap.to(".learnedskills1", {
    opacity: 1,
  });
});
document.querySelector(".RR").addEventListener("mouseout", () => {
  gsap.to(".learnedskills1", {
    opacity: 0,
  });
});
document.querySelector(".IT").addEventListener("mouseover", () => {
  gsap.to(".learnedskills2", {
    opacity: 1,
  });
});
document.querySelector(".IT").addEventListener("mouseout", () => {
  gsap.to(".learnedskills2", {
    opacity: 0,
  });
});
document.querySelector(".dot").addEventListener("mouseover", () => {
  gsap.to(".live", {
    opacity: 1,
  });
});
document.querySelector(".dot").addEventListener("mouseout", () => {
  gsap.to(".live", {
    opacity: 0,
  });
});
document.querySelector(".linedot1").addEventListener("mouseover", () => {
  gsap.to(".project", {
    opacity: 1,
  });
});
document.querySelector(".linedot1").addEventListener("click", () => {
  gsap.to(".project", {
    opacity: 1,
  });
});

document.querySelector(".soon").addEventListener("click", () => {
  gsap.to(".project", {
    opacity: 1,
  });
});
document.querySelector("#viewproject").addEventListener("click", () => {
  gsap.to(".allprojects", {
    opacity: 1,
  });
});
document.querySelector(".projectclose").addEventListener("click", () => {
  gsap.to(".project", {
    opacity: 0,
  });
});
document.querySelector(".projectclose").addEventListener("mouseover", () => {
  gsap.to(".projectclose", {
    rotate: 180,
    duration: 0.3,
  });
});
document.querySelector(".allprojectsclose").addEventListener("click", () => {
  gsap.to(".allprojects", {
    opacity: 0,
  });
});
document
  .querySelector(".allprojectsclose")
  .addEventListener("mouseover", () => {
    gsap.to(".allprojectsclose", {
      rotate: 180,
      duration: 0.3,
    });
  });
// Gsap Animation
gsap.to("#text1", {
  duration: 1,
  opacity: 1,
  scrollTrigger: {
    trigger: "#text1",
    scroller: "body",
    start: "top 80%",
  },
});
gsap.to("#startingline", {
  duration: 1,
  opacity: 1,
  scrollTrigger: {
    trigger: "#startingline",
    scroller: "body",
    start: "top 80%",
  },
});
gsap.to(".progressline", {
  duration: 1,
  opacity: 1,
  scrollTrigger: {
    trigger: ".progressline",
    scroller: "body",
    start: "top 80%",
  },
});
gsap.to(".dot", {
  duration: 1,
  scale:1,
  opacity:1,
  ease:"bounce.out(1,1)",
  scrollTrigger: {
    trigger: ".dot",
    scroller: "body",
    start: "top 90%",
  },
});
gsap.to(".linedot1", {
  duration: 1,
  scale:1,
  ease:"bounce.out(1,1)",
  scrollTrigger: {
    trigger: ".linedot1",
    scroller: "body",
    start: "top 90%",
  },
});
gsap.to(".experiencecontainer", {
  duration: 1,
  opacity: 1,
  scrollTrigger: {
    trigger: ".experiencecontainer",
    scroller: "body",
    start: "top 80%",
  },
});
gsap.to(".skillcontainer", {
  opacity: 1,
  scrollTrigger: {
    trigger: ".skillcontainer",
    scroller: "body",
    start: "top 90%",
  },
});
gsap.to("#footertext1", {
  duration: 1,
  opacity: 1,
  scrollTrigger: {
    trigger: "#footertext1",
    scroller: "body",
    start: "top 90%",
  },
});
gsap.to(".footer", {
  duration: 2,
  opacity: 1,
  scrollTrigger: {
    trigger: ".footer",
    scroller: "body",
    start: "top 100%",
  },
});
gsap.from(".container1", {
  opacity: 0,
  duration: 0.8,
});
