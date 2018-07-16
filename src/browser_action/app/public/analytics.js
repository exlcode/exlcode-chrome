// NOTE: After hours of debugging, was unable to solve this with the latest gtag or analytics.js libs, so falling back on the ga.js that is documented in the Chrome Extension docs
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-121570714-3']);
_gaq.push(['_trackPageview']);

(function () {
    var ga = document.createElement('script');
    ga.type = 'text/javascript';
    ga.async = true;
    ga.src = 'https://ssl.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ga, s);
})();