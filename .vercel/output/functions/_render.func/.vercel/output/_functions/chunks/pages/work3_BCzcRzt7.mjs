/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<ul>\n<li>Analyzed requirements and user stories to design and develop test cases tailored to diverse test scenarios.</li>\n<li>Created and executed detailed test cases to validate applications and systems comprehensively.</li>\n<li>Developed test plans for Functional, Regression, Exploratory, Smoke, and End-to-End (E2E) testing, ensuring full test coverage.</li>\n<li>Tracked, documented, and resolved defects, bugs, and glitches in APIs, web applications, and databases.</li>\n<li>Automated API testing by creating and executing test steps, plans, and scripts using Postman collections.</li>\n<li>Maintained and updated automated test plans and collections to ensure alignment with evolving test requirements.</li>\n<li>Integrated automation test scripts within GitLab pipelines to support continuous integration and deployment workflows.</li>\n<li>Ensured the accuracy and upkeep of a Test Plan focusing on functional testing for both existing and new features.</li>\n<li>Leveraged Jira to track user stories, bugs, and tasks, managing work hours and monitoring project progress.</li>\n</ul>";

				const frontmatter = {"title":"IT Engineer Tester II","date":"2019 - 2020","location":"Guatemala, Guatemala City","org":"Ericsson Guatemala","url":"#","tags":["QA","Postman","Jira","GitLab","Selenium","Automation Testing","E2E Testing","Regression Testing","Fuctional Testing","Performance Testing","Smoke Testing"]};
				const file = "/Users/steevenmedina/portfolio/astro-cv-esquelete/src/pages/works/work3.md";
				const url = "/works/work3";
				function rawContent() {
					return "\n- Analyzed requirements and user stories to design and develop test cases tailored to diverse test scenarios.\n- Created and executed detailed test cases to validate applications and systems comprehensively.\n- Developed test plans for Functional, Regression, Exploratory, Smoke, and End-to-End (E2E) testing, ensuring full test coverage.\n- Tracked, documented, and resolved defects, bugs, and glitches in APIs, web applications, and databases.\n- Automated API testing by creating and executing test steps, plans, and scripts using Postman collections.\n- Maintained and updated automated test plans and collections to ensure alignment with evolving test requirements.\n- Integrated automation test scripts within GitLab pipelines to support continuous integration and deployment workflows.\n- Ensured the accuracy and upkeep of a Test Plan focusing on functional testing for both existing and new features.\n- Leveraged Jira to track user stories, bugs, and tasks, managing work hours and monitoring project progress.\n";
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
