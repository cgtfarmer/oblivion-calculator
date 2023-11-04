const tbody = document.querySelector('tbody');

function main() {
  for(let i = 1; i <= 25; i++) {
    appendRow(i);
  }
}

function appendRow(rowNumber) {
  tbody.insertAdjacentHTML('beforeend', `
    <tr>
      <td class="text-center">${rowNumber}</td>
      <td class="text-center"><input type="checkbox"/></td>
      <td class="text-center"><input type="checkbox"/></td>
      <td class="text-center"><input type="checkbox"/></td>
      <td class="text-center"><input type="checkbox"/></td>
      <td class="text-center"><input type="checkbox"/></td>
      <td class="text-center"><input type="checkbox"/></td>
      <td class="text-center"><input type="checkbox"/></td>
      <td class="text-center"><input type="checkbox"/></td>
      <td class="text-center"><input type="checkbox"/></td>
      <td class="text-center"><input type="checkbox"/></td>
      <td class="text-center"><input type="checkbox"/></td>
      <td class="text-center"><input type="checkbox"/></td>
      <td class="text-center"><input type="checkbox"/></td>
      <td class="text-center"><input type="checkbox"/></td>
      <td class="text-center"><input type="checkbox"/></td>
      <td class="text-center"><input type="checkbox"/></td>
      <td class="text-center"><input type="checkbox"/></td>
      <td class="text-center"><input type="checkbox"/></td>
      <td class="text-center"><input type="checkbox"/></td>
      <td class="text-center"><input type="checkbox"/></td>
      <td class="text-center"><input type="checkbox"/></td>
    </tr>
  `);
}

main();

