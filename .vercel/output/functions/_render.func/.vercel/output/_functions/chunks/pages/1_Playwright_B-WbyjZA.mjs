/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Master end-to-end (E2E) testing with Playwright and TypeScript. Learn to build reliable, scalable, and fast test suites for modern web applications while leveraging best practices in automation. Perfect for developers and testers aiming to enhance their skills in efficient and robust UI testing.</p>";

				const frontmatter = {"title":"Playwright with TypeScript E2E Testing","org":"Udemy","tags":["Playwright","Automation","Reporting","POM","E2E","API Testing"],"url":"https://www.udemy.com/certificate/UC-d9f7b343-ab5b-4097-919a-ad858c4dd0d0/","date":2024};
				const file = "/Users/steevenmedina/portfolio/astro-cv-esquelete/src/pages/certificates/1_Playwright.md";
				const url = "/certificates/1_Playwright";
				function rawContent() {
					return "\nMaster end-to-end (E2E) testing with Playwright and TypeScript. Learn to build reliable, scalable, and fast test suites for modern web applications while leveraging best practices in automation. Perfect for developers and testers aiming to enhance their skills in efficient and robust UI testing.\n";
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
