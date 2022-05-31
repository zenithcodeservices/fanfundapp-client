
import type ChampionUriAttribute from './ChampionUriAttribute'

type ChampionUri = {
  id: number
  value: number
  name: string
  description: string
  attributes: ChampionUriAttribute[]
  image: string
}

export default ChampionUri
