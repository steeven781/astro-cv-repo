/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<ul>\n<li>Analyzed requirements and user stories to design and execute comprehensive test cases, ensuring quality assurance for the Chivo Wallet App, Website, and APIs.</li>\n<li>Led the QA life cycle, overseeing processes for seamless and functional releases across applications.</li>\n<li>Developed and maintained test plans for Automation, Functional, Regression, Exploratory, Smoke, and End-to-End (E2E) testing.</li>\n<li>Tracked, documented, and resolved defects, ensuring high-quality product delivery.</li>\n<li>Maintained and updated automated test plans to support continuous testing and product updates.</li>\n<li>Automated testing for APIs using Postman and Thunder Client, web portals with Cypress, and mobile applications with Java, Selenium, and Appium.</li>\n<li>Reviewed testing procedures, analyzed test results, and generated detailed test reports for stakeholders.</li>\n<li>Collaborated with technical and product teams to define acceptance criteria and determine testing approaches for new and existing functionalities.</li>\n<li>Utilized Jira for issue tracking and Confluence for documentation, streamlining communication and processes.</li>\n<li>Led the QA team, driving continuous improvement and upholding high standards of product quality and performance.</li>\n</ul>";

				const frontmatter = {"title":"Senior QA Engineer","date":"2022 - Present","location":"El Salvador | Guatemala City","org":"Alphapoint","url":"#","tags":["QA","Quality Assurance","Automation","Regression Testing","E2E Testing","Functional Testing","Integration Testing","Mobile Testing","Crypto Wallet","Postman","Cypress","Appium","Jira","Selenium","MySQL","C#","WebSockets"]};
				const file = "/Users/steevenmedina/portfolio/astro-cv-esquelete/src/pages/works/work1.md";
				const url = "/works/work1";
				function rawContent() {
					return "\n- Analyzed requirements and user stories to design and execute comprehensive test cases, ensuring quality assurance for the Chivo Wallet App, Website, and APIs.\n- Led the QA life cycle, overseeing processes for seamless and functional releases across applications.\n- Developed and maintained test plans for Automation, Functional, Regression, Exploratory, Smoke, and End-to-End (E2E) testing.\n- Tracked, documented, and resolved defects, ensuring high-quality product delivery.\n- Maintained and updated automated test plans to support continuous testing and product updates.\n- Automated testing for APIs using Postman and Thunder Client, web portals with Cypress, and mobile applications with Java, Selenium, and Appium.\n- Reviewed testing procedures, analyzed test results, and generated detailed test reports for stakeholders.\n- Collaborated with technical and product teams to define acceptance criteria and determine testing approaches for new and existing functionalities.\n- Utilized Jira for issue tracking and Confluence for documentation, streamlining communication and processes.\n- Led the QA team, driving continuous improvement and upholding high standards of product quality and performance.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
