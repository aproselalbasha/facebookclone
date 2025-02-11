var clickbtn = document.getElementById("clickbtn");
var settings=document.querySelector(".settings-menu")
clickbtn.addEventListener("click",()=>{
settings.classList.toggle("setting-toggle")
})

var darkbtn=document.querySelector(".dark-btn");
darkbtn.addEventListener("click",()=>{
    darkbtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme")
    if(localStorage.getItem('theme')=="light")
    {
        localStorage.setItem('theme','dark')
    }
    else if(localStorage.getItem('theme')=='dark')
    {
        localStorage.setItem('theme','light')
    }

})
if(localStorage.getItem("theme")=="light"){
    darkbtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme")

}
else if(localStorage.getItem("theme")=="dark")
{
    darkbtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme")

}
else{
    localStorage.setItem('theme','light')
}