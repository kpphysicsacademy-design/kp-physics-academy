/* SkillUp Automatic Broken-Link Checker */
(function () {
  function isExternal(value) {
    return /^(https?:|mailto:|tel:|javascript:|data:)/i.test(value);
  }

  function clean(value) {
    return String(value || "").split("#")[0].split("?")[0].replace(/^\.\//, "");
  }

  window.auditSkillUpLinks = async function () {
    const report = {
      page: location.pathname.split("/").pop() || "index.html",
      checked: 0,
      ok: [],
      broken: [],
      external: [],
      ignored: []
    };

    const elements = document.querySelectorAll("a[href], script[src], link[href], img[src]");
    const targets = new Set();

    elements.forEach(el => {
      const raw = el.getAttribute("href") || el.getAttribute("src");
      if (!raw || raw === "#") {
        report.ignored.push(raw || "(empty)");
        return;
      }
      if (isExternal(raw)) {
        report.external.push(raw);
        return;
      }
      const target = clean(raw);
      if (target) targets.add(target);
    });

    for (const target of targets) {
      report.checked++;
      try {
        const response = await fetch(target, { method: "HEAD", cache: "no-store" });
        if (response.ok) report.ok.push(target);
        else report.broken.push({ target, status: response.status });
      } catch (error) {
        report.broken.push({ target, status: "NETWORK_ERROR" });
      }
    }

    console.group("SkillUp Link Audit");
    console.log("Page:", report.page);
    console.log("Checked:", report.checked);
    console.log("Working:", report.ok.length);
    console.log("Broken:", report.broken.length);
    if (report.broken.length) console.table(report.broken);
    else console.log("No broken internal links detected on this page.");
    console.groupEnd();

    return report;
  };

  window.runSkillUpAudit = async function () {
    return window.auditSkillUpLinks();
  };
})();