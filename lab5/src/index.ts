import "./screens/dashboard"
import "./components/export"

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render(){
        const AppShow = this.ownerDocument.createElement("estoy-cansada-porfavorayuda")
        this.shadowRoot?.appendChild(AppShow)
    }
}
customElements.define("app-container-final", AppContainer)