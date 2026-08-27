# Benefits Appeal

**Status: Production-ready vertical.**

## Product thesis

Help people understand a benefits decision, organize the evidence behind their position, track important dates, and prepare a review/reconsideration/appeal response for human review.

Core journey:

**Decision → Deadline → Evidence → Rules/Requirements → Appeal → Review → Filing/Proof**

## Primary search intent

- denied SSDI / SSI / Social Security
- appeal unemployment denial / EDD denial
- Medicaid denial / SNAP denial
- VA benefits denial
- housing benefits denial
- disability benefits denial
- benefits overpayment response
- benefits reconsideration
- benefits hearing preparation

## Workflows (16)

### Disability & Social Security
1. ssdi-denial — Appeal an SSDI Denial
2. ssi-denial — Appeal an SSI Denial
3. social-security-denial — Appeal a Social Security Denial
4. ssdi-reconsideration — Request SSDI Reconsideration
5. ssi-reconsideration — Request SSI Reconsideration
6. disability-benefits-denial — Appeal a Disability Benefits Denial

### Unemployment
7. unemployment-denial — Appeal an Unemployment Denial
8. edd-denial — Appeal an EDD Denial

### Medicaid & Health Benefits
9. medicaid-denial — Appeal a Medicaid Denial

### Public Assistance
10. snap-denial — Appeal a Food Stamp (SNAP) Denial
11. housing-benefits-denial — Appeal a Housing Benefits Denial

### Veterans
12. va-benefits-denial — Appeal a VA Benefits Denial

### Administrative
13. overpayment — Respond to a Benefits Overpayment Notice
14. benefits-reconsideration — Request a Benefits Reconsideration
15. hearing-preparation — Prepare for a Benefits Hearing

## Architecture

Built on the same architecture as Appeal Mail:
- TanStack Start (React + TanStack Router) with SSR
- Cloudflare Pages deployment
- MailMyPDF ecosystem shell (shared navigation)
- Supabase auth (MailMyPDF Account)
- Full domain layer (appeal, decision, evidence, grounds, arguments, review, packet, proof, mailing, draft-validator, gold-standard-gate, workflow-capabilities)
- 15 workflow definitions with full SEO metadata
- 6 category landing pages
- Public routes: homepage, workflows hub, how-it-works, pricing, about, contact, FAQ, resources, privacy, terms, products
- API routes: analyze, draft, approve, checkout per workflow
- Public assets: robots.txt, sitemap.xml (52 URLs), llms.txt
- Full SEO on every route (canonical, OG, Twitter, JSON-LD structured data)
- Design system: "Government paper" theme (Instrument Serif + Inter)

## Guardrails

Do not determine eligibility or promise an outcome. Clearly separate agency statements, source documents, user assertions, extracted facts, and generated drafting suggestions. Jurisdiction-specific rules require authoritative sources and versioning.

## Technology
- Built on TanStack Start (React + TanStack Router) with SSR
- Deployed on Cloudflare Pages
- Physical mail fulfillment via MailMyPDF v1 API
