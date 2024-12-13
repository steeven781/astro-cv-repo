/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Master JavaScript 2020, from beginner to professional. Build a solid foundation in modern JavaScript, including ES6+ features, and develop the skills to create dynamic, interactive web applications with confidence. Perfect for aspiring developers ready to excel in the world of programming.</p>";

				const frontmatter = {"title":"JavaScript 2020 From Beginner to Professional","org":"Udemy","tags":["JavaScript","Development","Web","FrontEnd"],"url":"https://udemy-certificate.s3.amazonaws.com/pdf/UC-cead1a43-661d-4e3b-af9d-1b2898945b25.pdf","date":2020};
				const file = "/Users/steevenmedina/portfolio/astro-cv-esquelete/src/pages/certificates/5_JavaScript.md";
				const url = "/certificates/5_JavaScript";
				function rawContent() {
					return "\nMaster JavaScript 2020, from beginner to professional. Build a solid foundation in modern JavaScript, including ES6+ features, and develop the skills to create dynamic, interactive web applications with confidence. Perfect for aspiring developers ready to excel in the world of programming.\n";
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
