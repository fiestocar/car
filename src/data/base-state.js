const DATA = {
  config: {
    text: {
      // speed: 100,
      speed: 60,
      // speed: 0, // instant
    },
    basepath: {
      background: "backgounds/",
      images: "images/",
      musics: "musics/",
      svgs: "svgs/",
      videos: "videos/",
    },
    icon: {
      default: "icons/gift.png",
    },
  },
  content: [
    {
      type: "gift",
      bg: "bg1.jpg",
      text: ["Pilih hadiah", "dibawah ini"],
      gift: [
        {
          title: "Title Hadiah 1",
          text: "ini adalah hadiah 1",
          images: "images/img1.jpg",
          // videos: "videos/video_name_here+format",
        },
        {
          title: "Title Hadiah 2",
          text: "ini adalah hadiah 2",
          images: "images/img2.jpg",
          // videos: "videos/video_name_here+format",
        },
        {
          title: "Title Hadiah 3",
          text: "ini adalah hadiah 3",
          images: "images/img3.jpg",
          // videos: "videos/video_name_here+format",
        },
        {
          title: "Title Hadiah 4",
          text: "ini adalah hadiah 4",
          images: "images/img4.jpg",
          // videos: "videos/video_name_here+format",
        },
      ],
    },
    {
      type: "text",
      bg: "bg2.jpg",
      text: ["text 1", "", "asdas"],
    },
    {
      type: "text",
      bg: "bg1.jpg",
      text: ["Text 2", "asdas"],
    },
  ],
};

window.APP_DATA = DATA;
