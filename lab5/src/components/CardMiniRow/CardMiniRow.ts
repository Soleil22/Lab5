import CardMini from "../CardMini/CardMini";
import {AttributeCardMini} from "../CardMini/CardMini"
import dataEmoji from "../../service/dataEmoji"
import Emojiss from "../../service/dataEmoji"

class CardRow extends HTMLElement {
    constructor(){
        super()
        this.attachShadow({mode: "open"})
    }

    connectedCallback(){
        this.render()
    }

    render(){
        const CabezaRow = document.createElement("div")
        const ManosRow = document.createElement("div")

        const EmojiInstance = new Emojiss()
        const EmojiData = EmojiInstance.get()

        for (let i = 0; i < 3; i++){
            const CabezaButton = document.createElement("my-card-mini") as CardMini
            CabezaButton.setAttribute(AttributeCardMini.cabeza, EmojiData[i].cabeza)
            CabezaRow.appendChild(CabezaButton)
        }

        for (let i = 0; i < 3; i++){
            const ManosButton = document.createElement("my-card-mini") as CardMini
            ManosButton.setAttribute(AttributeCardMini.manos, EmojiData[i].manos)
            ManosRow.appendChild(ManosButton)
        }

        this.shadowRoot?.appendChild(CabezaRow)
        this.shadowRoot?.appendChild(ManosRow)
    }

}

customElements.define("my-card-row", CardRow)
export default CardRow