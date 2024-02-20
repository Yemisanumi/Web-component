class NavLists extends HTMLElement {
    constructor() {
      super();
      const shadowRoot = this.attachShadow({ mode: 'open' });
      shadowRoot.innerHTML = `
        <style>
        ul {
          display: flex;
          width: 500px;
          justify-content: space-between;
          
          list-style: none;
         
      
        } 
      li a {
          color: var(--Gray-1, #333);
          font-family: 'Roboto' sans-serif;
          font-size: 20px;
          font-style: normal;
          font-weight: 500;
          text-decoration: none;
          list-style: none;
          justify-content: space-between;
        }
        </style>
        <slot></slot>
        <ul class="lists">
                    <li><a href="">About</a></li>
                    <li><a href="">How it works</a></li>
                    <li><a href="">Login</a></li>
                    <li><a href="">Registration</a></li>
                </ul>
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
  

