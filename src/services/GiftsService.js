import { AppState } from "../AppState.js"
import { Gift } from "../models/Gift.js"
import { Giphy, SandboxServer } from "./AxiosService.js"



class GiftsService {
  async getGifts() {
    const res = await SandboxServer.get('api/gifts')
    AppState.gifts = res.data.map(g => new Gift(g))
    // console.log(AppState.gifts);
  }
  async openGift(gift) {
    gift.opened = true
    const res = await SandboxServer.put(`/api/gifts/${gift.id}`, gift)
    // console.log(res.data);
    const updatedGift = new Gift(res.data)
    const index = AppState.gifts.findIndex(g => g.id == gift.id)
    AppState.gifts.splice(index, 1, updatedGift)
  }

  async getGiph(tag) {
    const res = await Giphy.get('v1/gifs/random', {
      params: {
        tag: tag
      }
    })
    const results = await SandboxServer.post('/api/gifts/', { tag: tag, url: res.data.data.images.downsized.url })

    // console.log(results.data);
    const newGift = new Gift(results.data)
    AppState.gifts = [newGift, ...AppState.gifts]
    // AppState.gifts.push(newGift)

  }


}

export const giftsService = new GiftsService()