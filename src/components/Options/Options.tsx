import {BsArrowLeftShort, BsGlobeAmericas} from 'react-icons/bs';
import {FaUsers, FaUser, FaLock, } from 'react-icons/fa';
import {IoMdSettings} from 'react-icons/io';
import './styles.css';

interface IListOptions {
    id: number;
    title: string;
    description: string;
    icon: JSX.Element;
    active: string;
    checked: string;
  }

interface IPropsOptions {
    handleOptionsView: () => void;
    handleListOptions(id:number, title:string): void;
    list: IListOptions[];

}



function Options({handleOptionsView, handleListOptions, list}:IPropsOptions){

    return(
        <div className="container">
            <div className="section-title-arrow">
                <button onClick={handleOptionsView}>
                    <BsArrowLeftShort size={28}/>
                </button>  
                <h1>Select Audience</h1>
            </div>
            <div className="pg-content">
                <div className='content-information'>
                    <p>Who can see your post?</p>
                    <p>Your post well show up in News Feed, on your profile and in search results.</p>

                </div>
                <ul>
                    {list.map(item => (
                        <li className={item.active} key={item.id}>
                            <button className="content-list-select"
                             onClick={()=> handleListOptions(item.id, item.title)}
                            >
                                <div className='select'>
                                    <div className="icon-select">
                                        {item.icon}
                                    </div>
                                    <div className="title-select">
                                        <h4>{item.title}</h4>
                                        <p>{item.description}</p>
                                    </div>
                                </div>          
                                <div className={`check-list ${item.checked}`}>
                                </div>                        
                            </button>  
                        </li>
                    ))}
                </ul> 
            </div>
             
        </div>
        
    );
}

export default Options;