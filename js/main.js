/* ==========================================================================
   Durmisi&Clean — Interface behaviour
   Sticky header · mobile drawer · scroll reveal · counters · FAQ · form
   Depends on js/i18n.js for window.DC.t() and window.DC.contact.
   ========================================================================== */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var $  = function (sel, ctx) { return (ctx || document).querySelector(sel); };
  var $$ = function (sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); };

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
      if (!ticking) { window.requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
    update();
  }

  /* --- Mobile navigation drawer ----------------------------------------- */
  function initNav() {
    var toggle = $('.nav-toggle');
    var nav    = $('#primary-nav');
    var scrim  = $('.nav-scrim');
    if (!toggle || !nav) return;

    var lastFocused = null;
    var FOCUSABLE = 'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';

    function isOpen() { return toggle.getAttribute('aria-expanded') === 'true'; }

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
      var target = (lastFocused && document.contains(lastFocused) && lastFocused !== document.body)
        ? lastFocused : toggle;
      target.focus();
    }

    toggle.addEventListener('click', function () { isOpen() ? close() : open(); });
    if (scrim) scrim.addEventListener('click', close);

    // Close after choosing a destination
    $$('a', nav).forEach(function (a) {
      a.addEventListener('click', function () { if (isOpen()) close(); });
    });

    document.addEventListener('keydown', function (e) {
      if (!isOpen()) return;
      if (e.key === 'Escape') { close(); return; }
      if (e.key !== 'Tab') return;

      // Trap focus inside the drawer
      var items = $$(FOCUSABLE, nav).filter(function (el) { return el.offsetParent !== null; });
      if (!items.length) return;
      var first = items[0];
      var last  = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    });

    // Reset when resizing back up to desktop
    window.addEventListener('resize', function () {
      if (window.innerWidth > 960 && isOpen()) close();
    });
  }

  /* --- Scroll reveal ----------------------------------------------------- */
  function initReveal() {
    var items = $$('[data-reveal]');
    if (!items.length) return;

    // Tell the head script the reveal system is live, so it stops its failsafe.
    window.__dcReveal = true;

    if (reduceMotion || !('IntersectionObserver' in window)) {
      document.documentElement.classList.remove('js-reveal');
      return;
    }
    document.documentElement.classList.add('js-reveal');

    function show(el) {
      if (el.classList.contains('is-visible')) return;
      // Stagger siblings that share a parent
      var group = el.parentElement ? $$('[data-reveal]', el.parentElement) : [el];
      var index = Math.max(group.indexOf(el), 0);
      el.style.setProperty('--reveal-delay', Math.min(index, 5) * 90 + 'ms');
      el.classList.add('is-visible');
      io.unobserve(el);
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) show(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

    items.forEach(function (el) { io.observe(el); });

    /* Safety net. An anchor jump (leistungen.html#baureinigung) or a fast scroll
       can carry an element past the viewport without it ever intersecting, and
       IntersectionObserver then never fires — leaving the element stuck at
       opacity 0 for good. Sweep anything that is at or above the fold. */
    var sweeping = false;
    function sweep() {
      sweeping = false;
      $$('[data-reveal]:not(.is-visible)').forEach(function (el) {
        if (el.getBoundingClientRect().top < window.innerHeight) show(el);
      });
    }
    function queueSweep() {
      if (!sweeping) { window.requestAnimationFrame(sweep); sweeping = true; }
    }

    window.addEventListener('scroll', queueSweep, { passive: true });
    window.addEventListener('resize', queueSweep);
    window.addEventListener('hashchange', queueSweep);
    window.addEventListener('load', queueSweep);
    // Background tabs freeze rAF; catch up the moment the page is looked at.
    document.addEventListener('visibilitychange', queueSweep);
  }

  /* --- Animated counters ------------------------------------------------- */
  function initCounters() {
    var nums = $$('[data-count]');
    if (!nums.length) return;

    function render(el, value) {
      var decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
      var suffix = el.getAttribute('data-suffix') || '';
      var text = value.toFixed(decimals);
      if (decimals > 0) text = text.replace('.', window.DC && window.DC.lang() === 'en' ? '.' : ',');
      el.innerHTML = text + (suffix ? '<small>' + suffix + '</small>' : '');
    }

    function run(el) {
      var target = parseFloat(el.getAttribute('data-count'));
      if (isNaN(target)) return;
      if (reduceMotion) { render(el, target); return; }

      var duration = 1400;
      var start = null;
      function tick(now) {
        if (start === null) start = now;
        var p = Math.min((now - start) / duration, 1);
        var eased = 1 - Math.pow(1 - p, 3);
        render(el, target * eased);
        if (p < 1) window.requestAnimationFrame(tick);
      }
      window.requestAnimationFrame(tick);
    }

    if (!('IntersectionObserver' in window)) {
      nums.forEach(function (el) { render(el, parseFloat(el.getAttribute('data-count'))); });
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        run(entry.target);
        io.unobserve(entry.target);
      });
    }, { threshold: 0.4 });

    /* The real figure is written in the HTML and left there. We never blank it
       to 0 up front — if a frame never runs, the page must still read "12+
       years", not "0+ years". The count-up starts from 0 only once it is
       actually about to animate. */
    nums.forEach(function (el) { io.observe(el); });

    // Re-render on language switch so the decimal separator follows the locale
    document.addEventListener('languagechange', function () {
      nums.forEach(function (el) { render(el, parseFloat(el.getAttribute('data-count'))); });
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
    var t = function (k) { return window.DC ? window.DC.t(k) : k; };

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
      el.addEventListener('input', function () { clearError(el); });
      el.addEventListener('change', function () { clearError(el); });
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
      var serviceText = serviceEl && serviceEl.selectedIndex > 0
        ? serviceEl.options[serviceEl.selectedIndex].text
        : '';

      var isEn = window.DC && window.DC.lang() === 'en';
      var L = isEn
        ? { subj: 'Cleaning enquiry', name: 'Name', email: 'E-mail', phone: 'Phone',
            service: 'Service', size: 'Property size', date: 'Preferred date',
            msg: 'Message', sent: 'Sent via durmisi-clean website' }
        : { subj: 'Reinigungsanfrage', name: 'Name', email: 'E-Mail', phone: 'Telefon',
            service: 'Leistung', size: 'Objektgrösse', date: 'Wunschtermin',
            msg: 'Nachricht', sent: 'Gesendet über die Website von Durmisi&Clean' };

      var lines = [
        L.name + ': ' + get('name'),
        L.email + ': ' + get('email')
      ];
      if (get('phone'))  lines.push(L.phone + ': ' + get('phone'));
      if (serviceText)   lines.push(L.service + ': ' + serviceText);
      if (get('size'))   lines.push(L.size + ': ' + get('size'));
      if (get('date'))   lines.push(L.date + ': ' + get('date'));
      lines.push('', L.msg + ':', get('message'), '', '—', L.sent);

      var to = (window.DC && window.DC.contact && window.DC.contact.email) || '';
      var subject = L.subj + (serviceText ? ' — ' + serviceText : '') + (get('name') ? ' — ' + get('name') : '');
      var href = 'mailto:' + encodeURIComponent(to) +
                 '?subject=' + encodeURIComponent(subject) +
                 '&body=' + encodeURIComponent(lines.join('\n'));

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
    initReveal();
    initCounters();
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
