var template = document.createElement("template"); //<template> </template>
template.innerHTML = `
<style>
#counter {
    background-color: #DAD;
    display: flex;
}
#counter > button {
    height: 25px;
    width: 25px;
    background-color: #bed;
    border: none;
    border-radius: 5px;
    margin: 5px;
    font-size: 24px;
}
#counter > div {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

}
#bar {
    background-color: #ADD;
    width: 0px;
    height: 25px;
}
</style>
<body>
    <div id="counter">
        <button id = "ibut"onclick="inc()">+</button>
        <div id = "number">1</div>
        <button id = "dbut" onclick="dcr()">-</button>
    </div>
    <div id="bar"></div>

`; //template literal ~ quote 

class TheCounter extends HTMLElement {//RULE
    constructor() {//RULE
        super();//RULE
        this.num = 1;
        this.attachShadow({mode:"open"})//RULE
    }

    connectedCallback(){
        this.shadowRoot.appendChild(template.content.cloneNode(true));//RULE
        this.shadowRoot.querySelector("#ibut").onclick = () => this.inc();
        this.shadowRoot.querySelector("#dbut").onclick = () => this.dcr();
    }

    inc () {
        this.num = this.num+1;
        this.shadowRoot.querySelector("#number").innerText = this.num;
        this.shadowRoot.querySelector("#bar").style.width = (this.num*10)+"px"
    }

    dcr () {
        this.num = this.num-1;
        this.shadowRoot.querySelector("#number").innerText = this.num;
        this.shadowRoot.querySelector("#bar").style.width = (this.num*10)+"px"
    }
}

customElements.define("the-counter", TheCounter)//RULE