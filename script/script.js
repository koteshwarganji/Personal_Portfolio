function displaySkills(){
    let skills=document.querySelectorAll('.form-control');
    for (let index = 0; index < skills.length; index++) {
        const element = skills[index];
        // console.log(element)
        element.nextSibling.innerText=element.getAttribute('name')+' : '+element.value;
    }
}