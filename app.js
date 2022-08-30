// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************

const footerDate = document.querySelector(".date");
const date = new Date().getFullYear();
footerDate.innerHTML = date;
// console.log(date);

// ********** close links ************

const navToggle = document.querySelector(".nav-toggle");
const linkContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click" ,() => {
    // linkContainer.classList.toggle("show-links")
    const containerHeight = linkContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;
    // console.log(containerHeight);
    // console.log(linksHeight);

    if(containerHeight === 0) {
        linkContainer.style.height = `${linksHeight}px`;
    }else{
        linkContainer.style.height = 0;
    }
})

// ********** fixed navbar ************

const navBar = document.getElementById("nav");
const topLink = document.querySelector(".top-link")

window.addEventListener("scroll" , () => {
    console.log(window.pageYOffset);
    const scrollHeight = window.pageYOffset;
    const navHeight = navBar.getBoundingClientRect().height;

    scrollHeight > navHeight ? navBar.classList.add("fixed-nav") : navBar.classList.remove("fixed-nav");

    scrollHeight > 500 ? topLink.classList.add("show-link") : topLink.classList.remove("show-link");
})

// ********** smooth scroll ************
// select links

const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach((link) => {
    link.addEventListener("click" , (e) => {
        e.preventDefault();
        const id = e.currentTarget.getAttribute("href").slice(1);
        // console.log(id);
        const element = document.getElementById(id);
        // Calculate the height
        const navHeight = navBar.getBoundingClientRect().height;
        const containerHeight = linkContainer.getBoundingClientRect().height;
        const fixedNav = navBar.classList.contains("fixed-nav")
        let position = element.offsetTop - navHeight;
        !fixedNav ? position =position -navHeight : null;
        navHeight > 82 ? position = position + containerHeight : null;
        window.scroll({
            left: 0,
            top: position,
        });
        linkContainer.style.height = 0;
    })
})

