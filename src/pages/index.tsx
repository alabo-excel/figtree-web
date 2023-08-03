import HeadingText from "@/components/HeadingText";
import Slider from "@/components/Slider";
import CategoryCard from "@/components/cards/CategoryCard";
import ProductCard from "@/components/cards/ProductCard";
import ReviewCard from "@/components/cards/ReviewCard";
import MainLayout from "@/layout/MainLayout";
import Link from "next/link";

export default function Home() {
  const category = [
    {
      img: "Group-115.png",
      text: "Pure Butter"
    },
    {
      img: "Group-116.png",
      text: "Pure Oil"
    },
    {
      img: "Group-117.png",
      text: "Soap"
    },
    {
      img: "Group-118.png",
      text: "Customized Oil"
    },
    {
      img: "Group-120.png",
      text: "Cream"
    },
  ]

  const products = [
    {
      title: "Cream",
      price: "₦ 2,000",
      img: [
        "ing1.png",
        "ing2.png",
      ]
    },
    {
      title: "Cream",
      price: "₦ 2,000",
      img: [
        "ing1.png",
        "ing2.png",
      ]
    },
    {
      title: "Cream",
      price: "₦ 2,000",
      img: [
        "ing1.png",
        "ing2.png",
      ]
    },
    {
      title: "Cream",
      price: "₦ 2,000",
      img: [
        "ing1.png",
        "ing2.png",
      ]
    },
  ]

  return (
    <MainLayout>
      <div>
        <Slider />
        <section className="lg:mx-32 mx-4">
          <HeadingText text="Shop By Category" index="1" />
          <div className="lg:flex justify-evenly">
            {category.map((item, index) => (
              <CategoryCard key={index} img={item.img} text={item.text} />
            ))}
          </div>
          <div className="mt-20">
            <HeadingText text="Shop Most Loved" index="2" />
            <div className="lg:flex justify-between">
              {products.map((item, index) => (
                <ProductCard item={item} />
              ))}
            </div>
          </div>
          <div className="mt-20">
            <HeadingText text="Shop Best Sellers" index="2" />
            <div className="lg:flex justify-between">
              {products.map((item, index) => (
                <ProductCard item={item} />
              ))}
            </div>
          </div>
        </section >
        <div className="bg-[#FFDAB9] flex justify-evenly my-20">
          <div className="my-auto text-center">
            <h2 className="text-5xl">Newly Launched</h2>
            <p className="my-3 text-lg">They’re here!</p>
            <p className="my-4">New products formulated to <br /> suit your specific needs </p>
            <button className="p-3 my-3 rounded-md bg-warning w-1/2 ">Shop here</button>
          </div>
          <div>
            <img className="w-[80%]" src="/assets/user.png" alt="" />
          </div>
        </div>
        <div className="p-8">
          <div>
            <h2 className="text-3xl text-center">We Love Reviews.....</h2>
            <p className="float-right">
              <Link href={'/'}>See all</Link>
            </p>
          </div>
          <div className="flex justify-between my-8">
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
          </div>
        </div>
        <div className="my-20 relative">
          <img src="/assets/cta.png" className="w-full h-[70vh]" alt="" />
          <div className="w-full absolute top-0 left-0 right-0 bg-[#000000] opacity-50 h-[70vh]"></div>
          <div className="absolute top-44 left-0 right-0 text-center">
            <h2 className="text-4xl text-white">Sign up & get up 10% discount</h2>
            <p className="text-white my-6">Sign up for instant discount & Shop you faves</p>
            <button className="p-3 my-3 rounded-md bg-warning px-10 ">Sign up</button>
          </div>
        </div>
        <div>
          <img src="/assets/map.png" className="w-full" alt="" />
        </div>
      </div >
    </MainLayout >
  )
}
