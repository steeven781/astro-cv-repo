/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Learn Selenium with Java from scratch using VS Code. Master the Page Object Model, integrate Cucumber for BDD, and create professional automation frameworks. Gain expertise in dropdowns, waits, iFrames, file uploads, error handling, and advanced locators while generating stunning reports for robust UI testing. Perfect your skills to excel in automation projects and advance your career.</p>";

				const frontmatter = {"title":"Selenium With Java and Cucumber","org":"Udemy","tags":["Java","Automation","Selenium","Cucumber","POM"],"url":"https://www.udemy.com/certificate/UC-7d9af2da-b99b-496e-b9c5-a2feaf21d100/","date":2021};
				const file = "/Users/steevenmedina/portfolio/astro-cv-esquelete/src/pages/certificates/2_SeleniumJava.md";
				const url = "/certificates/2_SeleniumJava";
				function rawContent() {
					return "\nLearn Selenium with Java from scratch using VS Code. Master the Page Object Model, integrate Cucumber for BDD, and create professional automation frameworks. Gain expertise in dropdowns, waits, iFrames, file uploads, error handling, and advanced locators while generating stunning reports for robust UI testing. Perfect your skills to excel in automation projects and advance your career.\n";
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
