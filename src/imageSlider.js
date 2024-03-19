import { useEffect, useState } from "react";

const data= ["https://i.pinimg.com/736x/23/5e/09/235e09099e71c062df1aea0d2babd2a6.jpg", "https://wallpapers.com/images/hd/random-background-1920-x-1200-6ciewyud1u8r1xkl.jpg", "https://i.redd.it/rfftqdg5flv71.jpg", "https://wallhalla.com/thumbs/79", "https://wallpapercave.com/wp/wp7454978.png"];


const ImageSlider= ()=>{
    const [activeImageIndex, setActiveImageIndex]= useState(0);
    const handlePreviousClick= ()=>{
        if(activeImageIndex=== 0){
           setActiveImageIndex(data.length -1);
        }
        else{
            setActiveImageIndex(activeImageIndex -1);
        }
    } 

    const handleNextClick= ()=>{
        setActiveImageIndex((activeImageIndex+1)%data.length)
    }

    useEffect(()=>{
       const timer= setTimeout(()=>{
          handleNextClick()
       }, 5000)
       //clearing the set timeout because if we press next button multiple times then it will create several setTimeouts.
       return()=>{
         clearTimeout(timer);
       }
    }, [activeImageIndex])

    return <div className="photos">
        <button onClick={handlePreviousClick}>previous</button>
        <img src={data[activeImageIndex]} alt="not found" style={{width:'500px'}}/>
        <button onClick={handleNextClick}>next</button>
    </div>
}

export default ImageSlider;