class UgHeader extends HTMLElement {
  link(url) {
    const _link = document.createElement('link');
    _link.setAttribute('rel', 'stylesheet');
    _link.setAttribute('href', url);
    this.shadow.appendChild(_link);
  }
  import(url) {
    const _import = document.createElement('script');
    _import.setAttribute('defer', '');
    _import.setAttribute('src', url);
    this.shadow.appendChild(_import);
  }
  addStyle(root, rule) {
    let _style = document.createElement('style');
    _style.innerHTML=rule;
    root.appendChild(_style);
  }
  constructor() {
    super();
    this.shadow = this.attachShadow({mode: 'open'});
    this.link('//www.uoguelph.ca/css/UofG-styles-dist.css');
    this.import("//www.uoguelph.ca/web-components/UofGIcon-dist.js");
    this.import("//www.uoguelph.ca/web-components/UofGDropdownMenu-dist.js");
    this.import("//www.uoguelph.ca/web-components/UofGHeader-dist.js");
    this.header = document.createElement('uofg-header');
    this.shadow.appendChild(this.header);
    window.addEventListener('scroll', (e) => {
      if (document.documentElement.scrollTop === 0) {
        if (document.documentElement.clientWidth > 1024) {
          this.header.switchToDesktop();
        }
      }
    });
    while (this.firstElementChild) {
      this.header.appendChild(this.firstElementChild)
    }
    const observer = new MutationObserver((mutationList) => {
      for (const mutation of mutationList) {
        for (const added of mutation.addedNodes) {
          this.header.appendChild(added);
        }
      }
    });
    observer.observe(this, { childList: true });
  }
}

customElements.define('ug-header', UgHeader);

