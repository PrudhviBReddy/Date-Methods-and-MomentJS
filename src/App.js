import './App.css';
import moment from "moment";
import 'moment/locale/te';

function App() {

  let independenceDay = new Date(1975,7,15,0,20,30,400);

  let monthArr = ["January","February","March","April","May","June","July","August","September","October","November","December"];

  let daysArr = ["Sunday","Monday","Tuesday","Wednesday","Thuesday","Friday","Saturday"];

  console.log(independenceDay);
  console.log(independenceDay.getFullYear());
  console.log(independenceDay.getMonth());
  console.log(monthArr[independenceDay.getMonth()]);
  console.log(independenceDay.getDay());
  console.log(daysArr[independenceDay.getDay()]);
  console.log(independenceDay.getDate());
  console.log(independenceDay.getHours());
  console.log(independenceDay.getMinutes());
  console.log(independenceDay.getSeconds());
  console.log(independenceDay.getMilliseconds());
  console.log(independenceDay.getFullYear());
  console.log(independenceDay.getFullYear());
  console.log(independenceDay.setFullYear(2047));
  console.log(independenceDay.getTime());

  
  let oldDate = new Date(0);
  console.log(oldDate);

  let oldDate2 = new Date();
  console.log(oldDate2);

  let oldDate3 = new Date("01 March 1996");
  console.log(oldDate3);

  // moment.locale("te");
  // console.log( moment.locale("te"));

  console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));

  return (
    <div className="App">
      <h1>Date Methods and MomentJS</h1>
      <form>
        <label>Batch Start Date</label>
        <input type="date" onChange={(eo)=>{
          let batchStartDate = new Date(eo.target.value);

          let courseDuration = 120*24*60*60*1000;

          let courceEndDateInMs = batchStartDate.getTime()+courseDuration;

          let batchEndDate = new Date(courceEndDateInMs);

          console.log(batchStartDate);
          console.log(batchEndDate);

          console.log(moment(batchEndDate).format('MMMM Do YYYY, h:mm:ss a'));
          console.log(moment(batchStartDate).add(120, 'days').calendar());

        }}></input>

        <button type="button" onClick={()=>{
          console.log(Date.now());
        }}>Time in MS</button>
      </form>
     

    </div>
  );
}

export default App;

