document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu-toggle');
    if (menu) menu.addEventListener('click', () => { const nav = document.querySelector('.site-header nav'); if (nav) nav.classList.toggle('open') });
    document.querySelectorAll('.demo-form').forEach(form => form.addEventListener('submit', e => { e.preventDefault(); const msg = form.querySelector('.demo-message'); if (msg) msg.textContent = 'Demo only: frontend form is ready. Backend integration will be added in a later phase.' }));
    document.querySelectorAll('[data-demo-link]').forEach(a => a.addEventListener('click', e => { e.preventDefault(); alert('Password recovery will be implemented in a later phase.'); }));
    const rentForm = document.getElementById('rent-form');
    if (rentForm) {
        let started = 0, interval = null; const panel = document.getElementById('active-ride'), timer = document.getElementById('timer'), code = document.getElementById('active-code');
        rentForm.addEventListener('submit', e => { e.preventDefault(); const value = document.getElementById('bike-code').value.trim(); if (!value) return; code.textContent = 'Bicycle code: ' + value; started = Date.now(); panel.classList.add('show'); if (interval) clearInterval(interval); interval = setInterval(() => { const s = Math.floor((Date.now() - started) / 1000), h = String(Math.floor(s / 3600)).padStart(2, '0'), m = String(Math.floor(s % 3600 / 60)).padStart(2, '0'), sec = String(s % 60).padStart(2, '0'); timer.textContent = `${h}:${m}:${sec}` }, 1000); });
        document.getElementById('return-bike').addEventListener('click', () => { clearInterval(interval); panel.classList.remove('show'); document.getElementById('bike-code').value = ''; alert('Demo ride returned. No real rental or payment was processed.'); });
    }
    const add = document.getElementById('add-bike'); if (add) add.addEventListener('click', () => { const code = prompt('Enter a new bicycle code (demo only):'); if (code && code.trim()) { const row = document.createElement('tr'); row.innerHTML = `<td></td><td>Standard</td><td><span class="table-status">Available</span></td><td>Main campus</td>`; row.cells[0].textContent = code.trim(); document.querySelector('#bike-table tbody').appendChild(row); } });
});