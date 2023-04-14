import { MdOutlineArrowDropDown } from 'react-icons/md';
import {BsChatSquareDots, BsEmojiSmile, BsEnvelopeAt, BsFillPersonCheckFill, BsImages} from 'react-icons/bs';
import './styles.css';

interface IPropsPost {
  handlePostView: () => void;
  title: string;
}

function Post({handlePostView, title}:IPropsPost) {

  return (
    
      <div className="container">
        <div className="section-title">
          <h1>Create Post</h1>
        </div>

        <div className="pg-content">
            <div className="section-data-users">
              <div className="avatar">
                
              </div>
              <div className="information-users">
                <p>DevBoost</p>
                <button onClick={handlePostView}>
                  {title}
                  <MdOutlineArrowDropDown size={16}/>
                </button>
              </div>
            </div>
            <div className="content">
              <textarea placeholder='What is on your mind?'></textarea>
              <div>
                <BsEnvelopeAt size={24} color='#b6aeae'/>
                <BsEmojiSmile size={24} color='#b6aeae'/>
                
              </div>
            </div>
            <div className="add-tools">
              <p>Add to your poster</p>
              <div>
              <BsImages size={20} color='#2ecc71'/>
              <BsFillPersonCheckFill size={20} color='#3498db'/>
              <BsEmojiSmile size={20} color='#f1c40f'/>
              <BsChatSquareDots size={20} color='#e74c3c'/>
              </div>
            </div>
            <button className="create-post">Post</button>
        </div>
       
        
      </div>
  )
}

export default Post
