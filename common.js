/* ============================================================
   SYYTTÄJÄN TYÖPÖYTÄ — common.js
   Shared across all views: toast, autosave indicator, right toolbar
   ============================================================ */

// ===== TOAST =====
function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2200);
}

// ===== AUTOSAVE INDICATOR =====
let _saveTimer = null;
function markDirty() {
  const ind = document.getElementById('save-indicator');
  if (!ind) return;
  const lbl = document.getElementById('save-label');
  if (!lbl) return;
  ind.className = 'save-indicator saving';
  lbl.textContent = 'Tallennetaan…';
  clearTimeout(_saveTimer);
  _saveTimer = setTimeout(() => {
    ind.className = 'save-indicator saved';
    lbl.textContent = 'Tallennettu';
    setTimeout(() => { ind.className = 'save-indicator'; }, 3000);
  }, 900);
}

// ===== RIGHT TOOLBAR =====
// Each page defines window.RT_PANELS before user interaction.
var rtActivePanel = null;

function toggleRtPanel(key) {
  const panel = document.getElementById('rt-panel');
  const inner = document.getElementById('rt-panel-inner');
  if (!panel || !inner) return;

  if (rtActivePanel === key) {
    panel.classList.remove('open');
    const btn = document.getElementById('rt-btn-' + key);
    if (btn) btn.classList.remove('active');
    rtActivePanel = null;
    return;
  }

  if (rtActivePanel) {
    const prev = document.getElementById('rt-btn-' + rtActivePanel);
    if (prev) prev.classList.remove('active');
  }

  const cfg = (window.RT_PANELS || {})[key];
  if (!cfg) return;

  inner.innerHTML = `
    <div class="rt-panel-head">
      <div class="rt-panel-title">${cfg.title}</div>
      <button class="rt-panel-close" onclick="toggleRtPanel('${key}')">✕</button>
    </div>
    ${cfg.render()}
  `;
  panel.classList.add('open');
  document.getElementById('rt-btn-' + key).classList.add('active');
  rtActivePanel = key;
}

// ===== KEYBOARD SHORTCUTS =====
document.addEventListener('keydown', function(e) {
  if ((e.ctrlKey || e.metaKey) && e.key === 's') {
    e.preventDefault();
    showToast('Tallennettu ✓');
  }
  if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
    const el = document.activeElement;
    if (el && el.isContentEditable) {
      e.preventDefault();
      el.blur();
    }
  }
});
