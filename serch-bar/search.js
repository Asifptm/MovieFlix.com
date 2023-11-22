

// Updated sample movie data with additional properties
const sampleMovies = [
  {
    title: 'Black widow',
    releaseDate: '2023',
    poster: 'https://upload.wikimedia.org/wikipedia/en/e/e9/Black_Widow_%282021_film%29_poster.jpg',
    rating: 4.5,
    category: 'Action',
    description: 'Natasha Romanoff, a member of the Avengers and a former KGB spy, is forced to confront her dark past when a conspiracy involving her old handler arises..In Marvel Studios Black Widow, Natasha Romanoff aka Black Widow confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy and the broken relationships left in her wake long before she became an Avenger',
    cast: [' Scarlett Johansson', 'Florence Pugh', 'David Harbour'],
    duration: '2h 15m',
    quality: '4k',
    downloadLink: 'https://example.com/movie1_download',
    langauge:'Multilangauge',
    language: 'English',
    banner: 'https://fr.web.img3.acsta.net/r_1280_720/newsv7/21/07/30/15/03/4397879.jpg', // Add the banner property
  },
  {
    title: 'Alone',
    releaseDate: '2023',
    poster: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj_B3jBpS7mCrh398svlkluwv9n6bsNV6vOspG8yK6dl_StAh3isWA4pE1HeirnOG6n_Wt2M2ZpU0374RbG_AqTK2euGaYHEtFJuFWNI-5gJ-x7UzGv39nKw7Sgatc9aZiwySMPnLjQ8yPu6I4jIOLYaq8OuIQXAb-Z-RqXsYgjBFXLUXWgbUdnQxXRyA/s1600/Malayalam-Movies-Hits-and-Flops-2023.jpg',
    rating: 3.8,
    category: 'Comedy',
    description: ' Kalidas (Mohanlal) is a motivational speaker, who moves into a new apartment in Kochi. Since he moved into the apartment during the Covid-19 lockdown, everything is dealt with in calls. Soon after settling into the house, he hears the voices of two people – a mother and her daughter (Sreedevi and Anu). Das has a strong feeling that there is a reason why the spirits are in the house. He soon digs up to know why he is hearing the voices.',
    cast: ['Mohalalal', 'Honey Rose', 'Siddique'],
    duration: '1h 50m',
    quality: 'Full HD',
    downloadLink: 'https://example.com/movie2_download',
    banner: 'https://www.keralatv.in/media/2023/01/Alone-Movie-Release-Date.jpg', // Add the banner property
    langauge:'Malayalam',
    language: 'Malayalam',
  },


  {
    title: 'Anuragam',
    releaseDate: '2023',
    poster: 'https://i.redd.it/4av0bx5nbuxa1.jpg',
    rating: 3.8,
    category: 'Comedy . Romatic',
    description: 'Ashwin and Janani are classmates and best friends. While Ashwin is madly in love with her, she hesitates to put trust in the four letter word due to parental discord. Soon he realises that he can win her heart by reuniting her parents. As he ventures out to bring them back together, the movie grows in love.Filmmaker Shahad has fabulously crafted a feel good, slice of life movie that tells interesting love stories of different generations. The script, filled with laughter, fun and tears, has been pictured well on screen with the support of musician Joel Johns, editor Lijo Paul and cinematographer Suresh Gopi. Liju Prabhakars colouring and Fazal A Backers sound mixing inject an additional dopamine rush in the viewers.  ',
    cast: ['Actor A', 'Actor B', 'Actor C'],
    duration: '2h 40m',
    quality: 'Full HD',
    downloadLink: 'https://example.com/movie2_download',
    banner: 'https://images.indianexpress.com/2023/05/anuragam.jpg',
    langauge: 'Malayalam',
    language: 'Malayalam',
  },

  
  {
    title: 'Varisu',
    releaseDate: '2023',
    poster: 'https://pbs.twimg.com/media/FkjH8JiX0AMnGqe.jpg:large',
    rating: 4.8,
    category: 'Action . Romatic',
    description: ' When his terminally ill father leaves him in charge of his business conglomerate, a prodigal son must prove his mettle and reunite his broken family.Vijay Rajendran, the youngest son of an eminent billionaire business magnate, Rajendran Palanisamy, is disowned and thrown out of the house as he refused to join the family business, instead deciding to launch a food delivery startup. Seven years later, Rajendran is diagnosed with stage IV pancreatic cancer with only 8 to 10 months to live. He decides to reveal his terminal condition and anoint one of his two elder sons, Jai or Ajay, as his successor, before his impending death. ',
    cast: ['Vijay', 'Rashmika', 'Yogo babu'],
    duration: '2h 50m',
    quality: 'Full HD',
    downloadLink: 'https://example.com/movie2_download',
    banner: 'https://pbs.twimg.com/media/Flm5JEHaAAEFqKN.jpg:large ',
    langauge: 'Malayalam , Tamil',
    language: 'Malayalam , Tamil',
  },

  
  {
    title: 'Pranaya Vilasam',
    releaseDate: '2023',
    poster: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhYQ9p-kw5fy7RlQ47TdlIS0dlA98AMMNrO_2CKBYiwSz7XCp4WppWJtAL2IawGe3fVGt_L1By_UrvnqbIdjbNq6UVqYZ9sjGFyCjuGIXMQYhAx0dhtuqZKk9qY9o6cyJSBbQJNSkvvuIcoMmflWhcm25QQylm7md1h1B1q3C3JOiVoYRNJRqR5BtfBTw/s750/pranaya_vilasam_poster02.jpg',
    rating: 4.3,
    category: 'Comedy . Romatic',
    description: ' Suraj has a strained relationship with his controlling father and is forced to go to an undesired university. Life changes for him when he breaks up with his girlfriend. Sooraj an aspiring musician is in a serious relationship with his best friend Gopika. On the other hand, he is not on good terms with his family as his dad Rajeevan opposes his choice of being a musician and forces him to go into another career path. During the thick of this father-son rivalry, his mother, Rajeevans wife Anusree is forgotten about by the duo. Rajeevan not seemingly satisfied in his relationship seeks out his once-serious ex-girlfriend Meera. They meet and talk about the old times.  ',
    cast: ['Anaswara Rajan', 'Mammitha biju', 'Hakkim shah','Arjun Ashokan'],
    duration: '2h 50m',
    quality: 'Full HD',
    downloadLink: 'https://example.com/movie2_download',
    banner: 'https://akamaividz2.zee5.com/image/upload/w_734,h_413,c_scale,f_webp,q_auto:eco/resources/0-0-1z5339390/list/1170x658withlogo01536d52142a49cda3fe574bb0c59fb3.jpg',
    langauge: 'Malayalam',
    language: 'Malayalam',

  },

  
  {
    title: 'Romacham',
    releaseDate: '2023',
    poster: 'https://m.media-amazon.com/images/M/MV5BNTZiN2Y3NTItZDJiNS00Y2FhLWFlZjAtOGJkNDMzZjlmNjE3XkEyXkFqcGdeQXVyMTE4OTYyNjkx._V1_.jpg',
    rating: 5.8,
    category: 'Comedy . horror',
    description: 'Seven friends residing together in Bengaluru decide to use an Ouija board. Soon, the group begin to encounter supernatural events. Jibin is desperate to meet his friends as if he wants to convey something important to them. He tries to trick the on-duty nursew into letting him move into the room, but she refuses to fall for his antics. Jibin seems very restless, and he is insistent on wanting to meet his friends at the earliest. The nurse is curious to know what exactly must be the reason, and thats when Jibin recalls his tale of encountering the unseen in the past few weeks ',
    cast: ['Arjun Ashokan', 'Soubin Shahir', ' Sajin Gopu','Siju Sunny'],
    duration: '2h 50m',
    quality: 'Full HD',
    downloadLink: 'https://example.com/movie2_download',
    banner: ' https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/355/1500355-h-48caf56cb94e',
    langauge: 'Malayalam',
    language: 'Malayalam',

  },

  
  {
    title: '2018',
    releaseDate: '2023',
    poster: 'https://assets.eenadu.net/article_img/2018Movie1A.jpg',
    rating: 4.6,
    category: 'Thriller . Romatic',
    description: 'People from all walks of life face catastrophic consequences during devastating floods in 2018. The people of Kerala work together to survive the calamity. ',
    cast: ['Tovino Thomas', 'Tanvi Ram', ' Aparna Balamurali'],
    duration: '3h 50m',
    quality: 'Full HD dolby atmos',
    downloadLink: 'https://example.com/movie2_download',
    banner: ' https://xstreamcp-assets-msp.streamready.in/assets/SONYLIV_VOD/MOVIE/6485910782488153bfe3ede7/images/2018_set2_multilang_5june_landscape_thumb.jpg',
    langauge: 'Malayalam,Telugu,Hindi,Kanannada',
    language: 'Malayalam,Telugu,Hindi,Kanannada',

  },

  
  {
    title: 'John Wick: Chapter 4',
    releaseDate: '2023',
    poster: 'https://musicart.xboxlive.com/7/78196600-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080',
    rating: 3.8,
    category: 'Comedy . Romatic',
    description: 'Another movie description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec ligula ac quam posuere pellentesque. Donec vel magna at sem pharetra elementum. Nullam id nunc mauris. Ut sodales purus non nisl tristique, eu bibendum felis gravida. Fusce bibendum ac nisi eu malesuada. Suspendisse potenti. Duis et quam in urna pellentesque tincidunt. Praesent tristique massa vitae purus faucibus congue.',
    cast: ['Keanu Reeves', ' Scott Adkins', ' Bill Skarsgård'],
    duration: '1h 50m',
    quality: 'Full HD',
    downloadLink: 'https://example.com/movie2_download',
    banner: 'https://ntvb.tmsimg.com/assets/p17843098_v_h8_ak.jpg?w=1280&h=720',
    langauge: 'English',
    language: 'English',
  },

  
  {
    title: 'Gaurdians of Galaxy Volume 3',
    releaseDate: '2023',
    poster: 'https://m.media-amazon.com/images/M/MV5BMDgxOTdjMzYtZGQxMS00ZTAzLWI4Y2UtMTQzN2VlYjYyZWRiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg',
    rating: 5.8,
    category: 'Adventure . Sci-fic ',
    description: 'Still reeling from the loss of Gamora, Peter Quill must rally his team to defend the universe and protect one of their own. If the mission is not completely successful, it could possibly lead to the end of the Guardians as we know them.In Marvel Studios "Guardians of the Galaxy Vol. 3" our beloved band of misfits are looking a bit different these days. Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.',
    cast: ['Karen Gillan', 'Will Poulter', 'Zoe Saldana'],
    duration: '2h 50m',
    quality: '4K DoblyAtoms',
    downloadLink: 'https://example.com/movie2_download',
    banner: 'https://coveredgeekly.com/wp-content/uploads/FrqskP1WcAEd8pj.jpeg',
    langauge: 'English',
    language: 'English',
  },

  
  {
    title: 'Anuragam',
    releaseDate: '2023',
    poster: 'https://i.redd.it/4av0bx5nbuxa1.jpg',
    rating: 3.8,
    category: 'Comedy . Romatic',
    description: 'Another movie description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec ligula ac quam posuere pellentesque. Donec vel magna at sem pharetra elementum. Nullam id nunc mauris. Ut sodales purus non nisl tristique, eu bibendum felis gravida. Fusce bibendum ac nisi eu malesuada. Suspendisse potenti. Duis et quam in urna pellentesque tincidunt. Praesent tristique massa vitae purus faucibus congue.',
    cast: ['Actor A', 'Actor B', 'Actor C'],
    duration: '1h 50m',
    quality: 'Full HD',
    downloadLink: 'https://example.com/movie2_download',
    banner: 'https://images.indianexpress.com/2023/05/anuragam.jpg',
    langauge: 'Malayalam',
    language: 'English',
  },

  
  {
    title: 'Anuragam',
    releaseDate: '2023',
    poster: 'https://i.redd.it/4av0bx5nbuxa1.jpg',
    rating: 3.8,
    category: 'Comedy . Romatic',
    description: 'Another movie description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec ligula ac quam posuere pellentesque. Donec vel magna at sem pharetra elementum. Nullam id nunc mauris. Ut sodales purus non nisl tristique, eu bibendum felis gravida. Fusce bibendum ac nisi eu malesuada. Suspendisse potenti. Duis et quam in urna pellentesque tincidunt. Praesent tristique massa vitae purus faucibus congue.',
    cast: ['Actor A', 'Actor B', 'Actor C'],
    duration: '1h 50m',
    quality: 'Full HD',
    downloadLink: 'https://example.com/movie2_download',
    banner: 'https://images.indianexpress.com/2023/05/anuragam.jpg',
    langauge: 'Malayalam',
    language: 'English',
  },

  
  {
    title: 'Anuragam',
    releaseDate: '2023',
    poster: 'https://i.redd.it/4av0bx5nbuxa1.jpg',
    rating: 3.8,
    category: 'Comedy . Romatic',
    description: 'Another movie description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec ligula ac quam posuere pellentesque. Donec vel magna at sem pharetra elementum. Nullam id nunc mauris. Ut sodales purus non nisl tristique, eu bibendum felis gravida. Fusce bibendum ac nisi eu malesuada. Suspendisse potenti. Duis et quam in urna pellentesque tincidunt. Praesent tristique massa vitae purus faucibus congue.',
    cast: ['Actor A', 'Actor B', 'Actor C'],
    duration: '1h 50m',
    quality: 'Full HD',
    downloadLink: 'https://example.com/movie2_download',
    banner: 'https://images.indianexpress.com/2023/05/anuragam.jpg',
    langauge: 'Malayalam',
    language: 'English',
  },

  
  {
    title: 'Anuragam',
    releaseDate: '2023',
    poster: 'https://i.redd.it/4av0bx5nbuxa1.jpg',
    rating: 3.8,
    category: 'Comedy . Romatic',
    description: 'Another movie description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec ligula ac quam posuere pellentesque. Donec vel magna at sem pharetra elementum. Nullam id nunc mauris. Ut sodales purus non nisl tristique, eu bibendum felis gravida. Fusce bibendum ac nisi eu malesuada. Suspendisse potenti. Duis et quam in urna pellentesque tincidunt. Praesent tristique massa vitae purus faucibus congue.',
    cast: ['Actor A', 'Actor B', 'Actor C'],
    duration: '1h 50m',
    quality: 'Full HD',
    downloadLink: 'https://example.com/movie2_download',
    banner: 'https://images.indianexpress.com/2023/05/anuragam.jpg',
    langauge: 'Malayalam',
    language: 'English',
  },

  
  {
    title: 'Anuragam',
    releaseDate: '2023',
    poster: 'https://i.redd.it/4av0bx5nbuxa1.jpg',
    rating: 3.8,
    category: 'Comedy . Romatic',
    description: 'Another movie description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec ligula ac quam posuere pellentesque. Donec vel magna at sem pharetra elementum. Nullam id nunc mauris. Ut sodales purus non nisl tristique, eu bibendum felis gravida. Fusce bibendum ac nisi eu malesuada. Suspendisse potenti. Duis et quam in urna pellentesque tincidunt. Praesent tristique massa vitae purus faucibus congue.',
    cast: ['Actor A', 'Actor B', 'Actor C'],
    duration: '1h 50m',
    quality: 'Full HD',
    downloadLink: 'https://example.com/movie2_download',
    banner: 'https://images.indianexpress.com/2023/05/anuragam.jpg',
    langauge: 'Malayalam',
    language: 'English',
  },

  
  {
    title: 'Anuragam',
    releaseDate: '2023',
    poster: 'https://i.redd.it/4av0bx5nbuxa1.jpg',
    rating: 3.8,
    category: 'Comedy . Romatic',
    description: 'Another movie description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec ligula ac quam posuere pellentesque. Donec vel magna at sem pharetra elementum. Nullam id nunc mauris. Ut sodales purus non nisl tristique, eu bibendum felis gravida. Fusce bibendum ac nisi eu malesuada. Suspendisse potenti. Duis et quam in urna pellentesque tincidunt. Praesent tristique massa vitae purus faucibus congue.',
    cast: ['Actor A', 'Actor B', 'Actor C'],
    duration: '1h 50m',
    quality: 'Full HD',
    downloadLink: 'https://example.com/movie2_download',
    banner: 'https://images.indianexpress.com/2023/05/anuragam.jpg',
    langauge: 'Malayalam',
    language: 'English',
  },

  
  {
    title: 'Anuragam',
    releaseDate: '2023',
    poster: 'https://i.redd.it/4av0bx5nbuxa1.jpg',
    rating: 3.8,
    category: 'Comedy . Romatic',
    description: 'Another movie description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec ligula ac quam posuere pellentesque. Donec vel magna at sem pharetra elementum. Nullam id nunc mauris. Ut sodales purus non nisl tristique, eu bibendum felis gravida. Fusce bibendum ac nisi eu malesuada. Suspendisse potenti. Duis et quam in urna pellentesque tincidunt. Praesent tristique massa vitae purus faucibus congue.',
    cast: ['Actor A', 'Actor B', 'Actor C'],
    duration: '1h 50m',
    quality: 'Full HD',
    downloadLink: 'https://example.com/movie2_download',
    banner: 'https://images.indianexpress.com/2023/05/anuragam.jpg',
    langauge: 'Malayalam',
    language: 'English',
  },

  
  {
    title: 'Anuragam',
    releaseDate: '2023',
    poster: 'https://i.redd.it/4av0bx5nbuxa1.jpg',
    rating: 3.8,
    category: 'Comedy . Romatic',
    description: 'Another movie description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec ligula ac quam posuere pellentesque. Donec vel magna at sem pharetra elementum. Nullam id nunc mauris. Ut sodales purus non nisl tristique, eu bibendum felis gravida. Fusce bibendum ac nisi eu malesuada. Suspendisse potenti. Duis et quam in urna pellentesque tincidunt. Praesent tristique massa vitae purus faucibus congue.',
    cast: ['Actor A', 'Actor B', 'Actor C'],
    duration: '1h 50m',
    quality: 'Full HD',
    downloadLink: 'https://example.com/movie2_download',
    banner: 'https://images.indianexpress.com/2023/05/anuragam.jpg',
    langauge: 'Malayalam',
    language: 'English',
  },

  
  {
    title: 'Anuragam',
    releaseDate: '2023',
    poster: 'https://i.redd.it/4av0bx5nbuxa1.jpg',
    rating: 3.8,
    category: 'Comedy . Romatic',
    description: 'Another movie description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec ligula ac quam posuere pellentesque. Donec vel magna at sem pharetra elementum. Nullam id nunc mauris. Ut sodales purus non nisl tristique, eu bibendum felis gravida. Fusce bibendum ac nisi eu malesuada. Suspendisse potenti. Duis et quam in urna pellentesque tincidunt. Praesent tristique massa vitae purus faucibus congue.',
    cast: ['Actor A', 'Actor B', 'Actor C'],
    duration: '1h 50m',
    quality: 'Full HD',
    downloadLink: 'https://example.com/movie2_download',
    banner: 'https://images.indianexpress.com/2023/05/anuragam.jpg',
    langauge: 'Malayalam',
    language: 'English',
  },

  
  {
    title: 'Anuragam',
    releaseDate: '2023',
    poster: 'https://i.redd.it/4av0bx5nbuxa1.jpg',
    rating: 3.8,
    category: 'Comedy . Romatic',
    description: 'Another movie description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec ligula ac quam posuere pellentesque. Donec vel magna at sem pharetra elementum. Nullam id nunc mauris. Ut sodales purus non nisl tristique, eu bibendum felis gravida. Fusce bibendum ac nisi eu malesuada. Suspendisse potenti. Duis et quam in urna pellentesque tincidunt. Praesent tristique massa vitae purus faucibus congue.',
    cast: ['Actor A', 'Actor B', 'Actor C'],
    duration: '1h 50m',
    quality: 'Full HD',
    downloadLink: 'https://example.com/movie2_download',
    banner: 'https://images.indianexpress.com/2023/05/anuragam.jpg',
    langauge: 'Malayalam'
  },

  
  {
    title: 'Anuragam',
    releaseDate: '2023',
    poster: 'https://i.redd.it/4av0bx5nbuxa1.jpg',
    rating: 3.8,
    category: 'Comedy . Romatic',
    description: 'Another movie description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec ligula ac quam posuere pellentesque. Donec vel magna at sem pharetra elementum. Nullam id nunc mauris. Ut sodales purus non nisl tristique, eu bibendum felis gravida. Fusce bibendum ac nisi eu malesuada. Suspendisse potenti. Duis et quam in urna pellentesque tincidunt. Praesent tristique massa vitae purus faucibus congue.',
    cast: ['Actor A', 'Actor B', 'Actor C'],
    duration: '1h 50m',
    quality: 'Full HD',
    downloadLink: 'https://example.com/movie2_download',
    banner: 'https://images.indianexpress.com/2023/05/anuragam.jpg',
    langauge: 'Malayalam'
  },

  
  {
    title: 'Anuragam',
    releaseDate: '2023',
    poster: 'https://i.redd.it/4av0bx5nbuxa1.jpg',
    rating: 3.8,
    category: 'Comedy . Romatic',
    description: 'Another movie description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec ligula ac quam posuere pellentesque. Donec vel magna at sem pharetra elementum. Nullam id nunc mauris. Ut sodales purus non nisl tristique, eu bibendum felis gravida. Fusce bibendum ac nisi eu malesuada. Suspendisse potenti. Duis et quam in urna pellentesque tincidunt. Praesent tristique massa vitae purus faucibus congue.',
    cast: ['Actor A', 'Actor B', 'Actor C'],
    duration: '1h 50m',
    quality: 'Full HD',
    downloadLink: 'https://example.com/movie2_download',
    banner: 'https://images.indianexpress.com/2023/05/anuragam.jpg',
    langauge: 'Malayalam'
  },

  
  {
    title: 'Anuragam',
    releaseDate: '2023',
    poster: 'https://i.redd.it/4av0bx5nbuxa1.jpg',
    rating: 3.8,
    category: 'Comedy . Romatic',
    description: 'Another movie description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec ligula ac quam posuere pellentesque. Donec vel magna at sem pharetra elementum. Nullam id nunc mauris. Ut sodales purus non nisl tristique, eu bibendum felis gravida. Fusce bibendum ac nisi eu malesuada. Suspendisse potenti. Duis et quam in urna pellentesque tincidunt. Praesent tristique massa vitae purus faucibus congue.',
    cast: ['Actor A', 'Actor B', 'Actor C'],
    duration: '1h 50m',
    quality: 'Full HD',
    downloadLink: 'https://example.com/movie2_download',
    banner: 'https://images.indianexpress.com/2023/05/anuragam.jpg',
    langauge: 'Malayalam'
  },

  
  {
    title: 'Anuragam',
    releaseDate: '2023',
    poster: 'https://i.redd.it/4av0bx5nbuxa1.jpg',
    rating: 3.8,
    category: 'Comedy . Romatic',
    description: 'Another movie description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec ligula ac quam posuere pellentesque. Donec vel magna at sem pharetra elementum. Nullam id nunc mauris. Ut sodales purus non nisl tristique, eu bibendum felis gravida. Fusce bibendum ac nisi eu malesuada. Suspendisse potenti. Duis et quam in urna pellentesque tincidunt. Praesent tristique massa vitae purus faucibus congue.',
    cast: ['Actor A', 'Actor B', 'Actor C'],
    duration: '1h 50m',
    quality: 'Full HD',
    downloadLink: 'https://example.com/movie2_download',
    banner: 'https://images.indianexpress.com/2023/05/anuragam.jpg',
    langauge: 'Malayalam'
  },






  // Add more movie objects with the new properties...
];


  // Helper function to highlight the matched letters with a specific class
  function highlightMatch(text, searchTerm) {
    const regex = new RegExp(searchTerm, 'gi');
    return text.replace(regex, match => `<span class="highlight">${match}</span>`);
  }

  // Add event listeners for search input and search button
  const searchInput = document.getElementById('searchInput');
  const searchButton = document.getElementById('searchButton');
  const resultsSection = document.getElementById('resultsSection');
  const messageSection = document.getElementById('messageSection');

  searchInput.addEventListener('keyup', () => {
    const searchTerm = searchInput.value.trim();
    if (searchTerm !== '') {
      searchMovies(searchTerm);
    }
  });

  searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.trim();
    if (searchTerm !== '') {
      searchMovies(searchTerm);
    }
  });

  function searchMovies(searchTerm) {
    // Filter movies that match the search term
    const filteredMovies = sampleMovies.filter(movie =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Clear previous search results and messages
    resultsSection.innerHTML = '';
    messageSection.innerHTML = '';

    // Display the search results or show a message if no results found
    if (filteredMovies.length > 0) {
      filteredMovies.forEach(movie => {
        const movieElement = createMovieElement(movie, searchTerm);
        resultsSection.appendChild(movieElement);
      });
    } else {
      displayMessage('Sorry! No movies found for the search term.');
    }
  }

  function displayMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message';
    messageDiv.textContent = message;
    messageSection.appendChild(messageDiv);
  }

  function createMovieElement(movie, searchTerm) {
    const movieDiv = document.createElement('div');
    movieDiv.className = 'movie';

    const movieImg = document.createElement('img');
    movieImg.src = movie.poster;
    movieImg.alt = movie.title;
    movieDiv.appendChild(movieImg);

    const movieDetails = document.createElement('div');
    movieDetails.className = 'movie-details';

    // Updated code for movie title
    const movieTitle = document.createElement('div');
    movieTitle.className = 'movie-title';
    // Highlight the matched letters in the movie title
    movieTitle.innerHTML = highlightMatch(movie.title, searchTerm);
    movieDetails.appendChild(movieTitle);

    const movieCategory = document.createElement('div');
    movieCategory.className = 'movie-category';
    movieCategory.textContent = `Category: ${movie.category}`;
    movieDetails.appendChild(movieCategory);

    const movieRelease = document.createElement('div');
    movieRelease.className = 'movie-release';
    movieRelease.textContent = `Release Date: ${movie.releaseDate}`;
    movieDetails.appendChild(movieRelease);

    const movieLangauge = document.createElement('div');
    movieLangauge.className = 'movie-language';
    movieLangauge.textContent = `Language: ${movie.language}`;
    movieDetails.appendChild(movieLangauge);

    const movieRating = document.createElement('div');
    movieRating.className = 'movie-rating';
    movieRating.innerHTML = getRatingStars(movie.rating);
    movieDetails.appendChild(movieRating);

    movieDiv.addEventListener('click', () => {
      const movieData = encodeURIComponent(JSON.stringify(movie));
      window.location.href = `result.html?data=${movieData}`;
    });

    movieDiv.appendChild(movieDetails);

    return movieDiv;
  }


function getRatingStars(rating) {
const fullStars = Math.floor(rating);
const halfStar = rating - fullStars >= 0.5;
const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

let starsHtml = '';
for (let i = 0; i < fullStars; i++) {
  starsHtml += '<i class="fas fa-star"></i>';
}

if (halfStar) {
  starsHtml += '<i class="fas fa-star-half-alt"></i>';
}

for (let i = 0; i < emptyStars; i++) {
  starsHtml += '<i class="far fa-star"></i>';
}

return starsHtml;
}










// Add a class to the active navigation link based on the clicked link
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(navLink => navLink.classList.remove('active'));
        link.classList.add('active');
    });
});