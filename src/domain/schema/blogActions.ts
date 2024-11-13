import { IBlog } from "./entities"

export type DeleteAction = (id: string) => void
export type LikeAction = (id: string, data: IBlog) => void