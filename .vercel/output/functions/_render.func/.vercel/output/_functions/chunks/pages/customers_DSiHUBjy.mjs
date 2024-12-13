/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Satisfied Customers","logos":["/logos/logo1.png","/logos/logo2.png","/logos/logo3.png","/logos/logo4.png","/logos/logo5.png","/logos/logo6.png"]};
				const file = "/Users/steevenmedina/portfolio/astro-cv-esquelete/src/pages/customers/customers.md";
				const url = "/customers/customers";
				function rawContent() {
					return "";
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
