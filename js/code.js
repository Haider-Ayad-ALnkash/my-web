let gear =document.querySelector(".toggle-gear .fa-gear");
gear.onclick =()=>{
    gear.classList.toggle("fa-spin");
    document.querySelector(".setting-box").classList.toggle("open");
  
}

// Change Color
        let mainColor=localStorage.getItem('color-option');
        if (mainColor !==null) {
            document.documentElement.style.setProperty('--main-color',mainColor);
            document.querySelectorAll(".color-list li").forEach(element=>{
                element.classList.remove("active");
                if (element.dataset.color===mainColor) {
                    element.classList.add('active');
                }
            });
        }
        const colorLi=document.querySelectorAll(".color-list li");
        colorLi.forEach(li=> {
            li.addEventListener("click",(e)=>{
                document.documentElement.style.setProperty('--main-color',e.target.dataset.color);
                localStorage.setItem('color-option',e.target.dataset.color);
                toggleActive(e);
        });
    });


// switch background 

    let backgroundOption=true;
    let backgroundInterval;
const RandomBgEL=document.querySelectorAll('.option-box span');
    RandomBgEL.forEach(span=>{
        span.addEventListener("click",(e)=>{       
            toggleActive(e);
                if (e.target.dataset.background ==='yes') {
                    backgroundOption = true;
                    randomizeImage();
                }else{
                    backgroundOption = false;
                    clearInterval(backgroundInterval);
                }
        });
});

// landingpage
let landingpage=document.querySelector('.landing-page'),
    arrayImage=["01.png","02.png","03.jpg"];
    
    function randomizeImage() {
        if (backgroundOption === true) {
            backgroundInterval=setInterval(()=>{
            let randomnumber=Math.floor(Math.random() * arrayImage.length);
            landingpage.style.backgroundImage='url("image/'+arrayImage[randomnumber]+'")';
            },1000);
        }   
    }
    randomizeImage();
    
    // Animation on Skill progress

    let ourSkills=document.querySelector(".Skills");
    window.onscroll=function () {
        let skillsOffsetTop=ourSkills.offsetTop;
        let skillsOuerHeight=ourSkills.offsetHeight;
        let windowHeight=this.innerHeight;
        let windowScrollTop=this.pageYOffset;
       if (windowScrollTop >(skillsOffsetTop + skillsOuerHeight - windowHeight)) {
          let allSkill=document.querySelectorAll(".Skills .skill-box .skill-progress span");
            allSkill.forEach(skill=>{
                skill.style.width=skill.dataset.progress;
            });
       }
    }

    // Creat PopUp With the image

    let myImageGallary=document.querySelectorAll(".gallary img");
    myImageGallary.forEach(img=>{
        img.addEventListener('click',(e)=>{
            let overlay=document.createElement("div");
            overlay.className="popup-overlay";
            document.body.appendChild(overlay);
            let popup_box=document.createElement("div");
            popup_box.className="popup-box";
            if (img.alt !== null) {
                let imgHeading=document.createElement("h2");
                let imgText=document.createTextNode(img.alt);
                imgHeading.appendChild(imgText);
                popup_box.appendChild(imgHeading);
            }
            let popup_image=document.createElement("img");
            popup_image.src=img.src;
            popup_box.appendChild(popup_image);
            document.body.appendChild(popup_box);
            console.log(img.src);

            let close_buttom=document.createElement("span");
            close_buttom.className='clocse_buttom';
            let textX=document.createTextNode('X');
            close_buttom.appendChild(textX);
            popup_box.appendChild(close_buttom);
        });

    
    });


       // Close popup_box
       document.addEventListener("click",function(e){
        if (e.target.className =='clocse_buttom') {
            e.target.parentNode.remove();
            document.querySelector(".popup-overlay").remove();
        }
    });

    // Sellect All Bullets
    const links=document.querySelectorAll(".landing-page .links");
    const allbullets=document.querySelectorAll(".nav-bullets .bullet");
    function scrollToAnyWhere(elements) {
        elements.forEach(ele=>{
            ele.addEventListener("click",(e)=>{
                e.preventDefault()
                document.querySelector(e.target.dataset.section).scrollIntoView({
                    behavior:'smooth'
                });
            })
        })
       
    }
      scrollToAnyWhere(links);
    scrollToAnyWhere(allbullets);

    // Toggle Active Handle
function toggleActive(ev) {
    ev.target.parentElement.querySelectorAll(".active").forEach(element=>{
        element.classList.remove("active");
    });
            ev.target.classList.add('active');
}


//Toggle Buttom Hide & Show bullets
let bulletsbtn=document.querySelectorAll(".bulletsbtn span");
let nav_bullets=document.querySelector(".nav-bullets");
let bulletLocalItem=localStorage.getItem("bullets_option");
if (bulletLocalItem!== null) {
    bulletsbtn.forEach(span=>{
        span.classList.remove("active");
    });
    if (bulletLocalItem==='block') {
        nav_bullets.style.display='block';
        document.querySelector(".bulletsbtn .yes").classList.add('active');
    } else {
        nav_bullets.style.display='none';
        document.querySelector(".bulletsbtn .no").classList.add('active');
    }
}
bulletsbtn.forEach(btn=>{
    btn.addEventListener("click",(e)=>{
        if (btn.dataset.display === 'show') {
            nav_bullets.style.display='block';
            localStorage.setItem("bullets_option",'block');
        }else{
            nav_bullets.style.display='none';
            localStorage.setItem("bullets_option",'none');
        }
        
        });
});

// Clear Option From Logal storage
document.querySelector(".reset-options").onclick=function(){
    
    localStorage.clear();
    // localStorage.removeItem("color-option");
    window.location.reload();
}

// Show men Toggle 
let toggle_menu=document.querySelector(".toggle-menu");
let thelinks=document.querySelector(".links");
toggle_menu.onclick=function (e) {
    e.stopPropagation();
    thelinks.classList.toggle('open');
}

// Click AnyWhere Menu And Toggle buttom 
document.addEventListener("click",(e)=>{
    if (e.target !== toggle_menu && e.target !== "thelinks") {
        if (thelinks.classList.contains("open")) {
            thelinks.classList.toggle('open');
        }
    }
    
});

// StopPropagation on the Links

thelinks.onclick=function (e) {
    e.stopPropagation();
}
