
export {};

declare global {
  interface Window {
    __bpIsOpen?: boolean;
    botpress?: {
      open: () => void;
      close?: () => void;
      on?: (event: string, cb: (...args: unknown[]) => void) => void;
      sendMessage?: (text: string) => void;
      init?: (cfg: unknown) => void;
    };
    
  }
}

