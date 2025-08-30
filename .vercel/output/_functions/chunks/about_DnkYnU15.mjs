/* empty css                         */
import { f as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate } from './astro/server_BcBCxlVw.mjs';
import 'kleur/colors';
import 'clsx';

const html = () => "<p>Físico egresado de la Facultad de Ciencias, UNAM, con experiencia en métodos numéricos y modelado computacional aplicado a la investigación científica, especialmente en fusión nuclear controlada y mecánica de fluidos. Familiarizado con análisis de datos experimentales, automatización tecnológica, y programación de alto rendimiento en entornos Linux/Unix. Manejo de lenguajes como Python, C++, Julia, SQL y CUDA. Aficionado a la electrónica, amante del tenis y escritor en ratos libres.\nDocente de matemáticas, física y computación con más de 4 años de experiencia. Apasionado por la divulgación científica y el trabajo interdisciplinario.</p>";

				const frontmatter = {"title":"about","name":"Uriel Yafté Sánchez Almaguer","designation":"Plasma Physicist","location":"Mexico, Mexico City","website":"http://tafutza.hn/kos"};
				const file = "/home/yafte/Documentos/websites/YafteDevCpp.github.io/src/pages/about/about.md";
				const url = "/about/about";
				function rawContent() {
					return "   \n            \n                                    \n                               \n                             \n                                \n   \n\nFísico egresado de la Facultad de Ciencias, UNAM, con experiencia en métodos numéricos y modelado computacional aplicado a la investigación científica, especialmente en fusión nuclear controlada y mecánica de fluidos. Familiarizado con análisis de datos experimentales, automatización tecnológica, y programación de alto rendimiento en entornos Linux/Unix. Manejo de lenguajes como Python, C++, Julia, SQL y CUDA. Aficionado a la electrónica, amante del tenis y escritor en ratos libres.\nDocente de matemáticas, física y computación con más de 4 años de experiencia. Apasionado por la divulgación científica y el trabajo interdisciplinario.\n";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`<meta charset="utf-8">${maybeRenderHead()}${unescapeHTML(html())}`;
				});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	compiledContent,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	rawContent,
	url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _, compiledContent as c, frontmatter as f };
