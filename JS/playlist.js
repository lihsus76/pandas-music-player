

document.addEventListener('DOMContentLoaded', function() {
    const playlistSidebar = document.getElementById('playlistSidebar');
    const sidebarToggleBtn = document.getElementById('sidebarToggleBtn');
    const sidebarOverlay = document.getElementById('sidebarOverlay');

    // Sidebar toggle
    if (sidebarToggleBtn) {
        sidebarToggleBtn.addEventListener('click', function(e) {
            e.stopPropagation(); // prevent triggering document click
            playlistSidebar.classList.toggle('active');
            sidebarOverlay.classList.toggle('active');
            sidebarToggleBtn.classList.toggle('moved');

            // Update icon
            const icon = sidebarToggleBtn.querySelector('i');
            icon.className = playlistSidebar.classList.contains('active') ? 'fas fa-chevron-left' : 'fas fa-chevron-right';
        });
    }

    // Close sidebar button
    const closeSidebar = document.getElementById('closeSidebar');
    if (closeSidebar) {
        closeSidebar.addEventListener('click', function() {
            playlistSidebar.classList.remove('active');
            sidebarOverlay.classList.remove('active');
            sidebarToggleBtn.classList.remove('moved');
            const icon = sidebarToggleBtn.querySelector('i');
            icon.className = 'fas fa-chevron-right';
        });
    }

    // Overlay click to close sidebar
    if (sidebarOverlay) {
        sidebarOverlay.addEventListener('click', function() {
            playlistSidebar.classList.remove('active');
            sidebarOverlay.classList.remove('active');
            sidebarToggleBtn.classList.remove('moved');
            const icon = sidebarToggleBtn.querySelector('i');
            icon.className = 'fas fa-chevron-right';
        });
    }

    // Close sidebar if clicking outside
    document.addEventListener('click', function(e) {
        if (!playlistSidebar.contains(e.target) && !sidebarToggleBtn.contains(e.target)) {
            playlistSidebar.classList.remove('active');
            sidebarOverlay.classList.remove('active');
            sidebarToggleBtn.classList.remove('moved');
            const icon = sidebarToggleBtn.querySelector('i');
            icon.className = 'fas fa-chevron-right';
        }
    });
});
