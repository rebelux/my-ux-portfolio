/* eslint-disable @typescript-eslint/no-explicit-any */
export {};

declare global {
  interface Window {
    botpress?: {
      open: () => void;
      close: () => void;
      on: (event: string, callback: () => void) => void;
      init: (config: any) => void;
    };
    __bpIsOpen?: boolean;
  }
}
