// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Dashboard - DataOps Inspector
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface DashboardDataopsInspectorProps {}

export function DashboardDataopsInspector(props: DashboardDataopsInspectorProps) {
  return (
    <>
      {/* Shared SideNavBar */}
      <aside className="fixed left-0 top-0 h-screen w-64 flex flex-col py-gutter-desktop z-50 bg-surface-container-low border-r border-outline-variant/30 hidden md:flex">
      {/* Header */}
      <div className="px-gutter-desktop mb-8">
      <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-lg bg-primary-container flex items-center justify-center">
      <span className="material-symbols-outlined text-on-primary-container">webhook</span>
      </div>
      <div>
      <h1 className="font-title-sm text-title-sm text-primary tracking-tight">Core Engine</h1>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Data Operations</p>
      </div>
      </div>
      </div>
      {/* CTA */}
      <div className="px-gutter-desktop mb-8">
      <button className="w-full h-target-touch bg-primary-container text-on-primary-container rounded-lg font-title-sm text-body-sm flex items-center justify-center gap-2 hover:bg-primary transition-colors">
      <span className="material-symbols-outlined icon-fill text-[18px]">add</span>
                      New Inspection
                  </button>
      </div>
      {/* Navigation Tabs */}
      <nav className="flex-1 px-4 flex flex-col gap-unit">
      {/* Active Tab: Dashboard */}
      <a className="flex items-center gap-3 px-4 h-[40px] rounded-lg text-primary font-bold bg-secondary-container/10 transition-colors" href="#">
      <span className="material-symbols-outlined text-[20px]">dashboard</span>
      <span className="font-body-sm text-body-sm">Dashboard</span>
      </a>
      {/* Inactive Tabs */}
      <a className="flex items-center gap-3 px-4 h-[40px] rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-all" href="#">
      <span className="material-symbols-outlined text-[20px]">analytics</span>
      <span className="font-body-sm text-body-sm">Insights</span>
      </a>
      <a className="flex items-center gap-3 px-4 h-[40px] rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-all" href="#">
      <span className="material-symbols-outlined text-[20px]">settings</span>
      <span className="font-body-sm text-body-sm">Settings</span>
      </a>
      </nav>
      {/* Footer Tabs */}
      <div className="px-4 mt-auto">
      <a className="flex items-center gap-3 px-4 h-[40px] rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-all" href="#">
      <span className="material-symbols-outlined text-[20px]">contact_support</span>
      <span className="font-body-sm text-body-sm">Support</span>
      </a>
      </div>
      </aside>
      {/* Main Content Area */}
      <main className="flex-1 flex flex-col md:ml-64 min-w-0">
      {/* Shared TopNavBar */}
      <header className="flex justify-between items-center w-full px-gutter-desktop h-target-touch sticky top-0 z-40 bg-surface-container/95 backdrop-blur-sm border-b border-outline-variant/20">
      {/* Left Side / Search (Hidden on md to utilize real estate, just showing title context) */}
      <div className="flex items-center gap-4">
      <span className="font-title-sm text-title-sm font-bold text-on-surface">DataOps Inspector</span>
      </div>
      {/* Right Side Actions */}
      <div className="flex items-center gap-2">
      <button className="w-10 h-10 flex items-center justify-center rounded-full text-on-surface-variant hover:bg-surface-container-highest transition-colors">
      <span className="material-symbols-outlined">notifications</span>
      </button>
      <button className="w-10 h-10 flex items-center justify-center rounded-full text-on-surface-variant hover:bg-surface-container-highest transition-colors">
      <span className="material-symbols-outlined">help</span>
      </button>
      <button className="w-10 h-10 flex items-center justify-center rounded-full text-on-surface-variant hover:bg-surface-container-highest transition-colors overflow-hidden">
      <span className="material-symbols-outlined">account_circle</span>
      </button>
      </div>
      </header>
      {/* Dashboard Canvas */}
      <div className="p-container-margin max-w-[1440px] w-full mx-auto flex flex-col gap-6">
      {/* Page Header */}
      <div className="flex justify-between items-end mb-2">
      <div>
      <h2 className="font-display-lg text-display-lg text-on-surface mb-1">Operational Overview</h2>
      <p className="font-body-base text-body-base text-on-surface-variant">Real-time telemetry and inspection status across all active data pipelines.</p>
      </div>
      <div className="flex gap-3">
      <button className="px-4 py-2 bg-surface-container-highest text-on-surface rounded-DEFAULT border border-outline-variant/30 flex items-center gap-2 text-body-sm font-body-sm hover:bg-surface-bright transition-colors">
      <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                              Last 24 Hours
                          </button>
      <button className="px-4 py-2 bg-surface-container-highest text-on-surface rounded-DEFAULT border border-outline-variant/30 flex items-center gap-2 text-body-sm font-body-sm hover:bg-surface-bright transition-colors">
      <span className="material-symbols-outlined text-[18px]">download</span>
                              Export
                          </button>
      </div>
      </div>
      {/* Bento Grid - Top Row Stats */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      {/* Pipeline Volume (Spans 8) */}
      <div className="col-span-1 md:col-span-8 bg-surface-container rounded-lg p-6 border border-outline-variant/10 relative overflow-hidden group">
      {/* Decorative ambient glow */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary-container/10 rounded-full blur-3xl group-hover:bg-primary-container/20 transition-all duration-700 pointer-events-none"></div>
      <div className="flex justify-between items-start mb-6 relative z-10">
      <div>
      <h3 className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider mb-1">Total Throughput</h3>
      <div className="font-display-lg text-display-lg text-on-surface">4.2TB <span className="font-body-sm text-body-sm text-primary ml-2">+12% vs yesterday</span></div>
      </div>
      <div className="p-2 bg-surface-container-highest rounded-md border border-outline-variant/20">
      <span className="material-symbols-outlined text-secondary">database</span>
      </div>
      </div>
      {/* Minimalist Bar Chart Representation */}
      <div className="flex gap-2 h-24 items-end mt-8 relative z-10">
      {/* Bars */}
      <div className="flex-1 bg-surface-container-highest rounded-t-sm h-[40%] hover:bg-secondary-container transition-colors relative group/bar"></div>
      <div className="flex-1 bg-surface-container-highest rounded-t-sm h-[65%] hover:bg-secondary-container transition-colors relative group/bar"></div>
      <div className="flex-1 bg-surface-container-highest rounded-t-sm h-[50%] hover:bg-secondary-container transition-colors relative group/bar"></div>
      <div className="flex-1 bg-surface-container-highest rounded-t-sm h-[80%] hover:bg-secondary-container transition-colors relative group/bar"></div>
      <div className="flex-1 bg-surface-container-highest rounded-t-sm h-[95%] hover:bg-secondary-container transition-colors relative group/bar"></div>
      <div className="flex-1 bg-primary-container/80 rounded-t-sm h-[75%] relative group/bar">
      {/* Tooltip mock */}
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-surface-container-highest text-on-surface font-mono-data text-[11px] px-2 py-1 rounded opacity-0 group-hover/bar:opacity-100 whitespace-nowrap border border-outline-variant/30">Current: 850GB</div>
      </div>
      </div>
      </div>
      {/* Health & Alerts (Spans 4) */}
      <div className="col-span-1 md:col-span-4 flex flex-col gap-6">
      {/* Metric Card 1 */}
      <div className="bg-surface-container rounded-lg p-5 border border-outline-variant/10 flex-1 flex flex-col justify-between">
      <div className="flex justify-between items-center mb-2">
      <h3 className="font-label-caps text-label-caps text-on-surface-variant">System Health</h3>
      <span className="material-symbols-outlined text-primary text-[20px]">monitor_heart</span>
      </div>
      <div className="flex items-baseline gap-2">
      <span className="font-display-lg text-display-lg text-on-surface">99.8%</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Uptime</span>
      </div>
      </div>
      {/* Metric Card 2 (Warning State Focus) */}
      <div className="bg-surface-container rounded-lg p-5 border border-outline-variant/10 flex-1 flex flex-col justify-between">
      <div className="flex justify-between items-center mb-2">
      <h3 className="font-label-caps text-label-caps text-on-surface-variant">Active Anomalies</h3>
      <span className="material-symbols-outlined text-tertiary text-[20px]">warning</span>
      </div>
      <div className="flex items-baseline gap-2">
      <span className="font-display-lg text-display-lg text-tertiary">3</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Require Attention</span>
      </div>
      </div>
      </div>
      </div>
      {/* Active Inspection Records (List/Table View) */}
      <div className="bg-surface-container rounded-lg border border-outline-variant/10 overflow-hidden flex flex-col mt-2">
      {/* Table Header & Controls */}
      <div className="p-5 border-b border-surface-container-highest flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-surface-container">
      <h3 className="font-title-sm text-title-sm text-on-surface font-semibold">Active Inspection Records</h3>
      <div className="flex items-center gap-3 w-full sm:w-auto">
      {/* Search Input */}
      <div className="relative flex-1 sm:w-64">
      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">search</span>
      <input className="w-full bg-surface-container-highest border border-outline-variant/30 rounded-DEFAULT py-2 pl-9 pr-3 font-body-sm text-body-sm text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="Search by ID or Pipeline..." type="text" />
      </div>
      {/* Filter Button */}
      <button className="h-[34px] px-3 bg-surface-container-highest border border-outline-variant/30 rounded-DEFAULT flex items-center gap-2 hover:bg-surface-bright transition-colors">
      <span className="material-symbols-outlined text-[18px] text-on-surface-variant">filter_list</span>
      <span className="font-body-sm text-body-sm text-on-surface">Filter</span>
      </button>
      </div>
      </div>
      {/* Data List Header (Desktop Only) */}
      <div className="hidden sm:grid grid-cols-12 gap-4 px-5 py-3 bg-surface-container-highest/30 border-b border-surface-container-highest">
      <div className="col-span-3 font-label-caps text-label-caps text-on-surface-variant uppercase">Inspection ID</div>
      <div className="col-span-3 font-label-caps text-label-caps text-on-surface-variant uppercase">Target Pipeline</div>
      <div className="col-span-3 font-label-caps text-label-caps text-on-surface-variant uppercase">Status</div>
      <div className="col-span-3 font-label-caps text-label-caps text-on-surface-variant uppercase text-right">Timestamp</div>
      </div>
      {/* Data Rows */}
      <div className="flex flex-col">
      {/* Row 1: Success/Nominal */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 px-5 py-4 border-b border-surface-container-highest hover:bg-surface-container-highest/20 transition-colors items-center group">
      <div className="col-span-3">
      <div className="font-mono-data text-mono-data text-on-surface">INS-8842-A</div>
      <div className="sm:hidden font-body-sm text-body-sm text-on-surface-variant mt-1">Ingestion_Alpha_V2</div>
      </div>
      <div className="col-span-3 hidden sm:block font-body-sm text-body-sm text-on-surface">
                                  Ingestion_Alpha_V2
                              </div>
      <div className="col-span-3">
      <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-primary-container/10 text-primary border border-primary/20 font-body-sm text-[12px] font-medium leading-none">
      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                      Nominal
                                  </span>
      </div>
      <div className="col-span-3 text-left sm:text-right font-mono-data text-[12px] text-on-surface-variant">
                                  10:42:05 UTC
                              </div>
      </div>
      {/* Row 2: Warning */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 px-5 py-4 border-b border-surface-container-highest hover:bg-surface-container-highest/20 transition-colors items-center group">
      <div className="col-span-3">
      <div className="font-mono-data text-mono-data text-on-surface">INS-8841-B</div>
      <div className="sm:hidden font-body-sm text-body-sm text-on-surface-variant mt-1">Transform_Node_X</div>
      </div>
      <div className="col-span-3 hidden sm:block font-body-sm text-body-sm text-on-surface">
                                  Transform_Node_X
                              </div>
      <div className="col-span-3">
      <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-tertiary/10 text-tertiary border border-tertiary/20 font-body-sm text-[12px] font-medium leading-none">
      <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                                      High Latency
                                  </span>
      </div>
      <div className="col-span-3 text-left sm:text-right font-mono-data text-[12px] text-on-surface-variant">
                                  10:38:12 UTC
                              </div>
      </div>
      {/* Row 3: Error */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 px-5 py-4 border-b border-surface-container-highest hover:bg-surface-container-highest/20 transition-colors items-center group">
      <div className="col-span-3">
      <div className="font-mono-data text-mono-data text-on-surface">INS-8840-C</div>
      <div className="sm:hidden font-body-sm text-body-sm text-on-surface-variant mt-1">Output_Sync_DB</div>
      </div>
      <div className="col-span-3 hidden sm:block font-body-sm text-body-sm text-on-surface">
                                  Output_Sync_DB
                              </div>
      <div className="col-span-3">
      <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-error-container/20 text-error border border-error/30 font-body-sm text-[12px] font-medium leading-none">
      <span className="material-symbols-outlined text-[14px]">error</span>
                                      Schema Mismatch
                                  </span>
      </div>
      <div className="col-span-3 text-left sm:text-right font-mono-data text-[12px] text-on-surface-variant">
                                  10:15:00 UTC
                              </div>
      </div>
      {/* Row 4: Success/Nominal */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 px-5 py-4 hover:bg-surface-container-highest/20 transition-colors items-center group">
      <div className="col-span-3">
      <div className="font-mono-data text-mono-data text-on-surface">INS-8839-A</div>
      <div className="sm:hidden font-body-sm text-body-sm text-on-surface-variant mt-1">Ingestion_Beta_V1</div>
      </div>
      <div className="col-span-3 hidden sm:block font-body-sm text-body-sm text-on-surface">
                                  Ingestion_Beta_V1
                              </div>
      <div className="col-span-3">
      <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-primary-container/10 text-primary border border-primary/20 font-body-sm text-[12px] font-medium leading-none">
      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                      Nominal
                                  </span>
      </div>
      <div className="col-span-3 text-left sm:text-right font-mono-data text-[12px] text-on-surface-variant">
                                  09:55:22 UTC
                              </div>
      </div>
      </div>
      </div>
      </div>
      </main>
    </>
  );
}
