import { CatInterface } from '@/src/types/cat';
const BASE_URL = `https://asianbeautygallery.netlify.app/`; // aidresart@gmail.com

//id is repo in home
export const HomeList: CatInterface[] = [
    { id: "sjustin", gh: "silkbeauty", title: "🚨 Just In 🌟" },    // id is repo in home
    { id: "abstunning", gh: "silkbeauty", title: "Hot 🧨 Stunning" },

    { id: "selite", gh: "silkbeauty", title: "🦵 Elite Queen" },
    { id: "sivylook", gh: "silkbeauty", title: "🍃 Campus Crush" },

    // { id: "ccmain", gh: "aidres8", title: "Yang Chenchen杨晨晨" },
    { id: "ccsexy", gh: "yomeycc", title: "💋 Sexy Yome 🈲" },
    { id: "cctempting", gh: "yomeycc", title: "🧨 Tempting Yome 🔥" },
    { id: "ccelegant", gh: "yomeycc", title: "💃 Elegant Yome 🌹" },
    { id: "cccool", gh: "yomeycc", title: "🍑 Cool Yome ⚡" },
    { id: "ccsweet", gh: "yomeycc", title: "👗 Sweet Yome 🍓" },
    { id: "cccasual", gh: "yomeycc", title: "🥂 Casual Yome 🌿" },
    { id: "cctimeless", gh: "yomeycc", title: "📌 Yome Timeless" },
    { id: "ccwardrobe", gh: "yomeycc", title: "Yome Wardrobe 🧥" },

    { id: "bwxy", gh: "aidres8", title: "Wang Xinyao 🔥 王馨瑶" },

    { id: "abkele", gh: "ai8ai", title: "Kele Vicky 🍑" },
    { id: "ablxl", gh: "ai8ai", title: "Lin Xinglan 🌹 林星阑" },
    { id: "absonyoonjoo", gh: "ai8ai", title: "Son Yoon Joo 💖 손윤주" },
    { id: "abxlz", gh: "ai8ai", title: "Xu Lizhi 🍑 徐莉芝" },
    { id: "abanran", gh: "ai8ai", title: "Anran ✨ 安然" },

    { id: "abspecialtaste", gh: "ai8ai", title: "Special Taste 😈" },
    { id: "bgifmp4", gh: "aidres8", title: "GIF 🎞️" },

    { id: "abinfluencer", gh: "ai8ai", title: "📸 Influencer 🎥" },
    { id: "ssocialite", gh: "silkbeauty", title: "🥂 Socialite 💃" },

    { id: "snextdoor", gh: "silkbeauty", title: "Next Door👗素人しろうと" },
    { id: "abmini", gh: "ai8ai", title: "Modern Minimalist 🛋️" },

    { id: "abstyles", gh: "ai8ai", title: "Signature Styles 🔥" },
    { id: "sche", gh: "silkbeauty", title: "👘 Elegant in Cheongsam" },

    { id: "abplaces", gh: "ai8ai", title: "Vibes 🌆" },

    { id: "ssarts", gh: "silkbeauty", title: "🎨 Arts " },
    { id: "sdeepseek", gh: "silkbeauty", title: "AI Generated🎉" },
    { id: "sdesktop", gh: "silkbeauty", title: "🖥️ Desktop 🪟" },
].map(item => {
    const randomIndex = Math.floor(Math.random() * 5) + 1;
    return {
        ...item, cover: `${BASE_URL}${item.id}/cat/bb${randomIndex}.jpg`, // Adjusted for Netlify
    };
});
