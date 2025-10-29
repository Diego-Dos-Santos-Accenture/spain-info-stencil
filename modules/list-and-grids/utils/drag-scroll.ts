export function enableDragScroll(container?: HTMLElement | null) {
  if (!container) return;
  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;

  const onDown = (e: MouseEvent) => {
    isDown = true;
    container.classList.add('dragging');
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
  };
  const onUpOrLeave = () => {
    isDown = false;
    container.classList.remove('dragging');
  };
  const onMove = (e: MouseEvent) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 1.2;
    container.scrollLeft = scrollLeft - walk;
  };

  container.addEventListener('mousedown', onDown);
  container.addEventListener('mouseup', onUpOrLeave);
  container.addEventListener('mouseleave', onUpOrLeave);
  container.addEventListener('mousemove', onMove);

  return () => {
    container.removeEventListener('mousedown', onDown);
    container.removeEventListener('mouseup', onUpOrLeave);
    container.removeEventListener('mouseleave', onUpOrLeave);
    container.removeEventListener('mousemove', onMove);
  };
}


