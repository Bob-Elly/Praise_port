# Antigravity prompts: Godwin Praise portfolio

## How to use this file

1. Paste Prompt 0 first. It sets the rules for the whole site.
2. Paste Prompts 1 to 6 one at a time, attaching the screenshots and images named in each.
3. Check each page in the browser before moving to the next one.
4. Paste Prompt 7 at the end for a final review.

The screenshots of her Figma designs are the visual source of truth. They may show Figma interface leftovers (blue selection boxes, dotted borders, frame labels, size badges, grey margins, stray lines). Ignore all of those.

## Images to have ready

- welcome-photo (the new photo for the welcome page, replacing the current one)
- brick-bg (the white brick wall background)
- hero-phone (hand holding a phone, transparent background)
- Slideshow and project images: Baggit sign-in and sign-up screens, fitness analytics, AkuMart For You page, Yinyin Fantasy sticker (clean export), Nova Tech login, Wix landing page mockup (a crop without the Wix logo and title if she has one)
- Case study images: Baggit screens, AkuMart screens (landing hero, problem and solution, how it works, For You page, closing call to action), Fitness App screens (onboarding, home, workout summary, analytics overview, trends and goals)

---

## Prompt 0: Site-wide brief (paste first)

You are building a responsive multi-page portfolio website for Godwin Praise, a UI, UX and brand designer. The client has already designed every page in Figma, and screenshots are attached with each page prompt. Reproduce those designs faithfully. Keep every design element (layout, colors, fonts, spacing, copy) unless a prompt lists a change.

**Tech and hosting**
- Static multi-page site in HTML, CSS and vanilla JavaScript. No backend, no paid services, no required build step. It will be hosted free on Netlify.
- Shared styles and scripts for the navigation, buttons and repeated sections (the contact section and the FAQ).
- Keep every external link (booking link, social links) and the public email address in one clearly labelled place so they are easy to edit.
- The contact form must work as a Netlify Form, with a hidden spam honeypot field, inline validation and an on-page success message.
- Optimize images: resize, compress, lazy-load anything below the fold, and set explicit dimensions so the layout does not jump.

**Pages**
- Welcome page (site root): the brick-wall landing page
- Home
- About Me
- Projects, plus three case study pages (Baggit, AkuMart, Fitness App)
- Process
- Contact

**Design tokens (sample exact values from the screenshots, do not guess)**
- Dark maroon: buttons, accent words in headings, the active nav pill, the FAQ panel
- Cream: nav bar, cards, pricing background
- White backgrounds, near-black text, and the tan used for the "ABOUT ME" heading on the Home page
- Typeface: Poppins for headings, buttons and most body text. Match the screenshots where text looks different (for example the welcome page paragraphs).
- Rounded corners and pill-shaped buttons throughout, as designed

**Navigation (every page except the Welcome page)**
- Items: Home, About Me, Projects, Process, Contact. Her design says "Project"; use "Projects".
- The current page is a solid maroon pill with light text.
- Frosted-glass style on every page: a translucent cream pill-shaped bar with a soft background blur, a thin light border and a gentle shadow. Text stays exactly as designed. Make the bar sticky at the top so the glass effect shows when content scrolls beneath it. Fall back to a solid cream bar if backdrop blur is not supported.
- On phones, collapse into a menu button that opens a panel in the same glass style.

**Buttons and hover effects (every button and button-like link)**
This includes Dive In, See My Projects, See Projects, Schedule 15-mins call, Proceed, Begin Your Journey, Explore My Work, See the project, the nav items and the FAQ rows.
- One consistent system: on hover, lift 2px with a soft shadow and a slightly lighter or darker fill. Outline buttons fill with maroon and switch to light text. Arrows nudge a few pixels to the right.
- A pressed state, a visible keyboard focus ring, and smooth transitions of about 200ms.
- Respect reduced-motion settings (no movement, color changes only).

**Responsive**
- Mobile-first. Test at roughly 360, 390, 768, 1024 and 1440px wide. No horizontal page scroll at any width.
- Multi-column layouts stack on phones, touch targets are at least 44px, and body text is at least 16px on mobile (the Figma text is small).

**Accessibility and quality**
- Semantic HTML, alt text on every image, sufficient contrast, full keyboard use.
- A page title and meta description for each page.
- Every button and link must go somewhere real. If a destination is not known, point it to a clearly labelled placeholder and list it at the end.

**Copy rules**
- Use "Godwin Praise" as the full name everywhere it appears in text. Change "I'm Praise" and "Hi, I'm Praise" to "I'm Godwin Praise" and "Hi, I'm Godwin Praise". Text inside her design screenshots (for example the name shown in the AkuMart screen) stays as it is.
- Transcribe copy from the screenshots, applying the corrections listed in each prompt. Do not invent facts, metrics, clients or testimonials.
- Where something is missing, use a clearly marked placeholder and list it at the end.

**Known placeholders**
The booking link for the 15-minute call, her social profile links, and any image not yet supplied.

**When you finish**
Report which pages are done, which placeholders remain, and any assumptions you made.

---

## Prompt 1: Welcome page

Attach: the welcome page screenshot, welcome-photo, brick-bg.

Build the welcome page exactly as designed:
- Full-bleed white brick-wall background (use brick-bg; if it is missing, use a plain off-white background and flag it).
- A centered caption "UI DESIGNER | UX DESIGNER | BRAND DESIGNER", then her name "GODWIN PRAISE" in bold dark maroon capitals.
- A circular photo on the left with a thin maroon outline ring offset behind it, and three intro paragraphs on the right ending with "Let's build products that matter." Transcribe the paragraphs from the screenshot.
- An outlined maroon pill button "Dive In →".
- No navigation bar on this page.

Changes:
- Replace the photo with welcome-photo, cropped to fill the circle with her face centered.
- "Dive In" goes to the Home page.
- On phones, stack the caption, name, photo, paragraphs and button in one centered column. Keep the text readable over the brick texture (a very light overlay is fine).

---

## Prompt 2: Home page

Attach: the Home page screenshots, hero-phone, and the six slideshow images.

One continuous scroll, in this order.

**1. Hero**
- Headline "Turning Ideas Into Products" with "Into Products" in maroon, then "I'm Godwin Praise," in bold maroon and the line "A product designer creating clean, user-focused digital experiences."
- A "See My Projects" button to the Projects page, with the hero-phone image on the right.
- Fixes: remove the thin horizontal line that cuts through the text, and align the button's left edge with the text.

**2. About Me (shortened)**
Keep the centered tan "ABOUT ME" heading in a rounded white card, but replace the long text with these two paragraphs and remove the "See More" button:

"I'm Godwin Praise, a product designer focused on creating clean, modern, and intuitive digital experiences that solve real user problems. I blend user-centered thinking with strong visual design to help founders and teams build products that are simple, usable, and aligned with business goals.

My process is rooted in understanding: the user, the product, and the problem that needs to be solved. I turn those insights into thoughtful interfaces and seamless user flows that make products feel effortless to use."

**3. Selected Projects slideshow**
This replaces the blank third section in her design.
- Full-width maroon background with the centered heading "Selected Projects" in cream.
- An auto-scrolling strip of six images moving slowly and continuously, looping seamlessly with no visible jump (duplicate the set).
- All slides share the same height, and each width follows its image's natural proportions. Do not crop or stretch. The height scales with the screen: about 220px on phones up to about 420px on large desktops.
- Each image sits in a rounded card with an even gap between cards. Pause the motion on hover. With reduced motion enabled, show a static, horizontally scrollable strip instead.
- The slideshow is passive: slides are not clickable and there is no enlarge or lightbox view.
- After the strip, add a "See Projects" button to the Projects page.
- Image order: Baggit sign-in and sign-up screens, fitness analytics, AkuMart For You page, Yinyin Fantasy sticker, Nova Tech login, Wix landing page mockup.

**4. Design Tools**
- Heading "Design Tools" in a white card. Show each icon once, all in a single line: Figma, Framer, Pinterest, FigJam, Behance, Dribbble, Miro. Her design repeats Figma and Pinterest; remove the duplicates. Use the logos from the screenshot, or redraw them as simple SVGs.
- Keep one line at every width by scaling the icons down on small screens.

**5. Closing contact section**
Use the "Transform Your Concept into a Functional Digital Product." section as designed, as the end of the page. The Project Details form is on the left. On the right are the "Book a call today!" card with the "Schedule 15-mins call" button, and the "What To Expect" list.
- Fixes: remove the blue outline; correct "trabsform" to "transform" and "send a messages" to "send a message"; the text box placeholder should read "Tell me a bit about your project."
- Form fields: Name, Email, Phone / WhatsApp (optional), About Project.
- Build this section as a reusable component, because it also ends the About page.

---

## Prompt 3: About Me page

Attach: the About page screenshots and the Baggit sign-in and sign-up image.

One continuous scroll, in this order.

**1. Intro, stats, skills, education**
- "Hi, I'm Godwin Praise" (name in maroon) and the bio from the screenshot, with clear spacing between paragraphs and a comfortable reading size.
- Stat cards: 3+ Countries, 15+ Projects Completed, 10+ Students Trained. Her design shows a second "3+ Countries" card; remove it. Three cards in one row on desktop, wrapping on phones.
- Skills card: Usability Testing, User Research, User Experience Design, User Interface Design, Wireframing & Prototyping, Design Systems. Her design says "User Researcher"; use "User Research".
- Educational Background card: "B Eng Mechatronics Engineering, FUTO".

**2. Design Experience**
- Heading and two-column layout as designed, with the text transcribed from the screenshot.
- Replace the team stock photo with the Baggit sign-in and sign-up image in the same rounded frame. Keep the "Begin Your Journey →" button overlaid at the image's bottom right, linking to the Contact page.

**3. Our Work Strategy**
- Four numbered circles joined by a line: Consultation Call, Project Plan & Timeline, Prototype and Iterate, Launch. Close up the large empty gap beneath it in her design.
- On phones, stack vertically with a vertical connector.

**4. Transparent Pricing Structure**
Cream background with three equal cards in a row (stacked on phones). Her design cuts the third card off at the right edge, so make sure all three are fully visible.
- Mobile Design Project (Android / iOS): $200-$500, 6-8 weeks
- Website Design Project (Responsive Landing Page): $350-$700, 4-6 weeks
- Design Systems / Components: $100-$300, 2 weeks

Typos in her design to correct: "Andriod/ ios", "Wesite", "6-8weeks", "4-6weeks".

**5. Closing contact section**
Reuse the same "Transform Your Concept into a Functional Digital Product." section as at the end of the Home page.

Nav: About Me is the active item.

---

## Prompt 4: Projects page and case studies

Attach: the Baggit case study screenshots and the project images.

### Projects page
- Nav, then the heading "Selected Projects" and the intro line "A selection of work across e-commerce, fitness, and B2B marketplaces."
- A grid of three large cards (one column on phones). Each has an image, the title, a one-line description and a "See the project →" link. The whole card is clickable. On hover the card lifts and the image zooms slightly.
  - Baggit: "Fashion & Lifestyle Brand: mobile e-commerce experience." Image: Baggit sign-in and sign-up screens.
  - AkuMart: "B2B marketplace for waste and recycled materials." Image: the AkuMart landing page hero.
  - Fitness App: "Personalized workout and progress tracking." Image: the onboarding screen.
- A second section with the heading "More Work": three lighter pieces shown as cards that overlap slightly and sit at small angles (about -6, 0 and +6 degrees). Cards: Nova Tech login screen, landing page design (the Wix mockup), Yinyin Fantasy sticker design.
  - On hover, a card straightens, rises in front of its neighbors, scales up a little, gains a stronger shadow and reveals a short caption: "Nova Tech: Login screen", "Landing page design", "Yinyin Fantasy: Sticker design".
  - These are hover-only and not clickable. Use the same card size for all three, with each image fully visible on a cream background and not cropped.
  - On phones there is no hover, so stack the cards vertically without overlap, keep the slight tilt, and show the captions beneath each card.

### Case study pages (shared template, modelled on her Baggit page)
- A "Back to Projects" link at the top and a "Next project →" link at the bottom that cycles through the three.
- Title and subtitle at the top left, with the main image on the right on desktop (stacked on phones).
- Sections as listed for each project below, a cream Project Details card on the right, and Key Focus as four numbered cards in a 2x2 grid alternating maroon and cream (1 and 4 maroon, 2 and 3 cream, as in her Baggit design).
- Screens appear as a gallery of full-width images with lazy loading.
- No duration row, except on Baggit.

#### Baggit
Transcribe all copy from her Baggit screenshots: title "Baggit", subtitle "Fashion & Lifestyle Brand", Project Overview, Aim, My Role, Design Process, Key Focus, Outcome.
- Project Details rows: Project Name: Baggit E-commerce Experience. Client: Baggit. Project Type: Mobile E-commerce Design. Duration: 8 Weeks. Tools Used: Figma, Miro.
- Corrections: "Project Time" becomes "Project Type"; "Design on intuitive shopping flow" becomes "Design an intuitive shopping flow".
- Place the testimonial from her design as a quote block after the Outcome section, signed "Peace Godwin", with no extra heading. Add a hidden code comment reminding the owner to confirm it is a real client quote.

#### AkuMart
- Title "AkuMart", subtitle "B2B Marketplace for Waste & Recycled Materials".
- Project Overview: "AkuMart is a B2B marketplace for trading waste and recycled materials across Nigeria. It connects businesses that have reusable materials with buyers who need reliable supply. The design covers the marketing landing page and a seller dashboard built around a feed, listings, analytics and a profile."
- Problem: Businesses pay to dispose of reusable waste. Buyers struggle to find reliable suppliers. Lack of trust and transparency in transactions. Logistics and coordination are difficult and expensive.
- Solution: A trusted marketplace for waste materials. AI-powered matching for the right connections. Secure payment and verified businesses. Integrated logistics and real-time tracking.
- How It Works. For Sellers: List Waste Materials, Connect With Buyers, Get Paid Securely. For Buyers: Secure reliable supply, Quality materials, Reduce production costs.
- My Role: "UI/UX design: landing page structure, marketplace messaging, and the seller dashboard (feed, listings, analytics and profile)."
- Key Focus: 1) Two audiences, two clear journeys: separate steps for sellers and buyers. 2) Trust built into the interface: verified businesses and secure payment are front and center. 3) A familiar seller dashboard: a feed-style For You page with listings, a profile and quick links. 4) A green, calm visual language that suits a sustainability-focused marketplace.
- Project Details rows: Project Name: AkuMart. Project Type: B2B marketplace (landing page and seller dashboard). Nothing else.
- Screens: landing hero, problem and solution, how it works, For You dashboard, closing call to action.
- No Design Process or Outcome section.

#### Fitness App
- Title "Fitness App", subtitle "Personalized Workout & Progress Tracking".
- Project Overview: "A mobile fitness app that builds personalized workouts around a user's body, goals and lifestyle, and keeps them motivated with streaks, XP, leagues and achievements. The design covers onboarding, a home screen, a workout summary and an analytics section with Overview, Trends and Goals views."
- My Role: "UI/UX design: onboarding, home, workout summary and analytics screens."
- Key Focus: 1) Motivation built in: XP, leagues, streaks and achievement badges reward consistency. 2) Progress at a glance: Overview, Trends and Goals tabs turn activity into simple stats and charts. 3) Quick access to training: top workouts and a training schedule on the home screen. 4) A clear post-workout summary: effort, calories, duration and completion in one view.
- Project Details rows: Project Name: Fitness App. Project Type: Mobile app. Nothing else.
- Screens: onboarding, home, workout summary, analytics overview, trends and goals.
- No Design Process or Outcome section.

---

## Prompt 5: Process page

Attach: the Process page screenshots.

**1. Six steps**
Inside one large rounded white card, show the six steps with alternating layout (numeral tile on the left, then on the right, and so on): Discover, Research, Structure, Design, Prototype & Iterate, Deliver & Support. Each step has a gradient numeral tile, a small icon, a "Step N" label, the heading, a bold intro sentence and three bullets. Transcribe the copy from the screenshots. On phones, put the tile above the text. Correction: "Prototype& Iterate" becomes "Prototype & Iterate".

**2. Three value cards**
Fast & Reliable Delivery, Clear Pricing Structure, Continuous Refinement. Use equal heights, the same icon style (her Clear Pricing Structure icon is paler than the others), and identical text alignment in all three cards.

**3. FAQ**
- A maroon panel with the heading "Frequently Asked Questions" (her design says "Question").
- Six cream pill rows with a + icon. Clicking a row expands its answer, and the + becomes a −. Only one row is open at a time, with a smooth open and close. Build it accessibly (buttons, aria-expanded, keyboard support).
- Question 1, "How long does a typical design project take?": "It depends on the scope. As a guide, mobile app projects take about 6-8 weeks, website projects such as a responsive landing page about 4-6 weeks, and design systems or component libraries about 2 weeks. We agree a timeline together after the consultation call."
- Question 2, "What do you need to get started?": "A short description of your project goals and vision, your target users, the key functionality you have in mind, your branding and visual direction, and any apps or websites you like for reference. Tell me which deliverables you expect (wireframes, prototypes, high-fidelity designs) and we'll take it from there."
- Question 3, "Can you work within my existing brand guidelines?": "Yes. If you have brand guidelines, I design within them, including colors, typography, tone and components. If you don't, I can help define a clear visual direction."
- Question 4, "Do you design both mobile and web interfaces?": "Yes. I design for mobile apps (Android and iOS) and responsive websites, including dashboards, onboarding flows and landing pages."
- Question 5, "Will I be involved in the design process?": "Yes. You're involved at key points, from the consultation call and project plan through prototype reviews, and your feedback shapes each round of refinement."
- Question 6, "Do I get full ownership of the design files?" (her design says "ownwership"): "Ownership and file handover terms are agreed in writing before the project begins, so everything is clear from the start."

**4. Closing section (new)**
After the FAQ, end the page with a cream band: the heading "Ready to start your project?", the line "Tell me about your idea and let's take the first step.", a primary button "Begin Your Journey →" to the Contact page and a secondary button "Explore My Work" to the Projects page. This replaces the unfinished dark navy block at the bottom of her FAQ screenshot.

Ignore the blue outline and dotted border around steps 3 and 4 in the screenshots.

---

## Prompt 6: Contact page

Attach: the Contact page screenshot and the screenshot of the footer-style contact section ("Transform Your Concept into a Functional Digital Product.").

Keep her dedicated Contact page layout and add the missing content from the footer-style section.

- Nav: the frosted-glass bar, with Contact active.
- **Left column:**
  - Headline "Let's work together to build your next product" (her design says "Lets") and the intro "Ready to transform your product with clean, trending UI that enhances engagement, simplifies interactions, and gives your users a reason to stay."
  - A card with "Send an email directly" and godwinpraise05@gmail.com as a mailto link, then "Follow on my socials" with icons for her real platforms. Her design shows the Apple, Google and Facebook sign-in logos by mistake; do not use them. Use placeholder links for the platforms she uses and list them at the end.
  - A "Book a call today!" card: "For immediate attention, let's talk directly on your project." with a "Schedule 15-mins call" button linking to the booking link placeholder, opening in a new tab.
- **Right column:** the form card with Name, Email, Phone / WhatsApp (optional), Project Details (placeholder "Tell me a bit about your project.") and a "Proceed →" button.
  - Name, Email and Project Details are required, with inline error messages.
  - It submits through Netlify Forms with a honeypot field.
  - While sending, disable the button. Afterwards show the message "Thanks for reaching out. Your message has been sent."
- **Below both columns:** a full-width "What To Expect" strip with these six items, with consistent punctuation (no trailing periods, no italics): Project Goals & Vision; Target Users & Audience; Functionality of the product; Branding, style, and visual direction; What kind of app, websites, or experiences they like; Key deliverables (wireframes, prototypes, high-fidelity designs).
- Responsive: columns stack on phones in this order: headline, email and socials card, booking card, form, What To Expect.

---

## Prompt 7: Final review (paste last)

Review the whole site against the earlier prompts and fix anything that does not match:
1. Open every page at 360, 390, 768, 1024 and 1440px wide. Check for horizontal scroll, overlapping elements and text that is too small.
2. Confirm every button and link has a working destination and a hover effect, and that the frosted-glass nav is on every page except the welcome page.
3. Confirm "Godwin Praise" is used for the full name in all text, and that no typo from the listed corrections remains.
4. Confirm the slideshow loops seamlessly, pauses on hover and stays passive, and that the FAQ rows open and close with the + and − icons.
5. Confirm the contact form validates, submits as a Netlify Form and shows the success message.
6. Confirm images are compressed and lazy-loaded.
7. List every placeholder still in the site (booking link, social links, any missing images) and every assumption you made.
