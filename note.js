class Note {
  static colors = [
    '#FFFFFF', // default color
    '#F28B82',
    '#FBBC04',
    '#FFF475',
    '#CCFF90',
    '#A7FFEB',
    '#CBF0F8',
    '#AECBFA',
    '#D7AEFB',
    '#FDCFE8',
  ];

  constructor({ title = '', body, color }) {
    this.title = title;
    this.body = body;
    this.color = color;
    this.date = new Date();
  }

  // This method returns a <div class="note">
  createCard() {
    const div = document.createElement('DIV');
    div.innerHTML = `
      <div class="note" style="background: ${this.color}">
        <p>${this.body}</p>
        <div class="buttons">
          <div class="palette"><img src="./source/palette.svg" alt="palette"></div>
          <div class="trash"><img src="./source/trash.svg" alt="trash"></div>
        </div>
      </div>
    `;
    return div;
  }
}
