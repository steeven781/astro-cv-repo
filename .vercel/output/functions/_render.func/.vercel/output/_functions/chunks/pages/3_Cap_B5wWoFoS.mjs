/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>The CAP (Capture Automation Plugin) project was a specialized plugin developed to enhance the efficiency of scanning and processing large batches of documents for Cigna Medical and Medicare. The plugin was designed to automatically read and interpret barcodes on scanned files, sorting them into appropriate workflows and triggering specific functions based on predefined rules.</p>";

				const frontmatter = {"title":"CAP for Cigna Medical & Medicare","tags":["C#","JavaScript","React","API-Rest","Postman","FTP","Web App","SFTP","Barcodes"],"date":2022,"url":"#"};
				const file = "/Users/steevenmedina/portfolio/astro-cv-esquelete/src/pages/projects/3_Cap.md";
				const url = "/projects/3_Cap";
				function rawContent() {
					return "\nThe CAP (Capture Automation Plugin) project was a specialized plugin developed to enhance the efficiency of scanning and processing large batches of documents for Cigna Medical and Medicare. The plugin was designed to automatically read and interpret barcodes on scanned files, sorting them into appropriate workflows and triggering specific functions based on predefined rules.\n";
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
