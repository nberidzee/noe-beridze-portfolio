const CONTENT = {
  "nav": [
    "Projects",
    "Experience",
    "Skills",
    "Contact"
  ],
  "role": "PRODUCT OWNER / DIGITAL PRODUCT DEVELOPMENT",
  "name": "Noe",
  "surname": "Beridze",
  "intro": "I'm Noe Beridze, a Product Owner and co-founder of LegalStepy. I turn business needs into practical features, clear workflows and development priorities.",
  "introSecond": "My background combines hands-on B2B SaaS product work with 7+ years of team and operations leadership at Evolution Georgia.",
  "workCTA": "Explore my projects",
  "cv": "View CV",
  "photoAlt": "Noe Beridze",
  "facts": [
    [
      "Product work",
      "B2B SaaS · Internal platforms"
    ],
    [
      "Leadership",
      "7+ years in operations"
    ],
    [
      "Location",
      "Tbilisi, Georgia"
    ]
  ],
  "workLabel": "01 / SELECTED PROJECTS",
  "workTitle": "My product experience",
  "readCase": "Read the project",
  "visit": "Product website",
  "roleLabel": "MY ROLE",
  "statusLabel": "STAGE",
  "projects": [
    {
      "id": "legal",
      "number": "01",
      "brand": "LegalStepy",
      "kind": "B2B SaaS / LegalTech",
      "year": "2025 — Present",
      "role": "Product Owner & Co-Founder",
      "status": "MVP development",
      "title": "Making complex contract processes easier to manage",
      "summary": "A B2B SaaS platform bringing drafting, reviews, approvals, signing and ongoing obligations into a connected contract workflow.",
      "tags": [
        "Product scope",
        "Workflow architecture",
        "Requirements"
      ],
      "url": "https://legalstepy.com",
      "context": "LegalStepy is a B2B contract lifecycle management platform designed to bring the full contract process into one workspace. Its scope spans drafting and creation, internal and counterparty collaboration, negotiation, approvals, signing, and post-signature renewals and obligations.",
      "scope": "My work covers understanding business needs, structuring requirements, defining roles, and discussing priorities and product behaviour with the developer.",
      "challenge": "The key development challenge is keeping the complete journey coherent across roles, document versions and hand-offs. I identified gaps between individual screen actions and the end-to-end process, and used one contract scenario to make the next development priority explicit.",
      "decisionTitle": "Start with one complete journey",
      "decision": "Before expanding into additional workflows, I focused on one scenario: requester → legal → counterparty → final approval → signature → obligations. Following this journey makes broken transitions and missing prerequisites visible.",
      "tradeoff": "This postpones some expansion. It also gives us a concrete way to validate the parts that already exist together.",
      "decisions": [
        [
          "Ownership at every stage",
          "The requirement needs to identify who holds the document, what response is needed and who receives it next."
        ],
        [
          "Separate external and internal roles",
          "Adding a business partner and adding a team member are different actions. A counterparty needs defined access to a particular document and version."
        ],
        [
          "Approval follows the version",
          "Approval on an earlier draft should not automatically carry over to a revised version."
        ]
      ],
      "artifactTitle": "Sharing a draft with a counterparty",
      "artifactIntro": "This example is structured for the portfolio to show how I turn a requirement into something testable.",
      "story": "As a legal reviewer, I want to send a specific document version to a selected counterparty so they can review it and respond.",
      "criteria": [
        [
          "Before sending",
          "The recipient, version and permitted actions are specified."
        ],
        [
          "Change request",
          "The response, reason and relevant document version are retained."
        ],
        [
          "Updated draft",
          "Approval of the previous version does not automatically apply to the new one."
        ],
        [
          "Access revoked",
          "A revoked or expired link no longer opens the document."
        ]
      ],
      "lesson": "I now pay closer attention to transitions: what starts the next action, who owns it and what happens when the response is negative.",
      "next": "The next validation is to take one document through the complete journey in every relevant role. This provides a stronger basis for defining further workflows.",
      "links": [
        [
          "LegalStepy",
          "https://legalstepy.com"
        ]
      ],
      "technicalExample": {
        "title": "From a user story to a technical hand-off",
        "intro": "A proposed hand-off for this user story, to agree with the developer before implementation.",
        "rows": [
          [
            "Inputs",
            "Identify the document, exact version, recipient and permitted actions. Agree whether the invitation expires."
          ],
          [
            "Access rule",
            "Bind access to that document version and check permission when the recipient opens it. Define what changes when access is revoked."
          ],
          [
            "Failure behaviour",
            "Agree the response for an expired invitation, a changed version and a repeated send action, so the interface can offer a clear next step."
          ]
        ]
      },
      "personalValue": "I shape the product scope, define role-based workflows and work with development to turn operational needs into testable features.",
      "contributions": [
        [
          "I map the contract journey and define who acts at each stage.",
          "Turns the full CLM lifecycle into a workflow the team can build, with explicit ownership and hand-offs."
        ],
        [
          "I prioritise one complete MVP scenario and write acceptance criteria, including exceptions.",
          "Gives development a clear first scope and a shared basis for deciding whether a feature is ready."
        ],
        [
          "I review demos and feedback, then raise gaps in roles, versions and transitions.",
          "Makes specific product issues visible before the team expands into additional workflows."
        ]
      ],
      "deliveryStatus": "MVP in development. Full validation of the contract journey across requester, legal reviewer and counterparty roles is the next step."
    },
    {
      "id": "ventures",
      "number": "02",
      "brand": "Ventures HQ",
      "kind": "Internal tool / Startup operations",
      "year": "2026",
      "role": "Project initiator · Product definition",
      "status": "Internal working tool",
      "title": "A clearer home for everyday team operations",
      "summary": "An internal workspace for tasks, projects, CRM and shared knowledge, with emphasis on clarity, access rules and daily usability.",
      "tags": [
        "Product scope",
        "UX decisions",
        "Testing"
      ],
      "url": "https://ventures-hq-two.vercel.app/",
      "context": "Ventures HQ is an operations platform for a small team. It brings together tasks and projects, bug tracking, CRM and a knowledge base across separate workspaces.",
      "scope": "I initiated the product, define its modules, workflows and interface changes, and review the resulting functions. Development also uses an AI-assisted workflow.",
      "challenge": "Bringing several projects and modules together can obscure the original purpose: understanding what needs attention today. I reviewed each function through a daily task: finding work, changing a value or moving to another workspace.",
      "decisionTitle": "Give the dashboard a specific job",
      "decision": "I prioritised important work, a short activity overview and quick access on the first screen. Reaching the day’s main tasks should not require working through a long overview page.",
      "tradeoff": "Showing every module on the home screen is tempting, but splits attention. Detailed information stays in its relevant module.",
      "decisions": [
        [
          "Keep the workspace context",
          "LegalStepy and LegalTech Georgia have separate data and access rules. Switching workspaces must apply consistently to task lists and details."
        ],
        [
          "Make editing intentional",
          "The Edit → Save model makes the start of an edit and the act of saving explicit."
        ],
        [
          "One task across different views",
          "Board and List display the same task. The assignee, deadline and status should stay consistent when switching views."
        ],
        [
          "Keep defects close to delivery work",
          "Bug tracking sits alongside tasks and projects so issues can be considered in the same workspace and prioritisation context."
        ]
      ],
      "artifactTitle": "My overdue tasks",
      "artifactIntro": "This validation example is based on functions requested in the project.",
      "story": "As a workspace member, I want to see overdue tasks assigned to me so I can organise my day.",
      "criteria": [
        [
          "Assignee",
          "The list shows my assigned tasks from the current workspace."
        ],
        [
          "Completed task",
          "A completed task leaves the overdue list."
        ],
        [
          "No due date",
          "A task without a deadline is not classified as overdue."
        ],
        [
          "Workspace switch",
          "The list and detail access update to the new workspace context."
        ]
      ],
      "lesson": "I assess simplicity through actions: how many steps it takes to reach the relevant work and how clearly the result of a change is communicated.",
      "next": "Next checks cover creating a task, changing its assignee and date, switching views and retaining data after reopening.",
      "links": [
        [
          "Ventures HQ",
          "https://ventures-hq-two.vercel.app/"
        ]
      ],
      "personalValue": "I initiated the product, defined its modules and user journeys, and test how tasks and permissions work across views and workspaces.",
      "contributions": [
        [
          "I initiated the platform and define the tasks, bugs, CRM and knowledge-base modules.",
          "Provides a shared workspace for team work and related information, with a clear purpose for each module."
        ],
        [
          "I decide what the dashboard surfaces and how editing and saving work.",
          "Helps the team see what needs attention today and understand when a change has been saved."
        ],
        [
          "I test workspace access and check the same task across Board and List.",
          "Turns permission gaps and inconsistent values into actionable issues with clear expected behaviour."
        ]
      ],
      "deliveryStatus": "Internal working tool. I continue reviewing workspace boundaries, access rules and consistency between task views."
    }
  ],
  "flowLabels": [
    "Drafting & creation",
    "Collaboration & negotiation",
    "Approval & signing",
    "Renewals & obligations"
  ],
  "flowNote": "THE CONTRACT LIFECYCLE",
  "workspace": "Workspace",
  "workspaceModules": [
    "Tasks & projects",
    "Bug tracking",
    "CRM",
    "Knowledge base"
  ],
  "workspaceNote": "Separate workspaces · Clear ownership · Appropriate access",
  "sampleLabel": "ADDITIONAL WORK / INDEPENDENT ANALYSIS",
  "sampleTitle": "Payment status and exception handling",
  "sampleText": "Turning a delayed response into a clear requirement: priority, acceptance criteria and a measurement plan.",
  "sampleLink": "Read the analysis",
  "sampleNote": "An independent exercise — not a client engagement",
  "experienceLabel": "02 / EXPERIENCE",
  "experienceTitle": "Teams, processes and responsibility",
  "jobs": [
    [
      "2025 — Present",
      "LegalStepy",
      "Product Owner & Co-Founder",
      "Define product functionality and priorities for contract management, design workflows and collaborate with development on requirements and usability."
    ],
    [
      "2019 — Present",
      "Evolution Georgia",
      "Shufflers Team Manager",
      "Lead shift operations and team performance, monitor KPIs and coordinate the Shuffler Mentors programme and onboarding quality."
    ]
  ],
  "education": "Education & professional development",
  "schools": [
    [
      "MBA",
      "Business Administration & Modern Technologies",
      "Business and Technology University · 2025 — Present"
    ],
    [
      "LL.M.",
      "Comparative Private & International Law",
      "New Vision University · 2021 — 2026 · Completed"
    ],
    [
      "LL.B.",
      "Law",
      "Tbilisi State University · 2017 — 2021"
    ],
    [
      "Course",
      "IT Project Management",
      "2024"
    ]
  ],
  "contactLabel": "05 / CONTACT",
  "contactTitle": "Get in touch.",
  "contactText": "Open to Product Owner and digital product development opportunities where structured thinking and close collaboration with teams make a difference.",
  "email": "EMAIL",
  "phone": "PHONE",
  "back": "Back to home",
  "allWork": "All projects",
  "caseSections": [
    "My role & contribution",
    "The problem",
    "The decision",
    "A requirement example",
    "Progress & next steps"
  ],
  "storyLabel": "User story",
  "criteriaLabels": [
    "Scenario",
    "Expected behaviour"
  ],
  "tradeoffLabel": "The trade-off",
  "nextLabel": "Next step",
  "otherCase": "Next project",
  "gulf": {
    "brand": "Gulf Club",
    "kind": "Independent product analysis",
    "title": "When a payment response is delayed",
    "summary": "One scenario that calls for user experience, business rules and technical dependencies to be considered together.",
    "scope": "This work sample uses Gulf’s public description. It is not commissioned work for the company or a report of a verified app defect.",
    "headings": [
      "Starting context",
      "What to establish first",
      "What I would prioritise",
      "A requirement example",
      "How I would evaluate the result"
    ],
    "context": "Gulf Club’s official page describes QR payments at Gulf+ stations: the user selects fuel and a payment method, then continues after a successful operation. I chose a scenario where the final payment response does not reach the user promptly.",
    "hypothesis": "The user may be unsure whether the operation completed and try again. This is a hypothesis to validate. I would first request data on statuses, repeated attempts and support contacts.",
    "questions": [
      "How often does an operation remain in an uncertain state?",
      "Can the system return the final status of the same operation?",
      "How is payment confirmed, and when is the dispenser ready?"
    ],
    "decision": "If the data confirms the risk, I would start by making the same operation’s status clear and recoverable after a connection loss. Initiating another payment should be considered only once the final state is established.",
    "dependency": "Clarify operation identifiers, status lookup, duplicate protection and support traceability with the technical team. The capabilities of the existing API are unknown in this exercise.",
    "story": "As a Gulf Club user, I want to know my operation’s status after a delayed response so I can choose the right next action.",
    "criteria": [
      [
        "Delayed response",
        "Show a pending state and check that same operation. A timeout is not an automatic decline."
      ],
      [
        "Confirmed success",
        "Show payment confirmation. Check dispenser readiness separately."
      ],
      [
        "Confirmed decline",
        "Show the final state and the agreed option for retry."
      ],
      [
        "Lost connection",
        "First recover the existing operation’s status. Repeated taps do not initiate a new charge."
      ]
    ],
    "metrics": [
      [
        "Completion",
        "Unique successfully completed operations / unique operations initiated."
      ],
      [
        "Uncertain status",
        "Share of operations without a final response within an agreed window."
      ],
      [
        "Guardrails",
        "Repeated attempts, duplicate charges and support contacts."
      ]
    ],
    "release": "Establish the baseline and validate events first. Then test the scenarios, release to a limited group and evaluate by payment method, station and OS. Set targets after reviewing the data.",
    "sourceTitle": "Public sources · Reviewed 23 Oct 2026",
    "sources": [
      [
        "Gulf Club — QR payments",
        "https://gulf.ge/ge/app"
      ],
      [
        "Official application page",
        "https://app.gulf.ge/"
      ],
      [
        "Gulf Business",
        "https://b.gulf.ge/"
      ]
    ],
    "backlogTitle": "A prioritised backlog",
    "backlogIntro": "Proposed order based on user risk and technical dependencies, to confirm during discovery.",
    "backlog": [
      {
        "priority": "P1",
        "title": "Recover the existing operation",
        "value": "Let a returning user find the same payment instead of starting another while its outcome is unknown.",
        "dependency": "Stable operation ID, authoritative status lookup and duplicate protection agreed with the payment team."
      },
      {
        "priority": "P1",
        "title": "Show the status and next action",
        "value": "Explain pending, confirmed and declined states, with an operation reference for support. Keep payment confirmation separate from dispenser readiness.",
        "dependency": "Agreed status mapping, station readiness signal and support process. Builds on status recovery."
      },
      {
        "priority": "P2",
        "title": "Create a support view for unresolved operations",
        "value": "Help support locate prolonged pending operations and investigate recurring cases.",
        "dependency": "Validated event data, access permissions and a support owner. Add after the initial recovery flow is validated."
      }
    ],
    "backlogBoundary": "Initial release: both P1 items together, supported by baseline measurement and exception testing. The P2 support view follows once the core flow is validated."
  },
  "download": "Download PDF",
  "educationLabel": "04 / EDUCATION"
};
