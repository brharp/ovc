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
  addStyle(rule) {
    let _style = document.createElement('style');
    _style.innerHTML=rule;
    this.shadow.appendChild(_style);
  }
  constructor() {
    super();
    this.shadow = this.attachShadow({mode: 'open'});
    this.link('//www.uoguelph.ca/css/UofG-styles-dist.css');
    this.import("//www.uoguelph.ca/web-components/UofGIcon-dist.js");
    this.import("//www.uoguelph.ca/web-components/UofGDropdownMenu-dist.js");
    this.import("//www.uoguelph.ca/web-components/UofGHeader-dist.js");
    let _header = document.createElement('uofg-header');
    this.shadow.appendChild(_header);
  }
}

customElements.define('ug-header', UgHeader);

