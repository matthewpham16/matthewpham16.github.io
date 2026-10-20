export type Item = { title: string; body: string };

export type Experience = {
  slug: string;
  company: string;
  role: string;
  date: string;
  location: string;
  summary: string;
  about: string;
  overview: string;
  skills: string[];
  contributions: Item[];
  takeaways: Item[];
};

export const experiences: Experience[] = [
  {
    slug: "william-blair",
    company: "William Blair",
    role: "Platform Engineer Intern",
    date: "Jun 2026 - Aug 2026",
    location: "Chicago, IL",
    summary:
      "Architected automated Argo Workflows, Docker, and Kubernetes pipelines to execute and validate large-scale financial data models; built a cloud-native data pipeline on Python, Snowflake, and ADLS; centralized vendor workflows into one modular codebase.",
    about:
      "William Blair is a global investment banking and investment management firm headquartered in Chicago. Its Investment Management teams depend on clean, standardized market and fundamental data sourced from a dozen external financial vendors for quantitative research, fundamental analysis, and portfolio management.",
    overview:
      "I was a Platform Engineer Intern on the Investment Management Data Engineering team, working on Bedrock Modernization: evolving the firm's core financial data platform from legacy vendor-specific R scripts and Dremio flows into a centralized, cloud-native \"ingest once, standardize once, consume many times\" architecture. The platform turns raw vendor feeds into business-ready datasets (daily valuation metrics and monthly portfolio characteristics) used by Research, Portfolio Managers, Quant models, and internal APIs.",
    skills: [
      "Python", "SQL", "R", "Snowflake (Snowpark & Notebooks)", "Argo Workflows", "Docker", "Kubernetes",
      "Azure Data Lake Storage", "Parquet", "Git", "Workload Identity Federation",
    ],
    contributions: [
      {
        title: "Validated the Argo-to-Snowflake automation pattern",
        body: "Designed, tested, and documented a repeatable two-step pattern where Argo Workflows acts strictly as the orchestrator, submitting SQL through a shared wrapper template, while Snowflake owns headless execution, runtime, and compute.",
      },
      {
        title: "Prevented stale code in production pipelines",
        body: "Found that snapshot-based Snowflake Notebook Project Objects don't live-link to workspace edits. I built a sequential workflow that first refreshes the snapshot from the workspace and then executes it headlessly, so a scheduled run can never silently use stale code.",
      },
      {
        title: "Resolved orchestration and parser edge cases",
        body: "Debugged integration failures across Argo, YAML, Python connectors, and Snowflake SQL, including identifier quoting and YAML folded-scalar ordering that caused unterminated-string errors.",
      },
      {
        title: "Supported legacy-to-modern validation and R-to-Python migration",
        body: "Built validation checks comparing legacy R outputs against the modernized Python/Parquet/ADLS/Snowflake outputs: schema parity, row counts, key matching, and value-level diffs. Mismatches were traced to root causes like stock split adjustments, ADR ratios, corporate actions, vendor timing, and harmless floating-point differences.",
      },
    ],
    takeaways: [
      {
        title: "Modernization is about preserving trust",
        body: "Legacy systems exist because the business trusts their outputs. A faster pipeline is useless if Portfolio Managers don't trust the numbers, so every mismatch is an investigation until it's proven to be a bug or an explainable difference.",
      },
      {
        title: "Never stop asking questions",
        body: "No one engineer holds every vendor quirk, financial formula, and auth policy in their head. Knowing when to dig into logs and when to ask for context sped up my ramp-up tremendously.",
      },
      {
        title: "Automation requires operational discipline",
        body: "Scheduling a job is the easy part. Real platform engineering means parameterized templates, idempotent deployments, keeping sensitive output out of pod logs, and moving toward passwordless authentication.",
      },
    ],
  },
  {
    slug: "loan-ranger-capital",
    company: "Loan Ranger Capital",
    role: "Data Analyst Intern",
    date: "May 2024 - Jul 2024",
    location: "Austin, TX",
    summary:
      "Python and SQL validation scripts that corrected 300+ database inconsistencies; REST API integrations for an automated outreach system; data collection and cleaning pipelines that added 2,500+ Kansas City leads.",
    about:
      "Loan Ranger Capital is an Austin-based private real estate lender providing fast, flexible short-term financing (fix-and-flip, ground-up construction, bridge loans) to investors and developers across Texas and growth markets like Kansas City. Its edge depends on accurate property and borrower data, quick underwriting, and targeted investor outreach.",
    overview:
      "I was a Data Analyst Intern working as a hybrid data and automation engineer. Borrower, entity, and property data lived across spreadsheets, county databases, and CRM systems, so I built the data backbone for deal origination and outreach: cleaning existing records, building scraping and ingestion pipelines to find active investors in new markets, and wiring REST APIs to feed leads into outreach systems.",
    skills: ["Python", "SQL", "REST APIs", "Data Cleaning", "Entity Resolution", "ETL Pipelines", "CRM Integration"],
    contributions: [
      {
        title: "Automated lead-generation pipelines (+2,500 contacts)",
        body: "Built end-to-end collection, parsing, and cleaning pipelines in Python to aggregate investor and borrower records for the Kansas City expansion, adding 2,500+ vetted contacts to the origination funnel.",
      },
      {
        title: "Python & SQL data validation workflows",
        body: "Wrote validation scripts that audited existing records for duplicates, malformed fields, mismatched entity names, and missing loan metrics, resolving 300+ inconsistencies and turning messy spreadsheets into reliable reporting metrics.",
      },
      {
        title: "REST API outreach automation",
        body: "Connected the cleaned pipelines directly to the firm's outreach and CRM tools, eliminating manual CSV uploads and letting campaigns scale automatically as new records arrived.",
      },
    ],
    takeaways: [
      {
        title: "Data quality directly drives revenue",
        body: "A single bad phone number or unstandardized LLC name is a missed loan opportunity. Seeing my cleaning scripts change the team's daily outreach showed me the link between data hygiene and business growth.",
      },
      {
        title: "Building for non-technical users",
        body: "The consumers were loan officers and principals who needed clean leads inside their workflow tools, so I learned to hide the Python and SQL complexity behind reliable API automations.",
      },
      {
        title: "Owning the full data lifecycle",
        body: "A small team meant owning the pipeline from raw ingestion and schema validation to API delivery, building the instincts that later prepared me for enterprise-scale platform work at William Blair.",
      },
    ],
  },
];
