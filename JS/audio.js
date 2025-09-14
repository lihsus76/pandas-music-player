

document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('backgroundAudio');

    // Buttons
    const playPauseBtn = document.getElementById('playPauseBtn');
    const playPauseIcon = document.getElementById('playPauseIcon');
    const audioControl = document.getElementById('audioControl'); // Header button
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const volumeSlider = document.getElementById('volumeSlider');
    const volumeIcon = document.getElementById('volumeIcon');

    // Playlist elements
    const playlistElement = document.getElementById('playlist');
    const nowPlayingTitle = document.getElementById('nowPlayingTitle');
    const nowPlayingArtist = document.getElementById('nowPlayingArtist');
    const nowPlayingElement = document.getElementById('nowPlaying');
    const progressBar = document.getElementById('progressBar');
    const progressContainer = document.getElementById('progressContainer');
    const currentTimeElement = document.getElementById('currentTime');
    const totalTimeElement = document.getElementById('totalTime');

    // Sidebar & categories
    const playlistSidebar = document.getElementById('playlistSidebar');
    const playlistContent = document.getElementById('playlistContent');
    const sidebarToggleBtn = document.getElementById('sidebarToggleBtn');
    const sidebarOverlay = document.getElementById('sidebarOverlay');

    const bdSong = document.getElementById('bdSong');
    const englishSongs = document.getElementById('englishSongs');
    const nepaliSongs = document.getElementById('nepaliSongs');
    const hindiSongs = document.getElementById('hindiSongs');

    // Playlist data
    const playlist = [
        // English Songs
        {
            title: "Iris",
            artist: "Goo Goo Dolls",
            src: "./Audio/english/Iris.mp3",
            category: "english",
            duration: "0:00"
        },
        {
            title: "Blue",
            artist: "Yung Kai",
            src: "./Audio/english/blue.mp3",
            category: "english",
            duration: "0:00"
        },
        {
            title: "About You",
            artist: "The 1975",
            src: "./Audio/english/About-You.mp3",
            category: "english",
            duration: "0:00"
        },
        {
            title: "Rewrite The Stars",
            artist: "Anne-Marie & James Arthur",
            src: "./Audio/english/Rewrite-the-stars.mp3",
            category: "english",
            duration: "0:00"
        },
        {
            title: "Line Without a Hook",
            artist: "Ricky Montgomery",
            src: "./Audio/english/line-without-a-hook .mp3",
            category: "english",
            duration: "0:00"
        },
        {
            title: "Photograph",
            artist: "Ed Sheeran",
            src: "./Audio/english/photograph.mp3",
            category: "english",
            duration: "0:00"
        },
        {
            title: "Every Breath You Take",
            artist: "The Police",
            src: "./Audio/english/every-breath-you-take.mp3",
            category: "english",
            duration: "0:00"
        },
        {
            title: "Strawberries & Cigarettes",
            artist: "Troye Sivan",
            src: "./Audio/english/strawberrie&cigarettes.mp3",
            category: "english",
            duration: "0:00"
        },
        {
            title: "Last Christmas",
            artist: "WHAM!",
            src: "./Audio/english/last-christmas.mp3",
            category: "english",
            duration: "0:00"
        },
        {
            title: "Treat You Better",
            artist: "Shawn Mendes",
            src: "./Audio/english/treat-you-better.mp3",
            category: "english",
            duration: "0:00"
        },
        {
            title: "A Thousand Years",
            artist: "Christina Perri",
            src: "./Audio/english/a-thousand-years.mp3",
            category: "english",
            duration: "0:00"
        },
        {
            title: "BIRDS OF A FEATHER",
            artist: "Billie Eilish",
            src: "./Audio/english/birds-of-a-feather.mp3",
            category: "english",
            duration: "0:00"
        },

        // Nepali Songs
        {
            title: "Timi nai Hau",
            artist: "Sabin Rai",
            src: "./Audio/nepali/timi-nai hau.mp3",
            category: "nepali",
            duration: "0:00"
        },
        {
            title: "Timi ra Ma",
            artist: "Salin Magar ft Deeya Gurung",
            src: "./Audio/nepali/timi-raa-maa.mp3",
            category: "nepali",
            duration: "0:00"
        },
        {
            title: "Basanta",
            artist: "Jptrockerz",
            src: "./Audio/nepali/Basanta.mp3",
            category: "nepali",
            duration: "0:00"
        },
        {
            title: "Sadhana",
            artist: "John C. Rai",
            src: "./Audio/nepali/Sadhana.mp3",
            category: "nepali",
            duration: "0:00"
        },
        {
            title: "Timi ra Ma",
            artist: "Dixita Karki",
            src: "./Audio/nepali/Timi-Ra-Ma.mp3",
            category: "nepali",
            duration: "0:00"
        },
        {
            title: "Timi Samu",
            artist: "Rodit Bhandari & Somiya Barali",
            src: "./Audio/nepali/Timi-Samu.mp3",
            category: "nepali",
            duration: "0:00"
        },
        {
            title: "Timi Samu (Female Verson)",
            artist: "Somea Baraili",
            src: "./Audio/nepali/timi-samu-female-verison.mp3",
            category: "nepali",
            duration: "0:00"
        },
        {
            title: "Nachaheko Hoina",
            artist: "The Edge Band",
            src: "./Audio/nepali/nachaheko-hoina.mp3",
            category: "nepali",
            duration: "0:00"
        },
        {
            title: "Mutu Dekhin",
            artist: "John C. Rai",
            src: "./Audio/nepali/Mutu-dekhin.mp3",
            category: "nepali",
            duration: "0:00"
        },
        // Hindi Song
        {
            title: "Ishq Di Baajiyaan",
            artist: "Diljit Dosanjh",
            src: "./Audio/hindi/ishq-di-baajiyaan.mp3",
            category: "hindi",
            duration: "0:00"
        },
        {
            title: "Tu Chale",
            artist: "ARIJIT SINGH, SHREYA GHOSHAL",
            src: "./Audio/hindi/tu-chale.mp3",
            category: "hindi",
            duration: "0:00"
        },
        {
            title: "Chaar Kadam",
            artist: "SHAAN, SHREYA GHOSHA",
            src: "./Audio/hindi/chaar-kadam.mp3",
            category: "hindi",
            duration: "0:00"
        },
        {
            title: "Nodivalandava",
            artist: "Armaan Malik, Shreya Ghoshal",
            src: "./Audio/hindi/Nodivalandava.mp3",
            category: "hindi",
            duration: "0:00"
        },
        {
            title: "Tu Jaane Na",
            artist: "Atif Aslam",
            src: "./Audio/hindi/tu-jane-na.mp3",
            category: "hindi",
            duration: "0:00"
        },
        {
            title: "Shukran Allah",
            artist: "Sonu Nigam, Shreya Ghoshal & Salim Merchant ",
            src: "./Audio/hindi/shukran-allah.mp3",
            category: "hindi",
            duration: "0:00"
        },
        {
            title: "Ishq Sufiyana",
            artist: "Kamal Khan",
            src: "./Audio/hindi/ishq-shufiyana.mp3",
            category: "hindi",
            duration: "0:00"
        },
        {
            title: "Pehli Nazar Mein",
            artist: "Atif Aslam",
            src: "./Audio/hindi/pehli-nazar-mein.mp3",
            category: "hindi",
            duration: "0:00"
        },
        {
            title: "Ye Tune Kya Kiya",
            artist: "Javed Bashir",
            src: "./Audio/hindi/ye-tune-kya-kiya.mp3",
            category: "hindi",
            duration: "0:00"
        },
        {
            title: "Khudya Khair",
            artist: "Soham Chakrabarthy, Akruti Kakkar, Monali",
            src: "./Audio/hindi/khudaya-khair.mp3",
            category: "hindi",
            duration: "0:00"
        },
        {
            title: "Naino Ne Baandhi",
            artist: "Yasser Desai",
            src: "./Audio/hindi/naino-ne-baandhi.mp3",
            category: "hindi",
            duration: "0:00"
        },
        {
            title: "Tere Ishq",
            artist: "Monu",
            src: "./Audio/hindi/tere-ishq.mp3",
            category: "hindi",
            duration: "0:00"
        },
        {
            title: "Hona Tha Pyar",
            artist: " Atif Aslam & Hadiqa Kiani",
            src: "./Audio/hindi/hona-tha-pyar.mp3",
            category: "hindi",
            duration: "0:00"
        },
        {
            title: "Humko Pyar Hua",
            artist: "Tulsi Kumar, KK",
            src: "./Audio/hindi/humko-pyar-hua.mp3",
            category: "hindi",
            duration: "0:00"
        },
        {
            title: "Teri Ore",
            artist: "Rahat Fateh Ali Khan & Shreya Ghoshal",
            src: "./Audio/hindi/teri-ore.mp3",
            category: "hindi",
            duration: "0:00"
        },
        {
            title: "Subhanallah",
            artist: "SREERAM, SHILPA RAO",
            src: "./Audio/hindi/subhanallah.mp3",
            category: "hindi",
            duration: "0:00"
        },
        {
            title: "Piya o re piya",
            artist: "Atif Aslam & Shreya Ghoshal",
            src: "./Audio/hindi/piya-o-re-piya.mp3",
            category: "hindi",
            duration: "0:00"
        }
    ];

    let currentSongIndex = parseInt(localStorage.getItem('currentSongIndex')) || 0;
    let isPlaying = false;
    let isSidebarCollapsed = localStorage.getItem('sidebarCollapsed') === 'true';
    const isMobile = window.innerWidth <= 768;

    // ---------- Helper Functions ----------
    function formatTime(seconds) {
        if (isNaN(seconds)) return "0:00";
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    }

    function updateButtons() {
        playPauseIcon.className = `fas ${isPlaying ? 'fa-pause' : 'fa-play'}`;
        // Sync header button
        audioControl.querySelector('i').className = `fas ${isPlaying ? 'fa-pause' : 'fa-play'}`;
    }

    function updateVolumeIcon() {
        if (audio.volume === 0) volumeIcon.className = 'fas fa-volume-mute volume-icon';
        else if (audio.volume < 0.5) volumeIcon.className = 'fas fa-volume-down volume-icon';
        else volumeIcon.className = 'fas fa-volume-up volume-icon';
    }

    function updateNowPlaying() {
        const song = playlist[currentSongIndex];
        nowPlayingTitle.textContent = song.title;
        nowPlayingArtist.textContent = song.artist;
        nowPlayingElement.classList.add('active');

        // Update category highlights
        document.querySelectorAll('.category-song-item').forEach((item, index) => {
            if (index === currentSongIndex) item.classList.add('active');
            else item.classList.remove('active');
        });
    }

    function updateProgress() {
        if (audio.duration) {
            const percent = (audio.currentTime / audio.duration) * 100;
            progressBar.style.width = percent + '%';
            currentTimeElement.textContent = formatTime(audio.currentTime);
            totalTimeElement.textContent = formatTime(audio.duration);
        }
    }

    function setProgress(e) {
        const width = this.clientWidth;
        const clickX = e.offsetX;
        audio.currentTime = (clickX / width) * audio.duration;
    }

    // ---------- Play Functions ----------
    function playSong(index) {
        currentSongIndex = index;
        const song = playlist[currentSongIndex];
        audio.src = song.src;

        const savedTime = parseFloat(localStorage.getItem('currentSongTime')) || 0;
        if (savedTime && parseInt(localStorage.getItem('currentSongIndex')) === index) {
            audio.addEventListener('loadedmetadata', function resume() {
                if (savedTime < audio.duration) audio.currentTime = savedTime;
                audio.removeEventListener('loadedmetadata', resume);
            });
        }

        audio.play().then(() => {
            isPlaying = true;
            renderPlaylist();
            renderCategoryPlaylists();
            updateNowPlaying();
            updateButtons();
        }).catch(err => console.log('Playback error:', err));
    }

    function nextSong() { currentSongIndex = (currentSongIndex + 1) % playlist.length; playSong(currentSongIndex); }
    function prevSong() { currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length; playSong(currentSongIndex); }
    function togglePlayPause() {
        if (!isPlaying) {
            if (audio.src === '') playSong(currentSongIndex);
            else audio.play().then(() => { isPlaying = true; updateButtons(); });
        } else { audio.pause(); isPlaying = false; updateButtons(); }
    }

    // ---------- Render Playlist ----------
    function renderPlaylist() {
        playlistElement.innerHTML = '';
        playlist.forEach((song, index) => {
            const li = document.createElement('li');
            li.className = 'playlist-item';
            if (index === currentSongIndex) li.classList.add('active');
            li.innerHTML = `
                <i class="fas fa-music"></i>
                <div class="song-info">
                    <div class="song-title">${song.title}</div>
                    <div class="song-artist">${song.artist}</div>
                </div>
                <div class="song-duration">${song.duration}</div>
            `;
            li.addEventListener('click', () => playSong(index));
            playlistElement.appendChild(li);
        });
    }

    function renderCategoryPlaylists() {
        if (!bdSong || !englishSongs || !nepaliSongs || !hindiSongs) return;
        bdSong.innerHTML = englishSongs.innerHTML = nepaliSongs.innerHTML = hindiSongs.innerHTML = '';
        playlist.forEach((song, index) => {
            const li = document.createElement('li');
            li.className = 'category-song-item';
            if (index === currentSongIndex) li.classList.add('active');
            li.innerHTML = `<i class="fas fa-music"></i><div class="song-name">${song.title}</div><div class="song-duration">${song.duration}</div>`;
            li.addEventListener('click', () => playSong(index));
            if (song.category === 'birthday') bdSong.appendChild(li);
            else if (song.category === 'english') englishSongs.appendChild(li);
            else if (song.category === 'nepali') nepaliSongs.appendChild(li);
            else if (song.category === 'hindi') hindiSongs.appendChild(li);
        });
    }

    // ---------- Sidebar Toggle ----------
    function toggleSidebar() {
        if (isMobile) {
            playlistSidebar.classList.toggle('active');
            sidebarOverlay.classList.toggle('active');
            document.body.style.overflow = playlistSidebar.classList.contains('active') ? 'hidden' : '';
        } else {
            isSidebarCollapsed = !isSidebarCollapsed;
            localStorage.setItem('sidebarCollapsed', isSidebarCollapsed);
            if (isSidebarCollapsed) {
                playlistSidebar.classList.add('collapsed');
                playlistContent.classList.add('expanded');
                sidebarToggleBtn.classList.add('collapsed');
                sidebarToggleBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
            } else {
                playlistSidebar.classList.remove('collapsed');
                playlistContent.classList.remove('expanded');
                sidebarToggleBtn.classList.remove('collapsed');
                sidebarToggleBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
            }
        }
    }

    // ---------- Load Audio Durations ----------
    function getAudioDuration(url, index) {
        return new Promise(resolve => {
            const a = new Audio(url);
            a.addEventListener('loadedmetadata', () => resolve({ index, duration: formatTime(a.duration) }));
            a.addEventListener('error', () => resolve({ index, duration: '0:00' }));
            setTimeout(() => resolve({ index, duration: '0:00' }), 10000);
        });
    }

    async function loadAudioDurations() {
        const promises = playlist.map((s, i) => getAudioDuration(s.src, i));
        const results = await Promise.all(promises);
        results.forEach(r => playlist[r.index].duration = r.duration);
        renderPlaylist();
        renderCategoryPlaylists();
    }

    // ---------- Event Listeners ----------
    playPauseBtn.addEventListener('click', togglePlayPause);
    audioControl.addEventListener('click', togglePlayPause);
    prevBtn.addEventListener('click', prevSong);
    nextBtn.addEventListener('click', nextSong);
    sidebarToggleBtn.addEventListener('click', toggleSidebar);
    sidebarOverlay.addEventListener('click', toggleSidebar);
    audio.addEventListener('timeupdate', () => {
        updateProgress();
        localStorage.setItem('currentSongTime', audio.currentTime);
        localStorage.setItem('currentSongIndex', currentSongIndex);
    });
    audio.addEventListener('ended', nextSong);
    audio.addEventListener('loadedmetadata', () => totalTimeElement.textContent = formatTime(audio.duration));
    volumeSlider.addEventListener('input', () => { audio.volume = volumeSlider.value; localStorage.setItem('volume', volumeSlider.value); updateVolumeIcon(); });
    progressContainer.addEventListener('click', setProgress);

    // ---------- Initialize ----------
    audio.volume = parseFloat(localStorage.getItem('volume')) || 0.7;
    volumeSlider.value = audio.volume;
    updateVolumeIcon();

    if (!isMobile && isSidebarCollapsed) {
        playlistSidebar.classList.add('collapsed');
        playlistContent.classList.add('expanded');
        sidebarToggleBtn.classList.add('collapsed');
        sidebarToggleBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
    }

    renderPlaylist();
    renderCategoryPlaylists();
    loadAudioDurations();

    // Restore saved song and time
    const savedIndex = parseInt(localStorage.getItem('currentSongIndex'));
    const savedTime = parseFloat(localStorage.getItem('currentSongTime')) || 0;
    if (savedIndex >= 0 && savedIndex < playlist.length) {
        currentSongIndex = savedIndex;
        audio.src = playlist[currentSongIndex].src;
        audio.currentTime = savedTime;
        updateNowPlaying();
        updateButtons();
        renderPlaylist();
        renderCategoryPlaylists();
        // Autoplay if it was playing before
        if (localStorage.getItem('isPlaying') === 'true') {
            audio.play().then(() => { isPlaying = true; updateButtons(); }).catch(() => { });
        }
    }
});

