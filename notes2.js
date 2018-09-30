index.js: 

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './post.css'
// import App from './App';
// import Hello from './Hello'
import Post from './Post'
import registerServiceWorker from './registerServiceWorker';

let post = {
  title: 'A blog',
  author: 'Hammad Malik',
  body: 'Why hello there!',
  comments: [
    'Hiiiiii',
    'Sup',
    'What it do, boo'
  ]
}

// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Hello name={'Hammad'} age={28} />, document.getElementById('root'));
ReactDOM.render(<Post title={post.title} author={post.author} body={post.body} comments={post.comments} />, document.getElementById('root'));
registerServiceWorker();
