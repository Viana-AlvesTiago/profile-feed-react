import { Header } from './components/Header';
import { Post } from './Post';

import styles from './App.module.css';
import './global.css';
import { Sidebar } from './components/Sidebar';

export function App(){
  

  return (
   <div>
    <Header />
    
    <div className={styles.wrapper}>
      <Sidebar />
      <main>
        <Post author="Tiago" content="Aqui tem um conteúdo" />
        <Post author="Camila Reis" content="Aqui tem outro conteúdo" />
      </main>
    </div>

   </div>
  )
}

