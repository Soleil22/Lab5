import CardMini, {AttributeCardMini} from "../components/CardMini/CardMini";
import dataEmoji from "../service/dataEmoji"
import { CardMiniRow, ContainerCards } from "../components/export";
import Emojiss from "../service/dataEmoji";
import { Emojis } from "../types/emojis";
import { addObserver, appState } from "../store/index";

class Dashboard extends HTMLElement{
    rowContainer: CardMiniRow[]=[]

    constructor(){
        super()
        this.attachShadow({mode: "open"})
        addObserver(this)
    }

    connectedCallback() {
        this.render();
    }

    render(){
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = ``

            const bodyContainerButtons = document.createElement("main-body")
            this.shadowRoot?.appendChild(bodyContainerButtons)

            this.rowContainer.forEach((container)=>{
                this.shadowRoot?.appendChild(container)
            });

            const emoji = this.ownerDocument.createElement("div")

            const DivCabeza = this.ownerDocument.createElement("img")
            const DivManos = this.ownerDocument.createElement("img")

            DivCabeza.src = appState.cabeza
            DivManos.src = appState.manos

            emoji.appendChild(DivCabeza)
            emoji.appendChild(DivManos)

            this.shadowRoot?.appendChild(emoji)
        }
    }
}
customElements.define("estoy-cansada-porfavorayuda", Dashboard)