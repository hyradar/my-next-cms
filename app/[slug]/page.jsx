import directus from '../../lib/directus';
import { notFound } from 'next/navigation';
import { readItems } from '@directus/sdk';

// async function getPage(slug) {
// 	try {

// 		const pages = await directus.items('event_posts').readByQuery({
// 			filter: {
// 				slug: {
// 					_eq: slug
// 				}
// 			},
// 			limit: 1,
// 			fields: ['title', 'slug', 'blocks', 'blocks.*']
// 		})
		
// 		return pages[0];
// 	} catch (error) {
// 		notFound();
// 	}
// }

export default async function DynamicPage({ params }) {
	// const page = await getPage(params.slug);
	return (
		<div>
			{/* <pre>{JSON.stringify(page)}</pre> */}
			{/* <h1>{page.title}</h1> */}
			{/* <div dangerouslySetInnerHTML={{ __html: page.content }}></div> */}
		</div>
	);
}