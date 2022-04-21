import React, { useEffect, useState } from 'react'
import base_url from '../api/bootapi'
import axios from 'axios'
import swal from 'sweetalert2'
import '../css/insert.css'
import 'react-datepicker/dist/react-datepicker.css'
import $ from 'jquery'
import Invoice from './invoice'
import mycss from './main.css'

const Insert = () => {
  useEffect(() => {
    document.title = 'Book'
    if (sessionStorage.getItem('userSession') == null) {
      window.location = '/'
    } else if (localStorage.getItem('user') == null) {
      window.location = '/'
    }
  }, [])

  const uname = sessionStorage.getItem('username')
  const uemail = sessionStorage.getItem('userSession')
  let [ucity, setUcity] = useState('')
  let [udate, setUdate] = useState('')
  let [uevent, setUevent] = useState('')
  let [uguest, setUguest] = useState('')
  const [ufood, setFood] = useState('')
  const [uequipment, setEquipment] = useState('')
  const foodList = ['BreakFast', 'Lunch', 'Tea & Snacks', 'Dinner']
  const equiList = ['DJ', 'Musical System', 'Orchestra']
  const [openPop, setOpenPop] = useState(false)

  let cityinp = (e) => setUcity(e.target.value)
  let eventinp = (e) => setUevent(e.target.value)
  let dateinp = (e) => setUdate(e.target.value)
  let guestinp = (e) => setUguest(e.target.value)
  let equipmentinp = (e) => setEquipment(e.target.value)
  let foodinp = (e) => {
    setFood(e.target.value)
  }

  //   handleChange(event) {
  //     var isChecked = event.target.checked;
  //     var item = event.target.value;
  //     this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
  // }

  var isfood = (item) =>
    ufood.includes(item) ? 'checked-item' : 'not-checked-item'
  var isEqui = (item) =>
    uequipment.includes(item) ? 'checked-item' : 'not-checked-item'

  const udata = {
    name: uname,
    email: uemail,
    city: ucity,
    event: uevent,
    date: udate,
    guest: uguest,
    food: ufood,
    equipment: uequipment,
  }

  let [ecity, setEcity] = useState('')
  let [eevent, setEvent] = useState('')
  let [edate, setEdate] = useState('')
  let [eguest, setEguest] = useState('')

  const clearFields = () => {
    setUcity('')
    setUevent('')
    setUdate('')
    setFood('')
    setEguest('')
    setEquipment('')
  }

  const clearError = () => {
    document.getElementById('city').classList.remove('is-invalid')
    setEcity('')

    document.getElementById('event').classList.remove('is-invalid')
    setEvent('')

    document.getElementById('guest').classList.remove('is-invalid')
    setEguest('')

    document.getElementById('food').classList.remove('is-invalid')
    setFood('')

    document.getElementById('equipment').classList.remove('is-invalid')
    setEquipment('')
  }

  // Check City and date
  const checkDateAndCity = async (data) => {
    axios.post(`${base_url}/findbydatecity`, data).then(
      (response) => {
        console.log(response)
        if (response.data.length == 0) {
          swal.fire({
            icon: 'success',
            title: 'Congratulations!!!',
            text: 'You can proceed for booking',
          })
        } else {
          setOpenPop(false)
          swal.fire({
            icon: 'error',
            title: 'Oh no!!!',
            text: 'Sorry hall is not available on your selected date',
          })
        }
      },
      (error) => {
        setOpenPop(false)
        swal.fire({
          icon: 'error',
          title: 'Oh no!',
          text: 'Server is down',
        })
      },
    )
  }

  const validate = async () => {
    if (ucity === '' || uevent === '' || uguest === '' || udate === '') {
      setOpenPop(false)
      swal.fire('All fields are required')
    } else {
      checkDateAndCity(udata)
      await setOpenPop(true)
      viewAllPricing()
      clearError()
      clearFields()
    }
  }

  const handleAvailble = () => {
    if (ucity === '' || uevent === '' || uguest === '' || udate === '') {
      swal.fire('All fields are required')
    } else {
      checkDateAndCity(udata)
    }
  }

  $(function () {
    var dtToday = new Date()
    var month = dtToday.getMonth() + 1
    var day = dtToday.getDate()
    var year = dtToday.getFullYear()
    if (month < 10) month = '0' + month.toString()
    if (day < 10) day = '0' + day.toString()

    var maxDate = year + '-' + month + '-' + day
    $('#date').attr('min', maxDate)
  })
  ;<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>

  const viewAllPricing = () => {
    axios.get(`${base_url}/pricing`).then(
      (response) => {
        if (response.data.length == 0) {
          swal.fire({
            title: 'Price',
            text: 'No price available now',
            icon: 'error',
            button: 'Ok',
          })
        }
        setPriceData(response.data)
      },
      (error) => {
        console.log(error)
        swal.fire({
          icon: 'error',
          title: 'Oh no!',
          text: 'Server is down',
        })
      },
    )
  }

  const [priceData, setPriceData] = useState([])

  return (
    <div
      className="p-5 "
      style={{
        backgroundImage:
          'linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)',
      }}
    >
      <link rel="stylesheet" href={mycss} />
      <div id="now" className="mt-5 p-2">
        <h5 className="text-center display-4 fw-bold myfont">Book An Event</h5>

        <form className="row g-3 w-50 m-auto p-5 fs-5 bookingform">
          <div className="col-md-12 mb-3">
            <label for="name" className="form-label fs-4">
              Name :-
            </label>
            <input
              style={{ border: '0px none' }}
              type="text"
              className=" bg-light fs-3 fw-bold "
              id="name"
              name="name"
              value={uname}
              disabled
            />
          </div>

          <div className="col-md-12 mb-3">
            <label for="email" className="form-label fs-4">
              Email :-
            </label>
            <input
              type="email"
              style={{ border: '0px none' }}
              className="bg-light fs-3 fw-bold "
              id="email"
              name="email"
              value={uemail}
              disabled
            />
          </div>

          <div className="col-md-12 mb-3">
            <label for="event" className="form-label">
              Event Type
            </label>
            <div className="col-md-6 "></div>
            <select
              id="event"
              className="form-select"
              name="event"
              value={uevent}
              onFocus={clearError}
              onChange={eventinp}
            >
              <option selected>Choose Event</option>
              <option value="Wedding Events">Wedding Events</option>
              <option value="Musical Concert">Musical Concert</option>
              <option value="Social Events">Social Events</option>
              <option value="Corporate Events">Corporate Events</option>
              <option value="Sports Events">Sports Events</option>
              <option value="Birthday">Birthday</option>
              <option value="Festivals">Festivals</option>
              <option value="Other">Other</option>
            </select>
            <div className="invalid-feedback fs-6 fw-bold">{eevent}</div>
          </div>

          <div className="col-md-12 mb-3">
            <label for="city" className="form-label">
              Event Venue
            </label>
            <div className="col-md-6 "></div>
            <select
              id="city"
              className="form-select"
              name="city"
              value={ucity}
              onFocus={clearError}
              onChange={cityinp}
            >
              <option selected>Choose City</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Pune">Pune</option>
              <option value="Jalgaon">Jalgaon</option>
              <option value="Chennai">Chennai</option>
              <option value="Hyderabad">Hyderabad</option>
              <option value="Banglore">Banglore</option>
              <option value="Delhi">Delhi</option>
              <option value="Jaipur">Jaipur</option>
              <option value="Goa">Goa</option>
              <option value="Ahmedabad">Ahmedabad</option>
            </select>
            <div className="invalid-feedback fs-6 fw-bold">{ecity}</div>
          </div>

          <div className="col-md-12 mb-3">
            <label for="city" className="form-label">
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={udate}
              onFocus={clearError}
              onChange={dateinp}
            />
            <div className="invalid-feedback fs-6 fw-bold">{edate}</div>
          </div>

          <div className="col-12 mb-3">
            <label for="address" className="form-label">
              Number of Guests
            </label>
            <input
              type="number"
              className="form-control"
              id="guest"
              name="guest"
              value={uguest}
              onFocus={clearError}
              onChange={guestinp}
            />
            <div className="invalid-feedback fs-6 fw-bold">{eguest}</div>
          </div>

          <div className="col-md-12 mb-1">
            <label for="foodQty" className="form-label">
              Choice Food
            </label>
          </div>
          <div className="app">
            <div className="foodList">
              <label>
                <div className="title">Your foodList:</div>
              </label>
              <div className="list-container">
                {foodList.map((item, index) => (
                  <label>
                    <div key={index}>
                      <label>
                        <input
                          value={item}
                          type="checkbox"
                          onChange={foodinp}
                        />
                      </label>

                      <label>
                        <span className={isfood(item)}>{item}</span>
                      </label>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="col-md-8 mb-1">
            <label for="equipmentQty" className="form-label">
              Select Equipment
            </label>
          </div>
          <div className="app">
            <div className="equiList">
              <div className="list-container">
                {equiList.map((item, index) => (
                  <div key={index}>
                    <input
                      value={item}
                      type="checkbox"
                      onChange={equipmentinp}
                    />
                    <label>
                      <span className={isEqui(item)}>{item}</span>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-12 text-center mt-5 mb-5  ">
            <input
              type="button"
              value="Availability"
              className="btn btn-primary btn-lg ps-2 pe-3 p-1 me-3"
              onClick={handleAvailble}
            />

            <input
              type="button"
              value="Book Event"
              className="btn btn-success btn-lg ps-2 pe-3 p-1 ms-3"
              onClick={validate}
            />
          </div>
        </form>
      </div>

      <Invoice
        bdata={udata}
        bname={udata.name}
        bemail={udata.email}
        bcity={udata.city}
        bevent={udata.event}
        bdate={udata.date}
        bfood={udata.food}
        bguest={udata.guest}
        bequipment={udata.equipment}
        openPop={openPop}
        setOpenPop={setOpenPop}
      ></Invoice>
    </div>
  )
}

export default Insert
