const scrollableContent = document.getElementById('scrollable-content');
let isDragging = false;
let startX, scrollLeft;

scrollableContent.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - scrollableContent.offsetLeft;
    scrollLeft = scrollableContent.scrollLeft;
});

scrollableContent.addEventListener('mouseleave', () => {
    isDragging = false;
});

scrollableContent.addEventListener('mouseup', () => {
    isDragging = false;
});

scrollableContent.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollableContent.offsetLeft;
    const walk = (x - startX) * 2; // 控制滚动速度
    scrollableContent.scrollLeft = scrollLeft - walk;
});
