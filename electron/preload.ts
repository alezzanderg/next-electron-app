import { contextBridge, ipcRenderer } from 'electron';

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld('electronAPI', {
  // Add any APIs you want to expose to the renderer process here
  // For example:
  // openFile: () => ipcRenderer.invoke('dialog:openFile'),
  // onUpdateCounter: (callback: any) => ipcRenderer.on('update-counter', callback),
  // counterValue: (value: number) => ipcRenderer.invoke('counter-value', value),
});

