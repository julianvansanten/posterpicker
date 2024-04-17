import type { RecordModel } from 'pocketbase'

export const createGroup = (pbGroup: RecordModel): Group => ({
	name: pbGroup.name,
	number: pbGroup.number,
	id: pbGroup.id,
})

export type Group = {
    number: number,
    name: string,
    id: string
}