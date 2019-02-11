import Vue from 'vue/dist/vue.js'

var app = new Vue({
  el: '#app',

  data: {
    articleBanner: './assets/banner1.jpg',

    articleTitle: '3 Graphic Design Tips for Non-Designers',
    articleAuthor: 'Midori Nediger',
    articleAuthorAbout: 'https://contentmarketinginstitute.com/author/midorinediger/',
    articleDate: 'October 12, 2018',

    articleContent: 'Given the power of visual content (it’s more memorable and more engaging than text-based content), many marketers have turned to DIY graphic design software or contracted with graphic artists. With more traditionally text-focused people entering the world of visuals, it’s time for a brief refresher on the essential principles of design. It’s time for a reminder that the strategic use of typography, color, and white space can drastically improve the efficacy and aesthetics of visual content. These three design tips will keep your blog, social media, and other visuals on the right track.<br><h3 class="article-subheader">White space 101: Remove to Improve</h3><br>A telltale sign of an amateur designer is a shortage (or misuse) of white space. If you’re unfamiliar with the term, white or negative space refers to the unmarked spaces around or between visual elements in a design. <img class="article-example" src="assets/example1.jpg"> Apple’s use of white space for its HomePod page is extreme, but effective. The stark emptiness of the designs force viewers to focus on the product, which is often a work of art. In contrast, non-designers often itch to fill every inch of space with text, images, or other design elements, leaving no place for the eye to rest.',
    articleSource: 'https://contentmarketinginstitute.com/2018/06/design-tips-nondesigners/',

    articleLiked: false,
  },

  methods: {
    articleLikedEvent: function() {
      this.articleLiked = !this.articleLiked;

      if (this.articleLiked)
      {
        this.articleTitle = 'Woohoo It Works!!!';
        this.articleBanner = './assets/meme1.jpg';
      }
      else
      {
        this.articleTitle = '3 Graphic Design Tips for Non-Designers';
        this.articleBanner = './assets/banner1.jpg';
      }
    }
  }
});

window.app = app;
