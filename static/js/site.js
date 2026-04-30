// =====================================================================
//  unixmagic.net — interactive poster layer
//
//  Small namespaced modules, no framework:
//    Theme      light/dark toggle (OS-aware, localStorage-backed)
//    Panel      sliding side panel for annotations + file viewers
//    Poster     positions markers over the poster image
//    FrameMode  "show-all" split view with flanking reference lists
//    Help       man-page help dialog
//    Share      copy-link button for each annotation
//    Files      FILES section — clickable paths that open images
//    Loading    initial overlay
// =====================================================================

const Theme = {
    mql: window.matchMedia('(prefers-color-scheme: light)'),

    stored() { try { return localStorage.getItem('theme'); } catch (_) { return null; } },

    // Effective theme: explicit attr > OS preference > dark default
    resolve() {
        const attr = document.documentElement.getAttribute('data-theme');
        if (attr === 'light' || attr === 'dark') return attr;
        return this.mql.matches ? 'light' : 'dark';
    },

    set(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        try { localStorage.setItem('theme', theme); } catch (_) { }
    },

    init(button) {
        if (!button) return;
        // Label shows the state a click would switch TO
        const render = () => { button.textContent = this.resolve() === 'dark' ? 'light' : 'dark'; };
        render();
        button.addEventListener('click', () => {
            this.set(this.resolve() === 'dark' ? 'light' : 'dark');
            render();
        });
        // If OS pref changes and the user hasn't overridden, update the label
        this.mql.addEventListener('change', () => { if (!this.stored()) render(); });
    }
};

const Panel = {
    _all: null,
    all() { return this._all || (this._all = document.querySelectorAll('.side-container')); },
    closeAll() { this.all().forEach(el => el.classList.remove('active')); },
    open(id) {
        const el = document.getElementById(id);
        if (!el) return false;
        this.closeAll();
        el.classList.add('active');
        const close = el.querySelector('.close-btn');
        if (close) close.focus({ preventScroll: true });
        return true;
    },
    init() {
        document.querySelectorAll('.close-btn').forEach(btn => {
            btn.addEventListener('click', () => btn.closest('.side-container').classList.remove('active'));
        });
    }
};

const Poster = {
    el()        { return document.getElementById('poster'); },
    container() { return document.getElementById('poster-container'); },

    positionMarkers() {
        const poster = this.el();
        if (!poster) return;
        if (!poster.complete) {
            poster.addEventListener('load', () => this.positionMarkers(), { once: true });
            return;
        }
        const p = poster.getBoundingClientRect();
        const c = this.container().getBoundingClientRect();
        document.querySelectorAll('.marker').forEach(m => {
            const l = parseFloat(m.dataset.left);
            const t = parseFloat(m.dataset.top);
            m.style.left = `${(l / 100) * p.width  + p.left - c.left}px`;
            m.style.top  = `${(t / 100) * p.height + p.top  - c.top }px`;
        });
    },

    init() {
        const place = () => this.positionMarkers();
        window.addEventListener('resize', place);
        const poster = this.el();
        if (!poster) return;
        if (poster.complete) place();
        else poster.addEventListener('load', place, { once: true });

        document.querySelectorAll('.marker').forEach(m => {
            m.addEventListener('click', () => Panel.open(m.dataset.id));
        });
    }
};

const FrameMode = {
    active()       { return document.body.classList.contains('frame-mode'); },
    getMarker(num) { return document.querySelector(`.marker[data-number="${num}"]`); },
    getItem(num)   { return document.querySelector(`.frame-item[data-marker-number="${num}"]`); },

    toggle(button) {
        const markers = document.querySelectorAll('.marker');
        // Hide markers while the layout shifts so they don't fly across the screen.
        // Restore visibility on the next frame, after the reflow caused by the
        // class toggle has already happened -- no arbitrary timeout needed.
        markers.forEach(m => m.style.visibility = 'hidden');
        document.body.classList.toggle('frame-mode');
        button.classList.toggle('active');
        button.textContent = button.classList.contains('active') ? 'hide-all' : 'show-all';
        Poster.positionMarkers();
        requestAnimationFrame(() => markers.forEach(m => m.style.visibility = ''));
    },

    init(button) {
        if (!button) return;
        button.addEventListener('click', () => this.toggle(button));

        // Bidirectional highlight: list item <-> marker
        document.querySelectorAll('.frame-item').forEach(item => {
            const marker = this.getMarker(item.dataset.markerNumber);
            if (!marker) return;
            item.addEventListener('mouseenter', () => marker.classList.add('highlight'));
            item.addEventListener('mouseleave', () => marker.classList.remove('highlight'));
            item.addEventListener('click',      () => Panel.open(marker.dataset.id));
        });

        document.querySelectorAll('.marker').forEach(marker => {
            const item = this.getItem(marker.dataset.number);
            if (!item) return;
            marker.addEventListener('mouseenter', () => {
                if (!this.active()) return;
                item.classList.add('highlight');
                item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            });
            marker.addEventListener('mouseleave', () => item.classList.remove('highlight'));
        });
    }
};

const Help = {
    init(container, toggle) {
        if (!container || !toggle) return;
        const close = container.querySelector('.help-close');
        toggle.addEventListener('click', e => { e.preventDefault(); container.classList.add('active'); });
        if (close) close.addEventListener('click', () => container.classList.remove('active'));
        // Close on outside click
        document.addEventListener('click', e => {
            if (!container.classList.contains('active')) return;
            if (container.contains(e.target) || e.target === toggle) return;
            container.classList.remove('active');
        });
    },
    close(container) { if (container) container.classList.remove('active'); }
};

const Share = {
    init() {
        document.querySelectorAll('.share-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const url = `${location.origin}${location.pathname}#annotation-${btn.dataset.hash}`;
                const original = btn.textContent;
                const flash = (msg) => {
                    btn.textContent = msg;
                    setTimeout(() => { btn.textContent = original; }, 1500);
                };
                if (!navigator.clipboard || !navigator.clipboard.writeText) {
                    flash('copy unsupported');
                    return;
                }
                navigator.clipboard.writeText(url)
                    .then(() => flash('copied'))
                    .catch(() => flash('copy failed'));
            });
        });
    }
};

const Files = {
    init() {
        document.querySelectorAll('.file-link').forEach(link => {
            link.addEventListener('click', e => {
                e.preventDefault();
                Panel.open(link.dataset.target);
            });
        });
    }
};

const Loading = {
    finish() {
        const el = document.getElementById('loading');
        if (!el) return;
        el.style.transition = 'opacity 0.5s ease';
        el.style.opacity = '0';
        setTimeout(() => { el.style.display = 'none'; }, 500);
    }
};

// ----- Cross-module handlers -----------------------------------------

// Clicking outside a panel / marker / frame-item / file-link closes open
// panels. file-link has to be exempt because it opens a panel; without
// this, the bubbling click would immediately close the panel it just opened.
function onOutsideClick(event) {
    if (event.target.closest('.side-container')) return;
    if (event.target.closest('.marker'))         return;
    if (event.target.closest('.frame-item'))     return;
    if (event.target.closest('.file-link'))      return;
    Panel.closeAll();
}

// Deep-linking: hash -> open that annotation.
// Accept either the full panel id (annotation-01-shell) or the bare
// file-name slug (01-shell) so links from single pages still work.
function onHashChange() {
    const raw = window.location.hash.slice(1);
    if (!raw) return;
    const id = raw.startsWith('annotation-') || raw.startsWith('file-') ? raw : `annotation-${raw}`;
    Panel.open(id);
}

// ESC closes any open panel or the help dialog.
function onKeyDown(e) {
    if (e.key !== 'Escape') return;
    const help = document.getElementById('help-container');
    if (help && help.classList.contains('active')) {
        Help.close(help);
        return;
    }
    Panel.closeAll();
}

// ----- Boot ----------------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
    Theme.init(document.getElementById('theme-toggle'));
    Panel.init();
    Poster.init();
    FrameMode.init(document.getElementById('frame-toggle'));
    Help.init(document.getElementById('help-container'), document.getElementById('help-toggle'));
    Share.init();
    Files.init();

    document.querySelectorAll('.back-to-top').forEach(a => {
        a.addEventListener('click', e => {
            e.preventDefault();
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        });
    });

    document.addEventListener('click', onOutsideClick);
    document.addEventListener('keydown', onKeyDown);
    window.addEventListener('hashchange', onHashChange);
    onHashChange();
});

// Loading overlay fades once every resource (incl. the poster image) is in
window.addEventListener('load', () => Loading.finish());
