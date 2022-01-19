var template = document.createElement("template"); //<template> </template>
//put html & style here 
template.innerHTML = `

`; //template literal ~ quote 

class TheCounter extends HTMLElement {//RULE
    constructor() {//RULE
        super();//RULE
        this.attachShadow({mode:"open"})//RULE
    }

    connectedCallback(){
        this.shadowRoot.appendChild(template.content.cloneNode(true));//RULE
    }
}

customElements.define("fillwith-", NameIT)//RULE Fill counter with names