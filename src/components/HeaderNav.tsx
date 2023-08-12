import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import AboutUs from './dropdowns/AboutUs';
import Resources from './dropdowns/Resources';
import Shop from './dropdowns/Shop';
import { useSelector } from 'react-redux';
import { selectCart } from "@/store/slices/cartSlice.js"
import axios from 'axios';

const HeaderNav = () => {
  const cart = useSelector(selectCart)
  const [menu, setMenu] = useState(false)
  const [country, setCountry] = useState<any>()

  const getUserCountry = async () => {
    try {
      const { data } = await axios.get("https://figtree.onrender.com/")
      // console.log(data)
      await axios.get(`https://restcountries.com/v3.1/name/${data.addressCountry}`)
        .then((response) => {
          console.log(response.data[0])
          setCountry(response.data[0])
        })
    } catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    getUserCountry()
  }, [])

  return (
    <div>
      <div className='bg-black p-3'>
        <div className='ml-auto w-28 flex justify-between'>
          <img className='w-6 h-6' src="/assets/icons/lucide_facebook.png" alt="" />
          <img className='w-6 h-6' src="/assets/icons/mdi_instagram.png" alt="" />
          <img className='w-6 h-6' src="/assets/icons/ri_twitter-line.png" alt="" />
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
    </div>
  );
};

export default HeaderNav;