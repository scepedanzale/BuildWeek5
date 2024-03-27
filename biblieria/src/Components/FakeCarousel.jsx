import '../assets/css/prova.css'
import { Carousel } from "@material-tailwind/react";
 

/* Mettere immagini 2000x800 sennò se vedono na merda me raccomando */
export default function FakeCarousel() {
  return (
    <div className=" h-96 justify-center">
    <Carousel transition={{ duration: 2 }} className="rounded-sm h-96 w-full">
        <img
          src="https://video-images.vice.com/articles/5d44c9622980b0000824a7e3/lede/1564789576071-GettyImages-949118068.jpeg?crop=1xw:0.599250936329588xh;center,center"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <img
          src="https://cecibooks.com/wp-content/uploads/2021/08/bookisyourmessage-2000x800.jpeg"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <img
          src="https://blog.history.ac.uk/files/2018/06/books-2000x800.jpg"
          alt="image 3"
          className="h-full w-full object-cover"
        />
      </Carousel>
    </div>
  );
}



