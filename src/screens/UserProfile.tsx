// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: User Profile
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface UserProfileProps {}

export function UserProfile(props: UserProfileProps) {
  return (
    <>
      {/* Modal Overlay/Container */}
      <main className="w-full max-w-2xl bg-surface-container rounded-xl flex flex-col shadow-2xl ring-1 ring-surface-container-highest">
      {/* Header */}
      <header className="flex items-center justify-between px-container-margin py-gutter-desktop border-b border-surface-container-highest">
      <h1 className="font-headline-md text-headline-md text-on-surface">Profile Settings</h1>
      <button aria-label="Close Profile" className="flex items-center justify-center w-target-touch h-target-touch rounded-full text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors">
      <span className="material-symbols-outlined">close</span>
      </button>
      </header>
      {/* Scrollable Content Area */}
      <div className="flex flex-col p-container-margin gap-container-margin overflow-y-auto">
      {/* Identity Card */}
      <section className="flex flex-col md:flex-row items-center md:items-start gap-gutter-desktop bg-surface-container-low p-container-margin rounded-lg border border-surface-container-highest">
      <div className="relative w-24 h-24 rounded-full overflow-hidden shrink-0 ring-4 ring-surface-container">
      <img alt="Operations Manager Avatar" className="w-full h-full object-cover" data-alt="A professional headshot of a mature male operations manager with a neat, modern haircut, wearing a dark navy corporate blazer over a crisp dark grey shirt. The lighting is studio quality, creating soft, flattering shadows that emphasize reliability and competence. The background is a stark, minimal dark slate, aligning perfectly with a modern, high-tech corporate dark mode aesthetic. The overall mood is serious, competent, and quietly authoritative." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtBMo9DPz5HYFHmfjy7wER8h8B9JZ1okgbGnM-e-915lcUZ0r3eAWhH2Ak9qxbSR-oVPdxXUVaDnsY8HTBxkaf5WRxjX2tfzPBc2UT2DTy8uHiw1nt_TcB0bqJqwqatkiwk52z4bSqQwUO4WI0zdxgikU7siHCsfofJ6obJ7dnLW1NhI8OEvGcnjPfdYF8IK1euTn7yUOPvA-USaYLZe4562r4B39Ikf4gGe4lmRYyvzcSHrKBw8BvvjWjU34LA4yTYUr87FQClHI" />
      </div>
      <div className="flex flex-col items-center md:items-start text-center md:text-left pt-2">
      <h2 className="font-title-sm text-title-sm text-on-surface">Marcus Vance</h2>
      <p className="font-body-base text-body-base text-primary flex items-center gap-2 mt-1">
      <span className="material-symbols-outlined text-[18px]">badge</span>
                              Operations Manager
                          </p>
      <div className="mt-4 flex flex-wrap gap-2 justify-center md:justify-start">
      <span className="inline-flex items-center px-3 py-1 rounded-full bg-secondary-container/20 border border-secondary-container font-body-sm text-body-sm text-secondary">ID: OM-9482A</span>
      <span className="inline-flex items-center px-3 py-1 rounded-full bg-secondary-container/20 border border-secondary-container font-body-sm text-body-sm text-secondary">Region: NA-EAST</span>
      </div>
      </div>
      <div className="md:ml-auto mt-4 md:mt-0 flex items-center h-full">
      <button className="px-4 py-2 h-target-touch bg-surface-container-high hover:bg-surface-container-highest text-on-surface border border-outline-variant rounded-lg font-body-sm text-body-sm transition-colors flex items-center gap-2">
      <span className="material-symbols-outlined text-[18px]">edit</span>
                              Edit Details
                          </button>
      </div>
      </section>
      {/* Preferences Section */}
      <section className="flex flex-col gap-gutter-desktop mt-4">
      <h3 className="font-label-caps text-label-caps text-on-surface-variant tracking-wider">System Preferences</h3>
      <div className="flex flex-col gap-unit">
      {/* Preference Item 1 */}
      <label className="flex items-center justify-between p-gutter-desktop bg-surface-container-low rounded-t-lg border border-surface-container-highest hover:bg-surface-container transition-colors cursor-pointer group">
      <div className="flex flex-col gap-1 pr-4">
      <span className="font-title-sm text-title-sm text-on-surface group-hover:text-primary transition-colors">Critical Incident Alerts</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Receive immediate push notifications for tier 1 system events.</span>
      </div>
      <div className="relative inline-flex items-center shrink-0">
      <input checked={true} className="sr-only peer" type="checkbox" />
      <div className="w-11 h-6 bg-surface-variant rounded-full peer peer-focus:ring-2 peer-focus:ring-primary peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-on-surface after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-container peer-checked:after:bg-on-primary-container border border-outline-variant peer-checked:border-primary-container"></div>
      </div>
      </label>
      {/* Preference Item 2 */}
      <label className="flex items-center justify-between p-gutter-desktop bg-surface-container-low border-x border-b border-surface-container-highest hover:bg-surface-container transition-colors cursor-pointer group">
      <div className="flex flex-col gap-1 pr-4">
      <span className="font-title-sm text-title-sm text-on-surface group-hover:text-primary transition-colors">Telemetry Data Sync</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Automatically upload background diagnostic data to Central Ops.</span>
      </div>
      <div className="relative inline-flex items-center shrink-0">
      <input checked={true} className="sr-only peer" type="checkbox" />
      <div className="w-11 h-6 bg-surface-variant rounded-full peer peer-focus:ring-2 peer-focus:ring-primary peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-on-surface after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-container peer-checked:after:bg-on-primary-container border border-outline-variant peer-checked:border-primary-container"></div>
      </div>
      </label>
      {/* Preference Item 3 */}
      <label className="flex items-center justify-between p-gutter-desktop bg-surface-container-low rounded-b-lg border-x border-b border-surface-container-highest hover:bg-surface-container transition-colors cursor-pointer group">
      <div className="flex flex-col gap-1 pr-4">
      <span className="font-title-sm text-title-sm text-on-surface group-hover:text-primary transition-colors">Compact View Mode</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Increase data density in operational tables and active inspection views.</span>
      </div>
      <div className="relative inline-flex items-center shrink-0">
      <input className="sr-only peer" type="checkbox" />
      <div className="w-11 h-6 bg-surface-variant rounded-full peer peer-focus:ring-2 peer-focus:ring-primary peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-on-surface after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-container peer-checked:after:bg-on-primary-container border border-outline-variant peer-checked:border-primary-container"></div>
      </div>
      </label>
      </div>
      </section>
      </div>
      {/* Footer Actions */}
      <footer className="mt-auto p-container-margin border-t border-surface-container-highest flex items-center justify-between bg-surface-container-lowest rounded-b-xl">
      <button className="flex items-center gap-2 h-target-touch px-4 rounded-lg text-error hover:bg-error-container/20 transition-colors font-body-base text-body-base">
      <span className="material-symbols-outlined text-[20px]">logout</span>
                      Sign Out Session
                  </button>
      <button className="h-target-touch px-6 rounded-lg bg-primary-container text-on-primary-container font-title-sm text-title-sm hover:bg-primary hover:text-on-primary transition-colors focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface-container">
                      Save Changes
                  </button>
      </footer>
      </main>
    </>
  );
}
