import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';
import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO'
    },
    content: [
      { type: 'paragraph', content: 'Boa noite pessoal' },
      { type: 'paragraph', content: 'Dá um confere no meu projeto'},
      { type: 'link', content: 'jane.desgni/dctorcare'},
    ],
    publishedAt: new Date('2025-02-03 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayke Brito',
      role: 'Educator'
    },
    content: [
      { type: 'paragraph', content: 'Fala galea' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa'},
      { type: 'link', content: 'jane.desgni/dctorcare'},
    ],
    publishedAt: new Date('2025-02-10 19:00:00')
  },
  {
    id: 3,
    author: {
      avatarUrl: 'https://github.com/Viana-AlvesTiago.png',
      name: 'Tiago Alves',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galea' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa'},
      { type: 'link', content: 'jane.desgni/dctorcare'},
    ],
    publishedAt: new Date('2025-02-10 19:00:00')
  },
  {
    id: 3,
    author: {
      avatarUrl: 'https://github.com/CamilaReis00.png',
      name: 'Camila Reis',
      role: 'FrontEnd Engineere'
    },
    content: [
      { type: 'paragraph', content: 'Fala galea' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa'},
      { type: 'link', content: 'jane.desgni/dctorcare'},
    ],
    publishedAt: new Date('2025-02-27 19:00:00')
  },
]

export function App(){
  

  return (
   <div>
    <Header />
    
    <div className={styles.wrapper}>
      <Sidebar />
      <main>
        {posts.map(post => {
          return (
          <Post key={post.id}
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
           />
          )
        })}
      </main>
    </div>

   </div>
  )
}

