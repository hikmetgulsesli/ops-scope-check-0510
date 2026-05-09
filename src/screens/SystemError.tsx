// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: System Error
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface SystemErrorProps {}

export function SystemError(props: SystemErrorProps) {
  return (
    <>
      {/* Main Error Container */}
      <main className="w-full max-w-3xl mx-auto px-gutter-mobile md:px-gutter-desktop py-container-margin">
      {/* Error Card */}
      <div className="bg-surface-container-high rounded-lg flex flex-col md:flex-row overflow-hidden border border-outline-variant/30">
      {/* Left Side: Icon & Summary */}
      <div className="p-8 md:w-1/3 flex flex-col items-start justify-center bg-error-container/10 border-b md:border-b-0 md:border-r border-outline-variant/30">
      <div className="w-16 h-16 rounded-full bg-error-container flex items-center justify-center mb-6">
      <span className="material-symbols-outlined text-on-error text-3xl" data-icon="warning" data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}}>warning</span>
      </div>
      <h1 className="font-headline-md text-headline-md text-error mb-2">Storage Access Failure</h1>
      <p className="font-body-sm text-body-sm text-on-surface-variant">The system was unable to establish a secure connection to the primary data storage volume. Operations are suspended.</p>
      </div>
      {/* Right Side: Details & Actions */}
      <div className="p-8 md:w-2/3 flex flex-col">
      <h2 className="font-title-sm text-title-sm text-on-surface mb-4 border-b border-surface-container-highest pb-2">Technical Diagnostic</h2>
      {/* Technical Details (Monospace) */}
      <div className="bg-surface-container-lowest rounded p-4 mb-6 flex-grow border border-outline-variant/50">
      <pre className="font-mono-data text-mono-data text-on-surface-variant whitespace-pre-wrap overflow-x-auto">ERROR_CODE: ERR_STORAGE_TIMEOUT_0x9A
      TIMESTAMP: 2023-10-27T14:32:01Z
      NODE_ID: worker-node-04.us-east
      TARGET_VOLUME: vol-09a8b7c6d5e4f3
      DETAIL: Connection attempt timed out after 30000ms. I/O operation blocked.
      TRACE:
        at StorageConnector.connect (/app/core/storage.js:142)
        at VolumeManager.mount (/app/sys/volumes.js:88)
        at Bootstrap.init (/app/main.js:22)
                          </pre>
      </div>
      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-4 mt-auto pt-4">
      <button className="h-target-touch px-6 rounded-lg bg-primary-container text-on-primary-container font-title-sm text-title-sm flex items-center justify-center gap-2 hover:bg-primary-container/90 transition-colors focus:ring-2 focus:ring-primary focus:outline-none w-full sm:w-auto">
      <span className="material-symbols-outlined" data-icon="refresh">refresh</span>
                              Retry Connection
                          </button>
      <button className="h-target-touch px-6 rounded-lg bg-surface-container text-on-surface font-title-sm text-title-sm border border-outline-variant flex items-center justify-center gap-2 hover:bg-surface-container-highest transition-colors focus:ring-2 focus:ring-primary focus:outline-none w-full sm:w-auto">
      <span className="material-symbols-outlined" data-icon="delete_sweep">delete_sweep</span>
                              Reset Local Data
                          </button>
      </div>
      <div className="mt-4 text-center sm:text-left">
      <a className="font-body-sm text-body-sm text-primary hover:text-primary-fixed transition-colors underline flex items-center justify-center sm:justify-start gap-1" href="#">
      <span className="material-symbols-outlined text-[16px]" data-icon="support_agent">support_agent</span>
                              Contact Support
                          </a>
      </div>
      </div>
      </div>
      </main>
    </>
  );
}
