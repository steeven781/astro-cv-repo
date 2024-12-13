/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<ul>\n<li>Analyzed requirements and user stories to design and execute detailed test cases, ensuring comprehensive testing coverage.</li>\n<li>Collaborated with Team Foundation Server (TFS), SharePoint, Reporting Services, and Desktop Applications to manage and optimize testing workflows.</li>\n<li>Developed a robust test plan encompassing Automation, Functional, Regression, Exploratory, Smoke, and End-to-End (E2E) testing for thorough validation.</li>\n<li>Tracked and documented defects, errors, bugs, and glitches in APIs and applications, ensuring prompt resolution and quality assurance.</li>\n<li>Developed and executed automated test steps using ReadyAPI and Postman collections to enhance API testing efficiency.</li>\n<li>Automated API testing with Postman and JavaScript to ensure consistent and reliable service functionality.</li>\n<li>Streamlined web application testing processes by automating workflows with Selenium and Java.</li>\n<li>Maintained and updated automated test plans and collections throughout the project lifecycle to ensure relevance and accuracy.</li>\n<li>Integrated automation test scripts into TFS pipelines to support continuous integration and deployment.</li>\n<li>Maintained an accurate and comprehensive Test Plan focusing on functional testing for new features and ongoing development.</li>\n<li>Leveraged Microsoft TFS for defect tracking, issue reporting, user story monitoring, pipeline approvals, managing change requests, and adding automation tests for each sprint.</li>\n<li>Managed task tracking in TFS to monitor work hours, foster team collaboration, and ensure efficient task completion.</li>\n</ul>";

				const frontmatter = {"title":"IT Automation Engineer II","date":"2020-2022","location":"Guatemala, Guatemala City","org":"Conduent Guatemala","url":"#","tags":["QA","Automation Testing","E2E Testing","Regression Testing","Fuctional Testing","Performance Testing","Smoke Testing","Postman","ReadyAPI","Microsoft DevOps","SQL Server"]};
				const file = "/Users/steevenmedina/portfolio/astro-cv-esquelete/src/pages/works/work2.md";
				const url = "/works/work2";
				function rawContent() {
					return "\n- Analyzed requirements and user stories to design and execute detailed test cases, ensuring comprehensive testing coverage.\n- Collaborated with Team Foundation Server (TFS), SharePoint, Reporting Services, and Desktop Applications to manage and optimize testing workflows.\n- Developed a robust test plan encompassing Automation, Functional, Regression, Exploratory, Smoke, and End-to-End (E2E) testing for thorough validation.\n- Tracked and documented defects, errors, bugs, and glitches in APIs and applications, ensuring prompt resolution and quality assurance.\n- Developed and executed automated test steps using ReadyAPI and Postman collections to enhance API testing efficiency.\n- Automated API testing with Postman and JavaScript to ensure consistent and reliable service functionality.\n- Streamlined web application testing processes by automating workflows with Selenium and Java.\n- Maintained and updated automated test plans and collections throughout the project lifecycle to ensure relevance and accuracy.\n- Integrated automation test scripts into TFS pipelines to support continuous integration and deployment.\n- Maintained an accurate and comprehensive Test Plan focusing on functional testing for new features and ongoing development.\n- Leveraged Microsoft TFS for defect tracking, issue reporting, user story monitoring, pipeline approvals, managing change requests, and adding automation tests for each sprint.\n- Managed task tracking in TFS to monitor work hours, foster team collaboration, and ensure efficient task completion.\n";
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
