// alert("working");

//========================
//========================

gsap.fromTo(".handsUp", 
    { 
      opacity: 0, 
      scale: 0, 
    }, 
    { 
      opacity: 1, 
      scale: 1, 
      scrollTrigger: {
        trigger: ".handsUp",
        start: "top 90%",
        end: "top 50%",  
        scrub: true      
      }
    }
  );


gsap.from(".workingImg", {
  x: 1000,
  opacity: 0,
  duration: 2,
  stagger: 0.4,
  scrollTrigger: {
    trigger: ".iWhat",
    scroller: "body",
    start: "top 90%",
    end: "top 58%",
    scrub: 2.5,

  },
});

gsap.from(".logoSection", {
  x: -1000,
  opacity: 0,
  duration: 2,
  stagger: 0.4,
  scrollTrigger: {
    trigger: ".iWhat",
    scroller: "body",
    start: "top 75%",
    end: "top 58%",
    scrub: 2.5,

  },
});

let education = document.querySelector(".education");
education.addEventListener("mouseover",function(e){
        console.log(e.target);
        // document.querySelector(".line").style.backgroundColor = "#55198b";
        document.querySelector(".line").style.backgroundColor = "#a9a7f9";
        document.querySelector(".line").style.opacity = 1;
        document.querySelector(".line").style.width = "100%";

})

education.addEventListener("mouseleave", function() {
    console.log('Mouse has left the element');
    document.querySelector(".line").style.backgroundColor = "white";  
    document.querySelector(".line").style.opacity = 0.4;
    document.querySelector(".line").style.width = "45%";
});


document.querySelector('.skills').addEventListener('click', function() {
    document.querySelector('.whatIDo').scrollIntoView({
        behavior: 'smooth' 
    });
});

document.querySelector('.projects').addEventListener('click', function() {
    document.querySelector('.myprojects').scrollIntoView({
        behavior: 'smooth' 
    });
});

document.querySelector('.contact').addEventListener('click', function() {
    document.querySelector('.contactMeSection').scrollIntoView({
        behavior: 'smooth' 
    });
});
// contactMeBtn
document.querySelector(".contactMeBtn").addEventListener("click",function(e){
    console.log(e.target);  
    document.querySelector(".contactMeSection").scrollIntoView({
        behavior:"smooth"
    });
});
// seeResumeBtn
document.querySelector(".seeResumeBtn").addEventListener("click",function(e){
    console.log(e.target);
    window.open("https://github.com/abhishek-solanke/Abhishek-Solanke-Resume-Java/blob/master/Abhishek_Solanke_Resume%20-%20Java.pdf", "_blank"); // Opens in a new tab    

    window.location("https://github.com/abhishek-solanke/Abhishek-Solanke-Resume-Java/blob/master/Abhishek_Solanke_Resume%20-%20Java.pdf");

})


document.querySelector(".handsUp").addEventListener("click",function(e){
    console.log(e.target);
    window.scrollTo({
        top: 0 ,
        behavior:"smooth"
    })
    
});

//For continuoly changing the skills set
let skillsArray = ["Spring","SpringBoot","Hibernate","Microservices","Kafka","HTML","CSS","Javascript","Github","RestAPI","JSON","Oracle","SQL","MongoDB",];
    let len = skillsArray.length; 
    
    let nameChanger = document.querySelector(".changingSkillsName");
    let count = 0;
    setInterval(() => {
      if (count == len) {
        count = 0;
      }
      nameChanger.textContent = skillsArray[count];
      count++;
    }, 1000);
    