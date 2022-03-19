import {
  IShop,
  IShopProductWithAuthor,
  License,
  ProductTypeEnum
} from "./types/IShopProduct";

export const shop: IShop = {
  authors: [
    {
      name: "V-Jira",
      slug: "singularity",
      links: {
        website: "https://github.com/V-Gira",
      },
      products: [
        {
          name: "Singularity : Introduction",
          slug: "intro",
          type: ProductTypeEnum.Resource,
          description: "Introduction à Singularity, une campagne pour Minutes to Midnight",
          license: License.CC_BY_4,
          footer:
            "Text by V-Gira under a Creative Commons Attribution 4.0 license (CC BY 4.0)",
          tags: ["singularity", "intro", "featured"],
          image: "https://cdn.pixabay.com/photo/2022/01/07/08/22/artificial-intelligence-6921404_960_720.jpg",
          links: {
            itchIo: "https://soliver.itch.io/minutes-to-midnight",
          },
        },
        {
          name: "Berlin",
          slug: "berlin",
          type: ProductTypeEnum.Flashpoint,
          description: "Flashpoint: Berlin",
          license: License.CC_BY_4,
          footer:
            "Text by V-Gira under a Creative Commons Attribution 4.0 license (CC BY 4.0)",
          tags: ["singularity", "flashpoint"],
          image: "https://cdn.pixabay.com/photo/2021/10/30/00/06/television-tower-6753284_960_720.jpg",
          links: {
          },
        },
      ],
    },
    {
      name: "Fari RPGs",
      slug: "fari-rpgs",
      links: {
        twitter: "https://farirpgs.com/twitter",
        website: "https://farirpgs.com",
      },
      products: [
        {
          name: "Charge RPG",
          slug: "charge-rpg",
          type: ProductTypeEnum.Game,
          description: "Ready to use generic RPG system.",
          license: License.CC_BY_4,
          footer:
            "Text by Fari RPGs under a Creative Commons Attribution 4.0 license (CC BY 4.0)",
          tags: ["charge-rpg", "game"],
          image: "https://gyazo.com/db461bac8eda79fa13f2b81dc03272e3.png",
          links: {
            itchIo: "https://fari-rpgs.itch.io/charge-rpg",
          },
        },
        {
          name: "Charge SRD",
          slug: "charge-srd",
          type: ProductTypeEnum.SRD,
          description:
            "Power your next game with this condensed version of Charge RPG",
          license: License.CC_BY_4,
          footer:
            "Text by Fari RPGs under a Creative Commons Attribution 4.0 license (CC BY 4.0)",
          tags: ["charge-rpg", "srd", "new"],
          image: "https://gyazo.com/a6eabc2383f01fa9e30be8c1d64596f2.png",
          links: {
            itchIo: "https://fari-rpgs.itch.io/charge-srd",
          },
        },
        {
          name: "HOPES & DREAMS SRD",
          slug: "hopes-and-dreams-srd",
          description: "Make your own game ignited by HOPES & DREAMS.",
          type: ProductTypeEnum.SRD,
          license: License.CC_BY_4,
          footer:
            "Text by Fari RPGs under a Creative Commons Attribution 4.0 license (CC BY 4.0)",
          tags: ["hopes-and-dreams", "srd", "new"],
          image: "https://gyazo.com/c143929685716b1ca0ea1edbaefeb0f9.png",
          links: {
            itchIo: "https://fari-rpgs.itch.io/hopes-and-dreams-srd",
          },
        },

        {
          name: "Breathless SRD",
          slug: "breathless-srd",
          description: "An SRD for creating Breathless games.",
          type: ProductTypeEnum.SRD,
          license: License.CC_BY_4,
          footer:
            "Text by Fari RPGs under a Creative Commons Attribution 4.0 license (CC BY 4.0)",
          tags: ["srd", "new"],
          image: "https://gyazo.com/a2ed8a91a6c310fefb69289c7e4df310.png",
          links: {
            itchIo: "https://fari-rpgs.itch.io/breathless-srd",
          },
        },
        {
          name: "Success with Style",
          slug: "success-with-style",
          type: ProductTypeEnum.Blog,
          description:
            "A searchable supply of ideas; these Fate pointers help you succeed with style!",
          license: License.CC_BY_4,
          footer:
            "Text by Fari RPGs under a Creative Commons Attribution 4.0 license (CC BY 4.0)",
          tags: [],
          image: "https://gyazo.com/f7d964a063040abe84ddc9d975378c78.jpeg",
          links: {
            itchIo: "https://fari-rpgs.itch.io/",
          },
        },
        {
          name: "Fate Stunts",
          slug: "fate-stunts",
          type: ProductTypeEnum.Resource,
          description:
            "A very detailed list of stunts to help you get started with Fate character creation quickly.",
          tags: [],
          image: "https://gyazo.com/4868cbe229118ce8a4b7b2e44908d703.jpeg",
          links: {
            itchIo: "https://fari-rpgs.itch.io/",
          },
        },
        {
          name: "Fari App Wiki",
          slug: "fari-app-wiki",
          type: ProductTypeEnum.Resource,
          description:
            "A very detailed list of stunts to help you get started with Fate character creation quickly.",
          tags: [],
          image: "https://gyazo.com/eecddd3af144225b52ac05f77938a442.png",
          links: {},
        },
      ],
    },
  ],
};

export const shopProducts: Array<IShopProductWithAuthor> = shop.authors.flatMap(
  (a) => {
    return a.products.map((p): IShopProductWithAuthor => {
      return {
        ...p,
        author: a,
      };
    });
  }
);
