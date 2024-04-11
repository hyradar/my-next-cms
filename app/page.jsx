import directus from '../lib/directus';
// import { readItems } from '@directus/sdk';

import { createDirectus, rest, readItems } from '@directus/sdk';



async function getGlobals() {
	return directus.request(readItems('globals'));
}

export default async function HomePage() {
	const global = await getGlobals();
	// const client = createDirectus('directus_project_url').with(rest());
	// const result = await client.request(readItems('collection_name', query_object));

	// const x = directus.request(readItems('pages'));

	const client = createDirectus('https://lettuce-trial.directus.app').with(rest());

	// const result = await client.request(readItems('articles'));

	const result = await client.request(readItems('event_posts'));
	const firstItem = result[0];

	console.log({result});
	return (
		<div>
			<pre>{JSON.stringify(result, null, 4)}</pre>

			<h1>{firstItem.event_title}</h1>
			<p>{firstItem.event_copy}</p>
			<a href={firstItem.cta_link}><p>{firstItem.cta_button}</p></a>


			<p>the globals are printed out here</p>
			<h1>{global.title}</h1>
			<p>{global.description}</p>
		</div>
	);
}