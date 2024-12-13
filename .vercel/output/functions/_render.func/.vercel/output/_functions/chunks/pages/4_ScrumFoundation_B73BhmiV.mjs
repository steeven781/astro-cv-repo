/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Scrum Foundation Professional Certification holders have developed entry-level skills in Scrum that endorse their fundamental knowledge in this framework. They have demonstrated an understanding of the empirical Scrum pillars of transparency, inspection, and adaptation. Their primary focus is on the work of Sprint to make the best possible progress toward these goals.</p>";

				const frontmatter = {"title":"Scrum Foundation Professional Certificate","org":"CertiProf","tags":["Scrum","Agile","Methodology","Fundamentals","Manage"],"url":"https://www.credly.com/badges/bd9bc4cf-6a31-4a68-82c3-2493222e13a0","date":2020};
				const file = "/Users/steevenmedina/portfolio/astro-cv-esquelete/src/pages/certificates/4_ScrumFoundation.md";
				const url = "/certificates/4_ScrumFoundation";
				function rawContent() {
					return "\nScrum Foundation Professional Certification holders have developed entry-level skills in Scrum that endorse their fundamental knowledge in this framework. They have demonstrated an understanding of the empirical Scrum pillars of transparency, inspection, and adaptation. Their primary focus is on the work of Sprint to make the best possible progress toward these goals.\n";
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
