// import React from 'react';

// const packages = [
//   {
//     name: 'Adventure Package',
//     image: 'https://source.unsplash.com/800x600/?adventure',
//   },
//   {
//     name: 'Relaxation Package',
//     image: 'https://source.unsplash.com/800x600/?relaxation',
//   },
//   {
//     name: 'Cultural Experience Package',
//     image: 'https://source.unsplash.com/800x600/?culture',
//   },
// ];

// const destinations = [  {    name: 'Paris',    image: 'assets/images/destination1.jpg',  },  {    name: 'Tokyo',    image: 'assets/images/destination2.jpg',  },  {    name: 'New York City',    image: 'assets/images/destination3.jpg',  },];

// const testimonials = [  {    name: 'John Doe',    image: 'assets/images/testimonial1.jpg',    quote: 'Muhafiz-e-emaan Travel Agency provided an amazing experience for me and my family. The itinerary was well-planned and the customer service was top-notch. I would definitely recommend this agency to anyone looking for an unforgettable trip.',  },  {    name: 'Jane Smith',    image: 'assets/images/testimonial2.jpg',    quote: 'I had an incredible time on my trip with Muhafiz-e-emaan Travel Agency. The accommodations were luxurious and the activities were exciting. I can\'t wait to book another trip with them!',  },];

// const styles = {
//   backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/background.jpg)`,
// };

// function Home() {
//     return (
//       <div className="home" style={styles}>
//         <div className="hero">
//           <h1>Welcome to Muhafiz-e-emaan Travel Agency</h1>
//           <p>Discover your next adventure with us!</p>
//           <button>Find Your Trip</button>
//         </div>
//         <div className="about">
//           <h2>About Us</h2>
//           <p>Muhafiz-e-emaan Travel Agency has been providing top-quality travel packages and services for over 20 years. Our mission is to create unforgettable experiences for our customers by offering unique and exciting destinations, exceptional customer service, and competitive pricing.</p>
//           <p>We believe that travel is not just a way to escape the daily routine, but a way to enrich our lives and create lasting memories. Whether you're looking for adventure, relaxation, or cultural experiences, we have the perfect trip for you.</p>
//         </div>
//         <div className="packages">
//           <h2>Our Travel Packages</h2>
//           <div className="package-list">
//           {packages.map((pkg) => (
//             <div className="package" key={pkg.name}>
//               <img src={pkg.image} alt={pkg.name} />
//               <h3>{pkg.name}</h3>
//               <button>View Package</button>
//             </div>
//           ))}
//           </div>
//         </div>
//         <div className="destinations">
//           <h2>Popular Destinations</h2>
//           <div className="destination-list">
//             {destinations.map((destination) => (
//               <div className="destination" key={destination.name}>
//                 <img src={destination.image} alt={destination.name} />
//                 <h3>{destination.name}</h3>
//                 <button>Learn More</button>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="testimonials">
//           <h2>What Our Customers Say</h2>
//           <div className="testimonial-list">
//             {testimonials.map((testimonial) => (
//               <div className="testimonial" key={testimonial.name}>
//                 <img src={testimonial.image} alt={testimonial.name} />
//                 <p>{testimonial.quote}</p>
//                 <h4>{testimonial.name}</h4>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="contact">
//           <h2>Contact Us</h2>
//           <form>
//             <input type="text" placeholder="Name" />
//             <input type="email" placeholder="Email" />
//             <textarea placeholder="Message"></textarea>
//             <button>Send Message</button>
//           </form>
//         </div>
//       </div>
//     );
//   }

// export default Home;


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, Container, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  hero: {
    minHeight: '400px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.palette.common.white,
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/background.jpg)`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
  heroText: {
    marginBottom: theme.spacing(2),
    textAlign: 'center',
  },
  about: {
    padding: theme.spacing(6, 0),
    backgroundColor: theme.palette.grey[200],
  },
  packages: {
    padding: theme.spacing(6, 0),
  },
  packageImage: {
    height: '200px',
    width: '100%',
    objectFit: 'cover',
  },
  packageButton: {
    marginTop: theme.spacing(2),
  },
  destinations: {
    padding: theme.spacing(6, 0),
    backgroundColor: theme.palette.grey[200],
  },
  destinationImage: {
    height: '200px',
    width: '100%',
    objectFit: 'cover',
  },
  destinationButton: {
    marginTop: theme.spacing(2),
  },
  testimonials: {
    padding: theme.spacing(6, 0),
  },
  testimonialQuote: {
    fontStyle: 'italic',
    marginBottom: theme.spacing(2),
  },
  contact: {
    padding: theme.spacing(6, 0),
    backgroundColor: theme.palette.grey[200],
  },
}));

const packages = [  {    name: 'Adventure Package',    image: 'https://source.unsplash.com/800x600/?adventure',  },  {    name: 'Relaxation Package',    image: 'https://source.unsplash.com/800x600/?relaxation',  },  {    name: 'Cultural Experience Package',    image: 'https://source.unsplash.com/800x600/?culture',  },];

const destinations = [  {    name: 'Paris',    image: 'assets/images/destination1.jpg',  },  {    name: 'Tokyo',    image: 'assets/images/destination2.jpg',  },  {    name: 'New York City',    image: 'assets/images/destination3.jpg',  },];

const testimonials = [  {    name: 'John Doe',    image: 'assets/images/testimonial1.jpg',    quote:      'Muhafiz-e-emaan Travel Agency provided an amazing experience for me and my family. The itinerary was well-planned and the customer service was top-notch. I would definitely recommend this agency to anyone looking for an unforgettable trip.',  },  {    name: 'Jane Smith',    image: 'assets/images/testimonial2.jpg',    quote:      'I had an incredible time on my trip with Muhafiz-e-emaan Travel Agency. The accommodations were luxurious and the activities were exciting. I can\'t wait to book another trip with them!',  },];

function Home() {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.hero}>
        <Container maxWidth="md">
          <Typography variant="h2" className={classes.heroText}>
            Welcome to Muhafiz-e-emaan Travel Agency
          </Typography>
          <Button variant="contained" color="primary">
            Book Now
          </Button>
        </Container>
      </Box>
      <Box className={classes.about}>
        <Container maxWidth="md">
          <Typography variant="h2">About Us</Typography>
          <Typography>
            Muhafiz-e-emaan Travel Agency is a full-service travel agency that  provides a wide range of travel services for business and leisure travelers.  We are a team of passionate travel experts who are dedicated to creating  memorable travel experiences for our customers.
          </Typography>
        </Container>
      </Box>
      <Box className={classes.packages}>
        <Container maxWidth="md">
          <Typography variant="h2">Our Travel Packages</Typography>
          <Grid container spacing={4}>
            {packages.map((pkg) => (
              <Grid item xs={12} sm={6} md={4} key={pkg.name}>
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className={classes.packageImage}
                />
                <Typography variant="h4">{pkg.name}</Typography>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.packageButton}
                >                 Learn More
                </Button>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <Box className={classes.destinations}>

        <Container maxWidth="md">
          <Typography variant="h2">Popular Destinations</Typography>
          <Grid container spacing={4}>
            {destinations.map((destination) => (
              <Grid item xs={12} sm={6} md={4} key={destination.name}>
                <img
                  src={destination.image}
                  alt={destination.name}
                  className={classes.destinationImage}
                />
                <Typography variant="h4">{destination.name}</Typography>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.destinationButton}
                >                 Learn More
                </Button>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <Box className={classes.testimonials}>
        <Container maxWidth="md">
          <Typography variant="h2">Testimonials</Typography>
          <Grid container spacing={4}>
            {testimonials.map((testimonial) => (
              <Grid item xs={12} sm={6} md={4} key={testimonial.name}>
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className={classes.destinationImage}
                />
                <Typography variant="h4">{testimonial.name}</Typography>
                <Typography className={classes.testimonialQuote}>
                  {testimonial.quote}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <Box className={classes.contact}>
        <Container maxWidth="md">
          <Typography variant="h2">Contact Us</Typography>
          <Typography>
            Muhafiz-e-emaan Travel Agency
            <br />
            123 Main Street
            <br />
            Anytown, USA
            <br />
            12345
            <br />
            555-555-5555
          </Typography>
        </Container>
      </Box>
    </>
  );
}


export default Home;

// The Home component is the main component of the application.
// It contains all of the content that will be displayed on the home page.
// The content is divided into sections, each of which is contained in a Box component.
// The Box component is a Material-UI component that is used to create a container with a background color.
//The Box component is used to create the hero section, the about section, the packages section, the destinations section,
// the testimonials section, and the contact section.
