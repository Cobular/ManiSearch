import one from './json/1.json';
import two from './json/2.json';
import three from './json/3.json';
import four from './json/4.json';
import five from './json/5.json';
import six from './json/6.json';
import seven from './json/7.json';
import eight from './json/8.json';
import nine from './json/9.json';

interface Document {
	name: string;
	number: number;
	items: string[];
}

export interface FuseDocument {
    manifest_name: string;
    manifest_number: number;
    item: string
}

export function isDocument(obj: unknown): obj is Document {
	return (
		typeof obj === 'object' &&
		obj !== null &&
		'name' in obj &&
		typeof (obj as Document).name === 'string' &&
		'number' in obj &&
		typeof (obj as Document).number === 'number' &&
		'items' in obj &&
		Array.isArray((obj as Document).items) &&
		(obj as Document).items.every((item) => typeof item === 'string')
	);
}

/**
 * Turn every item in every document into a FuseDocument
 * @param documents 
 */
function reshapeTofuse(documents: Document[]): FuseDocument[] {
    return documents.flatMap((doc) => doc.items.map((item) => ({
        manifest_name: doc.name,
        manifest_number: doc.number,
        item
    })));
}


export const documents = [one, two, three, four, five, six, seven, eight, nine];
export const fuseDocuments = reshapeTofuse(documents);