/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>APEX Core is a state-of-the-art cryptocurrency wallet and trading platform developed by AlphaPoint, designed to provide a seamless, secure, and efficient experience for users managing digital assets globally. This robust platform is the centerpiece for cryptocurrency trading, margin trading, and other advanced financial operations, catering to a worldwide audience.</p>";

				const frontmatter = {"title":"APEX Core","tags":["React Native","JavaScript","WebSocket","C#","React","Postman","WebSites","Mobile App"],"date":2024,"url":"#"};
				const file = "/Users/steevenmedina/portfolio/astro-cv-esquelete/src/pages/projects/1_ApexCore.md";
				const url = "/projects/1_ApexCore";
				function rawContent() {
					return "\nAPEX Core is a state-of-the-art cryptocurrency wallet and trading platform developed by AlphaPoint, designed to provide a seamless, secure, and efficient experience for users managing digital assets globally. This robust platform is the centerpiece for cryptocurrency trading, margin trading, and other advanced financial operations, catering to a worldwide audience.\n";
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
