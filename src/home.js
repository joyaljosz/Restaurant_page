function homes(){
    const newdiv = document.createElement('div');
    const head = document.createElement('h1')
    head.textContent = "Kerala Restaurant";
console.log('fbhsdbh')
    const para = document.createElement('p');
    para.textContent = "Welcome to Kerala Restaurant";

    newdiv.appendChild(head);
    newdiv.appendChild(para);
    return newdiv;
    
}
export{homes};
