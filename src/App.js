// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import AvailableJob from './Components/AvailableJob/AvailableJob';
import JobSearch from './Components/JobSearch/JobSearch';
import JobFeatures from './Components/Job_Features/JobFeatures';
import Task from './Components/Task/Task';
import Companies from './Components/Companies/Companies';
import ContactUs from './Components/ContactUs/ContactUs';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <AvailableJob></AvailableJob>
      <Companies></Companies>
      <JobSearch></JobSearch>
      <JobFeatures></JobFeatures>
      <Task></Task>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </div>
  );
}

export default App;
