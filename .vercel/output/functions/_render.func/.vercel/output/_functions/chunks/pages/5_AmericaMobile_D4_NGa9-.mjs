/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>The SIM Management Project was developed for Telcel, a leading telecommunications provider under América Móvil, to streamline the management of SIM and eSIM cards. This comprehensive system was designed to handle various operational aspects, including activations, plan assignments, customer management, and Point of Sale (POS) operations.</p>";

				const frontmatter = {"title":"SIM Management America Mobile","tags":["Angular","Java","Oracle","API-Rest","Postman","Web App","Selenium"],"date":2019,"url":"#"};
				const file = "/Users/steevenmedina/portfolio/astro-cv-esquelete/src/pages/projects/5_AmericaMobile.md";
				const url = "/projects/5_AmericaMobile";
				function rawContent() {
					return "\nThe SIM Management Project was developed for Telcel, a leading telecommunications provider under América Móvil, to streamline the management of SIM and eSIM cards. This comprehensive system was designed to handle various operational aspects, including activations, plan assignments, customer management, and Point of Sale (POS) operations.\n";
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
