import HeadingText from "@/components/HeadingText";
import Slider from "@/components/Slider";
import CategoryCard from "@/components/cards/CategoryCard";
import ProductCard from "@/components/cards/ProductCard";
import ReviewCard from "@/components/cards/ReviewCard";
import Map from "@/components/cards/Map";
import MainLayout from "@/layout/MainLayout";
import { ProductType, Review } from "@/types/Applicant.types";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState,useMemo } from "react";
import { useSelector } from 'react-redux';
import { selectCart } from "@/store/slices/cartSlice.js"
import { getCookie } from 'cookies-next';

export default function Home() {
  const [suggestions, setSuggestions] = useState<ProductType[]>([])
  const [mostSold, setMostSold] = useState<ProductType[]>([])
  const [reviews, setReviews] = useState<Review[]>([])
  const [country, setCountry] = useState<any>()
  const [modal, setModal] = useState(false)
  const token = getCookie('token')
  const [countries, setCountries] = useState([])
  const [newCountry, setNewCountry] = useState<any>();


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
    axios
      .get(window.location.origin + "/api/getCountries")
      .then((res) => {
        const calculated = res.data.map((country: any) => ({ label: country, value: country }))
        setCountries(calculated)
      })
      .catch((err) => console.log(err))
  }, [token])

  const memoizedValue = useMemo(() => {
    if (token === undefined) {
      setModal(true) 
      getUserCountry()
    }
    
    return token
  }, [token]);


  const getSuggestions = async () => {
    try {
      const { data } = await axios.get(`/suggest`)
      // console.log(data)
      setSuggestions(data)
    } catch (err) {
      console.log(err)
    }
  }

  const getMostSold = async () => {
    try {
      const { data } = await axios.get(`/most-sold`)
      // console.log(data)
      setMostSold(data)
    } catch (err) {
      console.log(err)
    }
  }

  const getReviews = async () => {
    try {
      const { data } = await axios.get('reviews')
      // console.log(data)
      setReviews(data)
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getSuggestions()
    getMostSold()
    getReviews()
  }, [])


  const category = [
    {
      img: "Group-115.png",
      text: "Pure Butters"
    },
    {
      img: "Group-116.png",
      text: "Pure Oils"
    },
    {
      img: "Group-117.png",
      text: "Soaps"
    },
    {
      img: "Group-118.png",
      text: "Customized Oils"
    },
    {
      img: "Group-120.png",
      text: "Creams"
    },
  ]


  return (
    <MainLayout>
      <div>
      {
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
      }
        <Slider />
        <section className="lg:mx-32 mx-4">
          <HeadingText text="Shop By Category" index="1" />
          <div className="flex flex-wrap justify-evenly">
            {category.map((item, index) => (
              <CategoryCard key={index} img={item.img} text={item.text} />
            ))}
          </div>
          <div className="mt-20">
            <HeadingText text="Shop Most Loved" index="2" />
            <div className="flex flex-wrap justify-between">
              {suggestions.map((item, index) => (
                <ProductCard key={index} item={item} />
              ))}
            </div>
          </div>
          <div className="mt-20">
            <HeadingText text="Shop Best Sellers" index="2" />
            <div className="flex flex-wrap justify-between">
              {mostSold.map((item, index) => (
                <ProductCard key={index} item={item} />
              ))}
            </div>
          </div>
        </section >

        <div className="bg-[#FFDAB9] relative flex justify-evenly p-[105px] my-20">
          <div className="sm:hidden absolute left-0">
            <img className="w-[80%]" src="/assets/left.png" alt="" />
          </div>
          <div className="my-auto text-center">
            <h2 className="text-5xl">Newly Launched</h2>
            <p className="my-3 text-lg">They’re here!</p>
            <p className="my-4">New products formulated to <br /> suit your specific needs </p>
            <button className="p-3 my-3 rounded-md bg-warning w-1/2 "><Link href={'/shop/new'}>Shop here</Link></button>
          </div>
          <div className="sm:hidden absolute -right-36">
            <img className="w-[80%]" src="/assets/right.png" alt="" />
          </div>
        </div>
        <div className="lg:p-8 p-4">
          <div>
            <h2 className="text-3xl text-center">We Love Reviews.....</h2>
          </div>
          <div className="flex flex-wrap justify-between my-8">
            {reviews.slice(0, 3).map((review, index) => <ReviewCard key={index} review={review} />)}
          </div>
          <div>
            <p className="float-right">
              <Link href={'/reviews'}>See all</Link>
            </p>
          </div>
        </div>
        <div className="lg:my-20 my-10 relative">
          <img src="/assets/cta.png" className="w-full lg:h-[60vh] h-[40vh]" alt="" />
          <div className="w-full absolute top-0 left-0 right-0 bg-[#000000] opacity-50 lg:h-[60vh] h-[40vh]"></div>
          <div className="absolute lg:top-40 top-6 left-0 right-0 text-center">
            <h2 className="text-4xl text-white">Sign up & get up 10% discount</h2>
            <p className="text-white my-6">Sign up for instant discount & Shop you faves</p>
            <button className="p-3 my-3 rounded-md bg-warning px-10 "><Link href={'/auth/signup'}>Sign Up</Link></button>
          </div>
        </div>
        <Map/>
      </div >
    </MainLayout >
  )
}
