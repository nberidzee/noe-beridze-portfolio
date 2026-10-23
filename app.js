const params = new URLSearchParams(location.search);
const caseId = params.get('case');
const view = params.get('view');
if (params.has('lang')) {
  params.delete('lang');
  history.replaceState(null, '', location.pathname + (params.size ? '?' + params : '') + location.hash);
}
const t = CONTENT;
const r = RESUME;
const home = './';
const cvUrl = '?view=cv';
const cvFile = 'Noe_Beridze_Gulf_Product_Owner_CV.pdf';
const arrow = '<span aria-hidden="true">↗</span>';
const caseUrl = id => `?case=${id}`;
const external = (label, url, classes='') => `<a class="${classes}" href="${url}" target="_blank" rel="noopener">${label} ${arrow}</a>`;

function header() {
  return `<a class="skip" href="#main">Skip to content</a>
  <header class="site-header"><div class="wrap header-inner">
    <a class="wordmark" href="${home}" aria-label="Noe Beridze home">NOE BERIDZE<span>PRODUCT & OPERATIONS</span></a>
    <nav aria-label="Main navigation"><a href="${home}#work">Projects</a><a href="${home}#experience">Experience</a><a href="${home}#skills">Skills</a><a href="${home}#contact">Contact</a></nav>
    <div class="header-tools"><a class="header-cv" href="${cvUrl}" ${view==='cv'?'aria-current="page"':''}>View CV ${arrow}</a></div>
  </div></header>`;
}
function footer() {
  return `<footer class="footer wrap"><span>© 2026 Noe Beridze</span><a href="mailto:${r.email}">${r.email} ${arrow}</a><span>TBILISI, GEORGIA</span></footer>`;
}
function legalDiagram() {
  return `<div class="project-model legal-model" aria-label="The contract lifecycle"><span class="model-caption">THE CONTRACT LIFECYCLE</span><ol>${t.flowLabels.map((x,i)=>`<li><span class="step-number">0${i+1}</span><span>${x}</span>${i===3?'<span class="last-step">↗</span>':''}</li>`).join('')}</ol></div>`;
}
function workspaceDiagram() {
  return `<div class="project-model workspace-model" aria-label="Startup operations workspace"><span class="model-caption">WORKSPACE STRUCTURE</span><div class="workspace-root"><span class="workspace-icon" aria-hidden="true">▦</span>Workspace</div><div class="workspace-branches">${t.workspaceModules.map((m,i)=>`<div><span>0${i+1}</span>${m}</div>`).join('')}</div><p>${t.workspaceNote}</p></div>`;
}
function projectRow(p) {
  return `<article class="project-row" id="project-${p.id}"><div class="project-content"><div class="project-kicker"><span>${p.number} / ${p.kind}</span><span>${p.year}</span></div><h3><a href="${caseUrl(p.id)}">${p.brand} ${arrow}</a></h3><p class="project-title">${p.title}</p><p class="project-summary">${p.summary}</p><div class="project-contribution"><span>MY CONTRIBUTION</span><p>${p.personalValue}</p></div><div class="project-tags">${p.tags.map(x=>`<span>${x}</span>`).join('')}</div><a class="read-link" href="${caseUrl(p.id)}">Read the project<span aria-hidden="true">→</span></a></div><div class="project-aside">${p.id==='legal'?legalDiagram():workspaceDiagram()}<div class="project-note"><span>MY ROLE</span><p>${p.role}</p></div></div></article>`;
}
function skillsSection() {
  return `<section class="skills-section wrap section" id="skills"><div class="section-intro"><p class="eyebrow">03 / SKILLS & TOOLS</p><h2>Product thinking. Practical delivery.</h2><p class="section-description">The capabilities I bring to requirements, team coordination and day-to-day product work.</p></div><div class="skill-groups">${r.skills.map((group,i)=>`<article><div class="skill-heading"><span>0${i+1}</span><h3>${group.name}</h3></div><ul>${group.items.map(item=>`<li>${item}</li>`).join('')}</ul></article>`).join('')}</div><p class="technical-note"><b>Technical collaboration</b><span>${r.technicalContext}</span></p></section>`;
}
function educationSection() {
  return `<section class="education-section wrap section" id="education"><div class="section-intro"><p class="eyebrow">04 / EDUCATION</p><h2>Business and law.</h2></div><div class="education-rows">${r.education.map(item=>`<article><span class="degree-mark">${item.degree}</span><div><h3>${item.programme}</h3><p>${item.school}</p></div><div class="degree-dates"><span>${item.dates}</span><small>${item.status}</small></div></article>`).join('')}</div><div class="training-row"><span>PROFESSIONAL DEVELOPMENT</span><p>IT Project Management coursework <span>2024</span></p></div></section>`;
}
function renderHome() {
  return `${header()}<main id="main"><section class="hero wrap"><div class="hero-copy"><p class="eyebrow role-line"><i aria-hidden="true"></i>${t.role}</p><h1>Noe<br>Beridze<span>.</span></h1><p class="hero-intro">${t.intro}</p><p class="hero-second">${t.introSecond}</p><div class="hero-actions"><a class="primary-link" href="#work">Explore my projects<span aria-hidden="true">↓</span></a><a class="plain-link view-cv-link" href="${cvUrl}">View CV ${arrow}</a><a class="download-link" href="${cvFile}" download>Download PDF ↓</a></div></div><aside class="hero-profile"><div class="profile-topline"><span>PROFILE</span><span>2026</span></div><img class="portrait" src="assets/noe-portrait.webp" alt="Noe Beridze" width="800" height="800" fetchpriority="high"><div class="profile-caption"><span>NOE BERIDZE</span><span>TBILISI, GEORGIA</span></div><div class="profile-context"><span>Business</span><span>Product</span><span>Operations</span></div></aside></section>
    <section class="credentials wrap" aria-label="Profile at a glance">${t.facts.map(f=>`<div><b>${f[0]}</b><span>${f[1]}</span></div>`).join('')}</section>
    <section class="work wrap section" id="work"><div class="section-intro"><p class="eyebrow">01 / SELECTED PROJECTS</p><h2>My product experience</h2></div>${t.projects.map(projectRow).join('')}<article class="work-sample"><div><p class="eyebrow">${t.sampleLabel}</p><h3>${t.sampleTitle}</h3><p>${t.sampleText}</p><span class="sample-note">${t.sampleNote}</span></div><a class="read-link" href="${caseUrl('gulf')}">${t.sampleLink}<span aria-hidden="true">→</span></a></article></section>
    <section class="experience wrap section" id="experience"><div class="section-intro"><p class="eyebrow">02 / EXPERIENCE</p><h2>Teams, processes and responsibility</h2></div><div class="jobs">${t.jobs.map(j=>`<article><span class="job-date">${j[0]}</span><div class="job-role"><h3>${j[1]}</h3><p>${j[2]}</p></div><p class="job-description">${j[3]}</p></article>`).join('')}</div></section>
    ${skillsSection()}${educationSection()}
    <section class="resume-callout wrap"><div><p class="eyebrow">RESUME</p><h2>The experience in one place.</h2><p>Read my CV online or keep the PDF for later.</p></div><div><a class="primary-link" href="${cvUrl}">View CV ${arrow}</a><a class="plain-link" href="${cvFile}" download>Download PDF ↓</a></div></section>
    <section class="contact-section" id="contact"><div class="wrap contact-inner"><div><p class="eyebrow">05 / CONTACT</p><h2>Get in touch.</h2><p class="contact-intro">${t.contactText}</p></div><div class="contact-links"><a href="mailto:${r.email}"><small>EMAIL</small><span>${r.email} ${arrow}</span></a><a href="tel:${r.phoneHref}"><small>PHONE</small><span>${r.phone} ${arrow}</span></a>${external('LinkedIn',r.linkedin,'linkedin-link')}</div></div></section></main>${footer()}`;
}
function meta(items) {
  return `<dl class="case-meta">${items.map(([label,value])=>`<div><dt>${label}</dt><dd>${value}</dd></div>`).join('')}</dl>`;
}
function contents(labels) {
  return `<aside class="article-nav"><span class="eyebrow">ON THIS PAGE</span><nav aria-label="Case contents">${labels.map((label,i)=>`<a href="#section-${i+1}"><span>0${i+1}</span>${label}</a>`).join('')}</nav><a class="article-cv" href="${cvUrl}">View CV ${arrow}</a></aside>`;
}
function caseSection(n,title,body) {
  return `<section class="article-section" id="section-${n}"><div class="article-section-title"><span>0${n}</span><h2>${title}</h2></div>${body}</section>`;
}
function criteria(rows,headers=t.criteriaLabels) {
  return `<div class="criteria-table" role="table" aria-label="${headers[0]==='Metric'?'Measurement plan':'Acceptance Criteria'}"><div class="criteria-row criteria-head" role="row"><span role="columnheader">${headers[0]}</span><span role="columnheader">${headers[1]}</span></div>${rows.map(row=>`<div class="criteria-row" role="row"><b role="cell">${row[0]}</b><p role="cell">${row[1]}</p></div>`).join('')}</div>`;
}
function storyBlock(story) {
  return `<div class="story-block"><span class="eyebrow">USER STORY</span><p>${story}</p></div>`;
}
function contributionSummary(p) {
  return `<div class="contribution-block"><table class="contribution-table"><caption class="sr-only">My role and value in ${p.brand}</caption><thead><tr><th scope="col">What I do</th><th scope="col">Value for the product</th></tr></thead><tbody>${p.contributions.map(([action,value])=>`<tr><th scope="row">${action}</th><td><span class="contribution-mobile-label" aria-hidden="true">VALUE FOR THE PRODUCT</span>${value}</td></tr>`).join('')}</tbody></table><p class="delivery-status"><b>Current status</b> ${p.deliveryStatus}</p></div>`;
}
function technicalExample(example) {
  if (!example) return '';
  return `<div class="technical-example"><p class="eyebrow">TECHNICAL COLLABORATION / WORK SAMPLE</p><h3>${example.title}</h3><p>${example.intro}</p><dl>${example.rows.map(([label,text])=>`<div><dt>${label}</dt><dd>${text}</dd></div>`).join('')}</dl></div>`;
}
function backlogTable(g) {
  return `<div class="backlog-block"><h3>${g.backlogTitle}</h3><p class="backlog-intro">${g.backlogIntro}</p><table class="backlog-table"><caption class="sr-only">Proposed Gulf Club backlog</caption><thead><tr><th scope="col">Priority & item</th><th scope="col">User / business value</th><th scope="col">Dependencies</th></tr></thead><tbody>${g.backlog.map(item=>`<tr><th scope="row"><span class="priority-badge ${item.priority==='P2'?'priority-later':''}">${item.priority}</span><span>${item.title}</span></th><td><span class="mobile-cell-label" aria-hidden="true">VALUE</span>${item.value}</td><td><span class="mobile-cell-label" aria-hidden="true">DEPENDENCIES</span>${item.dependency}</td></tr>`).join('')}</tbody></table><p class="backlog-boundary">${g.backlogBoundary}</p></div>`;
}
function renderProject(p) {
  const next=t.projects.find(x=>x.id!==p.id);
  return `${header()}<main id="main" class="case-page"><div class="wrap"><a class="back-link" href="${home}#work">← All projects</a><header class="case-hero"><p class="eyebrow">${p.kind} / ${p.year}</p><h1>${p.brand}<span>.</span></h1><p class="case-subtitle">${p.title}</p><p class="case-description">${p.summary}</p>${meta([['MY ROLE',p.role],['STAGE',p.status],['FOCUS',p.tags.join(' · ')]])}</header><div class="article-layout">${contents(t.caseSections)}<article class="case-article">${caseSection(1,t.caseSections[0],`<p class="article-lead">${p.context}</p>${contributionSummary(p)}`)}${caseSection(2,t.caseSections[1],`<p>${p.challenge}</p>`)}${caseSection(3,p.decisionTitle,`<blockquote>${p.decision}</blockquote><p class="tradeoff"><b>The trade-off.</b> ${p.tradeoff}</p><div class="decision-list">${p.decisions.map((d,i)=>`<div><span>0${i+1}</span><div><h3>${d[0]}</h3><p>${d[1]}</p></div></div>`).join('')}</div>`)}${caseSection(4,p.artifactTitle,`<p class="artifact-intro">${p.artifactIntro}</p>${storyBlock(p.story)}<h3 class="table-title">Acceptance Criteria</h3>${criteria(p.criteria)}${technicalExample(p.technicalExample)}`)}${caseSection(5,t.caseSections[4],`<p>${p.lesson}</p><div class="next-step"><span class="eyebrow">NEXT STEP</span><p>${p.next}</p></div><div class="case-links">${p.links.map(l=>external(l[0],l[1],'read-link')).join('')}</div>`)}</article></div><a class="next-project" href="${caseUrl(next.id)}"><span><small>Next project</small><b>${next.brand}</b></span><span aria-hidden="true">→</span></a></div></main>${footer()}`;
}
function renderGulf() {
  const g=t.gulf;
  return `${header()}<main id="main" class="case-page"><div class="wrap"><a class="back-link" href="${home}#work">← All projects</a><header class="case-hero gulf-hero"><p class="eyebrow">${g.kind} / GULF CLUB</p><h1>Gulf Club<span>.</span></h1><p class="case-subtitle">${g.title}</p><p class="case-description">${g.summary}</p><p class="provenance">${g.scope}</p></header><div class="article-layout">${contents(g.headings)}<article class="case-article">${caseSection(1,g.headings[0],`<p class="article-lead">${g.context}</p>`)}${caseSection(2,g.headings[1],`<p>${g.hypothesis}</p><ul class="questions">${g.questions.map(q=>`<li>${q}</li>`).join('')}</ul>`)}${caseSection(3,g.headings[2],`<blockquote>${g.decision}</blockquote><p>${g.dependency}</p>${backlogTable(g)}`)}${caseSection(4,g.headings[3],`${storyBlock(g.story)}<h3 class="table-title">Acceptance Criteria</h3>${criteria(g.criteria)}`)}${caseSection(5,g.headings[4],`${criteria(g.metrics,['Metric','Definition'])}<p>${g.release}</p><div class="source-list"><h3>${g.sourceTitle}</h3>${g.sources.map(s=>external(s[0],s[1])).join('')}</div>`)}</article></div><a class="next-project" href="${home}#work"><span><small>All projects</small><b>Selected work</b></span><span aria-hidden="true">→</span></a></div></main>${footer()}`;
}
function resumeExperience(items) {
  return items.map(item=>`<article class="resume-role"><div class="resume-role-heading"><div><h3>${item.company}</h3><p>${item.role}</p></div><span>${item.dates}</span></div><p class="resume-role-context">${item.context}</p><ul>${item.bullets.map(b=>`<li>${b}</li>`).join('')}</ul></article>`).join('');
}
function renderResume() {
  return `${header()}<main id="main" class="resume-page wrap"><a class="back-link" href="${home}">← Back to portfolio</a><div class="resume-page-heading"><div><p class="eyebrow">RESUME</p><h1>Read my CV.</h1><p>Experience, skills and education — available here without a download.</p></div><div class="resume-actions"><a class="primary-link" href="${cvFile}" download>Download PDF ↓</a>${external('Open PDF',cvFile,'plain-link')}</div></div><article class="resume-sheet" aria-label="Noe Beridze resume"><header class="resume-identity"><div><h2>${r.name}</h2><p class="resume-title">${r.title}</p><p class="resume-subtitle">${r.subtitle}</p><div class="resume-contact"><span>${r.location}</span><a href="mailto:${r.email}">${r.email}</a><a href="tel:${r.phoneHref}">${r.phone}</a>${external('LinkedIn',r.linkedin)}</div></div><img src="assets/noe-portrait.webp" alt="Noe Beridze" width="800" height="800"></header><section><h2>Profile</h2><p class="resume-summary">${r.summary}</p></section><section><h2>Product experience</h2>${resumeExperience(r.productExperience)}</section><section><h2>Operations and project leadership</h2>${resumeExperience(r.operationsExperience)}</section><section><h2>Skills and tools</h2><dl class="resume-skills">${r.skills.map(group=>`<div><dt>${group.name}</dt><dd>${group.items.join(' · ')}</dd></div>`).join('')}<div><dt>Technical collaboration</dt><dd>${r.technicalContext}</dd></div></dl></section><section><h2>Education</h2>${r.education.map(item=>`<article class="resume-education"><div><h3>${item.degree} · ${item.programme}</h3><p>${item.school}</p></div><span>${item.dates}<small>${item.status}</small></span></article>`).join('')}<p class="resume-training">IT Project Management coursework · 2024</p></section><section class="resume-languages"><h2>Languages</h2><p>${r.languages}</p></section></article><div class="resume-bottom-actions"><a class="plain-link" href="${home}">← Back to portfolio</a><a class="primary-link" href="${cvFile}" download>Download PDF ↓</a></div></main>${footer()}`;
}
const project=t.projects.find(p=>p.id===caseId);
document.documentElement.lang='en';
document.title=view==='cv'?'Noe Beridze — CV':`${project?.brand||(caseId==='gulf'?'Gulf Club':'Noe Beridze')} — Product portfolio`;
document.querySelector('#app').innerHTML=view==='cv'?renderResume():project?renderProject(project):caseId==='gulf'?renderGulf():renderHome();
const tocLinks=[...document.querySelectorAll('.article-nav nav a')];
if(tocLinks.length&&'IntersectionObserver' in window){
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
    if(entry.isIntersecting)tocLinks.forEach(a=>{
      const current=a.hash==='#'+entry.target.id;
      a.classList.toggle('active',current);
      if(current)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');
    });
  }),{rootMargin:'-15% 0px -55% 0px',threshold:0});
  document.querySelectorAll('.article-section').forEach(section=>observer.observe(section));
}
