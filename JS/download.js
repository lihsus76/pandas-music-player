

 // Playlist data
    const playlist = [
        // // Birthday Song
        // {
        //     title: "Happy Birthday piano",
        //     artist: "",
        //     src: "./Audio/BD-Song.mp3",
        //     category: "birthday",
        //     duration: "0:00"
        // },

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

document.addEventListener('DOMContentLoaded', () => {
    const downloadBtn = document.getElementById('downloadAllBtn');
    const toast = document.getElementById('downloadToast');
    const toastOverlay = document.getElementById('toastOverlay');
    const songListDiv = document.getElementById('songList');
    const downloadSelectedBtn = document.getElementById('downloadSelectedBtn');
    const closeBtn = document.getElementById('closeToast');
    const selectAllCheckbox = document.getElementById('selectAllCheckbox');

    // Populate song checkboxes
    playlist.forEach((song, index) => {
        const label = document.createElement('label');
        label.className = 'checkbox-container';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.dataset.index = index;

        const checkmark = document.createElement('span');
        checkmark.className = 'checkmark';

        const labelText = document.createElement('span');
        labelText.className = 'label-text';
        labelText.textContent = `${song.title} - ${song.artist}`;

        label.appendChild(checkbox);
        label.appendChild(checkmark);
        label.appendChild(labelText);
        songListDiv.appendChild(label);
    });

    // Show toast
    downloadBtn.addEventListener('click', () => {
        toast.classList.add('active');
        if (toastOverlay) toastOverlay.classList.add('active');
        updateDownloadButton();
    });

    // Close toast
    function closeToast() {
        toast.classList.remove('active');
        if (toastOverlay) toastOverlay.classList.remove('active');
    }
    closeBtn.addEventListener('click', closeToast);
    if (toastOverlay) toastOverlay.addEventListener('click', closeToast);

    // Select All functionality
    selectAllCheckbox.addEventListener('change', () => {
        const songCheckboxes = songListDiv.querySelectorAll('input[type=checkbox]');
        songCheckboxes.forEach(cb => cb.checked = selectAllCheckbox.checked);
        updateDownloadButton();
    });

    // Update download button
    function updateDownloadButton() {
        const selectedCount = songListDiv.querySelectorAll('input[type=checkbox]:checked').length;
        downloadSelectedBtn.disabled = selectedCount === 0;
        downloadSelectedBtn.innerHTML = `<i class="fas fa-download"></i> Download Selected (${selectedCount})`;
    }

    // Update select all checkbox state
    songListDiv.addEventListener('change', (e) => {
        if (e.target.type === 'checkbox') {
            const total = songListDiv.querySelectorAll('input[type=checkbox]').length;
            const checked = songListDiv.querySelectorAll('input[type=checkbox]:checked').length;
            selectAllCheckbox.checked = checked === total;
            selectAllCheckbox.indeterminate = checked > 0 && checked < total;
            updateDownloadButton();
        }
    });

    // Download selected songs
    downloadSelectedBtn.addEventListener('click', () => {
        const selectedIndexes = Array.from(songListDiv.querySelectorAll('input[type=checkbox]:checked'))
            .map(cb => parseInt(cb.dataset.index));
        selectedIndexes.forEach(i => downloadSong(playlist[i]));
        closeToast();
    });

    // Function to download a song without leaving page
    function downloadSong(song) {
        fetch(song.src)
            .then(resp => resp.blob())
            .then(blob => {
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = song.title + ".mp3";
                document.body.appendChild(a);
                a.click();
                a.remove();
                window.URL.revokeObjectURL(url);
            })
            .catch(err => console.error("Download failed:", err));
    }
});
