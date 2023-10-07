import { Emojis } from "../types/emojis";

class Emojiss {
    get(): Emojis[]{
        return [
            {
                cabeza: "https://emojiisland.com/cdn/shop/products/Flushed_Emoji_Icon_5e6ce936-4add-472b-96ba-9082998adcf7_large.png?v=1571606089",
                manos: "https://emojigraph.org/media/apple/heart-hands-medium-skin-tone_1faf6-1f3fd.png"
            },
            {
                cabeza: "https://imageio.forbes.com/specials-images/imageserve/602c09c9135a060af5e1a8f4/Face-with-Spiral-Eyes---a-new-Apple-emoji-/960x0.png?height=711&width=711&fit=bounds",
                manos: "https://emojigraph.org/media/apple/handshake-light-skin-tone_1f91d-1f3fb.png"
            },
            {
                cabeza: "https://imageio.forbes.com/specials-images/imageserve/63efaa7702c6b4c4adb8d5b0/Shaking-face-emoji-in-iOS-16-4-/960x0.png?height=711&width=711&fit=bounds",
                manos: "https://emojitool.com/img/apple/ios-13.3/call-me-hand-type-1-2-167.png"
            }
        ]
    }
}

export default Emojiss 