

//угловая кнопка
document.querySelector(".scroll-up").addEventListener("click",function (){
    scrollTo(0, 0)
})

//голова
//О компании
const company_scroller= document.getElementById("scroll-to-company")
document.querySelector(".btn-company").addEventListener("click",function (){
    company_scroller.scrollIntoView({block: "center", inline: "center"});
})

const production_scroller= document.getElementById("scroll-to-production")
document.querySelector(".btn-production").addEventListener("click",function (){
    production_scroller.scrollIntoView({block: "center", inline: "center"});
})

//объекты
const objects_scroller= document.getElementById("scroll-to-objects")
document.querySelector(".btn-objects").addEventListener("click",function (){
    objects_scroller.scrollIntoView({block: "center", inline: "center"});
})

//контакты
const contacts_scroller= document.getElementById("scroll-to-contacts")
document.querySelector(".btn-contacts").addEventListener("click",function (){
    contacts_scroller.scrollIntoView({block: "center", inline: "center"});
})

