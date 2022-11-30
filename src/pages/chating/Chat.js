import React, { useState } from 'react'
import './chat.css'
// import Avatar from '@mui/material/Avatar';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AttachmentIcon from '@mui/icons-material/Attachment';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from '@mui/material';

export const Chat = () => {
  
  const [proc,setProc] = useState()
  const [data,setData] = useState([
                                    {
                                      img:"",
                                      username:"Kiran",
                                      dob:"30/06/1997"
                                    },{
                                      img:"",
                                      username:"Kamlesh",
                                      dob:"11/06/1994"
                                    },{
                                      img:"",
                                      username:"Rudransh",
                                      dob:"12/12/2022"
                                    },{
                                      img:"",
                                      username:"Anjali",
                                      dob:"06/02/2002"
                                    },{
                                      img:"",
                                      username:"Kana",
                                      dob:"12/12/2019"
                                    },{
                                      img:"",
                                      username:"Sarita",
                                      dob:"12/03/2002"
                                    },{
                                      img:"",
                                      username:"Harish",
                                      dob:"12/12/2004"
                                    }
                                  ])
  const pic = localStorage.getItem('pic')

  const handleChangeProc = (e) => {
    setProc(URL.createObjectURL(e.target.files[0]));
    localStorage.setItem('pic',URL.createObjectURL(e.target.files[0]))
  }
  
  const handleClick = (e) =>{
    
  }
  

  return (
      <div className='row'>
        <div className='col-4 p-0 border-end'>
          <div>

            <nav className='bg_navbar p-2 '>
              <div className='row'>
                <div className='col-10'>
                  <label htmlFor='proc'>
                    <Avatar src={pic} className='ms-4 mt-1' sx={{width:"40px",height:"40px"}} />
                  </label>
                  <input type="file" id='proc' hidden onChange={handleChangeProc} />
                </div>
                <div className='col-2 mt-2'>
                  <span className=''><MoreVertIcon className='text-white'/></span>
                </div>
              </div>
            </nav>

            {/* <div className='border-bottom p-2 row'>
              <div className='col-4' onClick={handleClick}>
                <Avatar className='ms-4' sx={{width:"40px",height:"40px"}} />
              </div>

              <div className="col-5">
                
               <span className='mt-2 d-block' style={{fontSize:"15px"}}>Kiran</span>
              </div>

              <div className="col-2">
               <span className='mt-2 d-block' style={{fontSize:"12px"}}>12/12/2020</span>
              </div>
            </div>

            <div className='border-bottom p-2' onClick={handleClick}>
              <Avatar className='ms-4' sx={{width:"40px",height:"40px"}} />
            </div>

            <div className='border-bottom p-2' onClick={handleClick}>
              <Avatar className='ms-4' sx={{width:"40px",height:"40px"}} />
            </div> */}



            {
                  data.map((cv,index,arr)=>{
                    return <React.Fragment key={index}>
                              <div className='border-bottom p-2 row' onClick={handleClick}>
                                <div className='col-4'>
                                  <Avatar className='ms-4' sx={{width:"40px",height:"40px"}} />
                                </div>

                                <div className="col-5">
                                  
                                <span className='mt-2 d-block' style={{fontSize:"15px"}}>{cv.username}</span>
                                </div>

                                <div className="col-2">
                                <span className='mt-2 d-block' style={{fontSize:"12px"}}>{cv.dob}</span>
                                </div>
                              </div>
                          </React.Fragment>
                  })
                }



          </div>
        </div>
        <div className='col-8 p-0 bg-light msg_area'>
          <nav className='bg_navbar' style={{height:"65px"}}>
            <div className='pt-3 row'>
              <div className='col-9'>
                <Avatar className='ms-4' sx={{width:"40px",height:"40px"}} />
              </div>

              <div className='col-1'>
                <SearchIcon  className='text-white' />
              </div>

              <div className='col-1'>
                <AttachmentIcon className='text-white' style = {{transform: 'rotate(120deg)' }} />
              </div>

              <div className='col-1'>
                <MoreVertIcon className='text-white' />
              </div>
              
            </div>
          </nav>
        </div>
      </div>
    )
}
