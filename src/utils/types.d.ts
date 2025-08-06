export type User = {
    name: string,
    avatar: string
}

export type StatsSet = 'followers' | 'subscribers'

export type Stats = Record<StatsSet, number>

// export type PropsBody = {
//     user:User,
//     stats: Stats,
//     changeAvatar: (url: string) => void,
//     changeName: (name:string) => void
// }

export type ContextValue = {
    user: User
    stats: Stats
    changeAvatar: (url: string) => void
    changeName: (name: string) => void
    changeStat: (statSet: StatsSet, amount: number) => void
}