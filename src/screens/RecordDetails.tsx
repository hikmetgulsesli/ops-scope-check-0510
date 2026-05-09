// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Record Details
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface RecordDetailsProps {}

export function RecordDetails(props: RecordDetailsProps) {
  return (
    <>
      {/* TopNavBar (Mobile Only) */}
      <header className="md:hidden bg-surface-container dark:bg-surface-container docked full-width top-0 flex justify-between items-center w-full px-gutter-desktop h-target-touch sticky z-40 flat no shadows">
      <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-primary dark:text-primary">arrow_back</span>
      <span className="font-title-sm text-title-sm font-bold text-on-surface dark:text-on-surface">DataOps Inspector</span>
      </div>
      <div className="flex items-center gap-4">
      <span className="material-symbols-outlined text-on-surface-variant dark:text-on-surface-variant font-medium hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-colors cursor-pointer" style={{fontVariationSettings: "'FILL' 0"}}>notifications</span>
      <span className="material-symbols-outlined text-on-surface-variant dark:text-on-surface-variant font-medium hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-colors cursor-pointer" style={{fontVariationSettings: "'FILL' 0"}}>help</span>
      <img alt="Operations Manager Profile" className="w-8 h-8 rounded-full border border-outline-variant object-cover" data-alt="A close-up portrait of a professional male operations manager in a high-tech corporate environment. The lighting is moody and cinematic, emphasizing a professional, stable, and unobtrusive aesthetic. The background is a sleek, modern dark office space with subtle blue and silver accents, aligning with a corporate minimalist style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzkw1_87DqwigfGLjkc2TycHMXZgY7FXrcHkHABrN4eCSFr1kqzegoizYU_Du9AAN6XVsgU5B9P4s0fW56cyoMcjwofd-zFg2yMWc6QcHCoGVaXvZc6ux9gV7gbECD7rilyyyDtXRb0X-oDVocvEvTTz31xAbZ8b5sSNy2A9X1fpWGw6iAdwrx_HPAZWuI2_yNwARGLAC9gBUlrqD5lF-yMgBZaOO8_k-XgNF3pcYFeW38mGZ8F_XJN4j4crNp0XXRZbN9896n3ww" />
      </div>
      </header>
      {/* SideNavBar (Desktop Only) */}
      <nav className="hidden md:flex bg-surface-container-low dark:bg-surface-container-low docked h-full w-64 left-0 flat no shadows fixed top-0 flex-col py-gutter-desktop z-50 border-r border-outline-variant/30">
      <div className="px-gutter-desktop mb-8 flex items-center gap-3">
      <img alt="Workflow Logo" className="w-10 h-10 rounded-lg object-cover" data-alt="A sleek, minimalist geometric logo design featuring sharp angles and dark metallic tones. The logo is displayed on a clean, dark gray background, reflecting a sophisticated corporate identity. The lighting highlights the precision and high-fidelity utility of the design, perfectly suited for a DataOps tool." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOsj9HAA48pAllnMKcVfGKzb-c6Oq_PXrmg6AMKwPxrU9i_ZENLJK-IeXMYMYu-mUUJBm2Eo2ZyWTt3KkbdNx0lkbsGBV7VG9uR-afh7GROCabOaO7fwMNsANeQkKOtKSJRW7i05pVyJvn_hSmbPSYf4PhjSi9C037dEalNTCYgQtvN1Ym8Csdl147LUDrxr936rytKe9KfO7es043Q_UGFxxhF8l16SOTe8tsFUYpkTWOA8_6IUbiBlwbajrTXEIkBC9j6enSJ04" />
      <div>
      <h1 className="font-headline-md text-headline-md font-bold text-primary dark:text-primary">Core Engine</h1>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Data Operations</p>
      </div>
      </div>
      <div className="px-gutter-desktop mb-6">
      <button className="w-full bg-primary-container text-on-primary-container font-label-caps text-label-caps py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-primary-container/90 transition-colors h-target-touch">
      <span className="material-symbols-outlined text-[18px]">add</span>
                      New Inspection
                  </button>
      </div>
      <div className="flex-1 px-3 space-y-1">
      <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-high dark:hover:bg-surface-container-high transition-all font-body-base text-body-base h-target-touch" href="#">
      <span className="material-symbols-outlined">dashboard</span>
      <span>Dashboard</span>
      </a>
      <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-primary dark:text-primary font-bold bg-secondary-container/10 hover:bg-surface-container-high dark:hover:bg-surface-container-high transition-all font-body-base text-body-base h-target-touch opacity-80 duration-150 scale-95 duration-100" href="#">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>analytics</span>
      <span>Insights</span>
      </a>
      <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-high dark:hover:bg-surface-container-high transition-all font-body-base text-body-base h-target-touch" href="#">
      <span className="material-symbols-outlined">settings</span>
      <span>Settings</span>
      </a>
      </div>
      <div className="px-3 mt-auto">
      <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-high dark:hover:bg-surface-container-high transition-all font-body-base text-body-base h-target-touch" href="#">
      <span className="material-symbols-outlined">contact_support</span>
      <span className="font-label-caps text-label-caps">Support</span>
      </a>
      </div>
      </nav>
      {/* Main Content */}
      <main className="flex-1 md:ml-64 p-gutter-mobile md:p-container-margin max-w-[1440px] mx-auto w-full flex flex-col gap-container-margin">
      {/* Breadcrumbs & Header Actions */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div>
      <nav className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm mb-2">
      <a className="hover:text-primary transition-colors" href="#">Insights</a>
      <span className="material-symbols-outlined text-[14px]">chevron_right</span>
      <a className="hover:text-primary transition-colors" href="#">Inspections</a>
      <span className="material-symbols-outlined text-[14px]">chevron_right</span>
      <span className="text-on-surface">Record INSP-2023-089</span>
      </nav>
      <div className="flex items-center gap-3">
      <h2 className="font-headline-md text-headline-md text-on-surface font-bold">Inspection Record</h2>
      <span className="px-2 py-1 rounded-full bg-error-container/15 text-error-container font-label-caps text-label-caps border border-error-container/20 flex items-center gap-1">
      <span className="w-1.5 h-1.5 rounded-full bg-error-container"></span>
                              Anomalous
                          </span>
      </div>
      </div>
      <div className="flex gap-3 w-full md:w-auto">
      <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-surface-container-high text-on-surface border border-outline-variant hover:bg-surface-variant transition-colors font-body-sm text-body-sm h-target-touch">
      <span className="material-symbols-outlined text-[18px]">archive</span>
                          Archive
                      </button>
      <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-primary-container text-on-primary-container hover:bg-primary-container/90 transition-colors font-body-sm text-body-sm font-semibold h-target-touch">
      <span className="material-symbols-outlined text-[18px]">refresh</span>
                          Rerun Inspection
                      </button>
      </div>
      </div>
      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      {/* Metadata Card (Left Column) */}
      <div className="lg:col-span-1 bg-[#1E293B] rounded-lg border border-outline-variant/30 flex flex-col">
      <div className="p-4 border-b border-[#334155]">
      <h3 className="font-title-sm text-title-sm text-on-surface">Metadata Summary</h3>
      </div>
      <div className="p-4 flex-1 flex flex-col gap-4">
      <div className="flex flex-col gap-1">
      <span className="font-label-caps text-label-caps text-on-surface-variant">Record ID</span>
      <span className="font-mono-data text-mono-data text-on-surface">INSP-2023-089</span>
      </div>
      <div className="flex flex-col gap-1">
      <span className="font-label-caps text-label-caps text-on-surface-variant">Execution Time</span>
      <span className="font-mono-data text-mono-data text-on-surface">14:23:05 UTC</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Oct 24, 2023</span>
      </div>
      <div className="flex flex-col gap-1">
      <span className="font-label-caps text-label-caps text-on-surface-variant">Source Node</span>
      <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-on-surface-variant text-[16px]">dns</span>
      <span className="font-mono-data text-mono-data text-on-surface">node-us-east-cluster-04</span>
      </div>
      </div>
      <div className="flex flex-col gap-1">
      <span className="font-label-caps text-label-caps text-on-surface-variant">Operator</span>
      <div className="flex items-center gap-2 mt-1">
      <div className="w-6 h-6 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container font-label-caps text-[10px]">JD</div>
      <span className="font-body-sm text-body-sm text-on-surface">J. Doe (System Admin)</span>
      </div>
      </div>
      <div className="mt-auto pt-4 border-t border-[#334155]">
      <div className="flex justify-between items-center mb-2">
      <span className="font-label-caps text-label-caps text-on-surface-variant">Processing Load</span>
      <span className="font-mono-data text-mono-data text-error">87%</span>
      </div>
      <div className="h-[6px] w-full bg-[#475569] rounded-full overflow-hidden">
      <div className="h-full bg-error w-[87%]"></div>
      </div>
      </div>
      </div>
      </div>
      {/* Main Log/Details (Middle/Right Column) */}
      <div className="lg:col-span-2 bg-[#1E293B] rounded-lg border border-outline-variant/30 flex flex-col">
      <div className="p-4 border-b border-[#334155] flex justify-between items-center">
      <h3 className="font-title-sm text-title-sm text-on-surface">Event Timeline</h3>
      <button className="text-primary hover:text-primary-fixed transition-colors font-body-sm text-body-sm flex items-center gap-1">
      <span className="material-symbols-outlined text-[16px]">download</span>
                              Export Log
                          </button>
      </div>
      <div className="p-4 flex-1">
      <div className="relative pl-6 space-y-6 before:absolute before:inset-y-0 before:left-[11px] before:w-[2px] before:bg-[#334155]">
      {/* Timeline Item */}
      <div className="relative">
      <div className="absolute -left-6 w-[10px] h-[10px] rounded-full bg-primary border-2 border-[#1E293B] top-1.5"></div>
      <div className="flex flex-col gap-1">
      <div className="flex items-center justify-between">
      <span className="font-body-sm text-body-sm font-semibold text-on-surface">Inspection Initiated</span>
      <span className="font-mono-data text-mono-data text-on-surface-variant text-[11px]">14:23:05.112</span>
      </div>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Manual trigger via dashboard UI.</span>
      </div>
      </div>
      {/* Timeline Item */}
      <div className="relative">
      <div className="absolute -left-6 w-[10px] h-[10px] rounded-full bg-[#475569] border-2 border-[#1E293B] top-1.5"></div>
      <div className="flex flex-col gap-1">
      <div className="flex items-center justify-between">
      <span className="font-body-sm text-body-sm font-semibold text-on-surface">Data Ingestion Complete</span>
      <span className="font-mono-data text-mono-data text-on-surface-variant text-[11px]">14:23:08.450</span>
      </div>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Processed 1.4TB of telemetry data from 4 nodes.</span>
      </div>
      </div>
      {/* Timeline Item (Error) */}
      <div className="relative">
      <div className="absolute -left-6 w-[10px] h-[10px] rounded-full bg-error border-2 border-[#1E293B] top-1.5 animate-pulse"></div>
      <div className="flex flex-col gap-2 bg-error-container/10 p-3 rounded-lg border border-error-container/20 mt-1">
      <div className="flex items-center justify-between">
      <span className="font-body-sm text-body-sm font-semibold text-error">Anomaly Detected: Memory Spike</span>
      <span className="font-mono-data text-mono-data text-on-surface-variant text-[11px]">14:23:12.899</span>
      </div>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Threshold exceeded on cluster-04. Expected &lt; 80%, observed 94%.</span>
      <div className="bg-[#0F172A] p-2 rounded border border-[#334155] font-mono-data text-mono-data text-[11px] text-on-surface mt-1 overflow-x-auto">
      <code>ERR_MEM_OVERFLOW at 0x00A4F: Process halted to prevent cascade failure.</code>
      </div>
      </div>
      </div>
      {/* Timeline Item */}
      <div className="relative">
      <div className="absolute -left-6 w-[10px] h-[10px] rounded-full bg-[#475569] border-2 border-[#1E293B] top-1.5"></div>
      <div className="flex flex-col gap-1">
      <div className="flex items-center justify-between">
      <span className="font-body-sm text-body-sm font-semibold text-on-surface">Inspection Terminated</span>
      <span className="font-mono-data text-mono-data text-on-surface-variant text-[11px]">14:23:13.001</span>
      </div>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Process automatically suspended pending review.</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </main>
    </>
  );
}
