/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>This project focused on the development and optimization of workflows and functionalities to process large batches of scanned documents for Cigna Medical and Medicare services. The solution aimed to streamline document handling, improve operational efficiency, and ensure compliance with healthcare regulations.</p>";

				const frontmatter = {"title":"Cigna Medical & Medicare","tags":["C#","JavaScript","API-Rest","Postman","FTP","Desktop App","Reports and KPIs","SFTP"],"date":2022,"url":"#"};
				const file = "/Users/steevenmedina/portfolio/astro-cv-esquelete/src/pages/projects/4_CignaMedical.md";
				const url = "/projects/4_CignaMedical";
				function rawContent() {
					return "\nThis project focused on the development and optimization of workflows and functionalities to process large batches of scanned documents for Cigna Medical and Medicare services. The solution aimed to streamline document handling, improve operational efficiency, and ensure compliance with healthcare regulations.\n";
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
