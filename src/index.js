import "./style.css"
import Vue from 'vue/dist/vue.js'

var app = new Vue({
  el: '#app',

  data: {
    pageName: 'browse',
    lastPageNames: [],

    article: {
      id: 0,
      image: '',
      title: '',
      author: 0,
      date: '',
      content: '',
      likes: 0,
      isLiked: false,
      comments: []
    },

    authors: [
      {
        id: 0,
        name: 'Midori Nediger',
        tagline: 'Author and designer',
        about: 'Midori spreads visual communication tricks and tips as design evangelist at Venngage, a web-based infographic design tool.',
        articles: [ 0,1,2 ]
      }
    ],

    articles: [
      {
        id: 0,
        image: 'https://images.pexels.com/photos/1455985/pexels-photo-1455985.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        title: '3 Graphic Design Tips for Non-Designers',
        author: 0,
        date: 'October 12, 2018',
        content: 'Given the power of visual content (it’s more memorable and more engaging than text-based content), many marketers have turned to DIY graphic design software or contracted with graphic artists. With more traditionally text-focused people entering the world of visuals, it’s time for a brief refresher on the essential principles of design. It’s time for a reminder that the strategic use of typography, color, and white space can drastically improve the efficacy and aesthetics of visual content. These three design tips will keep your blog, social media, and other visuals on the right track.<br><h3 class="global-titletext">White space 101: Remove to Improve</h3><br>A telltale sign of an amateur designer is a shortage (or misuse) of white space. If you’re unfamiliar with the term, white or negative space refers to the unmarked spaces around or between visual elements in a design. Apple’s use of white space for its HomePod page is extreme, but effective. The stark emptiness of the designs force viewers to focus on theas product, which is often a work of art. In contrast, non-designers often itch to fill every inch of space with text, images, or other design elements, leaving no place for the eye to rest.',
        likes: 0,
        isLiked: false,
        comments: []
      }, {
        id: 1,
        image: 'https://images.pexels.com/photos/1167021/pexels-photo-1167021.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        title: 'some other title',
        author: 0,
        date: 'some other date',
        content: '',
        likes: 0,
        isLiked: false,
        comments: []
      }, {
        id: 2,
        image: 'https://images.pexels.com/photos/1916824/pexels-photo-1916824.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        title: 'some other title',
        author: 0,
        date: 'some other date',
        content: '',
        likes: 0,
        isLiked: false,
        comments: []
      }, {
        id: 3,
        image: 'https://images.pexels.com/photos/1659437/pexels-photo-1659437.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        title: 'some other title',
        author: 0,
        date: 'some other date',
        content: '',
        likes: 0,
        isLiked: false,
        comments: []
      }, {
        id: 4,
        image: 'https://images.pexels.com/photos/219014/pexels-photo-219014.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        title: 'some other title',
        author: 0,
        date: 'some other date',
        content: '',
        likes: 0,
        isLiked: false,
        comments: []
      }, {
        id: 5,
        image: 'https://images.pexels.com/photos/598966/pexels-photo-598966.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        title: 'some other title',
        author: 0,
        date: 'some other date',
        content: '',
        likes: 0,
        isLiked: false,
        comments: []
      }, {
        id: 6,
        image: 'https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        title: 'some other title',
        author: 0,
        date: 'some other date',
        content: '',
        likes: 0,
        isLiked: false,
        comments: []
      }, {
        id: 7,
        image: 'https://images.pexels.com/photos/1509428/pexels-photo-1509428.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        title: 'some other title',
        author: 0,
        date: 'some other date',
        content: '',
        likes: 0,
        isLiked: false,
        comments: []
      }, {
        id: 8,
        image: 'https://images.pexels.com/photos/209948/pexels-photo-209948.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        title: 'some other title',
        author: 0,
        date: 'some other date',
        content: '',
        likes: 0,
        isLiked: false,
        comments: []
      }, {
        id: 9,
        image: 'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        title: 'some other title',
        author: 0,
        date: 'some other date',
        content: '',
        likes: 0,
        isLiked: false,
        comments: []
      }, {
        id: 10,
        image: 'https://images.pexels.com/photos/1430672/pexels-photo-1430672.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        title: 'some other title',
        author: 0,
        date: 'some other date',
        content: '',
        likes: 0,
        isLiked: false,
        comments: []
      }, {
        id: 11,
        image: 'https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        title: 'some other title',
        author: 0,
        date: 'some other date',
        content: '',
        likes: 0,
        isLiked: false,
        comments: []
      }
    ],

    commentText: ''
  },

  methods: {
    likeArticle: function( article,event ) {
      article.isLiked = true;
      article.likes++;
      this.articles[article.id].isLiked = true;
      this.articles[article.id].likes++;
    },

    unlikeArticle: function( article,event ) {
      article.isLiked = false;
      article.likes--;
      this.articles[article.id].isLiked = false;
      this.articles[article.id].likes--;
    },

    likeComment: function( comment,event ) {
      comment.isLiked = true;
      comment.likes++;
    },

    unlikeComment: function( comment,event ) {
      comment.isLiked = false;
      comment.likes--;
    },

    processComment: function( event ) {
      if (this.commentText.length > 0) {
        this.article.comments.push( {
          userName: "Jakob the Snakob",
          text: this.commentText,
          likes: 0,
          isLiked: false
        } ); this.articles[this.article.id].comments.push( {
          userName: "Jakob the Snakob",
          text: this.commentText,
          likes: 0,
          isLiked: false
        } );

        this.commentText = '';
      }
    },

    goToAPage: function( page,event ) {
      if (page != this.pageName) {
        this.lastPageNames.push( this.pageName );
        this.pageName = page;
        window.scrollTo( 0,0 );
        this.commentText = '';
      }
    },

    goBackAPage: function( event ) {
      if (this.lastPageNames.length > 0) {
        this.pageName = this.lastPageNames.pop();
        this.commentText = '';
      } else {
        // something to redirect to last website before entering this one
        // I would apparently need to have vue router
      }
    },

    setArticle: function( result,event ) {
      this.article.id = result.id;
      this.article.image = result.image;
      this.article.title = result.title;
      this.article.author = result.author;
      this.article.date = result.date;
      this.article.content = result.content;
      this.article.likes = result.likes;
      this.article.isLiked = result.isLiked;
      this.article.comments = result.comments;

      this.goToAPage( 'article',event );
    }
  },

  created: function() {
    // WOW this (browser back button support) really won't work? Love it!
    document.addEventListener( "backbutton",this.goBackAPage,false );
  },

  beforeDestroy: function() {
    document.removeEventListener( "backbutton",this.goBackAPage );
  }
});

window.app = app;
