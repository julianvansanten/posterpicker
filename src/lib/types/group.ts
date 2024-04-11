import type { RecordModel } from 'pocketbase'
import type { Group } from '../../types/group'

export const createGroup = (pbGroup: RecordModel): Group => ({
	name: pbGroup.name,
	number: pbGroup.number,
	id: pbGroup.id,
})
