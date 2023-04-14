import { useState } from "react";
import { BsGlobeAmericas} from 'react-icons/bs';
import {FaUsers, FaUser, FaLock, } from 'react-icons/fa';
import {IoMdSettings} from 'react-icons/io';
import Options from "./components/Options/Options";
import Post from "./components/Post/Post";
import './App.css';

interface IListOptions {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
  active: string;
  checked: string;
}

const listOptions:IListOptions[] = [
  {
      id: 1,
      title: 'Public',
      description: 'Anyone on Facebook',
      icon: <BsGlobeAmericas size={28}/>,
      active: 'active',
      checked: 'checked'
  },
  {
      id: 2,
      title: 'Friends',
      description: 'Your friends on Facebook',
      icon: <FaUsers size={28}/>,
      active: '',
      checked: ''
  },
  {
      id: 3,
      title: 'Specific',
      description: 'Only show to some friends',
      icon: <FaUser size={22}/>,
      active: '',
      checked: ''
  },
  {
      id: 4,
      title: 'Only me',
      description: 'Only you can see your post',
      icon: <FaLock size={22}/>,
      active: '',
      checked: ''
  },
  {
      id: 5,
      title: 'Custom',
      description: 'Include and exclude friends',
      icon: <IoMdSettings size={28}/>,
      active: '',
      checked: ''
  },
];

function App() {

  const [view, setView] = useState(true);
  const [list, setList] = useState(listOptions);
  const [title, setTitle] = useState('Public');

  function handlePostView(){
    setView(false);
  }

  function handleOptionsView(){
    setView(true);
  }

  function handleListOptions(id:number, title:string){

    const listOption = [...list];

    listOption.forEach(items => items.id === id ? (items.active = 'active', items.checked = 'checked') : (items.active = '', items.checked = ''));

    setList(listOption);
    setTitle(title);
}



  return (
    <div className="app">
      {view === true ? <Post handlePostView={handlePostView} title={title}/> : 
        <Options handleOptionsView={handleOptionsView} handleListOptions={handleListOptions} list={list}/>}
    </div>    
  );
  
}

export default App
