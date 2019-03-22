import React from 'react';
import {connect} from 'react-redux';
import {asyncGallery} from  "../action/galleryAction"
import './Gallery.css';

const Gallery = ({getGallery,gallery}) => {
    return (

        <div>
            <div className="gallery">
                <button onClick = {getGallery}>button</button>
                <div className="gallery-item">

                    {gallery.map(el=>(
                        <img className="galleryImg" src={el.largeImageURL} alt={el.tags} key={el.id}/>
                    ))}

                </div>
            </div>
            
        </div>
    );
};

const MSTP = (state) => ({  
        gallery: state.img
})

function MDTP (dispatch) {
    return {
        getGallery: function (){
            dispatch(asyncGallery())  
        }
        
    }  
}
export default connect(MSTP, MDTP)(Gallery);