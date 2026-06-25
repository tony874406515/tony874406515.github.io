(function () {
  const publicationMetrics = [
    {
      title: "Dynamics and Influences Analysis of Public Concerns in Mega Construction Projects",
      info: "SCIE Q1, IF=5.5, 2026",
    },
    {
      title: "Risk Identification and Assessment of Mega Construction Projects in Uncertain Environments",
      info: "ESCI Q2, IF=2.0, 2026",
    },
    {
      title: "A Value-Based Programming Framework for Enhancing Children's Well-Being in Urban Communities",
      info: "AHCI/Scopus Q1, IF=4.4, 2026",
    },
    {
      title: "Evolving Public Perceptions of the Renewal of Suzhou Neighborhood Centers",
      info: "AHCI/Scopus Q1, IF=4.4, 2026",
    },
    {
      title: "Current Status and Trends of Megaproject Research",
      info: "SCIE/SSCI Q1, IF=4.5, 2026",
    },
    {
      title: "Measuring Complexity in Mega Construction Projects",
      info: "SCIE/SSCI Q1, IF=4.5, 2026",
    },
    {
      title: "Identification and Evaluation of Key Stakeholders in Mega Construction Projects",
      info: "SCIE/SSCI Q1, IF=4.5, 2025",
    },
    {
      title: "Interdisciplinary Perspective on Architectural Programming",
      info: "SCIE/SSCI Q1, IF=4.5, 2025",
    },
    {
      title: "The Application of Collective Intelligence in the Construction Industry",
      info: "SCIE Q2, IF=2.8, 2025",
    },
    {
      title: "Current Status and Research Progress in Architectural Programming",
      info: "AHCI/Scopus Q1, IF=4.4, 2025",
    },
  ];

  const normalize = (value) => value.replace(/\s+/g, " ").trim().toLowerCase();

  const removeYearFromPeriodical = (periodical, info) => {
    const year = info.match(/,\s*(\d{4})$/)?.[1];
    if (!periodical || !year) return;

    [...periodical.childNodes].reverse().some((node) => {
      if (node.nodeType !== 3) return false;
      const nextValue = node.textContent.replace(new RegExp(`,\\s*${year}\\s*$`), "");
      if (nextValue === node.textContent) return false;
      node.textContent = nextValue;
      return true;
    });
  };

  const addMetricLine = () => {
    document.querySelectorAll("ol.bibliography > li").forEach((item) => {
      if (item.querySelector(".publication-metrics")) return;

      const itemText = normalize(item.textContent);
      const metric = publicationMetrics.find((entry) => itemText.includes(normalize(entry.title)));
      if (!metric) return;

      const periodical = item.querySelector(".periodical");
      removeYearFromPeriodical(periodical, metric.info);

      const metricLine = document.createElement("div");
      metricLine.className = "publication-metrics";
      metricLine.innerHTML = `<span class="metric-pill">${metric.info}</span>`;

      const insertAfter = periodical || item.querySelector(".author") || item.querySelector(".title");
      if (insertAfter) {
        insertAfter.insertAdjacentElement("afterend", metricLine);
      } else {
        item.prepend(metricLine);
      }
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", addMetricLine);
  } else {
    addMetricLine();
  }
})();
