import { MapNode } from '@/core/map-tree'

export const createMap = async (keywords: string[]) => {
	const res = await fetch(
		`https://1tfkkuahq9.execute-api.us-east-2.amazonaws.com/default/create`,
		{
			method: 'POST',
			body: JSON.stringify({ keywords }),
		},
	)
	const json = await res.json()
	return json
}

export const updateMap = async (id: string, keywords: string[]) => {
	const res = await fetch(
		`https://1tfkkuahq9.execute-api.us-east-2.amazonaws.com/default/update?key=${id}`,
		{
			method: 'POST',
			body: JSON.stringify({ keywords }),
		},
	)
	const json = await res.json()
	return json
}

export const readMap = async (
	id: string,
): Promise<{
	input: string[]
	output: MapNode
}> => {
	const res = await fetch(
		`https://1tfkkuahq9.execute-api.us-east-2.amazonaws.com/default/read?key=${id}`,
	)
	const json = await res.json()
	return json
}
