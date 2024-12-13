/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>With over 5 years of experience in software quality assurance, I specialize in crafting and executing comprehensive test cases, automating workflows, and detecting critical defects to ensure the delivery of high-quality software solutions for high-demand environments. Renowned for my creative problem-solving skills and precision in execution, I bring a proactive approach to identifying and addressing challenges, driving software reliability and performance. My commitment to continuous improvement underpins my work, enabling me to consistently enhance software quality and exceed expectations.</p>";

				const frontmatter = {"title":"about","name":"Steeven Medina","designation":"Software QA Engineer","location":"Guatemala, Guatemala City","pronouns":"he/him/el","website":"/"};
				const file = "/Users/steevenmedina/portfolio/astro-cv-esquelete/src/pages/about/about.md";
				const url = "/about/about";
				function rawContent() {
					return "\nWith over 5 years of experience in software quality assurance, I specialize in crafting and executing comprehensive test cases, automating workflows, and detecting critical defects to ensure the delivery of high-quality software solutions for high-demand environments. Renowned for my creative problem-solving skills and precision in execution, I bring a proactive approach to identifying and addressing challenges, driving software reliability and performance. My commitment to continuous improvement underpins my work, enabling me to consistently enhance software quality and exceed expectations.\n";
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
