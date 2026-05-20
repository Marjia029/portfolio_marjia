'use strict';

const { useState } = React;

// ─── Palette definitions ──────────────────────────────────────────────────────

const PALETTES = [
  {
    name: 'Peach & Sage',
    emoji: '🍑',
    vars: {
      '--bg':          '#fbf4e8',
      '--bg-tint':     '#f6ecd9',
      '--surface':     '#ffffff',
      '--surface-2':   '#fdf6ea',
      '--line':        'rgba(63, 36, 26, 0.10)',
      '--line-strong': 'rgba(63, 36, 26, 0.22)',
      '--ink':         '#1f1410',
      '--text':        '#1f1410',
      '--text-dim':    '#5b4438',
      '--text-mute':   '#9a8275',
      '--accent':      '#d96b4a',
      '--accent-2':    '#5a8a78',
      '--accent-3':    '#e8b059',
      '--accent-4':    '#c98aae',
      '--accent-soft': '#f5c3a8',
    },
  },
  {
    name: 'Ocean & Coral',
    emoji: '🌊',
    vars: {
      '--bg':          '#f0f8ff',
      '--bg-tint':     '#e4f2fb',
      '--surface':     '#ffffff',
      '--surface-2':   '#f5faff',
      '--line':        'rgba(10, 50, 80, 0.10)',
      '--line-strong': 'rgba(10, 50, 80, 0.22)',
      '--ink':         '#0a3250',
      '--text':        '#0a3250',
      '--text-dim':    '#2d6080',
      '--text-mute':   '#7aa0b8',
      '--accent':      '#e05252',
      '--accent-2':    '#3a9fbf',
      '--accent-3':    '#f0a040',
      '--accent-4':    '#7b60a8',
      '--accent-soft': '#f0a8a8',
    },
  },
  {
    name: 'Forest & Gold',
    emoji: '🌿',
    vars: {
      '--bg':          '#f2f5ef',
      '--bg-tint':     '#e8ede4',
      '--surface':     '#ffffff',
      '--surface-2':   '#f6f9f3',
      '--line':        'rgba(20, 40, 20, 0.10)',
      '--line-strong': 'rgba(20, 40, 20, 0.22)',
      '--ink':         '#1a2e1a',
      '--text':        '#1a2e1a',
      '--text-dim':    '#3d6040',
      '--text-mute':   '#7a9e7e',
      '--accent':      '#c8952c',
      '--accent-2':    '#3d7a4a',
      '--accent-3':    '#e8c060',
      '--accent-4':    '#8a6090',
      '--accent-soft': '#f0d898',
    },
  },
  {
    name: 'Lavender Night',
    emoji: '🌙',
    vars: {
      '--bg':          '#f5f0fc',
      '--bg-tint':     '#ece5f8',
      '--surface':     '#ffffff',
      '--surface-2':   '#f9f6fd',
      '--line':        'rgba(40, 20, 70, 0.10)',
      '--line-strong': 'rgba(40, 20, 70, 0.22)',
      '--ink':         '#1e1030',
      '--text':        '#1e1030',
      '--text-dim':    '#4a306a',
      '--text-mute':   '#9080a8',
      '--accent':      '#7b4fc8',
      '--accent-2':    '#5a8a78',
      '--accent-3':    '#d0a040',
      '--accent-4':    '#c070a0',
      '--accent-soft': '#c4a8e8',
    },
  },
];

// ─── TweaksPanel ──────────────────────────────────────────────────────────────

function TweaksPanel() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);

  function applyPalette(index) {
    const root = document.documentElement;
    Object.entries(PALETTES[index].vars).forEach(([k, v]) => root.style.setProperty(k, v));
    setActive(index);
  }

  const panelStyle = {
    background: 'var(--surface)',
    border: '1px solid var(--line-strong)',
    borderRadius: 20,
    padding: '20px 24px',
    boxShadow: '0 20px 50px rgba(0,0,0,.14)',
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    minWidth: 210,
    marginBottom: 10,
  };

  const labelStyle = {
    margin: '0 0 4px',
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: '.22em',
    textTransform: 'uppercase',
    color: 'var(--text-mute)',
  };

  function btnStyle(isActive) {
    return {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      background: isActive ? 'var(--bg-tint)' : 'transparent',
      border: isActive ? '1.5px solid var(--accent)' : '1.5px solid transparent',
      borderRadius: 12,
      padding: '9px 12px',
      cursor: 'pointer',
      fontFamily: 'inherit',
      fontSize: 14,
      color: 'var(--ink)',
      fontWeight: isActive ? 600 : 400,
      transition: 'all .2s',
      textAlign: 'left',
      width: '100%',
    };
  }

  const toggleStyle = {
    width: 52,
    height: 52,
    borderRadius: '50%',
    background: 'var(--ink)',
    color: 'var(--bg)',
    border: 'none',
    cursor: 'pointer',
    display: 'grid',
    placeItems: 'center',
    fontSize: 22,
    boxShadow: '0 8px 24px rgba(0,0,0,.22)',
    transition: 'transform .25s, box-shadow .25s',
    alignSelf: 'flex-end',
  };

  return (
    <div
      className="twk-panel"
      style={{
        position: 'fixed',
        right: 20,
        bottom: 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
      }}
    >
      {open && (
        <div style={panelStyle}>
          <p style={labelStyle}>Color Palette</p>
          {PALETTES.map((p, i) => (
            <button
              key={i}
              style={btnStyle(active === i)}
              onClick={() => applyPalette(i)}
            >
              <span style={{ fontSize: 20, lineHeight: 1 }}>{p.emoji}</span>
              <span style={{ flex: 1 }}>{p.name}</span>
              {active === i && (
                <span style={{ color: 'var(--accent)', fontSize: 18 }}>✦</span>
              )}
            </button>
          ))}
        </div>
      )}

      <button
        style={toggleStyle}
        onClick={() => setOpen(o => !o)}
        aria-label="Toggle colour palette"
        title="Toggle colour palette"
      >
        {open ? '✕' : '🎨'}
      </button>
    </div>
  );
}

// ─── Mount into its own container ────────────────────────────────────────────
const _twkContainer = document.createElement('div');
document.body.appendChild(_twkContainer);
ReactDOM.createRoot(_twkContainer).render(<TweaksPanel />);
