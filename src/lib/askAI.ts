// top of file (after imports)
export function askAIAbout(projectTitle: string) {
  if (typeof window === "undefined" || !window.botpress) return;

  const text = `Tell me about ${projectTitle}.`;
  let sent = false;

  const trySend = () => {
    if (sent) return;
    sent = true;
    window.botpress?.sendMessage?.(text);
  };

  // Open chat, then try to send once it's ready/open.
  window.botpress.open();
  window.botpress.on?.("webchat:ready", trySend);
  window.botpress.on?.("webchat:opened", trySend);

  // Fallback in case events have already fired
  setTimeout(trySend, 300);
}