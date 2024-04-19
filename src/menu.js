function createMenu(){
    const menu = document.createElement('div');
    const head = document.createElement('h1')
    head.textContent = "Kerala Restaurant Menu";

    const para = document.createElement('p');
    para.textContent = "1. Biriyani 2. Meals";

    menu.appendChild(head);
    menu.appendChild(para);

    return menu;
}
export{createMenu};