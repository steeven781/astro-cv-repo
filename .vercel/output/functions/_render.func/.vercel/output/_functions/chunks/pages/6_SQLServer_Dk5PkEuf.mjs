/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Learn Database Development with SQL Server, aligned with the 70-762 certification. Master querying, data modeling, and advanced database design to build efficient and scalable solutions. Perfect for developers and database professionals aiming to enhance their skills and achieve certification success.</p>";

				const frontmatter = {"title":"Database Development SQL Server 70-762","org":"Udemy","tags":["Database","SQL","SQL Server","Query","DB","DBA"],"url":"https://www.udemy.com/certificate/UC-8UYOGTVP/","date":2020};
				const file = "/Users/steevenmedina/portfolio/astro-cv-esquelete/src/pages/certificates/6_SQLServer.md";
				const url = "/certificates/6_SQLServer";
				function rawContent() {
					return "\nLearn Database Development with SQL Server, aligned with the 70-762 certification. Master querying, data modeling, and advanced database design to build efficient and scalable solutions. Perfect for developers and database professionals aiming to enhance their skills and achieve certification success.\n";
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
