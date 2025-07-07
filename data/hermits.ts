type HermitStatus = "active" | "inactive" | "retired"

type Hermit = {
  name: string
  slugs: string[]
  status: HermitStatus
  uuid: string
  username: string
  avatar: string // relative to /public/avatars/
  channelId: string
  joinedInSeason: number
  leftInSeason?: number
  seasonsActive: number[]
}

export const hermits: Hermit[] = [
  
  {
    name: "BdoubleO100",
    slugs: ["bdoubleo100", "bdubs", "bdoubleo", "bdoubleO", "bdouble"],
    status: "active",
    uuid: "7163fbce-39ac-4a02-b836-a991c45d2dd1",
    username: "BdoubleO100",
    avatar: "bdoubleo100.png",
    channelId: "UClu2e7S8atp6tG2galK9hgg",
    joinedInSeason: 1,
    seasonsActive: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  },
  
  {
    name: "cubfan135",
    slugs: ["cubfan135", "cub", "cubfan"],
    status: "active",
    uuid: "88e2afec-6f2e-4a34-a96a-de61730bd3ca",
    username: "cubfan135",
    avatar: "cubfan135.png",
    channelId: "UC9lJXqw4QZw-HWaZH6sN-xw",
    joinedInSeason: 4,
    seasonsActive: [4, 5, 6, 7, 8, 9, 10]
  },
  
  {
    name: "Docm77",
    slugs: ["docm77", "doc", "docm", "doc77"],
    status: "active",
    uuid: "05e88dce-714d-4218-be77-fade8b5dfa3c",
    username: "docm77",
    avatar: "docm77.png",
    channelId: "UC4O9HKe9Jt5yAhKuNv3LXpQ",
    joinedInSeason: 3,
    seasonsActive: [3, 4, 5, 6, 7, 8, 9, 10]
  },
  
  {
    name: "EthosLab",
    slugs: ["ethoslab", "etho", "ethos"],
    status: "inactive",
    uuid: "4f41dcda-449a-46b7-8635-88979061fdd2",
    username: "EthosLab",
    avatar: "ethoslab.png",
    channelId: "UCFKDEp9si4RmHFWJW1vYsMA",
    joinedInSeason: 7,
    seasonsActive: [7]
  },
  
  {
    name: "FalseSymmetry",
    slugs: ["falsesymmetry", "false", "falsy"],
    status: "active",
    uuid: "87d91548-6f18-491f-a267-7833caa5d7d8",
    username: "FalseSymmetry",
    avatar: "falsesymmetry.png",
    channelId: "UCuQYHhF6on6EXXO-_i_ClHQ",
    joinedInSeason: 2,
    seasonsActive: [2, 3, 4, 5, 6, 7, 8, 9, 10]
  },
  
  {
    name: "GeminiTay",
    slugs: ["geminitay", "gem", "gemini"],
    status: "active",
    uuid: "5a1839d2-cecc-4c85-aa08-b346f9f772a1",
    username: "GeminiTay",
    avatar: "geminitay.png",
    channelId: "UCCpbGg3jG0NHh6o_hz9s_Jg",
    joinedInSeason: 8,
    seasonsActive: [8, 9, 10]
  },
  
  {
    name: "Grian",
    slugs: ["grian", "grain", "brian"],
    status: "active",
    uuid: "5f8eb73b-25be-4c5a-a50f-d27d65e30ca0",
    username: "Grian",
    avatar: "grian.png",
    channelId: "UCR9Gcq0CMm6YgTzsDxIoFMw",
    joinedInSeason: 6,
    seasonsActive: [6, 7, 8, 9, 10]
  },
  
  {
    name: "Hypnotizd",
    slugs: ["hypnotizd", "hypno", "hypnotized"],
    status: "active",
    uuid: "b0015b93-8a5d-461d-9991-3cfa23e3296f",
    username: "Hypnotizd",
    avatar: "hypnotizd.png",
    channelId: "UClNeqnccl8Vo_dpwfPu6xLQ",
    joinedInSeason: 1,
    seasonsActive: [1, 7, 8, 9, 10]
  },
  
  {
    name: "impulseSV",
    slugs: ["impulsesv", "impulse"],
    status: "active",
    uuid: "f6fe2200-609d-4fe6-88b6-529d59ee5b71",
    username: "impulseSV",
    avatar: "impulsesv.png",
    channelId: "UCDXFOGnHGKk0LlPpsBGP6_Q",
    joinedInSeason: 3,
    seasonsActive: [3, 4, 5, 6, 7, 8, 9, 10]
  },
  
  {
    name: "iJevin",
    slugs: ["ijevin", "jevin"],
    status: "active",
    uuid: "3f28c559-0898-4be1-9f20-9fd37ca9cd22",
    username: "iJevin",
    avatar: "ijevin.png",
    channelId: "UCDgPl9G9gNTrZFIZIDk6-8A",
    joinedInSeason: 2,
    seasonsActive: [2, 3, 4, 5, 6, 7, 8, 9, 10]
  },
  
  {
    name: "JoeHills",
    slugs: ["joehills", "joe", "joehillstsd"],
    status: "active",
    uuid: "db0e8b05-5cc4-48a9-a8cc-93d719a2aafd",
    username: "joehillstsd",
    avatar: "joehills.png",
    channelId: "UCtWObtiLCNI_BTBHwEOZNqg",
    joinedInSeason: 1,
    seasonsActive: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  },
  
  {
    name: "Keralis",
    slugs: ["keralis", "kera"],
    status: "active",
    uuid: "bcdc48a5-7d87-4331-a566-ac6deb99d21b",
    username: "Keralis",
    avatar: "keralis.png",
    channelId: "UCcJgOennb0II4a_qi9OMkRA",
    joinedInSeason: 1,
    seasonsActive: [1, 2, 3, 6, 7, 8, 9, 10]
  },
  
  {
    name: "MumboJumbo",
    slugs: ["mumbojumbo", "mumbo"],
    status: "active",
    uuid: "ac224782-efff-4296-b08c-dbde8e47abdb",
    username: "Mumbo",
    avatar: "mumbojumbo.png",
    channelId: "UChFur_NwVSbUozOcF_F2kMg",
    joinedInSeason: 2,
    seasonsActive: [2, 3, 4, 5, 6, 7, 8, 9, 10]
  },
  
  {
    name: "PearlescentMoon",
    slugs: ["pearlescentmoon", "pearl", "pearlescent"],
    status: "active",
    uuid: "75c863ae-bb92-486d-911c-53030c552be0",
    username: "PearlescentMoon",
    avatar: "pearlescentmoon.png",
    channelId: "UC1GJ5aeqpEWklMBQ3oXrPQQ",
    joinedInSeason: 8,
    seasonsActive: [8, 9, 10]
  },
  
  {
    name: "rendog",
    slugs: ["rendog", "ren", "renthedog"],
    status: "active",
    uuid: "91d502e0-3264-461e-b48a-69fd50fbea4c",
    username: "rendog",
    avatar: "rendog.png",
    channelId: "UCDpdtiUfcdUCzokpRWORRqA",
    joinedInSeason: 4,
    seasonsActive: [4, 5, 6, 7, 8, 9, 10]
  },
  
  {
    name: "GoodTimesWithScar",
    slugs: ["goodtimeswithscar", "scar", "gtws", "gtwscar"],
    status: "active",
    uuid: "cae9554c-31be-47e2-ba2b-4b8867adacc5",
    username: "GoodTimeWithScar",
    avatar: "goodtimeswithscar.png",
    channelId: "UCodkNmk9oWRTIYZdr_HuSlg",
    joinedInSeason: 4,
    seasonsActive: [4, 5, 6, 7, 8, 9, 10]
  },
  
  {
    name: "Skizzleman",
    slugs: ["skizzleman", "skizz", "mcskizzleman"],
    status: "active",
    uuid: "64de994d-a707-4d8c-8a48-3ffb786c9b99",
    username: "Skizzleman",
    avatar: "skizzleman.png",
    channelId: "UC6QgYgOJjlN_wgaNFtlBTzQ",
    joinedInSeason: 10,
    seasonsActive: [10]
  },
  
  {
    name: "SmallishBeans",
    slugs: ["smallishbeans", "smallish", "beans", "joel"],
    status: "active",
    uuid: "69b3107a-6d03-4122-b567-7652fcc3cdb2",
    username: "SmallishBeans",
    avatar: "smallishbeans.png",
    channelId: "UCvD8KDGfJLHRlHRdRHLTJUw",
    joinedInSeason: 10,
    seasonsActive: [10]
  },
  
  {
    name: "TangoTek",
    slugs: ["tangotek", "tango"],
    status: "active",
    uuid: "c2faba36-3f6e-4961-b834-5bcfe5657f72",
    username: "TangoTek",
    avatar: "tangotek.png",
    channelId: "UC4YUKOBld2PoOLzk0YZ80lw",
    joinedInSeason: 2,
    seasonsActive: [2, 3, 4, 5, 6, 7, 8, 9, 10]
  },
  
  {
    name: "VintageBeef",
    slugs: ["vintagebeef", "beef", "vintage"],
    status: "active",
    uuid: "2f723150-24de-44ff-aeee-87c75f7c7a9e",
    username: "VintageBeef",
    avatar: "vintagebeef.png",
    channelId: "UCu17Sme-KE76a1HgNkUqpQw",
    joinedInSeason: 4,
    seasonsActive: [4, 5, 6, 7, 8, 9, 10]
  },
  
  {
    name: "Welsknight",
    slugs: ["welsknight", "wels", "knight"],
    status: "active",
    uuid: "8fc22d29-4bac-4abe-84d4-7920ed4afe47",
    username: "Welsknight",
    avatar: "welsknight.png",
    channelId: "UCfqgRp3lOZ-OaYLCGNz1u0A",
    joinedInSeason: 4,
    seasonsActive: [4, 5, 6, 7, 8, 9, 10]
  },
  
  {
    name: "xBCrafted",
    slugs: ["xbcrafted", "xb", "xbc"],
    status: "active",
    uuid: "826cdcff-ccb0-42c5-9104-fcd4bb4e7f73",
    username: "xBCrafted",
    avatar: "xbcrafted.png",
    channelId: "UC_MkjhQr_D_lBWnUVW3VkTQ",
    joinedInSeason: 2,
    seasonsActive: [2, 3, 4, 5, 6, 7, 8, 9, 10]
  },
  
  {
    name: "Xisumavoid",
    slugs: ["xisumavoid", "xisuma", "x", "xisu"],
    status: "active",
    uuid: "8d86df19-fa5c-4939-ac7c-3b90b2b6abb6",
    username: "Xisumavoid",
    avatar: "xisumavoid.png",
    channelId: "UCU9pX8hKcrx06XfOB-VQLdw",
    joinedInSeason: 1,
    seasonsActive: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  },
  
  {
    name: "ZedaphPlays",
    slugs: ["zedaphplays", "zedaph", "zed"],
    status: "active",
    uuid: "f9c3c385-f403-403c-b5b7-867e012e9660",
    username: "Zedaph",
    avatar: "zedaphplays.png",
    channelId: "UCIQ2U5CWnKZ4sxoZQHQKfPA",
    joinedInSeason: 5,
    seasonsActive: [5, 6, 7, 8, 9, 10]
  },
  
  {
    name: "ZombieCleo",
    slugs: ["zombiecleo", "cleo", "zombie"],
    status: "active",
    uuid: "a3075fa7-ec13-49a2-aa47-6529e8b7daf2",
    username: "ZombieCleo",
    avatar: "zombiecleo.png",
    channelId: "UCjI5qxhtyv3srhWr60HemRw",
    joinedInSeason: 2,
    seasonsActive: [2, 3, 4, 5, 6, 7, 8, 9, 10]
  },
  
  {
    name: "iskall85",
    slugs: ["iskall85", "iskall"],
    status: "retired",
    uuid: "7ed3587b-e656-4689-90d6-08e11daaf907",
    username: "iskall85",
    avatar: "iskall85.png",
    channelId: "UCZ9x-z3iOnIbJxVpm1rsu2A",
    joinedInSeason: 4,
    leftInSeason: 10,
    seasonsActive: [4, 5, 6, 7, 8, 9]
  },
  
  {
    name: "Stressmonster101",
    slugs: ["stressmonster101", "stress", "stressmonster"],
    status: "retired",
    uuid: "cfaefb14-46d5-473b-9e8e-67ecbf119df7",
    username: "stressmonster101",
    avatar: "stressmonster101.png",
    channelId: "UCWAw9y3Mv_VhPQ6Y3S0Qo8Q",
    joinedInSeason: 5,
    leftInSeason: 10,
    seasonsActive: [5, 6, 7, 8, 9]
  },
  
  {
    name: "TinFoilChef",
    slugs: ["tinfoilchef", "tfc", "tinfoil"],
    status: "retired",
    uuid: "cbf33660-3994-42c3-8d2f-6a1a84d56dea",
    username: "TinFoilChef",
    avatar: "tinfoilchef.png",
    channelId: "UCEVwEIjzW8rOKC8Kq_XDBEQ",
    joinedInSeason: 2,
    leftInSeason: 9,
    seasonsActive: [2, 3, 4, 5, 6, 7, 8, 9]
  },
  
  {
    name: "Dinnerbone",
    slugs: ["dinnerbone", "nathan", "nathanadams"],
    status: "retired",
    uuid: "61699b2e-d327-4a01-9f1e-0ea8c3f06bc6",
    username: "Dinnerbone",
    avatar: "dinnerbone.png",
    channelId: "UCNrNP0_BqTvMEPSl3-hOKSg",
    joinedInSeason: 1,
    leftInSeason: 1,
    seasonsActive: [1]
  }
];