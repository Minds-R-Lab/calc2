/* ============================================
   CALCULUS II — ANALYTICS MODULE
   ============================================
   Google Analytics 4 integration with custom
   event tracking for student interactions.
   ============================================ */

(function () {
  'use strict';

  // ── Read config ──
  var gaId = (typeof COURSE !== 'undefined' && COURSE.analytics && COURSE.analytics.gaId)
    ? COURSE.analytics.gaId
    : null;

  if (!gaId || gaId === 'G-XXXXXXXXXX') {
    console.info('[Analytics] No GA4 Measurement ID configured. Set COURSE.analytics.gaId in course-config.js');
    // Still set up the tracking functions (they just won't send data)
  }

  // ── Load GA4 ──
  if (gaId && gaId !== 'G-XXXXXXXXXX') {
    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + gaId;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { dataLayer.push(arguments); };
    gtag('js', new Date());
    gtag('config', gaId, {
      page_title: document.title,
      page_location: window.location.href,
      cookie_flags: 'SameSite=None;Secure',
    });
  } else {
    // Stub so calls don't throw
    window.gtag = window.gtag || function () {};
  }

  // ── Detect current chapter & page from URL ──
  var path = window.location.pathname;
  var filename = path.split('/').pop() || 'index.html';
  var chapterMatch = filename.match(/^ch(\d+)/);
  var chapter = chapterMatch ? 'Ch' + chapterMatch[1] : 'general';
  var isStudyTools = filename.indexOf('study-tools') !== -1;

  // ── Helper: send custom event ──
  function trackEvent(eventName, params) {
    params = params || {};
    params.chapter = params.chapter || chapter;
    params.page = params.page || filename;
    gtag('event', eventName, params);
  }

  // ── Expose globally for inline handlers ──
  window.trackEvent = trackEvent;

  // ══════════════════════════════════════════
  //  AUTOMATIC TRACKING (runs on every page)
  // ══════════════════════════════════════════

  document.addEventListener('DOMContentLoaded', function () {

    // ── 1. Time on page ──
    var startTime = Date.now();
    window.addEventListener('beforeunload', function () {
      var seconds = Math.round((Date.now() - startTime) / 1000);
      trackEvent('time_on_page', { duration_seconds: seconds });
    });

    // ── 2. Scroll depth ──
    var maxScroll = 0;
    var scrollReported = {};
    window.addEventListener('scroll', function () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      var docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      var pct = Math.round((scrollTop / docHeight) * 100);
      if (pct > maxScroll) maxScroll = pct;
      // Report at 25%, 50%, 75%, 100% milestones
      [25, 50, 75, 100].forEach(function (milestone) {
        if (maxScroll >= milestone && !scrollReported[milestone]) {
          scrollReported[milestone] = true;
          trackEvent('scroll_depth', { depth_percent: milestone });
        }
      });
    });

    // ── 3. Study Tools: Tab switches ──
    if (isStudyTools) {
      document.querySelectorAll('.tab-btn').forEach(function (btn) {
        btn.addEventListener('click', function () {
          var tabName = (this.textContent || '').trim().split('\n').pop().trim();
          trackEvent('study_tab_click', { tab_name: tabName });
        });
      });

      // ── 4. Flashcard interactions ──
      var flipArea = document.querySelector('.flashcard-inner') ||
                     document.querySelector('.card-inner');
      if (flipArea) {
        flipArea.closest('.flashcard, [onclick*="flip"]')
          && document.addEventListener('click', function (e) {
            var card = e.target.closest('.flashcard, .card-inner, [onclick*="flip"]');
            if (card) {
              trackEvent('flashcard_flip', {
                card_index: document.getElementById('card-counter')
                  ? document.getElementById('card-counter').textContent : 'unknown',
              });
            }
          });
      }

      // ── 5. Flashcard navigation ──
      document.querySelectorAll('button').forEach(function (btn) {
        var text = (btn.textContent || '').trim();
        if (text.indexOf('Next') !== -1 || text.indexOf('Prev') !== -1 || text === 'Shuffle') {
          btn.addEventListener('click', function () {
            trackEvent('flashcard_nav', { action: text.replace(/[^a-zA-Z]/g, '') });
          });
        }
      });

      // ── 6. Flashcard confidence ratings ──
      document.querySelectorAll('.rating-btn, [onclick*="rateCard"]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          var rating = (this.textContent || '').trim();
          trackEvent('flashcard_rating', { rating: rating });
        });
      });

      // ── 7. Step-by-step solver ──
      document.querySelectorAll('button').forEach(function (btn) {
        var text = (btn.textContent || '').trim();
        if (text === 'Next Step' || text === 'Reveal All') {
          btn.addEventListener('click', function () {
            trackEvent('solver_action', { action: text.replace(/\s/g, '_').toLowerCase() });
          });
        }
      });

      // ── 8. ELI5 toggles ──
      document.querySelectorAll('button').forEach(function (btn) {
        var text = (btn.textContent || '').trim();
        if (text.indexOf('Explain simply') !== -1 || text.indexOf('Hide simple') !== -1) {
          btn.addEventListener('click', function () {
            trackEvent('eli5_toggle', { action: 'toggle' });
          });
        }
      });

      // ── 9. Lecture Notes / Worksheet generation ──
      document.querySelectorAll('button').forEach(function (btn) {
        var text = (btn.textContent || '').trim();
        if (text.indexOf('Generate') !== -1 || text.indexOf('Print') !== -1) {
          btn.addEventListener('click', function () {
            var checked = document.querySelectorAll('.ws-check:checked');
            trackEvent('worksheet_generate', {
              problem_count: checked ? checked.length : 0,
            });
          });
        }
      });

      // ── 10. Problem selector checkboxes ──
      document.querySelectorAll('.ws-check').forEach(function (cb) {
        cb.addEventListener('change', function () {
          trackEvent('worksheet_problem_toggle', {
            problem: this.dataset.problem || 'unknown',
            section: this.dataset.section || 'unknown',
            checked: this.checked,
          });
        });
      });
    }

    // ── 11. Collapsible section toggles (all pages) ──
    document.querySelectorAll('.collapsible-btn, [onclick*="toggleCollapsible"]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var title = (this.textContent || '').trim().substring(0, 60);
        trackEvent('collapsible_toggle', { section_title: title });
      });
    });

    // ── 12. External link clicks ──
    document.querySelectorAll('a[href^="http"]').forEach(function (link) {
      link.addEventListener('click', function () {
        trackEvent('external_link', { url: this.href });
      });
    });

    // ── 13. Navigation link clicks ──
    document.querySelectorAll('nav a, .topic-nav a').forEach(function (link) {
      link.addEventListener('click', function () {
        trackEvent('nav_click', { destination: this.getAttribute('href') || 'unknown' });
      });
    });

    // ── 14. Exam Generator tracking ──
    if (filename === 'exam-generator.html') {
      document.querySelectorAll('button').forEach(function (btn) {
        var text = (btn.textContent || '').trim();
        if (text.indexOf('Generate') !== -1) {
          btn.addEventListener('click', function () {
            trackEvent('exam_generate');
          });
        }
      });
    }

    // ── 15. Decision Guide tracking ──
    if (filename.indexOf('decision-guide') !== -1) {
      document.querySelectorAll('button, .choice-btn, [onclick]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          var text = (this.textContent || '').trim().substring(0, 40);
          trackEvent('decision_guide_click', { choice: text });
        });
      });
    }

  }); // end DOMContentLoaded

})();
