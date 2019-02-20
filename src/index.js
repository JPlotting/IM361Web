import "./style.css"
import Vue from 'vue/dist/vue.js'

var app = new Vue({
  el: '#app',

  data: {
    pageName: 'article',
    article: {
      title: '3 Graphic Design Tips for Non-Designers',
      author: 'Midori Nediger',
      date: 'October 12, 2018',
      likes: 0,
      isLiked: false
    },

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
    }
  }
});

window.app = app;
