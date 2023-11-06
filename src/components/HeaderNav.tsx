import Link from 'next/link';
import React, { useEffect, useState, useMemo} from 'react';
import AboutUs from './dropdowns/AboutUs';
import Resources from './dropdowns/Resources';
import Shop from './dropdowns/Shop';
import { useSelector } from 'react-redux';
import { selectCart } from "@/store/slices/cartSlice.js"
import axios from 'axios';
import { getCookie } from 'cookies-next';

const HeaderNav = () => {
  const cart = useSelector(selectCart)
  const [menu, setMenu] = useState(false)
  const [country, setCountry] = useState<any>()
  // const [modal, setModal] = useState(false)
  const token = getCookie('token')
  const [countries, setCountries] = useState([])
  // const [newCountry, setNewCountry] = useState<any>()

  const getUserCountry = async () => {
    try {
      const { data } = await axios.get("https://figtree.onrender.com/")
      // console.log(data)
      await axios.get(`https://restcountries.com/v3.1/name/${data.addressCountry}`)
        .then((response) => {
          // console.log(response.data[0])
          setCountry(response.data[0])
        })
    } catch (e) {
      console.log(e)
    }
  }


  useEffect(() => {
    // Get countries
    getUserCountry()
    axios
      .get(window.location.origin + "/api/getCountries")
      .then((res) => {
        const calculated = res.data.map((country: any) => ({ label: country, value: country }))
        setCountries(calculated)
      })
      .catch((err) => console.log(err))
  }, [token])


  //THE useMemo is used to avoid the constant modal pop-up for users country
  // const memoizedValue = useMemo(() => {
  //   if (token === undefined) {
  //     setModal(true) 
  //     getUserCountry()
  //   }
    
  //   return token
  // }, [token]);

  return (
    <div>
      <div className='bg-black p-3'>
        <div className='ml-auto w-28 flex justify-between'>
          <img className='w-6 h-6' src="/assets/icons/lucide_facebook.png" alt="" />
          <Link href={'https://instagram.com/figtree_company?igshid=MW8wYnpveWh4YWtmaw=='}><img className='w-6 h-6' src="/assets/icons/mdi_instagram.png" alt="" /></Link>
          <Link href={'https://x.com/figtree_company?s=09'}><img className='w-6 h-6' src="/assets/icons/ri_twitter-line.png" alt="" /></Link>
        </div>
      </div>
      <div className='lg:w-[25%] w-1/2 mx-auto'>
        <img src="/assets/logo-bg.png" alt="" />
      </div>
      <div className='flex justify-between'>
        <div onClick={() => setMenu(!menu)} className='lg:hidden mx-4 md:hidden sm:block'>
          {menu ? <img src="/assets/icons/close.png" className='w-4 my-1 cursor-pointer' alt="" /> : <img src="/assets/icons/hamburger.png" className='w-8 cursor-pointer' alt="" />
          }
        </div>
        <div></div>
        <div className='flex sm:hidden w-[40%] justify-between'>
          <Link href={"/"}>
            <div>Home</div>
          </Link>
          <Shop />
          {/* <Link href={"/"}>
            <div>Shop</div>
          </Link> */}
          <Link href={"/distributors"}>
            <div>Where to buy</div>
          </Link>
          <AboutUs />
          <Resources />

          {/* <Link href={"/"}>
            <div>About us</div>
          </Link> */}
          {/* <Link href={"/"}>
            <div>Resources</div>
          </Link> */}


        </div>
        <div className='flex'>
          <Link href={'/auth/login'}>
            <img className='w-5 h-5' src="/assets/icons/line-md_account.png" alt="" />
          </Link>
          <div className='relative'>
            <Link href={'/shop/cart'}>
              <img className='w-5 h-5 mx-4' src="/assets/icons/cart.png" alt="" />
            </Link>
            {cart.length > 0 && <div className='absolute top-0 text-xs right-0 text-white h-5 text-center w-5 bg-red-500 rounded-full'>{cart.length}</div>}
          </div>
          <div className="mr-4">
            <img src={country?.flags.png} className="mx-4 w-5 h-4 my-auto" />
          </div>
        </div>
      </div>
      {
        menu && <div className='p-5'>
          <div className='my-4'>
            <Link href={"/"}>
              <div>Home</div>
            </Link>
          </div>
          <div className='my-4'>
            <Shop />
          </div>
          <div className='my-4'>
            <Link href={"/distributors"}>
              <div>Where to buy</div>
            </Link>
          </div>
          <div className='my-4'>
            <AboutUs />
          </div>
          <div className='my-4'>
            <Resources />
          </div>
        </div>
      }
      {/* {
        modal && <div className='fixed top-44 bottom-40 z-10 mx-auto left-0 right-0 lg:w-[70%]'>
          <div className='flex'>
            <div className='lg:block hidden'>
              <img src="/assets/logo-black.png" alt="" />
            </div>
            <div className='p-6 bg-white text-center relative'>
              <h1 className='text-3xl mt-4'>Looks Like You’re In {country?.name.common}</h1>
              <p className='my-6'>Not in {country?.name.common}? Change your region or country.</p>
              <select onChange={e => setNewCountry(e.target.value)} value={newCountry} className='p-3 border-2 rounded-md w-full'>
                <option value={country?.name.common} className='hidden'>{country?.name.common}</option>
                {countries.map((country: { label: string, value: string }, index) => <option key={index} value={country.label}>{country.value}</option>)}
              </select>
              <button className='bg-warning p-3 mt-4'>Change Country</button>
              <div>
                <img onClick={() => setModal(false)} className='absolute cursor-pointer top-2 right-2' src="/assets/icons/iconamoon_close-thin.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      } */}

    </div>
  );
};

export default HeaderNav;