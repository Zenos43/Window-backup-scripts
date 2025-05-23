/******
*    name: Firefox Max Speed UserJS ( Zenos43 modded )
* version: 115+
*    urls: https://github.com/Zenos43/Window-backup-scripts/blob/main/user.js [repo]
* HOWTO: Go to about:support -> Open Profile Folder -> Save user.js -> Restart
******/

//Dark Mode native: remove /* and */ to activate

//Dark Mode style 1
/*
user_pref("browser.active_color", "blue");
user_pref("browser.display.background_color", "#3f3f3f");
user_pref("browser.display.foreground_color", "#ffffff");
user_pref("browser.anchor_color", "#ffcc99");
user_pref("browser.visited_color", "#cc99ff");
user_pref("browser.display.document_color_use", 2);
user_pref("browser.display.use_system_colors", false);
user_pref("layout.css.forced-colors.enabled", false);
*/

//Dark Mode style 2
/*
user_pref("browser.active_color", "blue");
user_pref("browser.display.background_color", "#121212");
user_pref("browser.display.foreground_color", "#ffffff");
user_pref("browser.anchor_color", "#ffcc99");
user_pref("browser.visited_color", "#cc99ff");
user_pref("browser.display.document_color_use", 2);
user_pref("browser.display.use_system_colors", false);
user_pref("layout.css.forced-colors.enabled", false);
*/

//Dark Mode style Dark Reader
/*
user_pref("browser.active_color", "blue");
user_pref("browser.display.background_color", "#232627");
user_pref("browser.display.foreground_color", "#E4E3DF");
user_pref("browser.anchor_color", "#92BBDE");
user_pref("browser.visited_color", "#ED944F");
user_pref("browser.display.document_color_use", 2);
user_pref("browser.display.use_system_colors", false);
user_pref("layout.css.forced-colors.enabled", false);
*/

//Gray Mode
/*
user_pref("browser.active_color", "blue");
user_pref("browser.display.background_color", "#cccccc");
user_pref("browser.display.foreground_color", "#000000");
user_pref("browser.anchor_color", "#800040");
user_pref("browser.visited_color", "#b93d00");
user_pref("browser.display.document_color_use", 2);
user_pref("browser.display.use_system_colors", false);
user_pref("layout.css.forced-colors.enabled", false);
*/

//Dark Brown Mode
/*
user_pref("browser.active_color", "blue");
user_pref("browser.display.background_color", "#3f3f3f");
user_pref("browser.display.foreground_color", "#c9c9bb");
user_pref("browser.anchor_color", "#dca3a3");
user_pref("browser.visited_color", "#bba66f");
user_pref("browser.display.document_color_use", 2);
user_pref("browser.display.use_system_colors", false);
user_pref("layout.css.forced-colors.enabled", false);
*/

//Light Mode
/*
user_pref("browser.active_color", "#EE0000");
user_pref("browser.display.background_color", "#FFFFFF");
user_pref("browser.display.foreground_color", "#FBFBFE");
user_pref("browser.anchor_color", "#0000EE");
user_pref("browser.visited_color", "#551A8B");
user_pref("browser.display.document_color_use", 1);
user_pref("browser.display.use_system_colors", true);
user_pref("layout.css.forced-colors.enabled", true);
*/
//Tweaks
//Instant start-up
user_pref("browser.startup.preXulSkeletonUI", false);

// PREF: improve font rendering by using DirectWrite everywhere like Chrome [WINDOWS]
user_pref("gfx.font_rendering.cleartype_params.rendering_mode", 5);
user_pref("gfx.font_rendering.cleartype_params.cleartype_level", 100);
user_pref("gfx.font_rendering.cleartype_params.force_gdi_classic_max_size", 0);
user_pref("gfx.font_rendering.directwrite.use_gdi_table_loading", false);
//user_pref("gfx.font_rendering.cleartype_params.enhanced_contrast", 50); // 50-100 [OPTIONAL]
user_pref("security.OCSP.enabled", 0);

// Smooth scrolling
user_pref("general.smoothScroll.mouseWheel.durationMaxMS", 250);
user_pref("general.smoothScroll.mouseWheel.durationMinMS", 200);
user_pref("mousewheel.enable_pixel_scrolling", false);
user_pref("apz.overscroll.enabled", true);
user_pref("general.smoothScroll", true);
user_pref("mousewheel.default.delta_multiplier_y", 300);

// Disable automatically hides the cursor on typing
user_pref("dom.animations.offscreen-throttling", false);

// Open 2+ video without throttling/pausing
user_pref("widget.gtk.hide-pointer-while-typing.enabled", false)

// 
user_pref("network.early-hints.enabled", true);
user_pref("network.early-hints.preconnect.enabled", true);
user_pref("network.early-hints.preconnect.max_connections", 20);
user_pref("zen.theme.border-radius", 0);
user_pref("zen.theme.gradient", false);
user_pref("zen.theme.color-prefs.colorful", false);
user_pref("zen.view.experimental-rounded-view", false);
user_pref("zen.widget.windows.acrylic", false);
user_pref("zen.view.compact.animate-sidebar", false);
user_pref("browser.translations.panelShown", false);
user_pref("browser.translations.select.enable", false);
user_pref("browser.translations.enable", false);
user_pref("browser.translations.automaticallyPopup", false);

//Snappier tooltips
user_pref("ui.tooltip.delay_ms", 60);
user_pref("ui.tooltipDelay", 60);
user_pref("ui.submenuDelay", 0);
user_pref("browser.overlink-delay", 10);

//Enable Alt-Tab-like switch, Ctrl+Tab
user_pref("browser.ctrlTab.sortByRecentlyUsed", true);

//Enable userChrome.css
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

//Enable Ctrl+Shift+Alt+I
user_pref("devtools.chrome.enabled", true);
user_pref("devtools.debugger.remote-enabled", true);
user_pref("devtools.debugger.prompt-connection", false);

// Reduce disk read/write
user_pref("browser.sessionstore.idleDelay", 180);
user_pref("browser.sessionstore.interval", 3600000);
//user_pref("browser.sessionstore.collect_zoom", false);
//user_pref("browser.sessionstore.privacy_level", 2);
user_pref("browser.sessionstore.restore_pinned_tabs_on_demand", true);
//user_pref("browser.sessionhistory.max_total_viewers", 0);

// Disable Pocket and Accessibility
user_pref("extensions.pocket.enabled", false);
user_pref("accessibility.force_disabled", 1);

// Disable Taskbar Preview
user_pref("browser.taskbar.lists.enabled", false);
user_pref("browser.taskbar.lists.frequent.enabled", false);
user_pref("browser.taskbar.lists.maxListItemCount", 0);
//user_pref("browser.taskbar.lists.refreshInSeconds", 2147483647);
user_pref("browser.taskbar.lists.tasks.enabled", false);
user_pref("browser.taskbar.previews.max", 0);

// Enable PiP
user_pref("media.videocontrols.picture-in-picture.enable-when-switching-tabs.enabled", true);

// Optimize rendering speed
// https://voz.vn/t/tong-hop-nhung-addon-chat-cho-firefox-pc-mobile.682181/post-23570551
// https://voz.vn/t/tong-hop-nhung-addon-chat-cho-firefox-pc-mobile.682181/post-27064564
user_pref("nglayout.initialpaint.delay", 2000);
user_pref("nglayout.initialpaint.delay_in_oopif", 2000);
//user_pref("content.notify.backoffcount", 0);
//user_pref("content.notify.interval", 2000000);
//user_pref("content.notify.ontimer", true);
user_pref("gfx.webrender.super-resolution.nvidia", true);
user_pref("javascript.options.wasm_experimental_compile_pipeline", true);

// Optimize page loading speed
user_pref("network.dns.disablePrefetch", false);
user_pref("network.prefetch-next", true);
user_pref("network.predictor.enabled", true);
user_pref("network.dns.disablePrefetchFromHTTPS", false);
user_pref("network.dnsCacheEntries", 20000);
user_pref("network.dnsCacheExpiration", 3600);
user_pref("network.dnsCacheExpirationGracePeriod", 240);
user_pref("network.predictor.enable-hover-on-ssl", false);
user_pref("security.remote_settings.crlite_filters.enabled", true);
user_pref("security.pki.crlite_mode", 2);
user_pref("network.predictor.enable-prefetch", true);
user_pref("network.predictor.preconnect-min-confidence", 20);
user_pref("network.predictor.prefetch-force-valid-for", 3600);
user_pref("network.predictor.prefetch-min-confidence", 30);
user_pref("network.predictor.prefetch-rolling-load-count", 120);
user_pref("network.predictor.preresolve-min-confidence", 10);

// Faster SSL
user_pref("network.ssl_tokens_cache_capacity", 32768);

// Disable network separations
user_pref("privacy.partition.network_state", false);

// Reduce cpu usage ( Not recommend )
user_pref("media.rdd-vpx.enabled", false);
user_pref("media.rdd-process.enabled", false);

// Disable Spectre ( Not recommend )
user_pref("javascript.options.spectre.disable_for_isolated_content", true);
user_pref("javascript.options.spectre.index_masking", false);
user_pref("javascript.options.spectre.object_mitigations", false);
user_pref("javascript.options.spectre.string_mitigations", false);
user_pref("javascript.options.spectre.value_masking", false);
user_pref("javascript.options.spectre.jit_to_cxx_calls", false);

// Enable punycode
// https://voz.vn/t/tong-hop-nhung-addon-chat-cho-firefox-pc-mobile.682181/post-25938099
user_pref("network.IDN_show_punycode", true);

// Prefer no animation
// https://voz.vn/p/33057189/
user_pref("ui.prefersReducedMotion", 1);

// Maximize bandwidth
// https://voz.vn/p/33049233/
user_pref("network.http.http3.cc_algorithm", 0);

// Tweak bytecode
// https://voz.vn/p/32603773/
user_pref("browser.cache.jsbc_compression_level", 2);
user_pref("dom.script_loader.bytecode_cache.strategy", -1);
user_pref("javascript.options.mem.gc_balanced_heap_limits", true);

// Enable old clear history dialog
user_pref("privacy.sanitize.useOldClearHistoryDialog", true);

// Disable IPv6
//user_pref("network.dns.disableIPv6", true);

// GoogleDNS
// https://voz.vn/t/tong-hop-nhung-addon-chat-cho-firefox-pc-mobile.682181/post-24688026
//user_pref("network.trr.uri", "https://dns.nextdns.io/");
//user_pref("network.trr.custom_uri", "https://dns.nextdns.io/");
//user_pref("network.trr.mode", 2);

// Enable ECS
user_pref("network.trr.disable-ECS", true);

// No affiliate allow
user_pref("privacy.query_stripping.enabled", true);
user_pref("privacy.query_stripping.strip_list", uls_trackid utm_campaign utm_content utm_medium utm_source utm_term);
user_pref("privacy.query_stripping.enabled.pbmode", true);

// Enable h265
user_pref("dom.media.webcodecs.h265.enabled", true);

// Re-enable backspace for returning to previous page
user_pref("browser.backspace_action", 0);

// Enable Kyber to access blocked websites
user_pref("security.tls.enable_kyber", true);

// Reduce network request
// https://voz.vn/t/tong-hop-nhung-addon-chat-cho-firefox-pc-mobile.682181/post-27409530
user_pref("network.http.rcwn.enabled", false);

// Fix Facebook time (ESR <= 115)
user_pref("dom.textMetrics.fontBoundingBox.enabled", true);

// PREF: disable EcoQoS [WINDOWS] 
// Background tab processes use efficiency mode on Windows 11 to limit resource use. 
// [WARNING] Leave this alone, unless you're on Desktop and you rely on 
// background tabs to have maximum performance. 
// [1] https://devblogs.microsoft.com/performance-diagnostics/introducing-ecoqos/ 
// [2] https://bugzilla.mozilla.org/show_bug.cgi?id=1796525 
// [3] https://bugzilla.mozilla.org/show_bug.cgi?id=1800412 
// [4] https://reddit.com/r/firefox/comments/107fj69/how_can_i_disable_the_efficiency_mode_on_firefox/ 
user_pref("dom.ipc.processPriorityManager.backgroundUsesEcoQoS", false);

// PREF: use bigger packets
// Reduce Firefox's CPU usage by requiring fewer application-to-driver data transfers.
// However, it does not affect the actual packet sizes transmitted over the network.
// [1] https://www.mail-archive.com/support-seamonkey@lists.mozilla.org/msg74561.html
// Can cause crashing: https://github.com/BrowserWorks/Waterfox/releases/tag/G6.0.10
user_pref("network.buffer.cache.size", 262144); // 256 kb; default=32768 (32 kb)
user_pref("network.buffer.cache.count", 128); // default=24
user_pref("network.http.pacing.requests.burst", 12); // default=10, controls how many HTTP requests are sent at once
user_pref("network.http.pacing.requests.min-parallelism", 8); // default=6
user_pref("network.http.max-connections", 1800); // default=900
user_pref("network.http.max-persistent-connections-per-server", 12); // default=6 
user_pref("network.http.max-urgent-start-excessive-connections-per-host", 6); // default=3
user_pref("media.cache_size", 1024000); // in KB, default = 512000 (500MB)

// Enable Add Search
user_pref("browser.urlbar.update2.engineAliasRefresh", true);

// Enable PWA
user_pref("browser.ssb.enabled", true);

// Force RAM cache, uncomment // to enable
// https://voz.vn/t/cach-ep-firefox-luu-cache-tren-ram-ma-khong-can-ramdisk.664955/
user_pref("browser.cache.disk.enable", false);
user_pref("browser.cache.memory.enable", true);
user_pref("browser.cache.disk.capacity", 0);
user_pref("browser.cache.disk.max_entry_size", 0);
user_pref("browser.cache.disk.smart_size.first_run", false);
user_pref("browser.cache.disk_cache_ssl", false);

// Disable notifications
user_pref("dom.webnotifications.enabled", false);
user_pref("dom.webnotifications.serviceworker.enabled", false);

// Enable WebM
user_pref("media.mediasource.webm.enabled", true)

// Disable Flash
user_pref("plugin.state.flash", 0);

// Disable Tracking ( Useless! ublock is better )
user_pref("privacy.trackingprotection.enabled", false);                   // Disable tracking protection
user_pref("privacy.trackingprotection.cryptomining.enabled", false);      // Disable cryptomining protection
user_pref("privacy.resistFingerprinting", False);                       // Disable fingerprint protection
user_pref("privacy.trackingprotection.fingerprinting.enabled", false);    // Disable fingerprint protection 
user_pref("privacy.trackingprotection.socialtracking.enabled", false);    // Disable social protection
user_pref("privacy.globalprivacycontrol.enabled", true);                 // Successor to DNT
user_pref("privacy.globalprivacycontrol.functionality.enabled", true);   // Successor to DNT

// Block autoplay in tabs until selected
user_pref("media.block-autoplay-until-in-foreground", true);
user_pref("media.block-play-until-document-interaction", true);
user_pref("media.block-play-until-visible", true);

// Tabs/address bar tweaks
user_pref("browser.tabs.hoverPreview.enabled", false); // Disable tab previews when hovering over them
user_pref("browser.urlbar.trimURLs", false); // Display all parts of the url in the address bar
user_pref("browser.urlbar.trimHttps", false); // ^
user_pref("browser.tabs.tabmanager.enabled", false); // Disable tab manager menu/icon
user_pref("browser.tabs.tabMinWidth", 76); // Minimum tab width, 76 is the default in 88.0
user_pref("browser.urlbar.suggest.openpage", false);

// Zoom tweaks
user_pref("zoom.maxPercent", 700);
user_pref("zoom.minPercent", 10);

// Increase the speed of processing images
user_pref("image.mem.decode_bytes_at_a_time", 131072); // The speed of processing images (default=16384=16KB) (131072=128KB)

// Improve browser cached
//browser.cache.disk.capacity = 8192000 # Increase cache size on disk to 8 GB
//browser.cache.disk.smart_size.enabled = false # force a fixed max cache size on disk
browser.cache.frecency_half_life_hours = 18 # lower cache sweep intervals
browser.cache.max_shutdown_io_lag = 16 # let the browser finish more io on shutdown
user_pref("browser.cache.memory.capacity", 4194304);
user_pref("browser.cache.memory.max_entry_size", -1);
//browser.cache.disk.metadata_memory_limit = 15360 # increase size (in KB) of "Intermediate memory caching of frequently used metadata (a.k.a. disk cache memory pool)"

// Optimize RAM, uncomment // to enable
user_pref("dom.ipc.processCount", 1);
user_pref("fission.autostart", false);
user_pref("dom.ipc.processCount.webIsolated", 1);

// Disable WebGL
user_pref("webgl.disabled", true);

// Disable WebRTC
user_pref("media.peerconnection.enabled", false);
user_pref("media.peerconnection.video.enabled", false);
user_pref("media.peerconnection.identity.enabled", false);
user_pref("media.navigator.enabled", false);
user_pref("media.navigator.video.enabled", false);

// Send a DO NOT TRACK (DNT) header
user_pref("privacy.donottrackheader.enabled", true);

// Set time range to "Everything" as default in "Clear Recent History" when pressing Ctrl+Shift+H
user_pref("privacy.sanitize.timeSpan", 0);

// Check all the boxes by default in "Clear Recent History" when pressing Ctrl+Shift+H
user_pref("privacy.cpd.cache", true);          // Cache
user_pref("privacy.cpd.cookies", true);        // Cookies
user_pref("privacy.cpd.downloads", true);      // Downloads - This is not listed
user_pref("privacy.cpd.formdata", true);       // Form & Search History
user_pref("privacy.cpd.history", true);        // Browsing & Download History
user_pref("privacy.cpd.offlineApps", true);    // Offline Website Data
user_pref("privacy.cpd.passwords", true);      // Passwords - This is not listed
user_pref("privacy.cpd.sessions", true);       // Active Logins
user_pref("privacy.cpd.siteSettings", true);   // Site Preferences

// Fuck Webkit
user_pref("layout.css.prefixes.webkit", false);
user_pref("browser.urlbar.speculativeConnect.enabled", true);

// Optimize back/forward cached no need to reload
user_pref("dom.script_loader.navigation_cache", true);
user_pref("browser.cache.check_doc_frequency", 2);
user_pref("dom.script_loader.external_scripts.speculate_async.enabled", false);
user_pref("dom.script_loader.external_scripts.speculate_link_preload.enabled", false);
user_pref("dom.script_loader.external_scripts.speculate_non_parser_inserted.enabled", false);

// GFX rendering tweaks
user_pref("gfx.canvas.accelerated", true);
user_pref("gfx.canvas.accelerated.cache-items", 32768);
user_pref("gfx.canvas.accelerated.cache-size", 4096);
user_pref("layers.acceleration.force-enabled", false);
user_pref("gfx.content.skia-font-cache-size", 80);
user_pref("gfx.webrender.all", true);
user_pref("gfx.webrender.compositor", true);
user_pref("gfx.webrender.compositor.force-enabled", true);
user_pref("gfx.webrender.enabled", true);
user_pref("gfx.webrender.precache-shaders", true);
user_pref("gfx.webrender.program-binary-disk", true);
user_pref("gfx.webrender.software.opengl", true);
user_pref("image.mem.shared.unmap.min_expiration_ms", 120000);
user_pref("layers.gpu-process.enabled", true);
user_pref("layers.gpu-process.force-enabled", true);

// Media
user_pref("image.cache.size", 10485760);
user_pref("media.memory_cache_max_size", 1048576);
user_pref("media.memory_caches_combined_limit_kb", 3145728);
user_pref("media.hardware-video-decoding.force-enabled", true);
user_pref("media.ffmpeg.vaapi.enabled", true);
user_pref("media.cache_readahead_limit", 300); // 300 = 5min. Buffer X amount of seconds ahead (when media.mediasource.enabled is set to true [default] this setting might only apply to the built in media player) 
user_pref("media.cache_resume_threshold", 300); // Only continue buffering while the already-loaded buffer is shorter than X seconds
user_pref("image.http.accept", "/"); // don't accept webp by default. Default = "image/webp,/" 

// PDF Tweaks ( Dark mode )
user_pref("pdfjs.forcePageColors", true);
user_pref("pdfjs.pageColorsBackground", #202020);
user_pref("pdfjs.pageColorsForeground ", #d1d1d1);

// Disable FastBack to save RAM
//user_pref("fission.bfcacheInParent", false);
//user_pref("fission.disableSessionHistoryInParent", true);
//user_pref("browser.sessionhistory.max_total_viewers", 0);

// Enable Multi-Account Container
//user_pref("privacy.userContext.enabled", true); //enable Multi-Account Container
//user_pref("privacy.userContext.ui.enabled", true); //enable Multi-Account Container

/*** [SECTION 0200]: GEOLOCATION / LANGUAGE / LOCALE ***/
user_pref("_user.js.parrot", "0200 syntax error: the parrot's definitely deceased!");
/* 0201: use Mozilla geolocation service instead of Google if permission is granted [FF74+]
 * Optionally enable logging to the console (defaults to false) ***/
user_pref("geo.provider.network.url", "https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%");
   // user_pref("geo.provider.network.logging.enabled", true); // [HIDDEN PREF]
/* 0202: disable using the OS's geolocation service ***/
user_pref("geo.provider.ms-windows-location", false); // [WINDOWS]
user_pref("geo.provider.use_corelocation", false); // [MAC]
user_pref("geo.provider.use_gpsd", false); // [LINUX]
user_pref("geo.provider.use_geoclue", false); // [FF102+] [LINUX]

// Enable Cookie Banner Protection
user_pref("cookiebanners.service.mode", 2);
user_pref("cookiebanners.service.mode.privateBrowsing", 2);

// Disable Restricted Domains
user_pref("extensions.webextensions.restrictedDomains", "");

// Modal-less mpv:// handler
user_pref("network.protocol-handler.external.mpv", true);

/****************************************************************************
 * Betterfox                                                                *
 * "Ad meliora"                                                             *
 * version: 128                                                             *
 * url: https://github.com/yokoffing/Betterfox                              *
****************************************************************************/

/****************************************************************************
 * SECTION: FASTFOX                                                         *
****************************************************************************/

/** TELEMETRY ***/
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.coverage.opt-out", true);
user_pref("toolkit.coverage.opt-out", true);
user_pref("toolkit.coverage.endpoint.base", "");
user_pref("browser.ping-centre.telemetry", false);
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("browser.vpn_promo.enabled", false);

/** EXPERIMENTS ***/
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");

/** CRASH REPORTS ***/
user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);

/** DETECTION ***/
user_pref("captivedetect.canonicalURL", "");
user_pref("network.captive-portal-service.enabled", false);
user_pref("network.notify.checkForProxies", false);
user_pref("network.connectivity-service.enabled", false);
user_pref("dom.private-attribution.submission.enabled", false);

/****************************************************************************
 * SECTION: PESKYFOX                                                        *
****************************************************************************/
/** MOZILLA UI ***/
user_pref("browser.privatebrowsing.vpnpromourl", "");
user_pref("extensions.getAddons.showPane", false);
user_pref("extensions.webservice.discoverURL", "");
user_pref("extensions.getAddons.discovery.api_url", "");
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
user_pref("extensions.htmlaboutaddons.discover.enabled", false);
user_pref("browser.discovery.enabled", false);
user_pref("browser.shell.checkDefaultBrowser", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);

// Disable saving page thumbnails/icons
user_pref("browser.pagethumbnails.capturing_disabled", true);
user_pref("pageThumbs.enabled", false);
user_pref("browser.shell.shortcutFavicons", false); // URL shortcut files use a cached .ico file (randomly named) which is stored in your profile/shortcutCache directory. The .ico remains after the shortcut is deleted. If set to false then the shortcuts use a generic Firefox icon

//
user_pref("browser.preferences.moreFromMozilla", false);
user_pref("browser.aboutConfig.showWarning", false);
user_pref("browser.aboutwelcome.enabled", false);

/** THEME ADJUSTMENTS ***/
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
user_pref("browser.compactmode.show", true);
user_pref("browser.display.focus_ring_on_anything", true);
user_pref("browser.display.focus_ring_style", 0);
user_pref("browser.display.focus_ring_width", 0);
user_pref("layout.css.prefers-color-scheme.content-override", 2);
user_pref("browser.privateWindowSeparation.enabled", false); // WINDOWS

/** FULLSCREEN NOTICE ***/
user_pref("full-screen-api.transition-duration.enter", "0 0");
user_pref("full-screen-api.transition-duration.leave", "0 0");
user_pref("full-screen-api.warning.delay", -1);
user_pref("full-screen-api.warning.timeout", 0);

/** URL BAR ***/
user_pref("browser.urlbar.suggest.calculator", true);
user_pref("browser.urlbar.unitConversion.enabled", true);
user_pref("browser.urlbar.trending.featureGate", false);

/** NEW TAB PAGE ***/
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.showSearch", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);

/** POCKET ***/
user_pref("extensions.pocket.enabled", false);

/** PDF ***/
user_pref("browser.download.open_pdf_attachments_inline", true);

/** TAB BEHAVIOR ***/
user_pref("browser.bookmarks.openInTabClosesMenu", false);
user_pref("browser.menu.showViewImageInfo", true);
user_pref("findbar.highlightAll", true);
user_pref("findbar.modalHighlight", true);  // Dim the rest o
user_pref("layout.word_select.eat_space_to_next_word", false);

// Disable Activity Stream recent Highlights in the Library
user_pref("browser.library.activity-stream.enabled", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.highlights", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeBookmarks", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeDownloads", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeVisited", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);

// Disable Activity Stream telemetry
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry.ping.endpoint", "");


/****************************************************************************
 * START: MY OVERRIDES                                                      *
****************************************************************************/
// visit https://github.com/yokoffing/Betterfox/wiki/Common-Overrides
// visit https://github.com/yokoffing/Betterfox/wiki/Optional-Hardening
// Enter your personal overrides below this line:

/****************************************************************************
 * SECTION: SMOOTHFOX                                                       *
****************************************************************************/
// visit https://github.com/yokoffing/Betterfox/blob/main/Smoothfox.js
// Enter your scrolling overrides below this line:

/****************************************************************************
 * END: BETTERFOX                                                           *
****************************************************************************/
