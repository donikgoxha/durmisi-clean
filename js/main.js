/* ==========================================================================
   Durmisi&Clean — Interface behaviour
   Sticky header · mobile drawer · FAQ · form
   Depends on js/i18n.js for window.DC.t() and window.DC.contact.
   ========================================================================== */
(function () {
    'use strict';

    var $ = function (sel, ctx) {
        return (ctx || document).querySelector(sel);
    };
    var $$ = function (sel, ctx) {
        return Array.prototype.slice.call((ctx || document).querySelectorAll(sel));
    };

    /* --- Sticky header shadow --------------------------------------------- */
    function initHeader() {
        var header = $('.header');
        if (!header) return;
        var ticking = false;

        function update() {
            header.classList.toggle('is-stuck', window.scrollY > 8);
            ticking = false;
        }

        window.addEventListener('scroll', function () {
            if (!ticking) {
                window.requestAnimationFrame(update);
                ticking = true;
            }
        }, {passive: true});
        update();
    }

    /* --- Mobile navigation drawer ----------------------------------------- */
    function initNav() {
        var toggle = $('.nav-toggle');
        var nav = $('#primary-nav');
        var scrim = $('.nav-scrim');
        if (!toggle || !nav) return;

        var lastFocused = null;
        var FOCUSABLE = 'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';

        function isOpen() {
            return toggle.getAttribute('aria-expanded') === 'true';
        }

        function open() {
            lastFocused = document.activeElement;
            toggle.setAttribute('aria-expanded', 'true');
            nav.classList.add('is-open');
            if (scrim) scrim.classList.add('is-open');
            document.body.classList.add('is-locked');
            /* The closed drawer is `visibility: hidden`, and a hidden element cannot
               take focus. Force a style flush so the drawer is actually visible
               before we move focus into it. */
            void nav.offsetWidth;
            var first = nav.querySelector(FOCUSABLE);
            if (first) first.focus();
        }

        function close() {
            toggle.setAttribute('aria-expanded', 'false');
            nav.classList.remove('is-open');
            if (scrim) scrim.classList.remove('is-open');
            document.body.classList.remove('is-locked');
            // Send focus back where it came from; fall back to the toggle so keyboard
            // users are never dropped back to the top of the document.
            var target = (lastFocused && document.contains(lastFocused) && lastFocused !== document.body) ? lastFocused : toggle;
            target.focus();
        }

        toggle.addEventListener('click', function () {
            isOpen() ? close() : open();
        });
        if (scrim) scrim.addEventListener('click', close);

        // Close after choosing a destination
        $$('a', nav).forEach(function (a) {
            a.addEventListener('click', function () {
                if (isOpen()) close();
            });
        });

        document.addEventListener('keydown', function (e) {
            if (!isOpen()) return;
            if (e.key === 'Escape') {
                close();
                return;
            }
            if (e.key !== 'Tab') return;

            // Trap focus inside the drawer
            var items = $$(FOCUSABLE, nav).filter(function (el) {
                return el.offsetParent !== null;
            });
            if (!items.length) return;
            var first = items[0];
            var last = items[items.length - 1];
            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault();
                last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault();
                first.focus();
            }
        });

        // Reset when resizing back up to desktop. Must match the CSS breakpoint
        // where the drawer becomes the inline nav (1040px), otherwise the body
        // stays scroll-locked between 960 and 1040.
        window.addEventListener('resize', function () {
            if (window.innerWidth > 1040 && isOpen()) close();
        });
    }

    /* --- FAQ accordion ----------------------------------------------------- */
    function initFaq() {
        var items = $$('.faq__item');
        if (!items.length) return;

        items.forEach(function (item) {
            var btn = $('.faq__q', item);
            var panel = $('.faq__a', item);
            if (!btn || !panel) return;

            btn.addEventListener('click', function () {
                var willOpen = !item.classList.contains('is-open');

                // Single-open accordion
                items.forEach(function (other) {
                    other.classList.remove('is-open');
                    var b = $('.faq__q', other);
                    var p = $('.faq__a', other);
                    if (b) b.setAttribute('aria-expanded', 'false');
                    if (p) p.setAttribute('aria-hidden', 'true');
                });

                if (willOpen) {
                    item.classList.add('is-open');
                    btn.setAttribute('aria-expanded', 'true');
                    panel.setAttribute('aria-hidden', 'false');
                }
            });
        });
    }

    /* --- Contact form (validate + mailto) ---------------------------------- */
    function initForm() {
        var form = $('#quote-form');
        if (!form) return;

        var status = $('#form-status');
        var t = function (k) {
            return window.DC ? window.DC.t(k) : k;
        };

        function setError(field, msgKey) {
            var wrap = field.closest('.field') || field.closest('.checkbox-wrap');
            if (!wrap) return;
            wrap.classList.add('has-error');
            var slot = $('.field__error', wrap);
            if (slot) {
                slot.textContent = t(msgKey);
                slot.setAttribute('data-error-key', msgKey);
            }
            field.setAttribute('aria-invalid', 'true');
        }

        function clearError(field) {
            var wrap = field.closest('.field') || field.closest('.checkbox-wrap');
            if (!wrap) return;
            wrap.classList.remove('has-error');
            field.removeAttribute('aria-invalid');
        }

        function showStatus(kind, msgKey) {
            if (!status) return;
            status.className = 'form-status is-visible form-status--' + kind;
            status.setAttribute('data-status-key', msgKey);
            var span = $('span', status);
            if (span) span.textContent = t(msgKey);
            status.setAttribute('role', kind === 'err' ? 'alert' : 'status');
        }

        function validEmail(v) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
        }

        // Clear an error as soon as the visitor starts fixing it
        $$('input, textarea, select', form).forEach(function (el) {
            el.addEventListener('input', function () {
                clearError(el);
            });
            el.addEventListener('change', function () {
                clearError(el);
            });
        });

        form.addEventListener('submit', function (e) {
            e.preventDefault();

            var ok = true;
            var firstBad = null;

            $$('[required]', form).forEach(function (field) {
                clearError(field);
                var empty = field.type === 'checkbox' ? !field.checked : !field.value.trim();
                if (empty) {
                    setError(field, field.type === 'checkbox' ? 'ct.err.privacy' : 'ct.err.required');
                    ok = false;
                    if (!firstBad) firstBad = field;
                } else if (field.type === 'email' && !validEmail(field.value.trim())) {
                    setError(field, 'ct.err.email');
                    ok = false;
                    if (!firstBad) firstBad = field;
                }
            });

            if (!ok) {
                showStatus('err', 'ct.status.err');
                if (firstBad) firstBad.focus();
                return;
            }

            // Compose the e-mail
            var get = function (name) {
                var el = form.elements[name];
                return el ? String(el.value || '').trim() : '';
            };
            var serviceEl = form.elements['service'];
            var serviceText = serviceEl && serviceEl.selectedIndex > 0 ? serviceEl.options[serviceEl.selectedIndex].text : '';

            var isEn = window.DC && window.DC.lang() === 'en';
            var L = isEn ? {
                subj: 'Cleaning enquiry',
                name: 'Name',
                email: 'E-mail',
                phone: 'Phone',
                service: 'Service',
                size: 'Property size',
                date: 'Preferred date',
                msg: 'Message',
                sent: 'Sent via durmisi-clean website'
            } : {
                subj: 'Reinigungsanfrage',
                name: 'Name',
                email: 'E-Mail',
                phone: 'Telefon',
                service: 'Leistung',
                size: 'Objektgrösse',
                date: 'Wunschtermin',
                msg: 'Nachricht',
                sent: 'Gesendet über die Website von Durmisi&Clean'
            };

            var lines = [L.name + ': ' + get('name'), L.email + ': ' + get('email')];
            if (get('phone')) lines.push(L.phone + ': ' + get('phone'));
            if (serviceText) lines.push(L.service + ': ' + serviceText);
            if (get('size')) lines.push(L.size + ': ' + get('size'));
            if (get('date')) lines.push(L.date + ': ' + get('date'));
            lines.push('', L.msg + ':', get('message'), '', '—', L.sent);

            var to = (window.DC && window.DC.contact && window.DC.contact.email) || '';
            var subject = L.subj + (serviceText ? ' — ' + serviceText : '') + (get('name') ? ' — ' + get('name') : '');
            var href = 'mailto:' + encodeURIComponent(to) + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(lines.join('\n'));

            /* Confirm to the visitor FIRST. Handing off to a mail client can fail
               silently (no handler registered, blocked by the browser), and the one
               thing that must never happen is a submit that looks like nothing at
               all happened. */
            showStatus('ok', 'ct.status.ok');

            try {
                var link = document.createElement('a');
                link.href = href;
                link.rel = 'noopener';
                document.body.appendChild(link);
                link.click();
                link.remove();
            } catch (err) {
                showStatus('err', 'ct.status.mailFail');
            }
        });

        // Keep visible messages in the active language
        document.addEventListener('languagechange', function () {
            if (status && status.classList.contains('is-visible')) {
                var span = $('span', status);
                if (span) span.textContent = t(status.getAttribute('data-status-key'));
            }
            $$('.field__error[data-error-key]', form).forEach(function (slot) {
                slot.textContent = t(slot.getAttribute('data-error-key'));
            });
        });
    }

    /* --- Footer year ------------------------------------------------------- */
    function initYear() {
        $$('[data-year]').forEach(function (el) {
            el.textContent = String(new Date().getFullYear());
        });
    }

    /* --- Boot -------------------------------------------------------------- */
    function boot() {
        initHeader();
        initNav();
        initFaq();
        initForm();
        initYear();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', boot);
    } else {
        boot();
    }
})();
