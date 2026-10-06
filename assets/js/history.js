// Each course owns its expansion state. All events remain readable without JS.
document.querySelectorAll('.history-events').forEach(list => {
  const events = Array.from(list.children);
  if (events.length <= 5) return;
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'history-more';
  button.setAttribute('aria-controls', list.id);
  let expanded = false;
  const update = () => {
    events.slice(5).forEach(event => { event.hidden = !expanded; });
    button.setAttribute('aria-expanded', String(expanded));
    button.textContent = expanded ? 'Mostrar menos' : `Mostrar más (${events.length - 5})`;
  };
  button.addEventListener('click', () => {
    expanded = !expanded;
    update();
    if (!expanded) button.scrollIntoView({ block: 'nearest' });
  });
  list.after(button);
  update();
});

const historyTrack = document.querySelector('.history-track');
const historyProgress = document.querySelector('.history-progress');
if (historyTrack && historyProgress && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  let scheduled = false;
  const updateProgress = () => {
    const rect = historyTrack.getBoundingClientRect();
    const progress = Math.max(0, Math.min(1, (innerHeight * 0.5 - rect.top) / rect.height));
    historyProgress.style.transform = `scaleY(${progress})`;
    scheduled = false;
  };
  const schedule = () => {
    if (!scheduled) { scheduled = true; requestAnimationFrame(updateProgress); }
  };
  addEventListener('scroll', schedule, { passive: true });
  addEventListener('resize', schedule);
  new ResizeObserver(schedule).observe(document.querySelector('.history-timeline'));
  schedule();
}
