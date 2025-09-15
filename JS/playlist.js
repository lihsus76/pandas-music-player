document.addEventListener('DOMContentLoaded', function () {
    const playlistSidebar = document.getElementById('playlistSidebar');
    const sidebarToggleBtn = document.getElementById('sidebarToggleBtn');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    const closeSidebar = document.getElementById('closeSidebar');

    function openSidebar() {
        playlistSidebar.classList.add('active');
        sidebarOverlay.classList.add('active');
        sidebarToggleBtn.classList.add('moved');
        document.body.style.overflow = 'hidden'; // no position fixed here
        const icon = sidebarToggleBtn.querySelector('i');
        if (icon) icon.className = 'fas fa-chevron-left';
    }

    function closeSidebarFunc() {
        playlistSidebar.classList.remove('active');
        sidebarOverlay.classList.remove('active');
        sidebarToggleBtn.classList.remove('moved');
        document.body.style.overflow = '';
        const icon = sidebarToggleBtn.querySelector('i');
        if (icon) icon.className = 'fas fa-chevron-right';
    }

    function toggleSidebar(e) {
        e.stopPropagation();
        if (playlistSidebar.classList.contains('active')) {
            closeSidebarFunc();
        } else {
            openSidebar();
        }
    }

    // Toggle button click/touch
    if (sidebarToggleBtn) {
        sidebarToggleBtn.addEventListener('click', toggleSidebar);
        sidebarToggleBtn.addEventListener('touchstart', toggleSidebar); // for mobile
    }

    // Close button
    if (closeSidebar) {
        closeSidebar.addEventListener('click', closeSidebarFunc);
    }

    // Overlay click
    if (sidebarOverlay) {
        sidebarOverlay.addEventListener('click', closeSidebarFunc);
    }

    // Close on outside click (desktop only to avoid mobile misfires)
    document.addEventListener('click', function (e) {
        if (!playlistSidebar.contains(e.target) && !sidebarToggleBtn.contains(e.target)) {
            closeSidebarFunc();
        }
    });
});
