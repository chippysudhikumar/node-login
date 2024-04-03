const form=document.querySelector("form")
const email=document.querySelector("input[type=email]")
const password=document.querySelector("input[type=password]")


form.addEventListener("submit",validated)

function validated(e){
if(email.value==="" || password.value===""){
    e.preventDefault()
    alert("please fill the form")
    return false
}
}