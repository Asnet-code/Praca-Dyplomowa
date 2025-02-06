"use client";

import CategoryInput from "@/app/components/inputs/CategoryInput";
import CustomCheckBox from "@/app/components/inputs/CustomCheckbox";
import Input from "@/app/components/inputs/Input";
import TextArea from "@/app/components/inputs/TextArea";
import firebaseApp from "@/libs/firebase";
import { categories } from "@/utils/Categories";

import { useCallback, useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { colors } from "@/utils/Images";
import SelectColor from "@/app/components/inputs/SelectColor";
import { useRouter } from "next/navigation";
import axios from "axios";
import Button from "@/app/components/inputs/Button";
import Image from "next/image";

export type ImageType = {
  color: string;
  colorCode: string;
  image: File | null;
};
export type UploadedImageType = {
  color: string;
  colorCode: string;
  image: string;
};

const AddProductForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState<ImageType[] | null>();
  const [isProductCreated, setIsProductCreated] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      description: "",
      brand: "",
      category: "",
      inStock: false,
      images: [],
      price: "",
      plyta_glowna: "",
      pamiec_ram: "",
      karta_graficzna: "",
      dysk_ssd: "",
      dysk_hdd: "",
      obudowa: "",
      zasilacz: "",
    },
  });

  useEffect(() => {
    setCustomValue("images", images);
  }, [images]);

  useEffect(() => {
    if (isProductCreated) {
      reset();
      setImages(null);
      setIsProductCreated(false);
    }
  }, [isProductCreated]);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log("produkt data", data);
    //wgrywanie zdjęc do firebase

    setIsLoading(true);
    let uploadedImages: UploadedImageType[] = [];

    if (!data.category) {
      setIsLoading(false);
      return toast.error("Katergoria nie jest wybrana");
    }
    if (!data.images || data.images.length === 0) {
      setIsLoading(false);
      return toast.error("Nie ma wybranego zdjęcia");
    }

    const handleImageUploads = async () => {
      toast("Tworze produktu, poczekaj chwilke...");
      try {
        for (const item of data.images) {
          if (item.image) {
            const fileName = new Date().getTime() + "-" + item.image.name;
            const storage = getStorage(firebaseApp);
            const storageRef = ref(storage, `/products/${fileName}`);
            const uploadTask = uploadBytesResumable(storageRef, item.image);

            await new Promise<void>((resolve, reject) => {
              uploadTask.on(
                "state_changed",
                (snapshot) => {
                  const progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                  console.log("ładuję " + progress + "% zrobione");
                  switch (snapshot.state) {
                    case "paused":
                      console.log("przesyłanie jest zatrzymane");
                      break;
                    case "running":
                      console.log("przesyłanie w trakcie");
                      break;
                  }
                },
                (error) => {
                  console.log("błąd w przesyłaniu", error);
                  reject(error);
                },
                () => {
                  getDownloadURL(uploadTask.snapshot.ref)
                    .then((downloadURL) => {
                      uploadedImages.push({
                        ...item,
                        image: downloadURL,
                      });
                      console.log("Plik dostepny na", downloadURL);
                      resolve();
                    })
                    .catch((error) => {
                      console.log("Błąd w otrzymaniu URL", error);
                      reject(error);
                    });
                }
              );
            });
          }
        }
      } catch (error) {
        setIsLoading(false);
        console.log("Błąd podczas przesyłania obrazów", error);
        return toast.error("Błąd podczas przesyłania obrazów");
      }
    };

    await handleImageUploads();
    const productData = { ...data, images: uploadedImages };

    //zapisanie w mongodb
    axios
      .post("/api/product", productData)
      .then(() => {
        toast.success("Produkt został stworzony");
        setIsProductCreated(true);
        router.refresh();
      })
      .catch((error) => {
        toast.error("Coś poszło nie tak gdy zapiswało do mongoDB");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const category = watch("category");
  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };

  const addImageToState = useCallback((value: ImageType) => {
    setImages((prev) => {
      if (!prev) {
        return [value];
      }
      return [...prev, value];
    });
  }, []);

  const removeImageFromState = useCallback((value: ImageType) => {
    setImages((prev) => {
      if (prev) {
        const filteredImages = prev.filter(
          (item) => item.color !== value.color
        );
        return filteredImages;
      }
      return prev;
    });
  }, []);

  return (
    <>
      <div className="flex flex-col items-center">
        <Image src="/AsnetBg2.png" alt="Logo" width={80} height={50} />
        <div className="font-bold text-2xl text-slate-500">Dodaj Produkt</div>
      </div>
      <Input
        id="name"
        label="Nazwa"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />

      <Input
        id="price"
        label="Cena"
        disabled={isLoading}
        register={register}
        errors={errors}
        type="number"
        required
      />

      <Input
        id="brand"
        label="Marka"
        disabled={isLoading}
        register={register}
        errors={errors}
      />

      <TextArea
        id="description"
        label="Opis"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <CustomCheckBox
        id="inStock"
        register={register}
        label="Ten produkt jest dostępny w magazynie"
      />

      <div className="w-full font-medium">
        <div className="mb-2 font-semibold">Wybierz kategorie</div>

        <div className="grid grid-cols-2 md:grid-cols-3 max-h[50vh] overflow-auto">
          {categories.map((item) => {
            if (
              item.label === "Wszystko" ||
              item.label === "Komputery" ||
              item.label === "Laptopy"
            ) {
              return null;
            }
            return (
              <div key={item.label} className="col-span">
                <CategoryInput
                  onClick={(category) => setCustomValue("category", category)}
                  selected={category === item.label}
                  label={item.label}
                  icon={item.icon}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="w-full flex-col flex-wrap gap-4">
        <div className="font-bold">
          <div>Wybierz zdjęca</div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {colors.map((item, index) => {
            return (
              <SelectColor
                key={index}
                item={item}
                addImageToState={addImageToState}
                removeImageFromState={removeImageFromState}
                isProductCreated={isProductCreated}
              />
            );
          })}
        </div>
      </div>
      <Button
        label={isLoading ? "Ładuję się..." : "Dodaj Produkt"}
        onClick={handleSubmit(onSubmit)}
      />
    </>
  );
};

export default AddProductForm;
