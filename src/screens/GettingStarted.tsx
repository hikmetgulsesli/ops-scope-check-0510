// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Getting Started
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface GettingStartedProps {}

export function GettingStarted(props: GettingStartedProps) {
  return (
    <>
      {/* SideNavBar (Desktop) */}
      <nav className="hidden md:flex fixed left-0 top-0 h-screen w-64 flex-col py-gutter-desktop z-50 bg-surface-container-low dark:bg-surface-container-low">
      <div className="px-gutter-desktop mb-8 flex items-center gap-3">
      <div className="w-8 h-8 rounded bg-primary-container flex items-center justify-center text-on-primary-container">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>analytics</span>
      </div>
      <div>
      <h1 className="font-headline-md text-headline-md font-bold text-primary dark:text-primary leading-tight">Core Engine</h1>
      <p className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Data Operations</p>
      </div>
      </div>
      <div className="px-gutter-desktop mb-6">
      <button className="w-full h-target-touch bg-primary-container text-on-primary-container rounded-lg font-title-sm text-title-sm flex items-center justify-center gap-2 hover:bg-inverse-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface-container-low">
      <span className="material-symbols-outlined">add</span>
                      New Inspection
                  </button>
      </div>
      <ul className="flex-1 px-4 flex flex-col gap-1">
      <li>
      <a className="flex items-center gap-3 px-4 h-target-touch rounded-lg text-primary dark:text-primary font-bold bg-secondary-container/10 transition-all scale-95 duration-100" href="#">
      <span className="material-symbols-outlined">dashboard</span>
      <span className="font-body-base text-body-base">Dashboard</span>
      </a>
      </li>
      <li>
      <a className="flex items-center gap-3 px-4 h-target-touch rounded-lg text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-high dark:hover:bg-surface-container-high transition-all" href="#">
      <span className="material-symbols-outlined">analytics</span>
      <span className="font-body-base text-body-base">Insights</span>
      </a>
      </li>
      <li>
      <a className="flex items-center gap-3 px-4 h-target-touch rounded-lg text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-high dark:hover:bg-surface-container-high transition-all" href="#">
      <span className="material-symbols-outlined">settings</span>
      <span className="font-body-base text-body-base">Settings</span>
      </a>
      </li>
      </ul>
      <div className="px-4 mt-auto">
      <a className="flex items-center gap-3 px-4 h-target-touch rounded-lg text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-high dark:hover:bg-surface-container-high transition-all" href="#">
      <span className="material-symbols-outlined">contact_support</span>
      <span className="font-body-base text-body-base">Support</span>
      </a>
      </div>
      </nav>
      {/* Main Content Wrapper */}
      <div className="flex-1 flex flex-col md:ml-64 min-h-screen">
      {/* TopNavBar (Mobile & Desktop) */}
      <header className="flex justify-between items-center w-full px-gutter-desktop h-target-touch sticky top-0 z-40 bg-surface-container dark:bg-surface-container flat no shadows">
      {/* Mobile Menu Toggle & Brand (Visible only on mobile) */}
      <div className="flex md:hidden items-center gap-3">
      <button className="text-on-surface-variant p-2 -ml-2 rounded-lg hover:bg-surface-container-highest transition-colors">
      <span className="material-symbols-outlined">menu</span>
      </button>
      <span className="font-title-sm text-title-sm font-bold text-on-surface dark:text-on-surface">DataOps Inspector</span>
      </div>
      {/* Desktop Search (if applied) / Blank space */}
      <div className="hidden md:flex flex-1">
      {/* Search bar would go here if active */}
      </div>
      <div className="flex items-center gap-2">
      <button aria-label="notifications" className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-colors">
      <span className="material-symbols-outlined">notifications</span>
      </button>
      <button aria-label="help" className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-colors">
      <span className="material-symbols-outlined">help</span>
      </button>
      <button aria-label="account_circle" className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-colors">
      <img alt="Operations Manager Profile" className="w-8 h-8 rounded-full border border-surface-variant" data-alt="A professional headshot of an operations manager in a corporate setting, soft lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCx_rROjw23Q0W5Ro3p-3nEp5VoQJls6xwnv9b5UIg8n2PNceRRUK3Q-2sxsO427ROzGWlExbgRc-ojewbAyg_0RDSuwLDfbu8-UOCuMsW_7h_ZwLuXUAc8FmQV7KSCXz2m9ZZ3vxsbKGTSYLNvILW2iHbzifi1wfJUvviynsIzCjKDhCOCkXFzvah4xy-RZFfB-nvLf7jrjDocRdI5ZiqkXgfnHJPU0vr6rWKXTcfsRy_y7PuoJjBL6WswlS4o1QWLo00DJ6T_KC8" />
      </button>
      </div>
      </header>
      {/* Main Canvas */}
      <main className="flex-1 p-gutter-mobile md:p-gutter-desktop lg:p-container-margin max-w-[1440px] w-full mx-auto flex flex-col items-center justify-center">
      <div className="w-full max-w-2xl bg-[#1E293B] rounded-xl border border-surface-variant flex flex-col items-center justify-center text-center p-12 lg:p-24">
      <div className="mb-8 w-32 h-32 rounded-full bg-surface-container-high flex items-center justify-center">
      <span className="material-symbols-outlined text-6xl text-on-surface-variant opacity-50" style={{fontVariationSettings: "'wght' 200"}}>data_check</span>
      </div>
      <h2 className="font-display-lg text-display-lg text-on-surface mb-4">No inspections found</h2>
      <p className="font-body-base text-body-base text-on-surface-variant max-w-md mb-10">
                          Your dashboard is currently empty. Run your first data operation inspection to start generating insights and analytics for your workspace.
                      </p>
      <button className="bg-primary-container text-on-primary-container px-8 py-4 rounded-lg font-title-sm text-title-sm flex items-center gap-2 hover:bg-inverse-primary transition-colors shadow-lg shadow-primary-container/20 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[#1E293B]">
      <span className="material-symbols-outlined">play_arrow</span>
                          Start First Inspection
                      </button>
      </div>
      </main>
      </div>
    </>
  );
}
