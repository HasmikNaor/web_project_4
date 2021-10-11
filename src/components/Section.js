export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._itmes = items;
    this._renderer = renderer;

    this._container = document.querySelector(containerSelector);
  }

  renderItmes() {
    this._itmes.forEach(item => this.addItem(this._renderer(item)))

  }

  addItem(element) {
    this._container.prepend(element);
  }
}