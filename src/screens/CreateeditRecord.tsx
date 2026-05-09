// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Create/Edit Record
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface CreateeditRecordProps {}

export function CreateeditRecord(props: CreateeditRecordProps) {
  return (
    <>
      {/* Task-Focused Header Shell (Global Navigation Suppressed per Destination Rule) */}
      <header className="h-target-touch px-gutter-desktop flex items-center border-b border-outline-variant/30 sticky top-0 bg-surface/90 backdrop-blur-md z-40">
      <button className="flex items-center text-on-surface-variant hover:text-on-surface transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-container rounded-sm" type="button">
      <span className="material-symbols-outlined mr-2" style={{fontSize: "20px"}}>arrow_back</span>
      <span className="font-label-caps text-label-caps uppercase tracking-widest">Back to Dashboard</span>
      </button>
      </header>
      {/* Main Canvas */}
      <main className="flex-1 w-full max-w-[800px] mx-auto py-10 px-gutter-mobile md:px-container-margin">
      {/* Header Section */}
      <div className="mb-10">
      <h1 className="font-display-lg text-display-lg text-primary mb-2">New Inspection</h1>
      <p className="font-body-base text-body-base text-on-surface-variant">Define parameters for the upcoming environmental audit and resource check.</p>
      </div>
      {/* Form Card Container */}
      <div className="bg-surface-container rounded-xl border border-outline-variant/50 p-6 md:p-8 shadow-sm">
      <form action="#" className="flex flex-col gap-8" method="POST">
      {/* Field: Resource Name (Validated State) */}
      <div>
      <div className="flex justify-between items-baseline mb-2">
      <label className="font-label-caps text-label-caps text-on-surface uppercase tracking-widest" htmlFor="resource-name">
                                  Resource Name <span className="text-error ml-1">*</span>
      </label>
      <span className="font-label-caps text-label-caps text-primary uppercase">Validated</span>
      </div>
      <div className="relative">
      <input className="w-full bg-surface border-2 border-primary/50 focus:border-primary-container focus:ring-0 rounded-lg px-4 py-3 text-on-surface font-mono-data text-mono-data outline-none transition-all pr-12" id="resource-name" name="resource-name" required={true} type="text" value="SRV-US-EAST-04" />
      <span className="material-symbols-outlined absolute right-4 top-3.5 text-primary" data-weight="fill" style={{fontSize: "20px"}}>check_circle</span>
      </div>
      <p className="mt-2 font-body-sm text-body-sm text-on-surface-variant">Target resource successfully resolved in inventory matrix.</p>
      </div>
      {/* Field: Environment (Select) */}
      <div>
      <label className="block font-label-caps text-label-caps text-on-surface uppercase tracking-widest mb-2" htmlFor="environment">
                              Environment
                          </label>
      <div className="relative">
      <select className="w-full bg-surface border border-outline-variant focus:border-primary-container focus:ring-1 focus:ring-primary-container rounded-lg px-4 py-3 text-on-surface font-title-sm text-title-sm outline-none appearance-none cursor-pointer hover:border-outline transition-colors" id="environment" name="environment">
      <option value="production">Production</option>
      <option value="staging">Staging</option>
      <option value="development">Development</option>
      <option value="dr">Disaster Recovery</option>
      </select>
      <span className="material-symbols-outlined absolute right-4 top-3.5 text-on-surface-variant pointer-events-none" style={{fontSize: "20px"}}>expand_more</span>
      </div>
      </div>
      {/* Field: Inspection Type (Radio Pills) */}
      <div>
      <label className="block font-label-caps text-label-caps text-on-surface uppercase tracking-widest mb-3">
                              Inspection Type
                          </label>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Active Radio Pill */}
      <label className="relative flex flex-col items-start p-4 rounded-lg border-2 border-primary-container bg-primary-container/10 cursor-pointer transition-colors focus-within:ring-2 focus-within:ring-primary-container focus-within:ring-offset-2 focus-within:ring-offset-surface">
      <input checked={true} className="sr-only" name="inspection-type" type="radio" value="security" />
      <span className="material-symbols-outlined text-primary-container mb-2" style={{fontSize: "24px"}}>shield</span>
      <span className="font-title-sm text-title-sm text-on-surface">Security Audit</span>
      <span className="material-symbols-outlined absolute top-4 right-4 text-primary-container" data-weight="fill" style={{fontSize: "18px"}}>radio_button_checked</span>
      </label>
      {/* Inactive Radio Pill */}
      <label className="relative flex flex-col items-start p-4 rounded-lg border border-outline-variant hover:border-outline hover:bg-surface-variant/50 cursor-pointer transition-colors focus-within:ring-2 focus-within:ring-primary-container focus-within:ring-offset-2 focus-within:ring-offset-surface">
      <input className="sr-only" name="inspection-type" type="radio" value="performance" />
      <span className="material-symbols-outlined text-on-surface-variant mb-2" style={{fontSize: "24px"}}>speed</span>
      <span className="font-title-sm text-title-sm text-on-surface-variant">Performance</span>
      <span className="material-symbols-outlined absolute top-4 right-4 text-on-surface-variant" style={{fontSize: "18px"}}>radio_button_unchecked</span>
      </label>
      {/* Inactive Radio Pill */}
      <label className="relative flex flex-col items-start p-4 rounded-lg border border-outline-variant hover:border-outline hover:bg-surface-variant/50 cursor-pointer transition-colors focus-within:ring-2 focus-within:ring-primary-container focus-within:ring-offset-2 focus-within:ring-offset-surface">
      <input className="sr-only" name="inspection-type" type="radio" value="compliance" />
      <span className="material-symbols-outlined text-on-surface-variant mb-2" style={{fontSize: "24px"}}>policy</span>
      <span className="font-title-sm text-title-sm text-on-surface-variant">Compliance</span>
      <span className="material-symbols-outlined absolute top-4 right-4 text-on-surface-variant" style={{fontSize: "18px"}}>radio_button_unchecked</span>
      </label>
      </div>
      </div>
      {/* Field: Notes (Textarea) */}
      <div>
      <label className="block font-label-caps text-label-caps text-on-surface uppercase tracking-widest mb-2" htmlFor="notes">
                              Operational Notes
                          </label>
      <textarea className="w-full bg-surface border border-outline-variant focus:border-primary-container focus:ring-1 focus:ring-primary-container rounded-lg px-4 py-3 text-on-surface font-body-base text-body-base outline-none transition-all resize-y hover:border-outline" id="notes" name="notes" placeholder="Detail specific focal points, known anomalies, or temporary overrides required for this inspection run..." rows={4}></textarea>
      </div>
      {/* Form Actions (Footer) */}
      <div className="mt-4 pt-6 border-t border-outline-variant/30 flex flex-col-reverse md:flex-row items-center justify-end gap-4">
      <button className="w-full md:w-auto px-6 h-target-touch rounded-lg font-title-sm text-title-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-variant transition-colors border border-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-container" type="button">
                              Cancel
                          </button>
      <button className="w-full md:w-auto px-8 h-target-touch rounded-lg bg-primary-container text-on-primary-container font-title-sm text-title-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-container focus-visible:ring-offset-2 focus-visible:ring-offset-surface-container" type="submit">
      <span className="material-symbols-outlined" style={{fontSize: "20px"}}>save</span>
                              Save Record
                          </button>
      </div>
      </form>
      </div>
      </main>
    </>
  );
}
