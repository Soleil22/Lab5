import { Emojis } from "../types/emojis";

class Emojiss {
    get(): Emojis[]{
        return [
            {
                cabeza: "https://emojiisland.com/cdn/shop/products/Flushed_Emoji_Icon_5e6ce936-4add-472b-96ba-9082998adcf7_large.png?v=1571606089",
                manos: "https://emojigraph.org/media/apple/heart-hands-medium-skin-tone_1faf6-1f3fd.png"
            },
            {
                cabeza: "https://cdn.shopify.com/s/files/1/1061/1924/products/Poisoned_Emoji_Icon_885fdba4-bbff-40e9-8460-1f453970cbdb.png?v=1485573481",
                manos: "https://emojigraph.org/media/apple/handshake-light-skin-tone_1f91d-1f3fb.png"
            },
            {
                cabeza: "https://emojiisland.com/cdn/shop/products/13_grande.png?v=1571606116",
                manos: "https://emojitool.com/img/apple/ios-13.3/call-me-hand-type-1-2-167.png"
            }
        ]
    }
}

export default Emojiss 