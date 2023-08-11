import ShopBanner from '@/components/ShopBanner';
import MainLayout from '@/layout/MainLayout';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCart } from "@/store/slices/cartSlice.js"
import { ProductType } from '@/types/Applicant.types';
import axios from 'axios';

const Checkout = () => {
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

  return (
    <MainLayout>
      <div>
        <ShopBanner text="Check out" />
        <div className='flex justify-between p-10'>
          <div className='w-[33%]'>
            <h1 className='text-3xl font-bold'>Order Summary</h1>
            {cart.map((item: ProductType, index: React.Key | null | undefined) => <div key={index} className='flex justify-between my-3'>
              <img src={item.image[0]} className='w-40 h-32 ' alt="" />
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
          <div className='w-[60%]'>
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
            <p className='my-3'>All fields are required unless they’re explicitly marked as optional.</p>

            <div className='p-6'>
              <p className='text-2xl text-orange font-bold'>Enter a new shipping address</p>

              <div className='my-4'>
                <p className='font-bold text-base my-3'>Country/Region</p>
                <select onChange={e => setCountry(e.target.value)} className='p-3 border-2 rounded-md w-full'>
                  {countries.map((country: { label: string, value: string }, index) => <option key={index} value={country.label}>{country.value}</option>)}
                </select>
              </div>
              <div className='my-4'>
                <p className='font-bold text-base my-3'>Full name (First and last name)</p>
                <input onChange={e => setName(e.target.value)} type="text" className='p-3 border-2 rounded-md w-full' />
              </div>
              <div className='my-4'>
                <p className='font-bold text-base my-3'>Phone number</p>
                <input onChange={e => setPhone(e.target.value)} type="number" className='p-3 border-2 rounded-md w-full' />
              </div>
              <div className='my-4 flex justify-between'>
                <div className='w-[32%]'>
                  <p className='font-bold text-base my-3'>House number</p>
                  <input onChange={e => setHouseNo(e.target.value)} type="number" className='p-3 border-2 rounded-md w-full' />
                </div>
                <div className='w-[32%]'>
                  <p className='font-bold text-base my-3'>Street name</p>
                  <input onChange={e => setStreetName(e.target.value)} type="text" className='p-3 border-2 rounded-md w-full' />
                </div>
                <div className='w-[32%]'>
                  <p className='font-bold text-base my-3'>Landmark</p>
                  <input onChange={e => setLandmark(e.target.value)} type="number" className='p-3 border-2 rounded-md w-full' />
                </div>
              </div>
              <div className='my-4 flex justify-between'>
                <div className='w-[32%]'>
                  <p className='font-bold text-base my-3'>City</p>
                  <input onChange={e => setCity(e.target.value)} type="text" className='p-3 border-2 rounded-md w-full' />
                </div>
                <div className='w-[32%]'>
                  <p className='font-bold text-base my-3'>State</p>
                  <select onChange={e => setState(e.target.value)} className='p-3 border-2 rounded-md w-full'>
                    {cities.map((country: { label: string, value: string }, index) => <option key={index} value={country.label}>{country.value}</option>)}
                  </select>
                </div>
                <div className='w-[32%]'>
                  <p className='font-bold text-base my-3'>Zip code</p>
                  <input onChange={e => setZip(e.target.value)} type="number" className='p-3 border-2 rounded-md w-full' />
                </div>
              </div>
              <div className='my-6'>
                <button className='p-3 w-full bg-warning rounded-md'>Use this address</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Checkout;