import { appState, dispatch } from "../../store/index";
import { changeCabeza, changeManos } from "../../store/actions";


export enum AttributeCardMini {
    'cabeza' = 'cabeza',
    'manos' = 'manos'
}

class CardMini extends HTMLElement {
    cabeza?: string
    manos?: string

    static get observedAttributes(){
        const attrs: Record<AttributeCardMini, null> = {
			cabeza: null,
            manos: null
		};
		return Object.keys(attrs);
	}

    attributeChangedCallback(propName: AttributeCardMini, oldValue: string | undefined, newValue: string | undefined) {
        switch (propName) {
            default:
                this[propName] = newValue;
                break;
        }
        this.mount();
    }

    constructor(){
        super()
        this.attachShadow({mode:'open'})
    }

    connectedCallback() {
		this.render();
	}

    mount(){
        this.render()
        const btn = this.shadowRoot?.querySelector('button');
        btn?.addEventListener("click", ()=>{
            if (this.cabeza){
                dispatch(changeCabeza(
                    this.cabeza
                ));
            } else if (this.manos){
                dispatch(changeManos(
                    this.manos
                ));
            }
        })
    }

    render(){
        if (this.shadowRoot){
        this.shadowRoot.innerHTML = ``
        const bodyBtn = this.ownerDocument.createElement("button")
        const bodyImg = this.ownerDocument.createElement("img")
        bodyImg.setAttribute("src", `${this.cabeza || this.manos}`)

        bodyBtn.appendChild(bodyImg)
        this.shadowRoot?.appendChild(bodyBtn)
        }
    }
}

customElements.define("my-card-mini", CardMini)
export default CardMini