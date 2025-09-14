


        const sidebar = document.getElementById("sidebar");
        const toggleBtn = document.getElementById("sidebarToggle");

        // Get scrollbar width to prevent layout shift
        function getScrollbarWidth() {
            return window.innerWidth - document.documentElement.clientWidth;
        }

        // Lock scroll by applying styles dynamically
        function lockScroll() {
            const scrollBarWidth = getScrollbarWidth();
            document.body.style.overflow = "hidden";
            document.body.style.height = "100%";
            document.body.style.paddingRight = scrollBarWidth + "px";
        }

        // Unlock scroll
        function unlockScroll() {
            document.body.style.overflow = "";
            document.body.style.height = "";
            document.body.style.paddingRight = "";
        }

        // Toggle Sidebar
        function toggleSidebar() {
            const isActive = sidebar.classList.toggle("active");
            toggleBtn.classList.toggle("open", isActive);

            if (isActive) {
                lockScroll();
            } else {
                unlockScroll();
            }
        }

        // Close Sidebar
        function closeSidebar() {
            sidebar.classList.remove("active");
            toggleBtn.classList.remove("open");
            unlockScroll();
        }

        // Toggle button click
        toggleBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            toggleSidebar();
        });

        // Menu Buttons Click: close sidebar + scroll to top smoothly
        ["homeBtn", "GalleryBtn", "playlistBtn"].forEach(id => {
            const btn = document.getElementById(id);
            if (btn) {
                btn.addEventListener("click", () => {
                    closeSidebar();

                    // Scroll to top smoothly
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    });

                    // Optional: call page-specific functions
                    if (id === "homeBtn" && typeof showHome === "function") showHome();
                    if (id === "GalleryBtn" && typeof showGallery === "function") showGallery();
                    if (id === "playlistBtn" && typeof showPlaylist === "function") showPlaylist();
                });
            }
        });

        // Close sidebar when clicking outside
        document.addEventListener("click", (e) => {
            if (sidebar.classList.contains("active") &&
                !sidebar.contains(e.target) &&
                !toggleBtn.contains(e.target)) {
                closeSidebar();
            }
        });