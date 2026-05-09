// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Operational Insights
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface OperationalInsightsProps {}

export function OperationalInsights(props: OperationalInsightsProps) {
  return (
    <>
      {/* SideNavBar (Desktop) */}
      <nav className="hidden md:flex flex-col bg-surface-container-low w-64 h-screen fixed left-0 top-0 py-gutter-desktop z-50">
      <div className="px-gutter-desktop mb-8 flex items-center gap-3">
      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary">
      <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 1"}}>dataset</span>
      </div>
      <div>
      <h1 className="font-headline-md text-headline-md font-bold text-primary">Core Engine</h1>
      <p className="font-label-caps text-label-caps text-on-surface-variant">Data Operations</p>
      </div>
      </div>
      <button className="mx-gutter-desktop mb-6 h-target-touch bg-primary text-on-primary rounded-lg font-title-sm text-title-sm font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>add</span>
                  New Inspection
              </button>
      <div className="flex flex-col gap-1 px-4 flex-1">
      <a className="flex items-center gap-3 px-4 h-target-touch rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-all" href="#">
      <span className="material-symbols-outlined">dashboard</span>
      <span className="font-title-sm text-title-sm">Dashboard</span>
      </a>
      <a className="flex items-center gap-3 px-4 h-target-touch rounded-lg text-primary font-bold bg-secondary-container/10 scale-95 duration-100" href="#">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>analytics</span>
      <span className="font-title-sm text-title-sm">Insights</span>
      </a>
      <a className="flex items-center gap-3 px-4 h-target-touch rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-all" href="#">
      <span className="material-symbols-outlined">settings</span>
      <span className="font-title-sm text-title-sm">Settings</span>
      </a>
      </div>
      <div className="px-4 mt-auto">
      <a className="flex items-center gap-3 px-4 h-target-touch rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-all" href="#">
      <span className="material-symbols-outlined">contact_support</span>
      <span className="font-title-sm text-title-sm">Support</span>
      </a>
      </div>
      </nav>
      {/* Main Content Area */}
      <div className="flex-1 md:ml-64 flex flex-col min-h-screen">
      {/* TopNavBar (Mobile & Desktop Header) */}
      <header className="bg-surface-container flex justify-between items-center w-full px-gutter-desktop h-target-touch sticky top-0 z-40 md:bg-transparent md:h-20">
      <div className="md:hidden flex items-center gap-2">
      <span className="material-symbols-outlined text-primary">analytics</span>
      <span className="font-title-sm text-title-sm font-bold text-on-surface">DataOps Inspector</span>
      </div>
      <div className="hidden md:flex flex-col">
      <h2 className="font-display-lg text-display-lg font-bold text-on-surface">Insights Summary</h2>
      <p className="font-body-base text-body-base text-on-surface-variant">System performance and operational metrics over the last 30 days.</p>
      </div>
      <div className="flex items-center gap-4">
      <button className="text-on-surface-variant hover:text-on-surface transition-colors">
      <span className="material-symbols-outlined">notifications</span>
      </button>
      <button className="text-on-surface-variant hover:text-on-surface transition-colors hidden md:block">
      <span className="material-symbols-outlined">help</span>
      </button>
      <button className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant">
      <img alt="Operations Manager Profile" className="w-full h-full object-cover" data-alt="A professional headshot of an operations manager in a corporate setting. The lighting is balanced and natural, reflecting a serious, quietly competent mood. The aesthetic is modern and clean, fitting within a corporate dark theme context, with a high-fidelity, understated look." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBddc_Bkh3lKZve6rKGeyExVRZKQqXHc-zC7i7LdpdcdLeI7rfevL9-1A-Gs-ilGRuRIg4D4xkx_s_QIY8jsW8mqD7Oh3PLzJeTWZTCz1G_VXGZXUVBED3qxesC2BGf4oxy8p29fLNsFQDQSRvsW7Mn6CYfH5npMLoFmkAZvHiiADfNsRR_P5bnr47rBPat7OByeTM3XUKvxDC79DU0Pa7ZuIbcv0UiveAdU0oJCxKmTG6zgUAKM-oCMcHJ23eNwejt6e3z-i2Ovzo" />
      </button>
      </div>
      </header>
      {/* Main Canvas */}
      <main className="p-gutter-mobile md:p-container-margin max-w-[1440px] mx-auto w-full flex-1 flex flex-col gap-6">
      {/* Key Metrics Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Success Rate Card */}
      <div className="tier-1 p-5 flex flex-col gap-4">
      <div className="flex justify-between items-start border-b border-surface-variant pb-3">
      <div>
      <p className="font-label-caps text-label-caps text-on-surface-variant uppercase">Inspection Success Rate</p>
      <h3 className="font-display-lg text-display-lg font-bold text-primary mt-1">98.4%</h3>
      </div>
      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
      <span className="material-symbols-outlined">check_circle</span>
      </div>
      </div>
      <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-[16px] text-[#16A34A]">trending_up</span>
      <span className="font-mono-data text-mono-data text-[#16A34A]">+1.2%</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">vs last month</span>
      </div>
      {/* Minimal Sparkline representation */}
      <div className="h-12 w-full mt-2 relative overflow-hidden flex items-end gap-1">
      <div className="w-1/6 bg-secondary/20 h-1/2 rounded-t-sm"></div>
      <div className="w-1/6 bg-secondary/30 h-2/3 rounded-t-sm"></div>
      <div className="w-1/6 bg-secondary/40 h-3/4 rounded-t-sm"></div>
      <div className="w-1/6 bg-secondary/50 h-4/5 rounded-t-sm"></div>
      <div className="w-1/6 bg-secondary/60 h-full rounded-t-sm"></div>
      <div className="w-1/6 bg-primary h-full rounded-t-sm"></div>
      </div>
      </div>
      {/* Average Duration Card */}
      <div className="tier-1 p-5 flex flex-col gap-4">
      <div className="flex justify-between items-start border-b border-surface-variant pb-3">
      <div>
      <p className="font-label-caps text-label-caps text-on-surface-variant uppercase">Average Duration</p>
      <h3 className="font-display-lg text-display-lg font-bold text-on-surface mt-1">4m 12s</h3>
      </div>
      <div className="w-10 h-10 rounded-full bg-secondary-container/30 flex items-center justify-center text-secondary">
      <span className="material-symbols-outlined">timer</span>
      </div>
      </div>
      <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-[16px] text-error">trending_down</span>
      <span className="font-mono-data text-mono-data text-error">-45s</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">vs last month</span>
      </div>
      {/* Progress Bar representation */}
      <div className="mt-4">
      <div className="flex justify-between text-body-sm font-body-sm mb-2">
      <span className="text-on-surface-variant">Target: 5m</span>
      <span className="text-primary">84%</span>
      </div>
      <div className="w-full h-1.5 bg-[#475569] rounded-full overflow-hidden">
      <div className="h-full bg-primary w-[84%] rounded-full"></div>
      </div>
      </div>
      </div>
      {/* Active Issues Card */}
      <div className="tier-1 p-5 flex flex-col gap-4">
      <div className="flex justify-between items-start border-b border-surface-variant pb-3">
      <div>
      <p className="font-label-caps text-label-caps text-on-surface-variant uppercase">Active Issues</p>
      <h3 className="font-display-lg text-display-lg font-bold text-error mt-1">24</h3>
      </div>
      <div className="w-10 h-10 rounded-full bg-error/10 flex items-center justify-center text-error">
      <span className="material-symbols-outlined">warning</span>
      </div>
      </div>
      <div className="flex flex-col gap-2 mt-2">
      <div className="flex justify-between items-center py-1">
      <span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-error"></span> Critical</span>
      <span className="font-mono-data text-mono-data">3</span>
      </div>
      <div className="flex justify-between items-center py-1">
      <span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#EAB308]"></span> Warning</span>
      <span className="font-mono-data text-mono-data">12</span>
      </div>
      <div className="flex justify-between items-center py-1">
      <span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-secondary"></span> Info</span>
      <span className="font-mono-data text-mono-data">9</span>
      </div>
      </div>
      </div>
      </div>
      {/* Detailed Analysis Section (Asymmetric Layout) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-2">
      {/* Main Chart Area */}
      <div className="lg:col-span-2 tier-1 p-6 flex flex-col">
      <div className="flex justify-between items-center border-b border-surface-variant pb-4 mb-6">
      <h3 className="font-title-sm text-title-sm font-semibold text-on-surface">Inspection Volume Trends</h3>
      <div className="flex gap-2">
      <button className="px-3 py-1 rounded text-body-sm font-body-sm bg-surface-container-high text-on-surface">7D</button>
      <button className="px-3 py-1 rounded text-body-sm font-body-sm bg-primary/20 text-primary border border-primary/30">30D</button>
      <button className="px-3 py-1 rounded text-body-sm font-body-sm bg-surface-container-high text-on-surface">90D</button>
      </div>
      </div>
      {/* Faux Chart Canvas */}
      <div className="flex-1 relative min-h-[300px] flex items-end border-l border-b border-surface-variant pb-2 pl-2">
      {/* Y-axis labels */}
      <div className="absolute left-[-30px] top-0 h-full flex flex-col justify-between font-mono-data text-[10px] text-on-surface-variant py-2">
      <span>1000</span>
      <span>750</span>
      <span>500</span>
      <span>250</span>
      <span>0</span>
      </div>
      {/* Grid lines */}
      <div className="absolute w-full h-full flex flex-col justify-between pt-2">
      <div className="w-full border-b border-surface-variant/30"></div>
      <div className="w-full border-b border-surface-variant/30"></div>
      <div className="w-full border-b border-surface-variant/30"></div>
      <div className="w-full border-b border-surface-variant/30"></div>
      <div className="w-full"></div>
      </div>
      {/* Bar Series */}
      <div className="w-full h-full flex items-end justify-around relative z-10 px-2 pt-8">
      <div className="w-1/12 bg-secondary/40 hover:bg-secondary/60 transition-colors h-[40%] rounded-t-sm relative group cursor-pointer"><div className="absolute -top-8 left-1/2 -translate-x-1/2 hidden group-hover:block bg-[#334155] text-xs py-1 px-2 rounded border border-[#475569]">400</div></div>
      <div className="w-1/12 bg-secondary/40 hover:bg-secondary/60 transition-colors h-[55%] rounded-t-sm relative group cursor-pointer"><div className="absolute -top-8 left-1/2 -translate-x-1/2 hidden group-hover:block bg-[#334155] text-xs py-1 px-2 rounded border border-[#475569]">550</div></div>
      <div className="w-1/12 bg-secondary/40 hover:bg-secondary/60 transition-colors h-[45%] rounded-t-sm relative group cursor-pointer"></div>
      <div className="w-1/12 bg-secondary/40 hover:bg-secondary/60 transition-colors h-[70%] rounded-t-sm relative group cursor-pointer"></div>
      <div className="w-1/12 bg-primary/80 hover:bg-primary transition-colors h-[90%] rounded-t-sm relative group cursor-pointer"><div className="absolute -top-8 left-1/2 -translate-x-1/2 hidden group-hover:block bg-[#334155] text-xs py-1 px-2 rounded border border-[#475569] text-primary">900</div></div>
      <div className="w-1/12 bg-secondary/40 hover:bg-secondary/60 transition-colors h-[60%] rounded-t-sm relative group cursor-pointer"></div>
      <div className="w-1/12 bg-secondary/40 hover:bg-secondary/60 transition-colors h-[75%] rounded-t-sm relative group cursor-pointer"></div>
      </div>
      </div>
      {/* X-axis labels */}
      <div className="flex justify-around mt-2 font-mono-data text-[10px] text-on-surface-variant pl-2">
      <span>Mon</span>
      <span>Tue</span>
      <span>Wed</span>
      <span>Thu</span>
      <span>Fri</span>
      <span>Sat</span>
      <span>Sun</span>
      </div>
      </div>
      {/* Recent Anomalies List */}
      <div className="tier-1 flex flex-col overflow-hidden">
      <div className="p-5 border-b border-surface-variant bg-[#1E293B] sticky top-0">
      <h3 className="font-title-sm text-title-sm font-semibold text-on-surface flex items-center gap-2">
      <span className="material-symbols-outlined text-error text-[20px]">radar</span>
                                  System Anomalies
                              </h3>
      </div>
      <div className="flex-1 overflow-y-auto flex flex-col">
      {/* Anomaly Item */}
      <div className="px-5 py-3 border-b border-surface-variant/50 hover:bg-surface-container-highest transition-colors cursor-pointer flex flex-col gap-1">
      <div className="flex justify-between items-center">
      <span className="font-mono-data text-[12px] text-error font-medium">ERR_TIMEOUT_DB</span>
      <span className="font-mono-data text-[10px] text-on-surface-variant">10m ago</span>
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1">Cluster node C-4 failed to respond within 5000ms threshold.</p>
      </div>
      {/* Anomaly Item */}
      <div className="px-5 py-3 border-b border-surface-variant/50 hover:bg-surface-container-highest transition-colors cursor-pointer flex flex-col gap-1">
      <div className="flex justify-between items-center">
      <span className="font-mono-data text-[12px] text-[#EAB308] font-medium">WARN_MEM_HIGH</span>
      <span className="font-mono-data text-[10px] text-on-surface-variant">1h ago</span>
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1">Instance cache usage exceeded 85% capacity limits.</p>
      </div>
      {/* Anomaly Item */}
      <div className="px-5 py-3 border-b border-surface-variant/50 hover:bg-surface-container-highest transition-colors cursor-pointer flex flex-col gap-1">
      <div className="flex justify-between items-center">
      <span className="font-mono-data text-[12px] text-primary font-medium">INFO_SYNC_DELAY</span>
      <span className="font-mono-data text-[10px] text-on-surface-variant">3h ago</span>
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1">Routine replica sync delayed by network jitter, resolved automatically.</p>
      </div>
      {/* Anomaly Item */}
      <div className="px-5 py-3 hover:bg-surface-container-highest transition-colors cursor-pointer flex flex-col gap-1">
      <div className="flex justify-between items-center">
      <span className="font-mono-data text-[12px] text-[#EAB308] font-medium">WARN_API_RATE</span>
      <span className="font-mono-data text-[10px] text-on-surface-variant">5h ago</span>
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1">External ingress approached rate limits during burst traffic.</p>
      </div>
      </div>
      <div className="p-3 border-t border-surface-variant bg-surface-container-low mt-auto text-center">
      <button className="font-label-caps text-label-caps text-primary hover:text-primary-fixed transition-colors">VIEW ALL LOGS</button>
      </div>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
