const init = (cols, rows) => {
  const app = document.querySelector('.app');
  app.classList.add('is-outlined');
  for (i = 1; i <= rows; i++) {
    const thisRow = document.createElement('div');
    thisRow.classList.add('row');
    thisRow.id = `row${i}`;
    for (j = 1; j <= cols; j++) {
      const thisCell = document.createElement('div');
      thisCell.classList.add('cell');
      thisCell.classList.add(`col${j}`);
      thisCell.id = `${j}-${i}`;
      thisRow.appendChild(thisCell);
    }
    app.append(thisRow);
  }
}

window.onload = () => {
  init(60,30);
}
