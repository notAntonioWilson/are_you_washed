import React from "react";

type P = { className?: string };
const base = { width: 28, height: 28, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

export const Icons: Record<string, (p: P) => React.JSX.Element> = {
  house: (p) => (<svg {...base} {...p}><path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5"/><path d="M9.5 21v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5"/></svg>),
  window: (p) => (<svg {...base} {...p}><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M12 3v18M4 12h16"/></svg>),
  droplet: (p) => (<svg {...base} {...p}><path d="M12 2.5s6 6.4 6 10.5a6 6 0 0 1-12 0c0-4.1 6-10.5 6-10.5Z"/><path d="M9.5 14a2.5 2.5 0 0 0 2.5 2.5"/></svg>),
  concrete: (p) => (<svg {...base} {...p}><rect x="3" y="6" width="18" height="12" rx="1.5"/><path d="M3 12h18M9 6v6M15 12v6M9 12v6M15 6v6"/></svg>),
  driveway: (p) => (<svg {...base} {...p}><path d="M7 21 9 4h6l2 17"/><path d="M12 8v2M12 13v2"/></svg>),
  patio: (p) => (<svg {...base} {...p}><rect x="3" y="9" width="18" height="11" rx="1.5"/><path d="M3 14h18M9 9v11M15 9v11"/><path d="M5 9V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3"/></svg>),
  roof: (p) => (<svg {...base} {...p}><path d="M2 12 12 4l10 8"/><path d="M5 11v8h14v-8"/><path d="M10 19v-4h4v4"/></svg>),
  gutter: (p) => (<svg {...base} {...p}><path d="M3 7h18"/><path d="M3 7v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7"/><path d="M7 17v3M12 17v3M17 17v3"/></svg>),

  phone: (p) => (<svg {...base} {...p}><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L20 13l-1 4a2 2 0 0 1-2 1.5A15 15 0 0 1 3.5 6 2 2 0 0 1 5 4Z"/></svg>),
  mail: (p) => (<svg {...base} {...p}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>),
  clock: (p) => (<svg {...base} {...p}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>),
  pin: (p) => (<svg {...base} {...p}><path d="M12 21s7-5.7 7-11a7 7 0 0 0-14 0c0 5.3 7 11 7 11Z"/><circle cx="12" cy="10" r="2.5"/></svg>),
  check: (p) => (<svg {...base} {...p}><path d="m4 12 5 5L20 6"/></svg>),
  star: (p) => (<svg width={p.className ? undefined : 18} height={p.className ? undefined : 18} viewBox="0 0 24 24" fill="currentColor" className={p.className}><path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 18.8 6.1 21.5l1.2-6.5L2.5 9.4l6.6-.9z"/></svg>),
  arrow: (p) => (<svg {...base} {...p}><path d="M5 12h14M13 6l6 6-6 6"/></svg>),
  shield: (p) => (<svg {...base} {...p}><path d="M12 3 5 6v6c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6Z"/><path d="m9 12 2 2 4-4"/></svg>),
  spray: (p) => (<svg {...base} {...p}><path d="M9 11h6v9a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1Z"/><path d="M9 11V7h6M15 7l4-3M15 9l4 0M15 5l4-2"/></svg>),
  menu: (p) => (<svg {...base} {...p}><path d="M4 7h16M4 12h16M4 17h16"/></svg>),
  close: (p) => (<svg {...base} {...p}><path d="M6 6l12 12M18 6 6 18"/></svg>),
};
