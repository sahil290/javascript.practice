const rows = document.createElement('input');
rows.type = 'number';
document.body.appendChild(rows);
const columns = document.createElement('input');
columns.type = 'number';
document.body.appendChild(columns);
const btn = document.createElement('button');
btn.innerText = "Create Table";
btn.addEventListener('click', () => {
  const table = document.createElement('table');
  table.style.borderCollapse = 'collapse';
  for(let i=0; i<rows.value; i++) {
    const tr = document.createElement('tr');
    for(let j=0; j<columns.value; j++) {
      const td = document.createElement('td');
      td.style.height = '20px';
      td.style.width = '50px';
      td.style.border = '1px solid';
      tr.style.color = 'red';
      tr.appendChild(td);
    }
    table.appendChild(tr);
}
document.body.appendChild(table);
});
document.body.appendChild(btn);
const br = document.createElement('br');
document.body.appendChild(br);