
    /* ============================================================
           WORK SECTION
           ============================================================ */
    const ic = (c) => `<i class="fa-solid fa-${c}"></i>`;

    const FOLDERS = [
        { id: 'all', name: 'All Projects', icon: ic('folder-open'), color: '#c9a53a', badge: 12, dockIcon: ic(
                'folder-open') },
        { id: 'website', name: 'Web Sites', icon: ic('earth'), color: '#0ea5e9', badge: 6, dockIcon: ic('earth') },
        { id: 'webapp', name: 'Web Apps', icon: ic('globe'), color: '#2ecc71', badge: 1, dockIcon: ic('globe') },
        { id: 'desktop', name: 'Desktop Apps', icon: ic('desktop'), color: '#3a6bd6', badge: 4, dockIcon: ic('desktop') },
        { id: 'mpss', name: 'MPSS', icon: ic('layer-group'), color: '#8b5cf6', badge: 1, dockIcon: ic('layer-group') },
    ];

    const PROJECTS = [
        { title: 'CinePulse — Movies & TV Shows', client: 'CinePulse', year: 2026, cat: 'website', color: '#e50914',
            icon: ic('film'), url: 'https://momayne10-ship-it.github.io/-CinePulse/',
            image: 'https://image.thum.io/get/width/400/crop/600/https://momayne10-ship-it.github.io/-CinePulse/' },
        { title: 'Golden Taste — مطعم فاخر', client: 'Golden Taste', year: 2026, cat: 'website', color: '#d4a017',
            icon: ic('utensils'), url: 'https://momayne10-ship-it.github.io/Golden-Taste/',
            image: 'https://image.thum.io/get/width/400/crop/600/https://momayne10-ship-it.github.io/Golden-Taste/' },
        { title: 'Sweet Delight — حلويات فاخرة', client: 'Sweet Delight', year: 2026, cat: 'website', color: '#e91e8c',
            icon: ic('cake-candles'), url: 'https://momayne10-ship-it.github.io/Sweet-Delight/',
            image: 'https://image.thum.io/get/width/400/crop/600/https://momayne10-ship-it.github.io/Sweet-Delight/' },
        { title: 'Black Brew — Specialty Coffee', client: 'Specialty Coffee', year: 2026, cat: 'website', color: '#3d2314',
            icon: ic('mug-hot'), url: 'https://momayne10-ship-it.github.io/Specialty-Coffee/',
            image: 'https://image.thum.io/get/width/400/crop/600/https://momayne10-ship-it.github.io/Specialty-Coffee/' },
        { title: 'Muse — Women\'s Fashion', client: 'Muse', year: 2026, cat: 'website', color: '#c41e3a',
            icon: ic('shirt'), url: 'https://momayne10-ship-it.github.io/Muse/',
            image: 'https://image.thum.io/get/width/400/crop/600/https://momayne10-ship-it.github.io/Muse/' },
        { title: 'MediSys — نظام إدارة العيادات', client: 'MediSys', year: 2026, cat: 'mpss', color: '#10b981',
            icon: ic('hospital'), url: 'https://momayne10-ship-it.github.io/MediSys/',
            image: 'https://image.thum.io/get/width/400/crop/600/https://momayne10-ship-it.github.io/MediSys/' },
        { title: 'Ain Lexicon — معجم العين', client: 'Ain Lexicon', year: 2026, cat: 'webapp', color: '#2ecc71',
            icon: ic('book-open'), url: 'https://momayne10-ship-it.github.io/Ain-Lexicon/',
            image: 'https://image.thum.io/get/width/400/crop/600/https://momayne10-ship-it.github.io/Ain-Lexicon/' },
        { title: 'Medisys — Medical System', client: 'Medisys', year: 2025, cat: 'desktop', color: '#1a8a6a',
            icon: ic('laptop-medical'),
            image: 'MD1.png',
            gallery: ['MD1.png','MD2.png','MD3.png','MD4.png','MD5.png','MD6.png','MD7.png'] },
        { title: 'Dar Al Oud — Perfume Store', client: 'Dar Al Oud', year: 2025, cat: 'desktop', color: '#c49a3a',
            icon: ic('bottle-droplet'),
            image: 'DO1.png',
            gallery: ['DO1.png','DO2.png','DO3.png','DO4.png','DO5.png','DO6.png','DO7.png'] },
        { title: 'Glasses Outlet — Eyewear Store', client: 'Glasses Outlet', year: 2025, cat: 'desktop', color: '#4a7ad6',
            icon: ic('glasses'),
            image: 'GO1.png',
            gallery: ['GO1.png','GO2.png','GO3.png','GO4.png','GO5.png','GO6.png'] },
        { title: 'Nursery Rhymes — Kids Garden', client: 'Nursery Rhymes', year: 2025, cat: 'desktop', color: '#e06a9a',
            icon: ic('children'),
            image: 'NR1.png',
            gallery: ['NR1.png','NR2.png','NR3.png','NR4.png','NR5.png','NR6.png','NR7.png'] },
        { title: 'Astronomia Luxe — 3D Luxury Watch', client: 'Astronomia Luxe', year: 2026, cat: 'website', color: '#C9A05C',
            icon: ic('clock'), url: 'https://astronomia-luxe-kohl.vercel.app/',
            image: 'astronomia-preview.png' },
    ];

    let currentCat = 'all';
    let viewMode = 'grid';

    const iconGrid = document.getElementById('icon-grid');
    const fwSidebar = document.getElementById('fw-sidebar');
    const fwGrid = document.getElementById('fw-grid');
    const finderWindow = document.getElementById('finder-window');
    const desktopLayer = document.getElementById('desktop-layer');
    const mbBrand = document.getElementById('mb-brand');
    const dock = document.getElementById('dock');

    function projectsFor(cat) {
        return cat === 'all' ? PROJECTS : PROJECTS.filter(p => p.cat === cat);
    }

    FOLDERS.forEach(f => {
        const el = document.createElement('div');
        el.className = 'desk-folder';
        el.innerHTML = `
                <div class="ficon" style="background:${f.color}">${f.icon}${f.badge ? `<span class="fbadge">${f.badge}</span>` : ''}</div>
                <div class="fname">${f.name.toUpperCase()}</div>`;
        el.addEventListener('click', () => openFinder(f.id, el));
        iconGrid.appendChild(el);
    });

    FOLDERS.forEach(f => {
        const el = document.createElement('div');
        el.className = 'dock-icon';
        el.dataset.cat = f.id;
        el.title = f.name;
        el.innerHTML = f.dockIcon;
        el.addEventListener('click', () => {
            if (finderWindow.classList.contains('open') && currentCat === f.id) {
                closeFinder();
            } else if (finderWindow.classList.contains('open')) {
                switchFolder(f.id);
                updateDockActive();
            } else {
                openFinder(f.id, el);
                updateDockActive();
            }
        });
        dock.appendChild(el);
    });

    function updateDockActive() {
        document.querySelectorAll('.dock-icon').forEach(d => {
            d.classList.toggle('active', finderWindow.classList.contains('open') && d.dataset.cat === currentCat);
        });
    }

    fwSidebar.insertAdjacentHTML('afterbegin', `<div class="fw-sidebar-label">Folders</div>`);
    FOLDERS.forEach(f => {
        const el = document.createElement('div');
        el.className = 'fw-side-item' + (f.id === 'all' ? ' active' : '');
        el.dataset.cat = f.id;
        el.innerHTML =
            `<span class="sic">${f.icon}</span><span>${f.name}</span><span class="scount">${f.badge}</span>`;
        el.addEventListener('click', () => { switchFolder(f.id);
            updateDockActive(); });
        fwSidebar.appendChild(el);
    });

    function renderGrid(cat) {
        fwGrid.innerHTML = '';
        const list = projectsFor(cat);
        list.forEach((p, i) => {
            const c = document.createElement('div');
            c.className = 'card';
            c.style.animationDelay = (i * 35) + 'ms';
            c.innerHTML = `
                    <div class="thumb" style="background-image:url('${p.image}')">
                        <span class="cat-badge" style="color:${p.color}">${p.icon}</span>
                        ${p.url ? '<div class="link-badge"><i class="fa-solid fa-arrow-up-right-from-square"></i></div>' : ''}
                        ${p.video ? '<div class="play">▶</div>' : ''}
                    </div>
                    <div class="meta">
                        <div class="ctitle">${p.title}</div>
                        <div class="csub">${p.client} · ${p.year}</div>
                    </div>`;
            c.addEventListener('contextmenu', e => { e.preventDefault();
                openContextMenu(e, p); });
            if (p.url) {
                c.addEventListener('click', () => window.open(p.url, '_blank'));
            } else {
                c.addEventListener('click', () => openLightbox(p));
            }
            fwGrid.appendChild(c);
        });
    }

    function switchFolder(cat) {
        if (cat === currentCat) return;
        currentCat = cat;
        const f = FOLDERS.find(x => x.id === cat);

        document.querySelectorAll('.fw-side-item').forEach(x => x.classList.toggle('active', x.dataset.cat === cat));

        const spinner = document.getElementById('fw-spinner');
        spinner.classList.add('show');
        fwGrid.classList.add('loading');

        setTimeout(() => {
            renderGrid(cat);
            document.getElementById('fw-title-icon').innerHTML = f.icon;
            document.getElementById('fw-title-text').textContent = f.name;
            document.getElementById('crumb-icon').innerHTML = f.icon;
            document.getElementById('crumb-name').textContent = f.name;
            const n = projectsFor(cat).length;
            document.getElementById('crumb-count').textContent = `— ${n} item${n !== 1 ? 's' : ''}`;
            document.getElementById('status-count').textContent = `${n} item${n !== 1 ? 's' : ''}`;
            document.getElementById('status-crumb').textContent = `■ ${f.name}`;
            mbBrand.innerHTML = `<span class="crumb">Portfolio /</span> ${f.name}`;
            spinner.classList.remove('show');
            fwGrid.classList.remove('loading');
            closeContextMenu();
            updateDockActive();
        }, 260);
    }

    function openFinder(cat, iconEl) {
        const stage = document.getElementById('stage');
        const stageRect = stage.getBoundingClientRect();
        const iconRect = iconEl.getBoundingClientRect();
        const ox = ((iconRect.left + iconRect.width / 2) - stageRect.left) / stageRect.width * 100;
        const oy = ((iconRect.top + iconRect.height / 2) - stageRect.top) / stageRect.height * 100;
        finderWindow.style.transformOrigin = `${ox}% ${oy}%`;
        desktopLayer.classList.add('dimmed');
        finderWindow.classList.add('open');
        currentCat = null;
        switchFolder(cat);

        setTimeout(() => {
            Swal.fire({
                title: 'Dear Visitor',
                html: '<p style="font-family:Amiri,serif;font-size:15px;line-height:1.8;color:#ccc;">This section is under development.<br>You\'re seeing only a small portion of my work.<br>For more details about additional projects,<br>please feel free to <b style="color:#10b981;">contact me</b>.</p>',
                icon: 'info',
                iconColor: '#4d7fff',
                showCancelButton: true,
                confirmButtonText: 'Browse Projects',
                cancelButtonText: 'Close',
                confirmButtonColor: '#10b981',
                cancelButtonColor: '#555',
                background: '#18181c',
                color: '#f2f2f4',
                customClass: {
                    popup: 'swal-custom-popup',
                    title: 'swal-custom-title',
                    confirmButton: 'swal-custom-btn',
                    cancelButton: 'swal-custom-cancel'
                }
            });
        }, 600);
    }

    function closeFinder() {
        finderWindow.classList.remove('open');
        desktopLayer.classList.remove('dimmed');
        mbBrand.innerHTML = `<span class="crumb">Portfolio /</span> Work`;
        closeContextMenu();
        updateDockActive();
    }
    document.getElementById('fw-close').addEventListener('click', closeFinder);

    document.getElementById('view-grid').addEventListener('click', () => {
        viewMode = 'grid';
        fwGrid.classList.remove('list');
        document.getElementById('view-grid').classList.add('active');
        document.getElementById('view-list').classList.remove('active');
    });
    document.getElementById('view-list').addEventListener('click', () => {
        viewMode = 'list';
        fwGrid.classList.add('list');
        document.getElementById('view-list').classList.add('active');
        document.getElementById('view-grid').classList.remove('active');
    });

    const ctxMenu = document.getElementById('ctx-menu');

    function openContextMenu(e, project, centered) {
        e.preventDefault && e.preventDefault();
        const bodyRect = document.querySelector('.fw-body').getBoundingClientRect();
        let x, y;
        if (centered) {
            const r = e.currentTarget.getBoundingClientRect();
            x = r.left - bodyRect.left + r.width / 2 - 100;
            y = r.top - bodyRect.top + 20;
        } else {
            x = e.clientX - bodyRect.left;
            y = e.clientY - bodyRect.top;
        }
        x = Math.max(6, Math.min(x, bodyRect.width - 216));
        y = Math.max(6, Math.min(y, bodyRect.height - 140));
        ctxMenu.style.left = x + 'px';
        ctxMenu.style.top = y + 'px';
        ctxMenu.innerHTML = `
                <div class="ctx-head">
                    <div class="cthumb" style="background-image:url('${project.image}')"></div>
                    <div class="cinfo"><div class="n">${project.title}</div></div>
                </div>
                <div class="ctx-item" data-a="preview"><i class="fa-solid fa-play"></i> Preview</div>
                ${project.url ? `<div class="ctx-item" data-a="open"><i class="fa-solid fa-arrow-up-right-from-square"></i> Go to project</div>` : ''}
                <div class="ctx-sep"></div>
                <div class="ctx-item danger" data-a="close"><i class="fa-solid fa-xmark"></i> Close</div>`;
        ctxMenu.classList.add('show');
        ctxMenu.querySelectorAll('.ctx-item').forEach(it => it.addEventListener('click', () => {
            const action = it.dataset.a;
            closeContextMenu();
            if (action === 'preview') {
                if (project.url) window.open(project.url, '_blank');
                else openLightbox(project);
            }
            if (action === 'open' && project.url) window.open(project.url, '_blank');
        }));
    }

    function closeContextMenu() { ctxMenu.classList.remove('show'); }
    document.addEventListener('click', e => {
        if (!ctxMenu.contains(e.target) && !e.target.closest('.card')) closeContextMenu();
    });
    document.addEventListener('scroll', closeContextMenu, true);

    /* ============================================================
       IMAGE LIGHTBOX
       ============================================================ */
    const lightboxOverlay = document.getElementById('lightbox-overlay');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxCounter = document.getElementById('lightbox-counter');
    let lightboxGallery = [];
    let lightboxIndex = 0;
    let currentProject = null;

    function openLightbox(project) {
        currentProject = project;
        lightboxGallery = project.gallery || [project.image];
        lightboxIndex = 0;
        updateLightbox();
        lightboxOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function updateLightbox() {
        const src = lightboxGallery[lightboxIndex];
        lightboxImg.src = src;
        lightboxCaption.textContent = currentProject ? currentProject.title : '';
        lightboxCounter.textContent = lightboxGallery.length > 1
            ? `${lightboxIndex + 1} / ${lightboxGallery.length}`
            : '';
    }

    function closeLightbox() {
        lightboxOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    function lightboxNav(dir) {
        lightboxIndex = (lightboxIndex + dir + lightboxGallery.length) % lightboxGallery.length;
        updateLightbox();
    }

    document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
    document.getElementById('lightbox-prev').addEventListener('click', () => lightboxNav(-1));
    document.getElementById('lightbox-next').addEventListener('click', () => lightboxNav(1));
    lightboxOverlay.addEventListener('click', e => {
        if (e.target === lightboxOverlay) closeLightbox();
    });
    document.addEventListener('keydown', e => {
        if (!lightboxOverlay.classList.contains('active')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') lightboxNav(-1);
        if (e.key === 'ArrowRight') lightboxNav(1);
    });

    renderGrid('all');

    function tick() {
        const d = new Date();
        const label = d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
        document.querySelectorAll('.clock').forEach(el => el.textContent = label);
    }
    tick();
    setInterval(tick, 15000);

    /* ============================================================
           MESSAGES SECTION
           ============================================================ */
const conversations = [
{
    name: 'Nabil Saouchi',
    initials: 'N',
    color: '#2f5c46',
    platform: 'WhatsApp',
    pcolor: '#3fce6a',
    time: '2:14 PM',
    preview: 'Bro, I’m honestly impressed with the website...',
    messages: [
        { who: 'them', text: "Hey Moumen, bro I'm honestly impressed. The website turned out even better than I imagined." },
        { who: 'me', text: "Thank you so much! I'm really happy to hear that." },
        { who: 'them', text: "The UI feels premium, it's incredibly smooth, and everything loads fast." },
        { who: 'me', text: "I spent a lot of time optimizing every detail for the best experience." },
        { who: 'them', text: "You absolutely nailed it. I'll definitely recommend you to anyone looking for a developer." }
    ]
},
{
    name: 'Mariam',
    initials: 'M',
    color: '#5c2f4a',
    platform: 'Instagram DM',
    pcolor: '#e05a86',
    time: '2:18 PM',
    preview: 'I honestly didn’t expect it to look this good...',
    messages: [
        { who: 'them', text: "Hi Moumen! I honestly didn't expect the final result to look this good." },
        { who: 'me', text: "That truly means a lot to me. Thank you!" },
        { who: 'them', text: "Everything feels modern, elegant, and very professional." },
        { who: 'me', text: "I'm glad you noticed the small details. They make a huge difference." },
        { who: 'them', text: "Thank you so much for your hard work. It exceeded all my expectations." }
    ]
},
{
    name: 'Brahim RDX',
    initials: 'B',
    color: '#2b4f7a',
    platform: 'Telegram',
    pcolor: '#3ea8e0',
    time: '2:21 PM',
    preview: 'Bro... this is on another level 🔥',
    messages: [
        { who: 'them', text: "Bro... this is on another level 🔥 I seriously don't know what to say." },
        { who: 'me', text: "😂 I'm really glad you liked it, bro." },
        { who: 'them', text: "The animations, the colors, the overall experience... everything feels world-class." },
        { who: 'me', text: "That was exactly the goal. I wanted it to feel unique." },
        { who: 'them', text: "Mission accomplished! This is easily one of the best portfolio websites I've seen." }
    ]
},
{
    name: 'Ilyes OX',
    initials: 'I',
    color: '#3a3a68',
    platform: 'Discord',
    pcolor: '#8b7bf0',
    time: '2:24 PM',
    preview: 'Amazing work, Moumen!',
    messages: [
        { who: 'them', text: "Amazing work, Moumen! Thank you so much for everything." },
        { who: 'me', text: "You're very welcome! It was a pleasure working with you." },
        { who: 'them', text: "Your communication was excellent from start to finish, and the quality is outstanding." },
        { who: 'me', text: "I always try to deliver the best possible experience." },
        { who: 'them', text: "Keep doing what you're doing. You're going to build an incredible reputation." }
    ]
}
];

    const msgList = document.getElementById('msg-list');
    const threadBody = document.getElementById('thread-body');
    const liveBadge = document.getElementById('live-badge');
    const threadInput = document.getElementById('thread-input');
    const sendBtn = document.getElementById('thread-send');
    document.getElementById('inbox-count').textContent = `Inbox — ${conversations.length} conversations`;

    let autoplayOn = true;
    let autoplayGen = 0;
    let currentConvIndex = 0;

    const sleep = ms => new Promise(r => setTimeout(r, ms));

    function setThreadHead(conv) {
        document.getElementById('thread-avatar').textContent = conv.initials;
        document.getElementById('thread-avatar').style.background = conv.color;
        document.getElementById('thread-name').textContent = conv.name;
        document.getElementById('thread-sub').textContent = `via ${conv.platform}`;
    }

    function highlightActive(idx) {
        document.querySelectorAll('.msg-item').forEach((x, i) => x.classList.toggle('active', i === idx));
    }

    function updateLiveBadge() {
        if (autoplayOn) {
            liveBadge.innerHTML = '<span class="live-dot"></span> Auto-playing';
            liveBadge.classList.remove('manual');
        } else {
            liveBadge.innerHTML = '<i class="fa-solid fa-hand-pointer"></i> Manual — click to resume';
            liveBadge.classList.add('manual');
        }
    }

    async function composeAndSend(who, text, gen) {
        if (gen !== autoplayGen) return false;

        if (who === 'me') {
            threadInput.classList.add('typing-sim');
            threadInput.value = '';
            for (let i = 0; i < text.length; i++) {
                if (gen !== autoplayGen) { threadInput.classList.remove('typing-sim'); return false; }
                threadInput.value += text[i];
                await sleep(18 + Math.random() * 28);
            }
            await sleep(400);
            if (gen !== autoplayGen) { threadInput.classList.remove('typing-sim'); return false; }
            sendBtn.classList.add('sending');
            await sleep(180);
            threadInput.value = '';
            threadInput.classList.remove('typing-sim');
            sendBtn.classList.remove('sending');
        } else {
            const typing = document.createElement('div');
            typing.className = 'typing';
            typing.innerHTML = '<span></span><span></span><span></span>';
            threadBody.appendChild(typing);
            threadBody.scrollTop = threadBody.scrollHeight;
            await sleep(850 + Math.random() * 450);
            if (gen !== autoplayGen) { typing.remove(); return false; }
            typing.remove();
        }

        if (gen !== autoplayGen) return false;
        const bubble = document.createElement('div');
        bubble.className = 'bubble ' + who;
        bubble.textContent = text;
        bubble.style.opacity = '0';
        bubble.style.transition = 'opacity .25s ease';
        threadBody.appendChild(bubble);
        threadBody.scrollTop = threadBody.scrollHeight;
        requestAnimationFrame(() => bubble.style.opacity = '1');
        return true;
    }

    async function playConversation(idx, gen) {
        if (gen !== autoplayGen) return;
        currentConvIndex = idx;
        const conv = conversations[idx];
        highlightActive(idx);
        setThreadHead(conv);
        threadBody.innerHTML = '';
        threadInput.value = '';

        for (const m of conv.messages) {
            if (gen !== autoplayGen) return;
            const sent = await composeAndSend(m.who, m.text, gen);
            if (!sent) return;
            await sleep(750);
        }

        if (gen !== autoplayGen) return;
        await sleep(3000);
        if (gen !== autoplayGen || !autoplayOn) return;
        const nextIdx = (idx + 1) % conversations.length;
        playConversation(nextIdx, gen);
    }

    function startAutoplay(fromIndex) {
        autoplayOn = true;
        autoplayGen++;
        updateLiveBadge();
        playConversation(fromIndex, autoplayGen);
    }

    conversations.forEach((c, i) => {
        const el = document.createElement('div');
        el.className = 'msg-item';
        el.innerHTML = `
                <div class="avatar" style="background:${c.color}">${c.initials}</div>
                <div class="msg-item-body">
                    <div class="msg-item-top"><span class="name">${c.name}</span><span class="time">${c.time}</span></div>
                    <div class="msg-item-preview">${c.preview}</div>
                    <span class="platform-tag" style="background:color-mix(in srgb, ${c.pcolor} 18%, transparent); color:${c.pcolor}">${c.platform.toUpperCase()}</span>
                </div>`;
        el.addEventListener('click', () => {
            autoplayGen++;
            autoplayOn = true;
            updateLiveBadge();
            playConversation(i, autoplayGen);
            highlightActive(i);
        });
        msgList.appendChild(el);
    });

    startAutoplay(0);

    function sendMessage() {
        const val = threadInput.value.trim();
        if (!val) return;
        autoplayOn = false;
        autoplayGen++;
        updateLiveBadge();

        sendBtn.classList.add('sending');
        setTimeout(() => sendBtn.classList.remove('sending'), 180);

        const bubble = document.createElement('div');
        bubble.className = 'bubble me';
        bubble.textContent = val;
        threadBody.appendChild(bubble);
        threadInput.value = '';
        threadBody.scrollTop = threadBody.scrollHeight;

        setTimeout(() => {
            const typing = document.createElement('div');
            typing.className = 'typing';
            typing.innerHTML = '<span></span><span></span><span></span>';
            threadBody.appendChild(typing);
            threadBody.scrollTop = threadBody.scrollHeight;

            setTimeout(() => {
                typing.remove();
                const reply = document.createElement('div');
                reply.className = 'bubble them';
                reply.textContent = 'Got it — I\'ll take a look and get back to you shortly.';
                threadBody.appendChild(reply);
                threadBody.scrollTop = threadBody.scrollHeight;
            }, 1200);
        }, 300);
    }

    sendBtn.addEventListener('click', sendMessage);
    threadInput.addEventListener('keydown', e => { if (e.key === 'Enter') sendMessage(); });

    liveBadge.addEventListener('click', () => {
        if (!autoplayOn) {
            startAutoplay(currentConvIndex);
        }
    });

    document.querySelectorAll('.drag-handle').forEach(bar => {
        const win = bar.closest('.msg-window');
        let dragging = false,
            tx = 0,
            ty = 0;
        bar.addEventListener('mousedown', () => { dragging = true; });
        document.addEventListener('mousemove', e => {
            if (!dragging) return;
            tx += e.movementX;
            ty += e.movementY;
            ty = Math.max(-20, Math.min(20, ty));
            tx = Math.max(-40, Math.min(40, tx));
            win.style.transform = `translate(${tx}px, ${ty}px)`;
        });
        document.addEventListener('mouseup', () => dragging = false);
    });

    /* ============================================================
           JOURNEY SCROLL ACTIVATION
           ============================================================ */
    (function() {
        const journeySteps = document.querySelectorAll('#software-timeline .journey-step');
        if (!journeySteps.length) return;

        function activateStepsOnScroll() {
            const windowHeight = window.innerHeight;
            const threshold = window.innerWidth <= 768 ? 0.9 : 0.75;
            journeySteps.forEach((step, index) => {
                const stepTop = step.getBoundingClientRect().top;
                if (stepTop < windowHeight * threshold) {
                    setTimeout(() => step.classList.add('active'), index * 150);
                }
            });
        }
        window.addEventListener('scroll', activateStepsOnScroll, { passive: true });
        setTimeout(activateStepsOnScroll, 300);
    })();
   
    /* ============================================================
       GMAYNE AI — AI ASSISTANT (Premium Experience)
       ============================================================ */
    (function() {
        'use strict';
        var root = document.getElementById('gm-assistant');
        if (!root) return;

        var fab = root.querySelector('.gm-fab');
        var panel = root.querySelector('.gm-panel');
        var body = root.querySelector('.gm-body');
        var input = root.querySelector('.gm-input');
        var sendBtn = root.querySelector('.gm-send');
        var closeBtn = root.querySelector('[data-gm-close]');
        var resetBtn = root.querySelector('[data-gm-reset]');

        var open = false;
        var busy = false;
        var welcomeShown = false;
        var memory = { lastIntent: null, history: [] };
        var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        var WELCOME =
            "Hello 👋\n\nI'm **Gmayne AI** — his personal assistant. I can answer anything about **experience, projects, services, technologies, education, certifications, pricing, availability, and AI solutions**.\n\nFeel free to ask me anything 👇";

        var SUGGEST = [
            'Tell me about yourself',
            'Show your projects',
            'What services do you provide?',
            'What technologies do you use?',
            'Can you build my project?',
            'How can I contact you?'
        ];

        /* ================= knowledge base ================= */
        var PROJECTS_KB = {
            'rawlearn': "**RawLearn** — English School Branding (2024). A complete brand identity for an English learning school: logo, colour system, and a visual language that feels modern and trustworthy.",
            'upower': "**Upower** — App UI Design (2025). A modern, conversion-focused mobile app interface designed to feel premium and effortless to use.",
            'accentflow': "**AccentFlow** — Mobile App UI Design (2025). Clean, refined app screens with a strong focus on clarity and user flow.",
            'midi': "**MIDI Group** — Brand Identity (2024). A distinctive, memorable identity system built to give the brand real presence.",
            'naila': "**Naila Hospital** — Social Media Design (2025). Professional, trustworthy social visuals for a healthcare brand — produced twice for different campaigns.",
            'alanoud': "**Alanoud Beauty** — Skincare Brand (2024). A soft, premium identity for a beauty brand — elegant and retail-ready.",
            'jannah': "**Jannah Modesty** — Brand Identity (2024). An elegant identity for a fashion label that balances tradition with a clean, modern look.",
            'fitlife': "**FitLife** — Fitness App UI (2025). An energetic, motivating mobile interface designed to engage users.",
            'fitness': "**FitLife** — Fitness App UI (2025). An energetic, motivating mobile interface designed to engage users.",
            'amin': "**Amin Owais** — YouTube edits (Vol. 1 & Vol. 2, 2025). Full video editing for the creator: pacing, cuts, and retention-focused storytelling.",
            'owais': "**Amin Owais** — YouTube edits (Vol. 1 & Vol. 2, 2025). Full video editing for the creator: pacing, cuts, and retention-focused storytelling.",
            'thumbnail': "**YouTube Thumbnail Design** (2024) — click-optimised thumbnails for various creators, built to boost CTR.",
            'creative agency': "**Creative Agency Branding** — a full brand package for Studio X (2025).",
            'hamza': "**Edit English** — an editing project for client Hamza (2025).",
            'cinepulse': "**CinePulse** — Movies & TV Shows (2026). A feature-rich platform for browsing movies and TV shows with a dark, cinematic UI. [Live](https://momayne10-ship-it.github.io/-CinePulse/)",
            'golden taste': "**Golden Taste** — Luxury Restaurant Website (2026). A premium restaurant site with an elegant, golden-themed design. [Live](https://momayne10-ship-it.github.io/Golden-Taste/)",
            'sweet delight': "**Sweet Delight** — Bakery Website (2026). A warm, inviting bakery site with a pink-accented design. [Live](https://momayne10-ship-it.github.io/Sweet-Delight/)",
            'black brew': "**Black Brew** — Specialty Coffee Website (2026). A bold, dark coffee site with a premium artisanal feel. [Live](https://momayne10-ship-it.github.io/Specialty-Coffee/)",
            'specialty coffee': "**Black Brew** — Specialty Coffee Website (2026). A bold, dark coffee site with a premium artisanal feel. [Live](https://momayne10-ship-it.github.io/Specialty-Coffee/)",
            'medisys': "**MediSys** — Hospital Management System (MPSS). A cross-platform hospital management desktop app built with Python.",
            'ain lexicon': "**Ain Lexicon** — English-Arabic Dictionary (Web App). An interactive dictionary web app with search, word definitions, and translation features."
        };

        var intents = [{
            id: 'greet',
            keys: ['hello', 'hi', 'hey', 'salam', 'good morning', 'good evening', 'hiya', 'howdy'],
            resp: "Hey there! 👋 Great to see you here. I'm **Gmayne AI** — his personal assistant.\n\nAsk me anything about Gmayne: his **experience, projects, services, or how to work with him**.",
            suggests: ['Tell me about yourself', 'What services do you provide?', 'Can you build my project?']
        }, {
            id: 'name',
            keys: ['your name', 'are you ai', 'are you real', 'are you human', 'are you a robot', 'what are you',
                'who made you'
            ],
            resp: "I'm **Gmayne AI** — the assistant that represents Gmayne on this portfolio. He's the Software Engineer behind everything you see here, and I'm here to tell you all about him.",
            suggests: ['Tell me about yourself', 'What services do you provide?']
        }, {
            id: 'about',
            keys: ['who are you', 'who is gmayne', 'about gmayne', 'about him', 'about yourself', 'introduce',
                'about the developer', 'about you', 'bio'
            ],
            resp: "Great question. **Gmayne** is a **Software Engineer** who designs, builds, and ships software people love to use.\n\nHe's a full-stack developer with a strong edge in **front-end engineering, UI/UX design, and AI-powered solutions** — backed by a Bachelor's in Information Systems and a Master's in Networks & ICT.\n\nAnd I'm the AI assistant standing in for him, so ask me anything.",
            deeper: "Let me go a little deeper. Gmayne's strength is the rare combination of **engineer + designer + strategist**:\n\n• **Engineer** — clean, scalable full-stack code.\n• **Designer** — pixel-perfect, user-first interfaces.\n• **Strategist** — he thinks about your business goals, not just the UI.\n\nThat's why his projects don't just look good — they perform.",
            suggests: ['What is your experience?', 'What are your strengths?', 'Can you build my project?']
        }, {
            id: 'experience',
            keys: ['experience', 'work history', 'background', 'career', 'journey', 'timeline', 'professional',
                'years'
            ],
            resp: "Here's Gmayne's journey at a glance:\n\n• **2020** — Started Computer Science, building strong programming fundamentals.\n• **2021** — Front-End Developer: mastered HTML, CSS, JavaScript & responsive design.\n• **2023** — Bachelor's in Information Systems + back-end development (APIs, databases, architecture).\n• **2024** — Full-Stack Developer: shipped complete, scalable web applications.\n• **2025** — Master's in Networks & ICT (networking, security, cloud, AI).\n• **2026** — Software Engineer, delivering enterprise and AI-powered solutions.",
            deeper: "What makes that journey special is how it **stacks**: design skills from his front-end years, engineering depth from full-stack and back-end work, and now **AI + networks** from his Master's. Each year added a layer — so he can handle a project end to end.",
            suggests: ['Tell me about yourself', 'What are your strengths?', 'What technologies do you use?']
        }, {
            id: 'education',
            keys: ['education', 'degree', 'university', 'academic', 'bachelor', 'master', 'study', 'studied',
                'school', 'graduated', 'graduate', 'degree in'
            ],
            resp: "Gmayne's academic foundation is solid:\n\n• **Bachelor's in Information Systems** (2023) — databases, REST APIs, and application architecture.\n• **Master's in Networks & Information and Communication Technologies** (2025) — networking, cybersecurity, cloud, and AI-powered systems.\n\nHe pairs that formal training with years of hands-on, client-driven work.",
            deeper: "Fun fact: his Master's focused on **Networks & ICT**, which means he understands the *infrastructure* behind the apps — networking, security, and cloud — not just the interface. That's rare in a developer.",
            suggests: ['What are your certifications?', 'Tell me about yourself', 'What services do you provide?']
        }, {
            id: 'certification',
            keys: ['certification', 'certificate', 'credential', 'qualification', 'qualifications'],
            resp: "Here are Gmayne's key credentials:\n\n• **Bachelor's in Information Systems** (2023)\n• **Master's in Networks & ICT** (2025)\n\nPlus a Software Engineering profile with hands-on work across **development, design, and AI**.",
            suggests: ['What technologies do you use?', 'Tell me about yourself']
        }, {
            id: 'skills',
            keys: ['skills', 'skill', 'technologies', 'tech stack', 'stack', 'tools', 'languages', 'frameworks',
                'react', 'node', 'javascript', 'programming', 'coding'
            ],
            resp: "Here's Gmayne's tech toolbox:\n\n• **Front-end** — HTML, CSS, modern JavaScript, React, responsive & mobile-first design.\n• **Back-end** — Node.js, REST APIs, relational databases, application architecture.\n• **Design** — UI/UX, mobile app interfaces, brand identity, pixel-perfect layouts.\n• **AI** — AI-powered applications, automation, and intelligent systems.\n• **Media** — video editing, videography, and social media design.\n\nPlus version control, testing, deployment, networking, and cloud fundamentals.",
            deeper: "If you're looking for something specific: he's comfortable going **end to end** — from a Figma design to a deployed product. React + Node + databases on the code side, AI integration on the smart side, and the design eye to make it beautiful.",
            suggests: ['What services do you provide?', 'Can you build my project?', 'What is your workflow?']
        }, {
            id: 'services',
            keys: ['services', 'service', 'what do you do', 'what can you build', 'what can he build', 'offer',
                'provide', 'help with', 'what do you offer', 'what does he do'
            ],
            resp: "Gmayne can build almost anything digital. Core services:\n\n• **Websites & Web Apps** — landing pages to full-scale platforms (see **CinePulse**, **Ain Lexicon**).\n• **Mobile & App UI Design** — modern, conversion-focused interfaces.\n• **Brand Identity** — logos and complete visual systems.\n• **Social Media Design** — scroll-stopping visuals.\n• **Video Editing & Videography** — YouTube edits, thumbnails, and content.\n• **AI-Powered Solutions** — intelligent apps, automation, smart systems.\n• **Hospital & Business Systems** — desktop & MPSS apps (**MediSys**, custom CRMs).\n\nIf you can describe it, he can probably build it. What are you working on?",
            deeper: "Beyond the core list, Gmayne specialises in **AI solutions** and **intelligent business systems** (CRMs, platforms, automation) — the kinds of projects that don't just look good, they save teams real hours.",
            suggests: ['Can you build my project?', 'How much does a project cost?', 'Show your projects']
        }, {
            id: 'takeon',
            keys: ['can you build', 'can he build', 'build my project', 'build your project', 'build an app',
                'build a website', 'make an app', 'make a website', 'work on my project', 'take on project',
                'do you take', 'do you build', 'can you make', 'freelance'
            ],
            resp: "Yes — absolutely! Gmayne takes on new projects regularly. Whether it's a **website, web app, mobile app design, brand identity, or an AI-powered system**, he can build it.\n\nHere's how to start:\n\n1. Tell him what you're building and your timeline.\n2. Get a **free consultation** and a transparent quote.\n3. He designs, builds, and ships it while keeping you in the loop.\n\nDrop a message through the contact section and he'll get back to you quickly! 🚀",
            deeper: "Every project starts the same way — a quick chat about your **goal, scope, and timeline**. From there Gmayne prepares a clear plan and an honest estimate, then gets to work. No black boxes, just progress.",
            suggests: ['How can I contact you?', 'What is your availability?', 'How much does a project cost?']
        }, {
            id: 'projects',
            keys: ['projects', 'project', 'portfolio', 'showcase', 'designs', 'clients', 'previous work',
                'your work', 'your projects', 'examples', 'samples', 'built before', 'past work'
            ],
            resp: "Gmayne has shipped **25+ projects** across design, development, and media. Highlights:\n\n• **[CinePulse](https://momayne10-ship-it.github.io/-CinePulse/)** — Movies & TV Shows platform.\n• **[Golden Taste](https://momayne10-ship-it.github.io/Golden-Taste/)** — Luxury restaurant site.\n• **[Sweet Delight](https://momayne10-ship-it.github.io/Sweet-Delight/)** — Bakery website.\n• **[Black Brew](https://momayne10-ship-it.github.io/Specialty-Coffee/)** — Specialty coffee site.\n• **MediSys** — Hospital management system.\n• **Ain Lexicon** — English-Arabic dictionary app.\n\nBrowse the full showcase in the **Work OS** section above — and ask me about any of them!",
            deeper: "Ask me about a specific one — say **CinePulse**, **MediSys**, **Ain Lexicon**, or any project — and I'll give you the details. 😉",
            suggests: ['Tell me about yourself', 'What services do you provide?', 'What technologies do you use?']
        }, {
            id: 'pricing',
            keys: ['price', 'pricing', 'cost', 'costs', 'how much', 'rate', 'rates', 'budget', 'quote', 'fees',
                'fee', 'charges', 'expensive'
            ],
            resp: "Every project is different, so Gmayne quotes based on **scope, complexity, and timeline** — no inflated packages.\n\nA quick idea of scale:\n\n• A **landing page** or a single design is a fast, affordable job.\n• A **full platform, mobile app, or AI system** is a bigger investment — and you'll get a clear, itemised estimate up front.\n\nHe offers a **free initial consultation** to discuss your idea and give you a transparent quote.",
            deeper: "The honest take: Gmayne would rather quote fairly and deliver great work than undercut and disappear. You get a **clear itemised estimate** before anything starts — no surprises later.",
            suggests: ['How can I contact you?', 'Can you build my project?', 'What is your availability?']
        }, {
            id: 'availability',
            keys: ['availability', 'available', 'open to', 'open for', 'freelance', 'timeline', 'how soon',
                'when can', 'how fast', 'busy', 'schedule', 'deadline', 'book'
            ],
            resp: "Good news — Gmayne is **currently open to new projects and collaborations**, whether that's freelance work, a full-time role, or a partnership.\n\nTimeline depends on scope, but he's known for **clear communication and honest deadlines**. Message him through the contact section and he'll get back to you quickly.",
            suggests: ['How can I contact you?', 'Can you build my project?', 'How much does a project cost?']
        }, {
            id: 'hire',
            keys: ['hire', 'why should', 'why hire', 'strengths', 'strength', 'good at', 'stand out', 'unique',
                'best about', 'sell me', 'convince', 'worth', 'hire you'
            ],
            resp: "Honestly? Because Gmayne is the rare mix of **engineer + designer + strategist**.\n\n• **He ships.** Not just designs or code — finished products people love.\n• **Full-stack.** Front-end polish, solid back-end, and AI where it adds real value.\n• **Educated & proven.** A Master's in Networks & ICT plus years of client work.\n• **Reliable.** Innovation × reliability — clean, scalable, maintainable code.\n• **Easy to work with.** Clear communication, honest timelines, zero surprises.\n\nIf you want someone who treats your product like his own — that's Gmayne.",
            deeper: "A few things Gmayne is *especially* good at: turning vague ideas into concrete products, making interfaces feel effortless, and engineering **AI features that actually work**. He's not a jack of all trades — he's genuinely strong in each layer.",
            suggests: ['What is your workflow?', 'How can I contact you?', 'What is your design philosophy?']
        }, {
            id: 'contact',
            keys: ['contact', 'email', 'reach', 'message', 'connect', 'whatsapp', 'phone', 'call', 'talk to',
                'talk with', 'link', 'mail', 'meet'
            ],
            resp: "The best way to reach Gmayne is through the **contact section** on this page — hit the **“Let's work together”** button or the client messages window and drop him a note.\n\nHe responds quickly, so just share your idea and he'll get back to you.",
            deeper: "Tip: the more context you give — **what you're building, your timeline, and your budget range** — the faster and more useful his reply will be. 💡",
            suggests: ['Can you build my project?', 'What is your availability?', 'Tell me about yourself']
        }, {
            id: 'collaborate',
            keys: ['collaborat', 'partner', 'work together', 'work with', 'team up', 'agency', 'startup',
                'team', 'long term', 'ongoing'
            ],
            resp: "Absolutely — Gmayne loves a good collaboration. Whether it's a **startup, agency, team, or individual** with a project, he's open to partnerships, contracting, and long-term work.\n\nTell me a little about your project and I'll point you in the right direction.",
            suggests: ['How can I contact you?', 'Can you build my project?', 'What is your availability?']
        }, {
            id: 'workflow',
            keys: ['workflow', 'process', 'approach', 'method', 'how do you work', 'how he works', 'steps',
                'methodology', 'development process', 'how it works'
            ],
            resp: "Here's how Gmayne turns an idea into a shipped product:\n\n• **Discover** — understand your goals, audience, and scope.\n• **Design** — wireframes and polished UI you'll actually approve.\n• **Develop** — clean, scalable code with modern tech.\n• **Test** — rigorous checks, responsiveness, performance.\n• **Deploy & Support** — launch, monitor, and iterate.\n\nYou stay in the loop at every step — no black boxes, just honest progress.",
            deeper: "The key principle: **you're never left guessing**. Regular updates, working demos along the way, and a final product that's tested and documented. Collaboration should feel effortless — that's the goal.",
            suggests: ['What is your design philosophy?', 'Can you build my project?', 'How can I contact you?']
        }, {
            id: 'philosophy',
            keys: ['philosophy', 'design philosophy', 'design principle', 'design style', 'aesthetic',
                'design thinking', 'user experience', 'usability', 'approach to design'
            ],
            resp: "Gmayne's design philosophy in one line: **build software people love to use.**\n\nThat means clean architecture under the hood, modern technology, and a deep obsession with **user experience** — fast, intuitive, accessible interfaces that feel effortless.\n\nInnovation × reliability. Always.",
            suggests: ['What is your workflow?', 'What technologies do you use?', 'What are your strengths?']
        }, {
            id: 'frontend',
            keys: ['frontend', 'front-end', 'website', 'web app', 'web application', 'landing page',
                'web design', 'site'
            ],
            resp: "Websites and web apps are Gmayne's home turf. He builds **responsive, high-performance** sites — from a single landing page to full-scale web applications with real back-ends.\n\nModern JavaScript, clean architecture, and interfaces that work beautifully on every screen.",
            suggests: ['Show your projects', 'What technologies do you use?', 'Can you build my project?']
        }, {
            id: 'mobile',
            keys: ['mobile', 'app ui', 'app design', 'ios', 'android', 'app interface', 'app screens'],
            resp: "For mobile, Gmayne designs **modern app interfaces** — he's done work for **Upower, AccentFlow, and FitLife** (fitness app UI). Clean screens, clear user flows, and a premium feel.\n\nHe can take an app from concept to a polished, developer-ready design.",
            suggests: ['Show your projects', 'Can you build my project?']
        }, {
            id: 'brand',
            keys: ['brand', 'branding', 'logo', 'identity', 'behance', 'visual identity'],
            resp: "Brand identity is one of Gmayne's creative strengths. He's built identities for **RawLearn** (English school), **MIDI Group**, **Alanoud Beauty**, **Jannah Modesty**, and more.\n\nLogos, colour systems, and visual languages that make a brand feel established from day one.",
            suggests: ['Show your projects', 'What services do you provide?']
        }, {
            id: 'social',
            keys: ['social media', 'instagram', 'content design', 'social design', 'posts'],
            resp: "Social media design too — like the campaigns he made for **Naila Hospital** (2025). Scroll-stopping visuals that keep a brand consistent across every platform.",
            suggests: ['Show your projects', 'What services do you provide?']
        }, {
            id: 'media',
            keys: ['video editing', 'videograph', 'youtube', 'thumbnail', 'video edit', 'films', 'filming',
                'editing', 'content creation', 'shorts'
            ],
            resp: "Gmayne also runs a full creative suite:\n\n• **Video editing** — YouTube edits and short-form content (see **Amin Owais**).\n• **Videography** — filming and production.\n• **Thumbnails & social design** — built to get clicks.\n\nIt's a rare combo: he can **engineer the product and create the content around it**.",
            suggests: ['Show your projects', 'What services do you provide?']
        }, {
            id: 'ai',
            keys: ['ai', 'artificial', 'machine learning', 'chatbot', 'chat bot', 'automation', 'automate',
                'intelligent', 'smart', 'llm', 'gpt', 'openai', 'assistant', 'rag'
            ],
            resp: "AI is one of Gmayne's strongest areas — it was part of his **Master's focus** and it's part of his everyday work.\n\nHe builds **AI-powered applications, smart automation, and intelligent systems** — from AI assistants and chatbots to tools that save teams hours every day.\n\nIf you have an AI idea, he's the person to talk to.",
            deeper: "Concretely, that can mean: a **custom AI assistant** grounded in your own knowledge, **automated document processing**, or **workflow bots** that plug into your existing stack. Practical AI that pays for itself.",
            suggests: ['Can you build my project?', 'What is your availability?', 'What technologies do you use?']
        }, {
            id: 'business',
            keys: ['business', 'crm', 'erp', 'inventory', 'booking', 'platform', 'system', 'management',
                'internal'
            ],
            resp: "Need the operational backbone of your business? Gmayne builds **CRMs, inventory systems, booking tools, and custom platforms** — designed to automate busywork and scale with you.",
            suggests: ['What services do you provide?', 'Can you build my project?']
        }, {
            id: 'languages',
            keys: ['language', 'arabic', 'english', 'speak', 'fluent', 'bilingual'],
            resp: "Gmayne is fully fluent in **Arabic and English** — he can communicate, present, and work comfortably in both.",
            suggests: ['Tell me about yourself', 'How can I contact you?']
        }, {
            id: 'remote',
            keys: ['remote', 'location', 'where are you', 'country', 'based', 'anywhere', 'time zone',
                'worldwide', 'online'
            ],
            resp: "Gmayne works as a **remote-friendly Software Engineer** and is open to collaborating with teams anywhere in the world.",
            suggests: ['Can you build my project?', 'How can I contact you?']
        }, {
            id: 'howareyou',
            keys: ['how are you', 'how is it going', 'whats up', 'how do you do', 'you ok', 'how are things'],
            resp: "I'm great, thanks for asking! 😄 I'm here 24/7 to tell you all about Gmayne. What would you like to know?",
            suggests: ['Tell me about yourself', 'What services do you provide?']
        }, {
            id: 'help',
            keys: ['help', 'what can you do', 'what is this', 'how does this work', 'assistant', 'feature',
                'get started', 'start'
            ],
            resp: "I'm **Gmayne AI** — his personal digital representative. Ask me about his **experience, projects, services, skills, education, pricing, and availability**.\n\nHere's a few things you could try 👇",
            suggests: SUGGEST
        }, {
            id: 'thanks',
            keys: ['thank', 'thanks', 'thx', 'appreciate', 'cheers', 'great', 'awesome', 'love it', 'perfect'],
            resp: "You're very welcome! 😊 If anything else comes to mind — his work, services, or how to get started — I'm right here.",
            suggests: ['Tell me about yourself', 'Show your projects', 'How can I contact you?']
        }, {
            id: 'bye',
            keys: ['bye', 'goodbye', 'see you', 'later', 'farewell', 'gtg', 'good night'],
            resp: "Thanks for stopping by! If you'd like to work with Gmayne, hit the **contact section** and drop a message. Have a great day! 👋",
            suggests: ['How can I contact you?', 'Can you build my project?']
        }];

        /* ================= helpers ================= */
        function tokens(s) { return s.split(' ').filter(Boolean); }

        function normalize(s) {
            return s.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();
        }

        function hasPhrase(q, phrase) {
            var qt = tokens(q),
                pt = tokens(phrase);
            if (pt.length === 1) return qt.indexOf(pt[0]) !== -1;
            for (var i = 0; i <= qt.length - pt.length; i++) {
                var ok = true;
                for (var j = 0; j < pt.length; j++) { if (qt[i + j] !== pt[j]) { ok = false; break; } }
                if (ok) return true;
            }
            return false;
        }

        function detectClientIntent(q) {
            var need = null;
            if (/i need|looking for|want to build|want to make|can you build|can you make|build me|make me|create me|i want/i.test(q)) {
                if (/website|site|landing|page|web app|webapp|platform/i.test(q)) need = 'web';
                else if (/mobile|app|android|ios/i.test(q)) need = 'mobile';
                else if (/ai|chatbot|assistant|automation|intelligent/i.test(q)) need = 'ai';
                else if (/brand|logo|identity|visual/i.test(q)) need = 'brand';
                else if (/crm|erp|inventory|booking|system|management/i.test(q)) need = 'business';
                else need = 'general';
            }
            if (need) {
                var links = {
                    web: "Check out his web projects — **[MediSys](https://momayne10-ship-it.github.io/MediSys/)**, **[CinePulse](https://momayne10-ship-it.github.io/-CinePulse/)**, and more in the **Work OS** section above.",
                    mobile: "His app UI work includes **Upower**, **AccentFlow**, and **FitLife** — modern, conversion-focused interfaces.",
                    ai: "Gmayne specialises in **AI-powered solutions** — chatbots, smart automation, and intelligent systems. His Master's in Networks & ICT backs this up.",
                    brand: "He's built identities for **RawLearn**, **MIDI Group**, **Alanoud Beauty**, and **Jannah Modesty** — logos, colour systems, full visual languages.",
                    business: "He builds **CRMs, inventory systems, booking tools, and custom platforms** — designed to automate busywork and scale.",
                    general: "Gmayne can build almost anything digital — websites, apps, AI systems, brand identity, you name it."
                };
                return { resp: links[need] + "\n\nTell me more about what you're building and I can suggest the best next step.", suggests: ['Can you build my project?', 'How much does a project cost?', 'How can I contact you?'] };
            }
            return null;
        }

        function match(q) {
            var best = null,
                bestScore = 0;
            for (var i = 0; i < intents.length; i++) {
                var it = intents[i],
                    score = 0;
                for (var j = 0; j < it.keys.length; j++) {
                    var k = it.keys[j];
                    if (hasPhrase(q, k)) score += (k.indexOf(' ') !== -1 ? 3 : 1) * k.length;
                }
                if (score > bestScore) { best = it;
                    bestScore = score; }
            }
            return bestScore > 0 ? best : null;
        }

        function projectMatch(q) {
            for (var name in PROJECTS_KB) {
                if (PROJECTS_KB.hasOwnProperty(name) && q.indexOf(name) !== -1) return PROJECTS_KB[name];
            }
            return null;
        }

        function think(text) {
            var q = normalize(text);
            var ci = detectClientIntent(q);
            if (ci) return ci;
            var pr = projectMatch(q);
            if (pr) {
                return { resp: pr + "\n\nWant me to tell you about Gmayne's other projects?", suggests: [
                        'Show your projects', 'What services do you provide?'
                    ] };
            }
            var follow = /^(more|tell me more|explain|elaborate|details|continue|again|what about|how about|go on|wow|interesting|ok|okay|and you|really|nice)$/;
            if (follow.test(q) && memory.lastIntent) {
                var deeper = memory.lastIntent.deeper || memory.lastIntent.resp;
                return { resp: typeof deeper === 'function' ? deeper(q) : deeper, suggests: memory.lastIntent
                        .suggests };
            }
            var it = match(q);
            if (it) {
                memory.lastIntent = it;
                memory.history.push(text);
                if (memory.history.length > 12) memory.history.shift();
                var r = typeof it.resp === 'function' ? it.resp(q) : it.resp;
                return { resp: r, suggests: it.suggests };
            }
            return {
                resp: "Hmm, I'm not sure I caught that one — but I'm here to help! 🤖\n\nI can tell you about Gmayne's **experience, projects, services, skills, education, pricing, and availability**. Try one of these:",
                suggests: SUGGEST
            };
        }

        /* ================= rendering ================= */
        function esc(s) { var d = document.createElement('div');
            d.textContent = s; return d.innerHTML; }

        function pad(n) { return n < 10 ? '0' + n : '' + n; }

        function timeNow() { var d = new Date(); return pad(d.getHours()) + ':' + pad(d.getMinutes()); }

        function inline(s) {
            return s
                .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
                .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener" style="color:#10b981;text-decoration:underline">$1</a>');
        }

        function renderMd(md) {
            var lines = md.split('\n');
            var html = '',
                list = false,
                para = [];

            function flushList() { if (list) { html += '</ul>';
                    list = false; } }

            function flushPara() { if (para.length) { html += '<p>' + para.join('<br>') + '</p>';
                    para = []; } }
            for (var i = 0; i < lines.length; i++) {
                var line = lines[i].trim();
                if (line.indexOf('•') === 0) {
                    flushPara();
                    if (!list) { html += '<ul>';
                        list = true; }
                    html += '<li>' + inline(line.slice(1).trim()) + '</li>';
                } else if (line === '') {
                    flushList();
                    flushPara();
                } else {
                    flushList();
                    para.push(inline(line));
                }
            }
            flushList();
            flushPara();
            return html;
        }

        function scroll() { body.scrollTop = body.scrollHeight; }

        function addMsg(text, who) {
            var row = document.createElement('div');
            row.className = 'gm-msg ' + who;
            if (who === 'ai') {
                var av = document.createElement('div');
                av.className = 'gm-msg-avatar';
                av.innerHTML = '<i class="fa-solid fa-sparkles"></i>';
                row.appendChild(av);
            }
            var bub = document.createElement('div');
            bub.className = 'gm-bubble';
            bub.innerHTML = (who === 'ai') ? renderMd(text) : esc(text);
            var t = document.createElement('span');
            t.className = 'gm-time';
            t.textContent = timeNow();
            bub.appendChild(t);
            row.appendChild(bub);
            body.appendChild(row);
            scroll();
            return row;
        }

        function addChips(texts, followup) {
            var wrap = document.createElement('div');
            wrap.className = followup ? 'gm-chips gm-followup' : 'gm-chips';
            for (var i = 0; i < texts.length; i++) {
                (function(label) {
                    var c = document.createElement('button');
                    c.className = 'gm-chip';
                    c.type = 'button';
                    c.innerHTML = '<i class="fa-solid fa-arrow-up-right"></i><span>' + esc(label) + '</span>';
                    c.addEventListener('click', function() { ask(label); });
                    wrap.appendChild(c);
                })(texts[i]);
            }
            body.appendChild(wrap);
            scroll();
            return wrap;
        }

        function showTyping() {
            var row = document.createElement('div');
            row.className = 'gm-msg ai';
            row.innerHTML =
            '<div class="gm-msg-avatar"><i class="fa-solid fa-sparkles"></i></div><div class="gm-typing"><span></span><span></span><span></span></div>';
            body.appendChild(row);
            scroll();
            return row;
        }

        /* ================= conversation ================= */
        function boot() {
            welcomeShown = true;
            var t = showTyping();
            setTimeout(function() {
                t.remove();
                addMsg(WELCOME, 'ai');
                addChips(SUGGEST, false);
            }, reduced ? 200 : 950);
        }

        function ask(text) {
            var t = (text || '').trim();
            if (!t || busy) return;
            busy = true;
            addMsg(t, 'user');
            input.value = '';
            autoResize();
            setSendState();
            var chips = body.querySelectorAll('.gm-chips');
            for (var i = 0; i < chips.length; i++) chips[i].style.display = 'none';
            var typing = showTyping();
            var out = think(t);
            var delay = Math.min(1900, 750 + out.resp.length * 5) + Math.random() * 250;
            if (reduced) delay = 350;
            setTimeout(function() {
                typing.remove();
                addMsg(out.resp, 'ai');
                if (out.suggests && out.suggests.length) addChips(out.suggests, true);
                busy = false;
            }, delay);
        }

        function resetChat() {
            if (busy) return;
            body.innerHTML = '';
            memory = { lastIntent: null, history: [] };
            welcomeShown = false;
            boot();
        }

        /* ================= panel controls ================= */
        function openPanel() {
            open = true;
            panel.classList.add('gm-open');
            fab.setAttribute('aria-expanded', 'true');
            if (!welcomeShown) boot();
            setTimeout(function() { input.focus(); }, reduced ? 0 : 380);
        }

        function closePanel() {
            open = false;
            panel.classList.remove('gm-open');
            fab.setAttribute('aria-expanded', 'false');
            setTimeout(function() { fab.focus(); }, reduced ? 0 : 380);
        }

        function autoResize() {
            input.style.height = 'auto';
            input.style.height = Math.min(input.scrollHeight, 110) + 'px';
        }

        function setSendState() { sendBtn.disabled = !input.value.trim(); }

        function spawnRipple(e) {
            var r = document.createElement('span');
            r.className = 'gm-ripple';
            var s = Math.max(fab.offsetWidth, fab.offsetHeight);
            r.style.width = r.style.height = s + 'px';
            var rect = fab.getBoundingClientRect();
            r.style.left = (e.clientX - rect.left - s / 2) + 'px';
            r.style.top = (e.clientY - rect.top - s / 2) + 'px';
            fab.appendChild(r);
            setTimeout(function() { r.remove(); }, 700);
        }

        /* ================= events ================= */
        fab.addEventListener('click', function(e) {
            spawnRipple(e);
            if (open) closePanel();
            else openPanel();
        });
        closeBtn.addEventListener('click', closePanel);
        resetBtn.addEventListener('click', resetChat);
        sendBtn.addEventListener('click', function() { ask(input.value); });
        input.addEventListener('input', function() { setSendState();
            autoResize(); });
        input.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault();
                ask(input.value); }
        });
        panel.addEventListener('keydown', function(e) {
            if (e.key !== 'Tab') return;
            var f = panel.querySelectorAll('button, textarea');
            if (!f.length) return;
            var first = f[0],
                last = f[f.length - 1];
            if (e.shiftKey && document.activeElement === first) { e.preventDefault();
                last.focus(); } else if (!e.shiftKey && document.activeElement === last) { e.preventDefault();
                first.focus(); }
        });
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && open) closePanel();
        });
        document.addEventListener('click', function(e) {
            if (open && !root.contains(e.target)) closePanel();
        });
    })();

    /* ---- AI Tools Spotlight Hover ---- */
    (function() {
        'use strict';
        var cards = document.querySelectorAll('.ai-card');
        for (var i = 0; i < cards.length; i++) {
            (function(card) {
                card.addEventListener('pointermove', function(e) {
                    var r = card.getBoundingClientRect();
                    card.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100) + '%');
                    card.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100) + '%');
                });
            })(cards[i]);
        }
    })();

    /* ---- Skills Section Animation ---- */
    (function() {
        'use strict';
        var section = document.querySelector('.skills-section');
        if (!section) return;
        var circles = section.querySelectorAll('.skill-circle');
        var targets = [];
        for (var i = 0; i < circles.length; i++) {
            targets.push(parseInt(circles[i].getAttribute('data-percent')) || 0);
            circles[i].style.setProperty('--percent', '0%');
        }
        function animateCircle(circle, target, delay) {
            setTimeout(function() {
                var start = 0;
                var duration = 1200;
                var startTime = null;
                function step(timestamp) {
                    if (!startTime) startTime = timestamp;
                    var progress = Math.min((timestamp - startTime) / duration, 1);
                    var eased = 1 - Math.pow(1 - progress, 3);
                    var current = Math.round(eased * target);
                    circle.style.setProperty('--percent', current + '%');
                    if (progress < 1) {
                        requestAnimationFrame(step);
                    }
                }
                requestAnimationFrame(step);
            }, delay);
        }
        function animateCircles() {
            for (var i = 0; i < circles.length; i++) {
                animateCircle(circles[i], targets[i], i * 100);
            }
        }
        if ('IntersectionObserver' in window) {
            var io = new IntersectionObserver(function(entries) {
                for (var j = 0; j < entries.length; j++) {
                    if (entries[j].isIntersecting) {
                        animateCircles();
                        io.unobserve(entries[j].target);
                        break;
                    }
                }
            }, { threshold: 0.2 });
            io.observe(section);
        } else {
            animateCircles();
        }
    })();

    /* ============================================================
   CONTACT — تفعيل روابط الأيقونات
   ============================================================ */
document.querySelectorAll('.connect-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        const platform = this.dataset.platform;
        let url = '#';
        
        // 🔹 استبدل هذه الروابط بروابطك الحقيقية
        switch(platform) {
            case 'whatsapp': 
                url = 'https://wa.me/1234567890'; 
                break;
            case 'telegram': 
                url = 'https://t.me/yourusername'; 
                break;
            case 'email': 
                url = 'mailto:you@example.com'; 
                break;
            case 'discord': 
                url = 'https://discord.gg/yourinvite'; 
                break;
            case 'linkedin': 
                url = 'https://linkedin.com/in/yourprofile'; 
                break;
            default: 
                url = '#';
        }
        
        window.open(url, '_blank');
    });
});
/* ============================================================
   HEADER & HERO — Premium Interactions
   ============================================================ */

(function() {
    'use strict';

    // ----- Header scroll effect -----
    const header = document.getElementById('gm-header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;
        if (currentScroll > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        lastScroll = currentScroll;
    }, { passive: true });

    // ----- Mobile menu toggle -----
    const menuBtn = document.querySelector('.gm-header-menu');
    const nav = document.querySelector('.gm-nav');

    // Create overlay element
    const overlay = document.createElement('div');
    overlay.className = 'gm-nav-overlay';
    document.body.appendChild(overlay);

    if (menuBtn && nav) {
        menuBtn.addEventListener('click', () => {
            menuBtn.classList.toggle('active');
            nav.classList.toggle('open');
            overlay.classList.toggle('active');
            menuBtn.setAttribute('aria-expanded', nav.classList.contains('open'));
            document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
        });

        overlay.addEventListener('click', () => {
            menuBtn.classList.remove('active');
            nav.classList.remove('open');
            overlay.classList.remove('active');
            menuBtn.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        });

        // Close menu on link click
        nav.querySelectorAll('.gm-nav-link').forEach(link => {
            link.addEventListener('click', () => {
                menuBtn.classList.remove('active');
                nav.classList.remove('open');
                overlay.classList.remove('active');
                menuBtn.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            });
        });
    }

    // ----- Typing effect (عبارات متتابعة) -----
    const typingElement = document.getElementById('gm-typing-text');
    if (typingElement) {
        const phrases = [
            'Software Engineer',
            'UI/UX Designer',
            'AI Enthusiast',
            'Full-Stack Developer',
            'Freelancer'
        ];

        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingSpeed = 100;

        function typeEffect() {
            const currentPhrase = phrases[phraseIndex];

            if (isDeleting) {
                typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
                charIndex--;
                typingSpeed = 40;
            } else {
                typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
                charIndex++;
                typingSpeed = 100;
            }

            if (!isDeleting && charIndex === currentPhrase.length) {
                isDeleting = true;
                typingSpeed = 2000;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                typingSpeed = 400;
            }

            setTimeout(typeEffect, typingSpeed);
        }

        // بدء التأثير بعد تحميل الصفحة
        setTimeout(typeEffect, 800);
    }

    // ----- Counter animation (الإحصائيات تظهر تدريجياً) -----
    const statNumbers = document.querySelectorAll('.gm-stat-number');

    if (statNumbers.length && 'IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const target = parseInt(el.getAttribute('data-count'), 10);
                    let current = 0;
                    const increment = Math.ceil(target / 40);
                    const duration = 1200;
                    const stepTime = Math.floor(duration / 40);

                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            el.textContent = target;
                            clearInterval(timer);
                        } else {
                            el.textContent = current;
                        }
                    }, stepTime);

                    observer.unobserve(el);
                }
            });
        }, { threshold: 0.5 });

        statNumbers.forEach(el => observer.observe(el));
    }

    /* ============================================================
       STATISTICS SECTION — Premium animated counters & rings
       ============================================================ */
    function animateCounter(el, target) {
        const duration = 1600;
        const steps = 60;
        const stepTime = Math.floor(duration / steps);
        const increment = target / steps;
        let current = 0;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                el.textContent = target;
                clearInterval(timer);
            } else {
                el.textContent = Math.floor(current);
            }
        }, stepTime);
    }

    (function initStatsSection() {
        const section = document.getElementById('stats');
        if (!section) return;

        const HERO_CIRC = 2 * Math.PI * 88; // r=88

        // --- Intersection Observer ---
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                const el = entry.target;

                // Staggered reveal
                const delay = parseInt(el.dataset.delay || '0', 10);
                setTimeout(() => {
                    el.classList.add('visible');

                    // Hero ring
                    const ring = el.querySelector('.hero-ring-fill');
                    if (ring) {
                        const pct = parseInt(ring.dataset.percent || '0', 10);
                        ring.style.strokeDashoffset = HERO_CIRC * (1 - pct / 100);
                    }

                    // Progress bars
                    el.querySelectorAll('.stat-mini-bar-fill, .stat-progress-fill').forEach(bar => {
                        const w = bar.dataset.width || '0';
                        setTimeout(() => { bar.style.width = w + '%'; }, 300);
                    });

                    // Counter animation — hero number
                    el.querySelectorAll('.hero-number').forEach(numEl => {
                        const target = parseInt(numEl.dataset.count, 10);
                        animateCounter(numEl, target);
                    });

                    // Counter animation — mini card numbers
                    el.querySelectorAll('.stat-number').forEach(numEl => {
                        const target = parseInt(numEl.dataset.count, 10);
                        animateCounter(numEl, target);
                    });
                }, delay);

                observer.unobserve(el);
            });
        }, { threshold: 0.15 });

        // Observe all animatable elements
        section.querySelectorAll('.stats-hero-card, .stats-side-header, .stat-mini-card, .stats-trust-row').forEach(el => {
            observer.observe(el);
        });
    })();

})();