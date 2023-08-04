import ShopBanner from '@/components/ShopBanner';
import MainLayout from '@/layout/MainLayout';
import React from 'react';

const Distributors = () => {
  const distributors = [
    {
      name: "Medplus Pharmacy",
      location: "All outlets in Lagos",
    },
    {
      name: "Rozec Pharmacy",
      location: ""
    },
    {
      name: "La Mimz Skincare",
      location: "Abuja"
    },
    {
      name: "Mary Ayemere",
      location: "Lagos"
    },
    {
      name: "Prince Ebeano Abuja",
      location: "Abuja"
    },
    {
      name: "Prince Ebeano Lekki",
      location: "Old lekki"
    },
    {
      name: "Prince Ebeano lekki (new branch)",
      location: "Lekki "
    },
    {
      name: "Prince Ebeano Chevron",
      location: "Chevron Lagos"
    },
    {
      name: "Prince Ebeano Ologolo",
      location: "Agungi beach"
    },
    {
      name: "Prince Ebeano Oniru",
      location: "Oniru beach"
    }, {
      name: "Prince Ebano Canada",
      location: "Canada"
    }, {
      name: "Prince Ebeano Ikeja",
      location: "Ikeja Lagos"
    }, {
      name: "Techmel Techmel LImited",
      location: "Port Harcourt"
    }, {
      name: "Esther Beauty Box ",
      location: "Ikeja Lagos"
    }, {
      name: "Blossom Beauty",
      location: "Ikota Lagos"
    }, {
      name: "Pride of Africa",
      location: "UK"
    }, {
      name: "Mrs Odamo",
      location: "USA"
    }, {
      name: "Skin Supplies",
      location: "UK"
    }, {
      name: "Bydow Pharmacy",
      location: "VGC"
    }, {
      name: "Creative Minds",
      location: "Ikoyi"
    }, {
      name: "Bitoyak Ventures Worldwide",
      location: ""
    }, {
      name: "LNC Trading Gambia",
      location: "Gambia"
    }, {
      name: "Anne Ezenwafor",
      location: "Enugu (process)"
    }, {
      name: "Ijeoma Ndu",
      location: "USA (inactive)"
    }, {
      name: "Lindoirs Studio",
      location: "Uyo"
    }, {
      name: "Xapic",
      location: "Uk/Canada"
    }, {
      name: "Barazahl Ltd",
      location: ""
    }
  ]

  return (
    <MainLayout>
      <div>
        <ShopBanner text="Where to Buy" />
        <div className='lg:p-8 p-4'>
          <div className='lg:flex justify-between'>
            <div className='text-lg'>
              <p className='text-2xl'>Physical location</p>
              <ul>
                <li className='my-3'>20A Fola Osibo / Emma Abimbola Cole street, Lekki phase 1</li>
                <li className='my-3'>Fourteen36 mall, Sanusi Fafunwa, Victoria Island</li>
                <li className='my-3'>The Palms Mall, opposite Mobos, Lekki</li>
              </ul>
            </div>
            <div className='lg:w-52 text-lg'>
              <p className='text-2xl'>Contact</p>
              <ul>
                <li className='my-3'>09086120741 </li>
                <li className='my-3'>09088400800</li>
              </ul>
            </div>
          </div>
          <div className='flex justify-between bg-[#66170F] p-4 rounded-md lg:text-lg my-4 text-white'>
            <p className='lg:w-20'>S/N</p>
            <p className='lg:w-[20%]'>Distributors</p>
            <p className='lg:w-44'>Location</p>
          </div>
          {
            distributors.map((item, index) => (
              <div key={index} className='flex justify-between bg-[#F98B024D] p-4 rounded-md lg:text-lg my-2'>
                <p className='lg:w-20'>{index + 1}</p>
                <p className='lg:w-[20%]'>{item.name}</p>
                <p className='lg:w-44'>{item.location}</p>
              </div>
            ))
          }

        </div>
      </div>
    </MainLayout>
  );
};

export default Distributors;