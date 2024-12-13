/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>The Chivo Wallet is a groundbreaking cryptocurrency wallet designed to facilitate seamless financial transactions and crypto management. As part of this project, I contributed to the quality assurance of a high-volume application integral to the adoption and use of Bitcoin as legal tender. The project focused on delivering a secure, user-friendly platform for individuals and businesses to manage digital assets effectively.</p>";

				const frontmatter = {"title":"Chivo Wallet","tags":["React Native","JavaScript","WebSocket","C#","React","Cypress","Selenium","Appium","Postman"],"date":2022,"url":"#"};
				const file = "/Users/steevenmedina/portfolio/astro-cv-esquelete/src/pages/projects/2_ChivoWallet.md";
				const url = "/projects/2_ChivoWallet";
				function rawContent() {
					return "\nThe Chivo Wallet is a groundbreaking cryptocurrency wallet designed to facilitate seamless financial transactions and crypto management. As part of this project, I contributed to the quality assurance of a high-volume application integral to the adoption and use of Bitcoin as legal tender. The project focused on delivering a secure, user-friendly platform for individuals and businesses to manage digital assets effectively.\n";
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
