# PROJECT: UX TOOLING

**CREATE DROP-IN UI COMPONENTS AND/OR TOOLS TO AUGMENT THE STANDARD BROWSER UI TO IMPROVE THE OVERALL USER EXPERIENCE FOR USERS READING AN ARTICLE**

_This project was meant to be developed with a partner. Given the current circumstances (remote-only), you may opt to work alone if it is less stressful for you to do so._ 

_If you opt to work alone, you will still be expected to submit a full and complete solution. As well, you are still expected to behave as if this is a collaborative project (write "Issues", etc)._

---

## Article content

Write and style a document (topic of your choosing) using HTML and CSS. Ensure the content is vertically long enough to allow the browser to scroll at least three to four times the height of a browser window (assume an average height screen, with a browser using its default font size).

To help guide you and get you started, use the document outline, structure, and lorem ipsum content, written in the included file `index.html`, replacing the text and images with your original content.

For styling, consider responsive layouts, colour balance, fonts, formatting, and consistency. **But keep it simple!** Spend your time on the functionality that improves the experience before all else.

---

## Deliverables

For this project, you will build the following functional UI components, tools and functionality with Javascript, meant to improve the article's reading experience.

### A) Fixed heading when scrolled

When the user has scrolled past the article's primary heading, they may not have any context for what they're reading if they walk away, are interrupted or were sidetracked. Design a creative UI solution for bringing context to what is in the viewport by using a fixed element. This UI should be shown any time the primary heading is not being displayed. Get creative.

### B) Outline/heading landmarks (scrollspy)

Design a way to represent the document outline and show the user their progress as they scroll through it. The user should be able to easily view the article's outline and move a desired portion of the document into the viewport at any time. This UI may can be on display at all times, or shown/hidden through the handling of an `Event`.

   - An example of a "srollspy" (see the "Table of Contents" panel in a desktop browser): https://create.arduino.cc/projecthub/MoritzDornseifer/iot-cloud-enabled-alarm-clock-1e5119

### C) Controlled content reveal (carousel, slides, tabbed component, etc)

Design a component that will guide a user though content that is split into multiple parts. The content (text, images, or other media) may be controlled by the user or the application (timer, events, etc). The content may be of any type or medium (text content, images, videos, etc).

### D) Simulate infinite content

When a user reached the bottom of a document, maintain the fluidity of the experience and engagement by loading new content. More important than the loading of content (or the type of content loaded), is the UI and its impact on the UX. Place your focus on responsible engagement and ensure the user is made aware of all new content being added to the current page automatically (either upcoming, or already loading) while promoting a seamless, low-friction, ethically responsible experience. 

   - As an example, consider how Netflix transitions between shows or movies: The picture is shrunken to the corner while credit are rolling. An advertisement for new content is shown around it in the background. The name of the next show to be autoplayed is shown with a countdown timer and an option buttons.

---

## Other criteria or considerations

- No external libraries (including: jQuery, Bootstrap, etc)
- All code must be original
- If using examples or source material to assist, cite all resources with direct links to posts/comments (if applicable) in your `README.md`
- The page should be responsive to all device sizes and orientations (where within reason)
- All applied functionality should be working as expected in all states (remember to consider window resizing, initial loading, etc)

---

## Assessment

Parts of this project will be assessed in each of: WDDM 113, WDDM 114, and WDDM 115. Your instructor will provide details on expectations. 

### Categories

Aside from the solution code itself, as a general overview, you will be assessed for the following categories:

- **Documentation**
  - **Research**: document your: inspirations, sketches, drawings, analysis of potential exceptions, pros/cons of each solution, etc, through one of Github's tools (Readme, Issues, Projects, etc)
  - **Code**: assess the problem, break your code into micro tasks, add comments to guide you, document all functions
  - **Repository management**: commits (frequency, usage and messaging), issues/tickets, pull requests, organization
- **User interface**: colours, spacing, overall aesthetic/style
- **User experience**: usability, value added, seamless integration
- **Code structure**: indentation, names (variables and functions), readability, best practices
- **Portability**: ability to be dropped into any website, and/or scaled
- **Efficiency**: How efficient is this solution relative to other possibilities
- **Collaboration**: distribution of work, research, merging/managing code through git and Github Issues
- **Testing**: written tests, documentation, methods

### Expected grade range

- **0-49%**: Does not meet the project minimum requirements for all or some deliverables
- **50-64%**: Student work only meets the minimum requirement of all deliverables
- **65-79%**: Work quality meets all requirements and is on par with expectations based on the topics covered
- **80%+**: Student demonstrates the ability to implement a creative solution efficiently, including original content and topics that go beyond topics covered in class, with a sufficient level of complexity

---

## Submission

Ensure all work is included in a single repository, including all Git history. Publish the work through Github Pages so it can be viewed directly online. Both links (code and live) will be collected together.

Also be sure to include:

- All student names at the top of the `README.md` file, with links to their Github profile
- Cite all resources used (not including original content written and distributed by your instructors)
- As it may not be clear, write a short and clear list of "things to test" for your instructors to ensure they know exactly where to look for each solution while grading the UI


## References
1. To create the scroll indicator:
https://www.w3schools.com/howto/howto_js_scroll_indicator.asp

