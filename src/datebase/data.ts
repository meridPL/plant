export interface Plant {
   file_url: string,
   source: {
      uri: string
   },
   name: string,
   position: number
}
export const getPlantsDB = async (): Promise<Plant[]> => {
   const result = await fetch("https://garden-test-api.herokuapp.com/getPlantsFromGarden")
   return await result.json()
}