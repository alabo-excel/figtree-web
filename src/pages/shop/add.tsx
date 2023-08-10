import axios from 'axios';
import React, { useState, useRef } from 'react';

const Add = () => {
  const [previewImages, setFilePreview] = useState<string[]>([]);
  const uploadRef = useRef<HTMLInputElement>(null)

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    const reader = new FileReader()

    if (files && files.length > 0) {
      reader.readAsDataURL(files[0])
      reader.onloadend = () => {
        if (reader.result) {
          // const type = files[0].name.substr(files[0].name.length - 3)
          setFilePreview([...previewImages,
          reader.result as string,
          ])
        }
      }
    }
    console.log(previewImages)
  }

  const addProduct = async () => {
    const { data } = await axios.post('/product', {
      "name": "Figtree Pure Shea Butter",
      "description": "FIGTREE KARKAR OIL is a wonder oil for hair and skin. I t is made with sesame seed oil and other oils. This rich, nutriously rich sudanese oil can thicken the hair, reduce dandruff and improve hair growth. It can be used as a moisturizer for the skin. It works even better with Figtree Chebe Powder",
      "price": 4000,
      "category": "kits",
      "quantity": 10,
      "weight": 1,
      "image": previewImages
    })
  }

  return (
    <div>
      <input type="file" ref={uploadRef} multiple={true} className="" onChange={handleImage} />
      <button onClick={() => addProduct()}>sumit</button>
    </div>
  );
};

export default Add;