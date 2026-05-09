// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: System Settings
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface SystemSettingsProps {}

export function SystemSettings(props: SystemSettingsProps) {
  return (
    <>
      {/* SideNavBar */}
      <nav className="hidden md:flex flex-col fixed left-0 top-0 h-screen w-64 py-gutter-desktop z-50 bg-surface-container-low dark:bg-surface-container-low border-r border-outline-variant/20">
      {/* Header */}
      <div className="px-6 mb-8 flex items-center gap-3">
      <div className="w-10 h-10 rounded bg-primary-container/20 flex items-center justify-center text-primary border border-primary/30 shrink-0">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>dataset</span>
      </div>
      <div>
      <h1 className="font-headline-md text-headline-md font-bold text-primary dark:text-primary leading-tight">Core Engine</h1>
      <p className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Data Operations</p>
      </div>
      </div>
      {/* CTA */}
      <div className="px-6 mb-6">
      <button className="w-full bg-primary-container text-on-primary-container hover:bg-primary-container/90 transition-colors h-target-touch rounded-lg font-title-sm text-title-sm flex items-center justify-center gap-2 shadow-sm">
      <span className="material-symbols-outlined text-[20px]">add</span>
                      New Inspection
                  </button>
      </div>
      {/* Navigation Links */}
      <div className="flex-1 flex flex-col gap-1 px-4 overflow-y-auto">
      {/* Inactive Tab */}
      <a className="flex items-center gap-3 px-4 h-target-touch rounded-lg text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-high dark:hover:bg-surface-container-high transition-all group" href="#">
      <span className="material-symbols-outlined text-[22px] group-hover:text-on-surface transition-colors">dashboard</span>
      <span className="font-body-base text-body-base font-medium group-hover:text-on-surface transition-colors">Dashboard</span>
      </a>
      {/* Inactive Tab */}
      <a className="flex items-center gap-3 px-4 h-target-touch rounded-lg text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-high dark:hover:bg-surface-container-high transition-all group" href="#">
      <span className="material-symbols-outlined text-[22px] group-hover:text-on-surface transition-colors">analytics</span>
      <span className="font-body-base text-body-base font-medium group-hover:text-on-surface transition-colors">Insights</span>
      </a>
      {/* Active Tab */}
      <a className="flex items-center gap-3 px-4 h-target-touch rounded-lg text-primary dark:text-primary font-bold bg-secondary-container/10 scale-95 duration-100" href="#">
      <span className="material-symbols-outlined text-[22px]" style={{fontVariationSettings: "'FILL' 1"}}>settings</span>
      <span className="font-body-base text-body-base">Settings</span>
      </a>
      </div>
      {/* Footer */}
      <div className="px-4 mt-auto pt-4 border-t border-outline-variant/20">
      <a className="flex items-center gap-3 px-4 h-target-touch rounded-lg text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-high dark:hover:bg-surface-container-high transition-all group" href="#">
      <span className="material-symbols-outlined text-[22px] group-hover:text-on-surface transition-colors">contact_support</span>
      <span className="font-body-base text-body-base font-medium group-hover:text-on-surface transition-colors">Support</span>
      </a>
      </div>
      </nav>
      {/* Main Content Wrapper */}
      <div className="flex-1 md:ml-64 flex flex-col min-h-screen">
      {/* TopNavBar */}
      <header className="bg-surface-container dark:bg-surface-container flex justify-between items-center w-full px-gutter-desktop h-target-touch sticky top-0 z-40 border-b border-outline-variant/10">
      {/* Mobile Menu / Title */}
      <div className="flex items-center gap-4">
      <button className="md:hidden text-on-surface hover:text-primary transition-colors h-10 w-10 flex items-center justify-center rounded-full hover:bg-surface-container-highest">
      <span className="material-symbols-outlined text-[24px]">menu</span>
      </button>
      <h2 className="font-title-sm text-title-sm font-bold text-on-surface dark:text-on-surface">DataOps Inspector</h2>
      </div>
      {/* Actions */}
      <div className="flex items-center gap-2">
      <button aria-label="Notifications" className="h-10 w-10 rounded-full flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest transition-colors relative">
      <span className="material-symbols-outlined">notifications</span>
      <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full border border-surface-container"></span>
      </button>
      <button aria-label="Help" className="h-10 w-10 rounded-full flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest transition-colors">
      <span className="material-symbols-outlined">help</span>
      </button>
      <button aria-label="Profile" className="h-10 w-10 rounded-full flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest transition-colors">
      <span className="material-symbols-outlined">account_circle</span>
      </button>
      </div>
      </header>
      {/* Page Content */}
      <main className="flex-1 p-gutter-mobile md:p-container-margin w-full max-w-[1440px] mx-auto overflow-x-hidden">
      <div className="mb-8">
      <h2 className="font-display-lg text-display-lg text-on-surface mb-2">Preferences</h2>
      <p className="font-body-base text-body-base text-on-surface-variant max-w-2xl">Manage your application parameters, notification rules, and local storage state for optimal performance.</p>
      </div>
      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Notifications Column (Spans 8 cols on desktop) */}
      <div className="lg:col-span-8 flex flex-col gap-6">
      {/* Notification Toggles Card */}
      <section className="bg-surface-container rounded-xl border border-outline-variant/20 overflow-hidden shadow-sm">
      <div className="p-6 border-b border-outline-variant/10 flex items-center gap-3 bg-surface-container-high/50">
      <span className="material-symbols-outlined text-primary">notifications_active</span>
      <h3 className="font-title-sm text-title-sm text-on-surface">Notification Toggles</h3>
      </div>
      <div className="flex flex-col">
      {/* Toggle Item 1 */}
      <div className="flex items-center justify-between p-6 border-b border-outline-variant/10 hover:bg-surface-container-high/30 transition-colors">
      <div>
      <h4 className="font-body-base text-body-base font-semibold text-on-surface mb-1">Critical Pipeline Alerts</h4>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Immediate notification for workflow failures or data anomalies exceeding threshold.</p>
      </div>
      <div className="flex items-center justify-center relative w-12 h-6">
      <input checked={true} className="sr-only toggle-checkbox" id="toggle-critical" type="checkbox" />
      <label className="toggle-label block w-11 h-6 rounded-full" htmlFor="toggle-critical"></label>
      </div>
      </div>
      {/* Toggle Item 2 */}
      <div className="flex items-center justify-between p-6 border-b border-outline-variant/10 hover:bg-surface-container-high/30 transition-colors">
      <div>
      <h4 className="font-body-base text-body-base font-semibold text-on-surface mb-1">Daily Summary Digest</h4>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Receive a condensed report of system health and processed volumes at 08:00 UTC.</p>
      </div>
      <div className="flex items-center justify-center relative w-12 h-6">
      <input className="sr-only toggle-checkbox" id="toggle-summary" type="checkbox" />
      <label className="toggle-label block w-11 h-6 rounded-full" htmlFor="toggle-summary"></label>
      </div>
      </div>
      {/* Toggle Item 3 */}
      <div className="flex items-center justify-between p-6 hover:bg-surface-container-high/30 transition-colors">
      <div>
      <h4 className="font-body-base text-body-base font-semibold text-on-surface mb-1">Maintenance Announcements</h4>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Updates regarding scheduled downtime and version deprecations.</p>
      </div>
      <div className="flex items-center justify-center relative w-12 h-6">
      <input checked={true} className="sr-only toggle-checkbox" id="toggle-maint" type="checkbox" />
      <label className="toggle-label block w-11 h-6 rounded-full" htmlFor="toggle-maint"></label>
      </div>
      </div>
      </div>
      </section>
      </div>
      {/* Info & Actions Column (Spans 4 cols on desktop) */}
      <div className="lg:col-span-4 flex flex-col gap-6">
      {/* Storage Version Info Card */}
      <section className="bg-surface-container rounded-xl border border-outline-variant/20 overflow-hidden shadow-sm">
      <div className="p-5 border-b border-outline-variant/10 flex items-center gap-3 bg-surface-container-high/50">
      <span className="material-symbols-outlined text-secondary">memory</span>
      <h3 className="font-title-sm text-title-sm text-on-surface">Storage Version Info</h3>
      </div>
      <div className="p-5 flex flex-col gap-4">
      <div className="flex justify-between items-baseline border-b border-outline-variant/10 pb-3">
      <span className="font-body-sm text-body-sm text-on-surface-variant">Client Version</span>
      <span className="font-mono-data text-mono-data text-on-surface">v2.4.1-stable</span>
      </div>
      <div className="flex justify-between items-baseline border-b border-outline-variant/10 pb-3">
      <span className="font-body-sm text-body-sm text-on-surface-variant">API Endpoint</span>
      <span className="font-mono-data text-mono-data text-on-surface truncate max-w-[120px]" title="us-east-1.dataops.int">us-east-1...</span>
      </div>
      <div className="flex justify-between items-baseline border-b border-outline-variant/10 pb-3">
      <span className="font-body-sm text-body-sm text-on-surface-variant">Local Cache Size</span>
      <div className="flex items-center gap-2">
      <div className="w-16 h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
      <div className="bg-primary w-2/3 h-full rounded-full"></div>
      </div>
      <span className="font-mono-data text-mono-data text-on-surface">42.8 MB</span>
      </div>
      </div>
      <div className="flex justify-between items-baseline">
      <span className="font-body-sm text-body-sm text-on-surface-variant">Last Synced</span>
      <span className="font-mono-data text-mono-data text-on-surface text-right">14 mins ago</span>
      </div>
      </div>
      </section>
      {/* Danger Zone Card */}
      <section className="bg-surface-container rounded-xl border border-error-container/30 overflow-hidden shadow-sm relative">
      {/* Subtle red accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-error-container/50"></div>
      <div className="p-5 border-b border-outline-variant/10 flex items-center gap-3">
      <span className="material-symbols-outlined text-error">warning</span>
      <h3 className="font-title-sm text-title-sm text-error">System Actions</h3>
      </div>
      <div className="p-5 flex flex-col gap-5">
      <div className="flex flex-col gap-3">
      <div className="flex justify-between items-start gap-4">
      <div>
      <h4 className="font-body-sm text-body-sm font-semibold text-on-surface mb-0.5">Clear localStorage Cache</h4>
      <p className="font-label-caps text-label-caps text-on-surface-variant normal-case">Frees up browser memory. Will require re-fetching large datasets.</p>
      </div>
      </div>
      <button className="h-10 px-4 rounded-lg bg-surface-container-highest border border-outline-variant/30 text-on-surface hover:bg-surface-bright hover:border-outline-variant transition-all font-body-sm text-body-sm font-medium flex items-center justify-center gap-2 w-full">
      <span className="material-symbols-outlined text-[18px]">delete_sweep</span>
                                          Clear Cache
                                      </button>
      </div>
      <div className="h-px bg-outline-variant/10 w-full"></div>
      <div className="flex flex-col gap-3">
      <div className="flex justify-between items-start gap-4">
      <div>
      <h4 className="font-body-sm text-body-sm font-semibold text-on-surface mb-0.5">Reset Application State</h4>
      <p className="font-label-caps text-label-caps text-on-surface-variant normal-case">Reverts all settings to factory defaults. Cannot be undone.</p>
      </div>
      </div>
      <button className="h-10 px-4 rounded-lg bg-error-container/10 border border-error-container/30 text-error hover:bg-error-container/20 hover:border-error-container transition-all font-body-sm text-body-sm font-medium flex items-center justify-center gap-2 w-full">
      <span className="material-symbols-outlined text-[18px]">restart_alt</span>
                                          Reset State
                                      </button>
      </div>
      </div>
      </section>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
