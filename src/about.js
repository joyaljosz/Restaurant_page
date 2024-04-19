 function createAbout(){
    const about = document.createElement('div');
    const head = document.createElement('h1')
    head.textContent = "About Kerala Restaurant";

    const para = document.createElement('p');
    para.textContent = "Best restaurant in kerala";

    about.appendChild(head);
    about.appendChild(para);

    return about;
}
export{createAbout};