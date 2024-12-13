/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Master end-to-end (E2E) testing with Playwright and TypeScript. Learn to build reliable, scalable, and fast test suites for modern web applications while leveraging best practices in automation. Perfect for developers and testers aiming to enhance their skills in efficient and robust UI testing.</p>";

				const frontmatter = {"title":"Fundamentals of web development Full Stack or Front-end","org":"LinkedIn","tags":["Development","API","FullStack","Clases","Fuctions","POO"],"url":"https://www.linkedin.com/learning/certificates/70a9442ca9bd0c00de06519ba88c341190b1523b4701b32ca3ac88a0e220a9c4?trk=backfilled_certificate","date":2021};
				const file = "/Users/steevenmedina/portfolio/astro-cv-esquelete/src/pages/certificates/3_FundamentalsWebDevelopment.md";
				const url = "/certificates/3_FundamentalsWebDevelopment";
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
