'use strict';
const h = document.querySelector('#target');
const html = 
       `<li>First item</li>
        <li>Second item</li>
        <li>Third item</li>`;
h.innerHTML = html;
h.classList.add('my-list');
