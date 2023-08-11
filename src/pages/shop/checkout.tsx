import ShopBanner from '@/components/ShopBanner';
import MainLayout from '@/layout/MainLayout';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCart } from "@/store/slices/cartSlice.js"
import { ProductType } from '@/types/Applicant.types';
import axios from 'axios';

const Checkout = () => {
  const [step, setStep] = useState(1)
  const cart = useSelector(selectCart)
  const [ship, setShip] = useState(true)
  const [countries, setCountries] = useState([])
  const [cities, setCities] = useState([])

  const [country, setCountry] = useState("")
  const [state, setState] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [city, setCity] = useState("")
  const [houseNo, setHouseNo] = useState("")
  const [streetName, setStreetName] = useState("")
  const [landmark, setLandmark] = useState("")
  const [zip, setZip] = useState("")
  const [location, setLocation] = useState<Number>()

  const shipping = [
    {
      location: "Lagos island 1 (VI, IKOYI, OBALENDE, MARINA, ELEGANZA, CHEVRON)",
      amount: 2000
    },
    {
      location: "Lagos island 2 (LEKKI, IKATE, AGUNGI, JAKANDE)",
      amount: 1500
    },
    {
      location: "Lagos island 3 (IKOTA, VGC, AJAH, BADORE, ADDO ROAD, ILAJE, ABRAHAM ADESANYA)",
      amount: 2500
    },
    {
      location: "Lagos island 4 (SANGOTEDO, OGOMBO, ABIJO, AWOYAYA, IBEJU LEKKI, LAKWOE",
      amount: 3000
    },
    {
      location: "Lagos Mainland 1 (YABA, SURULERE, GBAGADA, EBUTE META)",
      amount: 2500
    },
    {
      location: "Lagos Mainland 2 (SHOMOLU, EJIBGO, MARYLAND, OMOLE, OSHODI, AJAO ESTATE, ISOLO, ILUPEJU, MAGODO)",
      amount: 3000
    },
    {
      location: "Lagos Mainland 3 (IKEJA, OJOTA, OGBA, FESTAC, EGBEDA, AGEGE, AMUWO-ODOFIN, IDIMU)",
      amount: 3500
    },
    {
      location: "Lagos Mainland 4 (IJU SHAGA, IPAJA, ABULE-EGBA, IGANDO, IKOTUN, AGBADO) ",
      amount: 4000
    },
    {
      location: "Lagos Mainland 5 (OKOKOMIKO, IKORODU,AYOBO) ",
      amount: 5000
    },
  ]

  const nigeriaShipping = [
    {
      location: "0.5kg - 2kg",
      amount: 4500
    },
    {
      location: "2.1kg - 3kg",
      amount: 5500
    },
  ]
  const outsideShipping = [
    {
      location: "0.5kg - 2kg",
      amount: 27000
    },
    {
      location: "2.1kg - 3kg",
      amount: 32000
    },
  ]

  useEffect(() => {
    // Get countries
    axios
      .get(window.location.origin + "/api/getCountries")
      .then((res) => {
        const calculated = res.data.map((country: any) => ({ label: country, value: country }))
        setCountries(calculated)
      })
      .catch((err) => console.log(err))
  }, [])

  useEffect(() => {
    // Get countries
    if (country) {
      axios
        .get(`${window.location.origin}/api/getState?country=${country}`)
        .then((res) => {
          const calculated = res.data.map((state: any) => ({ label: state, value: state }))
          setCities(calculated)
        })
        .catch((err) => console.log(err))
    }
  }, [country])

  const getTotal = () => {
    return cart.map((item: { price: number; count: number; }) => item.price * item.count)
  }

  const nextStep = () => {
    // if (state === "" || country === "" || city === "" || houseNo === "" || streetName === "" || phone === "" || landmark === "" || zip === "" || name === "") {
    //   return
    // }
    setStep(2)
  }

  return (
    <MainLayout>
      <div>
        <ShopBanner text="Check out" />
        <div className='lg:flex justify-between lg:p-10 p-4'>
          <div className='lg:w-[33%]'>
            <h1 className='text-3xl font-bold'>Order Summary</h1>
            {cart.map((item: ProductType, index: React.Key | null | undefined) => <div key={index} className='flex justify-between my-3'>
              <img src={item.image[0]} className='lg:w-40 w-24 lg:h-32 ' alt="" />
              <div className='my-auto'>
                <h5 className='text-xl font-bold'>{item.title}</h5>
                <div className='flex my-2 justify-between'>
                  <p>Qty {item.count}</p>
                  <p>N {item.price}</p>
                </div>
              </div>
            </div>)}
            <div className='border-t border-t-gray my-6'></div>
            <div className='flex justify-between my-2'>
              <p>Subtotal</p>
              <p>N {getTotal()}</p>
            </div>
            <div className='flex justify-between my-2'>
              <p>Estimated shipping  </p>
              <p>N</p>
            </div>
            <div className='flex text-xl font-bold my-2 justify-between'>
              <p>Total </p>
              <p>N {getTotal()}</p>
            </div>
          </div>
          <div className='lg:w-[60%] sm:mt-10'>
            <h1 className='text-3xl font-bold'>Shipping and Delivery</h1>
            <p className='my-3'>Select how you would like to receive your order</p>
            <div className='flex justify-between my-6'>
              <div onClick={() => setShip(true)} className={`text-center w-[44%] p-6 ${ship ? 'border-[#F98B02] border bg-[#FEE8CC]' : 'border'}`}>
                <img className='mx-auto' src="/assets/icons/local_shipping.png" alt="" />
                <p>Ship to my address</p>
              </div>
              <div onClick={() => setShip(false)} className={`text-center w-[44%] p-6 ${ship ? 'border' : 'border-[#F98B02] border bg-[#FEE8CC]'}`}>
                <img className='mx-auto' src="/assets/icons/shopping_bag.png" alt="" />
                <p>I will pick up myself</p>
              </div>
            </div>
            {ship ? <div>
              <p className='my-3'>All fields are required unless they’re explicitly marked as optional.</p>
              {
                step === 1 ? <div className='p-4'>
                  <p className='text-2xl text-orange font-bold'>Enter a new shipping address</p>

                  <div className='my-4'>
                    <p className='font-bold lg:text-base text-sm  my-3'>Country/Region</p>
                    <select onChange={e => setCountry(e.target.value)} value={country} className='p-3 border-2 rounded-md w-full'>
                      {countries.map((country: { label: string, value: string }, index) => <option key={index} value={country.label}>{country.value}</option>)}
                    </select>
                  </div>
                  <div className='my-4'>
                    <p className='font-bold lg:text-base text-sm my-3'>Full name (First and last name)</p>
                    <input value={name} onChange={e => setName(e.target.value)} type="text" className='p-3 border-2 rounded-md w-full' />
                  </div>
                  <div className='my-4'>
                    <p className='font-bold lg:text-base text-sm my-3'>Phone number</p>
                    <input value={phone} onChange={e => setPhone(e.target.value)} type="number" className='p-3 border-2 rounded-md w-full' />
                  </div>
                  <div className='my-4 flex justify-between'>
                    <div className='w-[32%]'>
                      <p className='font-bold lg:text-base text-sm my-3'>House number</p>
                      <input value={houseNo} onChange={e => setHouseNo(e.target.value)} type="number" className='p-3 border-2 rounded-md w-full' />
                    </div>
                    <div className='w-[32%]'>
                      <p className='font-bold lg:text-base text-sm my-3'>Street name</p>
                      <input value={streetName} onChange={e => setStreetName(e.target.value)} type="text" className='p-3 border-2 rounded-md w-full' />
                    </div>
                    <div className='w-[32%]'>
                      <p className='font-bold lg:text-base text-sm my-3'>Landmark</p>
                      <input value={landmark} onChange={e => setLandmark(e.target.value)} type="text" className='p-3 border-2 rounded-md w-full' />
                    </div>
                  </div>
                  <div className='my-4 flex justify-between'>
                    <div className='w-[32%]'>
                      <p className='font-bold lg:text-base text-sm my-3'>City</p>
                      <input value={city} onChange={e => setCity(e.target.value)} type="text" className='p-3 border-2 rounded-md w-full' />
                    </div>
                    <div className='w-[32%]'>
                      <p className='font-bold lg:text-base text-sm my-3'>State</p>
                      <select onChange={e => setState(e.target.value)} value={state} className='p-3 border-2 rounded-md w-full'>
                        {cities.map((country: { label: string, value: string }, index) => <option key={index} value={country.label}>{country.value}</option>)}
                      </select>
                    </div>
                    <div className='w-[32%]'>
                      <p className='font-bold lg:text-base text-sm my-3'>Zip code</p>
                      <input value={zip} onChange={e => setZip(e.target.value)} type="number" className='p-3 border-2 rounded-md w-full' />
                    </div>
                  </div>
                  <div onClick={() => nextStep()} className='my-6'>
                    <button className='p-3 w-full bg-warning rounded-md'>Use this address</button>
                  </div>
                </div> : <div className='p-4'>
                  <p className='text-2xl font-bold'>Shipping Address</p>
                  <p className='text-sm'>{name} {phone} {city} {state}</p>
                  <p onClick={() => setStep(1)} className='text-orange text-sm cursor-pointer'>Change Address</p>
                </div>
              }
              <div className='border-t border-t-gray my-6'></div>
              {step === 2 && <div className=''>
                <div className='p-4'>
                  <p className='text-2xl text-orange font-bold'>Shipping method</p>
                  <p className='text-xs my-3'>Please choose a shipping method</p>
                </div>
                {state === "Lagos" ? <div>
                  <p className='text-xs my-3'>Shipping rate within Lagos</p>
                  {shipping.map((shipping, index) => <div key={index} onClick={() => setLocation(index)} className={`flex justify-between p-3 border cursor-pointer ${location === index ? 'border-orange bg-[#FEE8CC]' : ''}`}>
                    <div className='w-16 text-center my-auto'>
                      <div className="bg-white dark:bg-gray-100 rounded-full w-6 h-6 mx-auto flex flex-shrink-0 justify-center items-center relative">
                        <input aria-labelledby="label1" checked={location === index} type="radio" name="radio" className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none" />
                        <div className="check-icon hidden border-4 border-orange rounded-full w-full h-full z-1"></div>
                      </div>
                      {/* <input type="radio" className='p-3' /> */}
                    </div>
                    <div className='w-[90%]'>
                      <p className={location === index ? 'font-bold' : ''}>{shipping.location}</p>
                      <p className='text-xs'>Orders usually delivered within 48hours </p>
                    </div>
                    <p className={location === index ? 'font-bold' : ''}>N{shipping.amount}</p>
                  </div>)}
                </div> : country === "Nigeria" ? <div>
                  <p className='text-xs my-3'>Shipping rate outside Lagos within Nigeria</p>
                  {nigeriaShipping.map((shipping, index) => <div key={index} className={`flex justify-between p-3 border cursor-pointer ${location === index ? 'border-orange bg-[#FEE8CC]' : ''}`}>
                    <div className='w-16 text-center my-auto'>
                      <div className="bg-white dark:bg-gray-100 rounded-full w-6 h-6 mx-auto flex flex-shrink-0 justify-center items-center relative">
                        <input aria-labelledby="label1" checked={location === index} type="radio" name="radio" className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none" />
                        <div className="check-icon hidden border-4 border-orange rounded-full w-full h-full z-1"></div>
                      </div>
                      {/* <input type="radio" className='p-3' /> */}
                    </div>
                    <div className='w-[90%]'>
                      <p className={location === index ? 'font-bold' : ''}>{shipping.location}</p>
                      <p className='text-xs'>Orders usually delivered within 2-5 working days</p>
                    </div>
                    <p className={location === index ? 'font-bold' : ''}>N{shipping.amount}</p>
                  </div>)}
                  <p className='text-sm my-3'>Every additional 1kg attracts extra <strong>N1,000</strong></p>
                </div> : <div>
                  <p className='text-sm my-3'>Shipping rate outside Lagos outside Nigeria</p>
                  {outsideShipping.map((shipping, index) => <div key={index} className={`flex justify-between p-3 border cursor-pointer ${location === index ? 'border-orange bg-[#FEE8CC]' : ''}`}>
                    <div className='w-16 text-center my-auto'>
                      <div className="bg-white dark:bg-gray-100 rounded-full w-6 h-6 mx-auto flex flex-shrink-0 justify-center items-center relative">
                        <input aria-labelledby="label1" checked={location === index} type="radio" name="radio" className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none" />
                        <div className="check-icon hidden border-4 border-orange rounded-full w-full h-full z-1"></div>
                      </div>
                      {/* <input type="radio" className='p-3' /> */}
                    </div>
                    <div className='w-[90%]'>
                      <p className={location === index ? 'font-bold' : ''}>{shipping.location}</p>
                      <p className='text-xs'>Orders usually delivered within 5-7 working days</p>
                    </div>
                    <p className={location === index ? 'font-bold' : ''}>N{shipping.amount}</p>
                  </div>)}
                  <p className='text-sm my-3'>Every additional 1kg attracts extra<strong> N5,000</strong></p>

                  <p className='text-sm my-3'> <strong>Note:</strong> Receiver is responsible for any additional charges like custom duties </p>

                </div>}
                <button className='bg-warning p-3 w-full rounded-md my-4'>Checkout</button>
              </div>}
            </div> : <Pickup />}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Checkout;

function Pickup() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [time, setTime] = useState("")
  const [date, setDate] = useState("")
  const [pickup, setPickup] = useState<Number>(0)

  const locations = [
    "20A Emma Abimbola Cole Street, Lekki phase 1.",
    "Fourteen36 mall  Sanusi Fafunwa, Victoria Island",
    "The Palms Mall, Opposite Mobos, Lekki"
  ]

  return (
    <div>
      <p>Kindly fill the form below</p>
      <div className='my-4'>
        <p className='font-bold lg:text-base text-sm my-3'>Full name (First and last name)</p>
        <input value={name} onChange={e => setName(e.target.value)} type="text" className='p-3 border-2 rounded-md w-full' />
      </div>
      <div className='my-4'>
        <p className='font-bold lg:text-base text-sm my-3'>Phone number</p>
        <input value={phone} onChange={e => setPhone(e.target.value)} type="number" className='p-3 border-2 rounded-md w-full' />
      </div>
      <div className='flex justify-between'>
        <div className='my-4 w-[48%]'>
          <p className='font-bold lg:text-base text-sm my-3'>Pick-up time</p>
          <input value={time} onChange={e => setTime(e.target.value)} type="time" className='p-3 border-2 rounded-md w-full' />
        </div>
        <div className='my-4 w-[48%]'>
          <p className='font-bold lg:text-base text-sm my-3'>Pick-up Date</p>
          <input value={date} onChange={e => setDate(e.target.value)} type="date" className='p-3 border-2 rounded-md w-full' />
        </div>
      </div>
      <p>Where would you like to pick up?</p>
      {locations.map((location, index) => <div key={index} onClick={() => setPickup(index)} className='flex cursor-pointer my-2 text-sm'>
        <div className='w-10 text-center my-auto'>
          <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
            <input aria-labelledby="label1" checked={pickup === index} type="radio" name="radio" className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none" />
            <div className="check-icon hidden border-4 border-orange rounded-full w-full h-full z-1"></div>
          </div>
          {/* <input type="radio" className='p-3' /> */}
        </div>
        <p>{location}</p>
      </div>)}
      <button className='p-3 bg-warning w-full rounded-md my-4'>Submit</button>
    </div>
  )
}