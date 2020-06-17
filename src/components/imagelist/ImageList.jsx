import React from 'react';
import './imagelist.css';

const ImageList = (props) => {

    const data = props.images;
    return ( 

            
                data.map((img, index) => {
                    return (
                        <div key={index}>
                            <img  src={img.urls.regular} alt='noimage' />
                        </div>

                                
                    )

                })
            
        
     );
}
 
export default ImageList;