import "./style.css"
import Vue from 'vue/dist/vue.js'

var app = new Vue({
  el: '#app',

  data: {
    pageName: 'browse',
    lastPageNames: [],

    article: {
      image: '',
      title: '',
      author: '',
      date: '',
      likes: 0,
      isLiked: false
    },

    articles: [ {
        image: 'https://images.pexels.com/photos/1455985/pexels-photo-1455985.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        title: '3 Graphic Design Tips for Non-Designers',
        author: 'Midori Nediger',
        date: 'October 12, 2018',
        likes: 0,
        isLiked: false
      }, {
        image: 'https://images.pexels.com/photos/1167021/pexels-photo-1167021.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        title: 'some other title',
        author: 'some other author',
        date: 'some other date',
        likes: 0,
        isLiked: false
    } ],

    commentText: '',
    comments: []
  },

  methods: {
    likify: function( comment,event ) {
      comment.isLiked = true;
      comment.likes++;
    },

    unlikify: function( comment,event ) {
      comment.isLiked = false;
      comment.likes--;
    },

    processComment: function( event ) {
      this.comments.push( {
        userName: "Jakob the Snakob",
        text: this.commentText,
        likes: 0,
        isLiked: false
      } );

      this.commentText = '';
    },

    goToAPage: function( page,event ) {
      if (page != this.pageName) {
        this.lastPageNames.push( this.pageName );
        this.pageName = page;
      }
    },

    goBackAPage: function( event ) {
      if (this.lastPageNames.length > 0) {
        this.pageName = this.lastPageNames.pop();
      } else {
        // something to redirect to last website before entering this one
      }
    },

    setArticle: function( result,event ) {
      this.article.image = result.image;
      this.article.title = result.title;
      this.article.author = result.author;
      this.article.date = result.date;
      this.article.likes = result.likes;
      this.article.isLiked = result.isLiked;

      this.goToAPage( 'article',event );
    }
  },

  created: function() {
    // WOW this really won't work? Love it!
    document.addEventListener( "backbutton",this.goBackAPage,false );
  },

  beforeDestroy: function() {
    document.removeEventListener( "backbutton",this.goBackAPage );
  }
});

window.app = app;
