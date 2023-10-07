import dataEmoji from "../../service/dataEmoji"
import { AttributeCardMini } from "../CardMini/CardMini"
import CardRow from "../CardMiniRow/CardMiniRow"

class ContainerCards extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode:"open"})
    }

    connectedCallback() {
        this.render();
    }

    render(){
        const containerBox = document.createElement("my-card-row")
        this.shadowRoot?.appendChild(containerBox)
    }
}

customElements.define("main-body", ContainerCards)
export default ContainerCards 