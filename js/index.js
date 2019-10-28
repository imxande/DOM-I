const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// adding image
const myImage = document.querySelector("#cta-img");
myImage.setAttribute("src", siteContent["cta"]["img-src"])

// adding nav
const links = document.querySelectorAll("nav a");
console.log(links);
links[0].textContent = siteContent.nav["nav-item-1"];
links[1].textContent = siteContent.nav["nav-item-2"];
links[2].textContent = siteContent.nav["nav-item-3"];
links[3].textContent = siteContent.nav["nav-item-4"];
links[4].textContent = siteContent.nav["nav-item-5"];
links[5].textContent = siteContent.nav["nav-item-6"];

links.forEach((item)=>{
  item.style.color = "green";
})

// // adding h1 
const myH1 = document.querySelector("h1");
console.log(myH1);
myH1.textContent = siteContent.cta["h1"];

// // adding button 
const mybt = document.querySelector("button");
console.log(mybt);
mybt.textContent = siteContent.cta["button"];

// adding h4
const myH4 = document.querySelectorAll(".main-content h4");
console.log(myH4);
myH4[0].textContent = siteContent["main-content"]["features-h4"];
myH4[1].textContent = siteContent["main-content"]["about-h4"];
myH4[2].textContent = siteContent["main-content"]["services-h4"];
myH4[3].textContent = siteContent["main-content"]["product-h4"];
myH4[4].textContent = siteContent["main-content"]["vision-h4"];

// adding middle image
const middle_image = document.querySelector("#middle-img")
middle_image.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

// adding parragraph
const myPara = document.querySelectorAll(".main-content p");
console.log(myH4);
myPara[0].textContent = siteContent["main-content"]["features-content"];
myPara[1].textContent = siteContent["main-content"]["about-content"];
myPara[2].textContent = siteContent["main-content"]["services-content"];
myPara[3].textContent = siteContent["main-content"]["product-content"];
myPara[4].textContent = siteContent["main-content"]["vision-content"];

// adding contact 
const newH4 = document.querySelector(".contact h4");
console.log(newH4)
newH4.textContent = siteContent["contact"]["contact-h4"];

// adding contact info
const newPara = document.querySelectorAll(".contact p")
newPara[0].textContent = siteContent["contact"]["address"];
newPara[1].textContent = siteContent["contact"]["phone"];
newPara[2].textContent = siteContent["contact"]["email"];

// adding footer
const myFooter = document.querySelector("footer p");
myFooter.textContent = siteContent.footer["copyright"];








