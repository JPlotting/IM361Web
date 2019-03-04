import "./style.css"
import Vue from 'vue/dist/vue.js'

var app = new Vue({
  el: '#app',

  data: {
   // page history/navigation data
    pageName: 'browse',
    lastPageNames: [],

   // currently selected article data (for easy referencing by the system in html/VUE)
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

   // "database" of authors that can be referenced by the articles
   // currently filled with an example author (source to the author and her article I used is in the mockup screen I presented for the project)
    authors: [
      {
        id: 0,
        banner: 'https://images.pexels.com/photos/1455985/pexels-photo-1455985.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        image: 'assets/authorpic.png',
        name: 'Midori Nediger',
        tagline: 'Author and designer',
        about: 'Midori spreads visual communication tricks and tips as design evangelist at Venngage, a web-based infographic design tool.',
        articles: [ 0,1,2 ]
      }
    ],

   // "database" of articles that can be selected and viewed (they can also be editted and stored away so users can go back to it later and find them unchanged)
   // currently filled with dummy articles for testing
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

   // string used to temporarily hold user input data for commenting (reset when leaving page or submitting the comment)
    commentText: ''
  },

  methods: {
   // function that likes an article and updates its like status in the "database"
    likeArticle: function( article,event ) {
      article.isLiked = true;
      article.likes++;
      this.articles[article.id].isLiked = true;
      this.articles[article.id].likes++;
    },

   // function that undoes a like of an article and updates its like status in the "database"
    unlikeArticle: function( article,event ) {
      article.isLiked = false;
      article.likes--;
      this.articles[article.id].isLiked = false;
      this.articles[article.id].likes--;
    },

   // function that likes a comment on the currently selected article and updates its like status in the "database" for that article
   // the comment object is being referenced twice by the article reference and the article object in the "database" so editting this once is all that is needed since they point to the same place
    likeComment: function( comment,event ) {
      comment.isLiked = true;
      comment.likes++;
    },

   // function that undoes a like of a comment on the currently selected article and updates its like status in the "database" for that article
   // the comment object is being referenced twice by the article reference and the article object in the "database" so editting this once is all that is needed since they point to the same place
    unlikeComment: function( comment,event ) {
      comment.isLiked = false;
      comment.likes--;
    },

   // function to add the current user input into a new comment object that is then inserted into the array of other comments for the currently selected article
   // the user input for commenting is then reset
    processComment: function( event ) {
      if (this.commentText.length > 0) {
        var temp = this.article.comments.length;

        this.article.comments.push( {
          id: temp,
          userName: "Jakob the Snakob",
          text: this.commentText,
          likes: 0,
          isLiked: false
        } );

        this.commentText = '';
      }
    },

   // homeade naive page history/navigation function that remembers the breadcrumbs of the users navigation so that going back with the back button will actually navigate through the menus
   // this doesn't currently work however because access to listeners on the back button don't seem to be present in VUE. VUE router is needed instead
    goToAPage: function( page,event ) {
      if (page != this.pageName) {
        this.lastPageNames.push( this.pageName );
        this.pageName = page;
        window.scrollTo( 0,0 );
        this.commentText = '';
      }
    },

   // same as the above function but it instead works in the opposite direction and doesn't remember the previous page so that the user can keep going back if desired
    goBackAPage: function( event ) {
      if (this.lastPageNames.length > 0) {
        this.pageName = this.lastPageNames.pop();
        this.commentText = '';
      } else {
        // something to redirect to last website before entering this one
        // I would apparently need to have vue router
      }
    },

   // function that sets the reference data up to point to the selected article
   // it will also navigate/redirect to the article page to begin viewing
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

 // function initiated once the VUE instance becomes active (used for me only to set listeners for special events like navigation)
 // doesn't really work at the moment however (needs VUE router instead)
  created: function() {
    // WOW this (browser back button support) really won't work? Love it!
    document.addEventListener( "backbutton",this.goBackAPage,false );
  },

 // function called once the VUE instance becomes inactive/destroyed (used for me only to undo listeners for special events like navigation)
 // doesn't really work at the moment however (needs VUE router instead)
  beforeDestroy: function() {
    document.removeEventListener( "backbutton",this.goBackAPage );
  }
});

window.app = app;
