import { Carousel } from 'react-carousel-minimal';

const Slider = () => {
 const data = [
    {
      image: "https://cdn.pixabay.com/photo/2018/11/11/13/54/fire-3808809_960_720.jpg",
      caption: "Chili makes you feel alive"
    },
    {
      image: "https://images.pexels.com/photos/48840/pexels-photo-48840.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      caption: "Same sauce different dish"
    },
    {
      image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      caption: "Not spicy? Not eating"
    },
  ];

  const TextStyle = {
    fontSize: '40px',
    fontWeight: 'bold', 
  }
  return (
          <Carousel
            data={data}
            time={3000}
            width="100%"
            height="600px"
            captionStyle={TextStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
          />
  );
}

export default Slider;