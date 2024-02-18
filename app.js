class NavLists extends HTMLElement {
    constructor() {
      super();
      const shadowRoot = this.attachShadow({ mode: 'open' });
      shadowRoot.innerHTML = `
        <style>
          /* CSS styles for the component */
          :host {
            display: inline-block;
            padding: 8px 16px;
            cursor: pointer;
          }
  
          :host(:hover) {
            background-color: #f1f1f1;
          }
        </style>
        <slot></slot>
      `;
    }
  
    connectedCallback() {
        this.addEventListener('click', () => {
          alert('Click');
        });
      }
    }

    class DashboardButton extends HTMLElement {
        constructor() {
            super();
            this.addEventListener('click', () => {
            alert('dashboard')
            });
        }
    }
    
    customElements.define('nav-lists', NavLists);

    
    
    window.customElements.define('dashboard-button', DashboardButton);
  

