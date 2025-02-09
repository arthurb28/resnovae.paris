import { notFound } from "next/navigation"
import BeforeAfterImages from "@/app/components/before-after-images"

const apartments = [
  {
    id: 1,
    name: "Rue de la Muette",
    description:
      "Un charmant 4 pièces avec vue sur le parc, entièrement rénové pour offrir un espace de vie moderne et confortable.",
    beforeImages: [
      "https://i.imgur.com/J6TEQfQ.jpeg",
      "https://i.imgur.com/mE43JgU.jpeg",
      "https://i.imgur.com/ckFIUDk.jpeg",
      "https://i.imgur.com/6mYTKwP.jpeg",
      "https://i.imgur.com/SpdHz0f.jpeg",
      "https://i.imgur.com/l3eYwN5.jpeg",
      "https://i.imgur.com/KIhhKIG.jpeg",
      "https://i.imgur.com/bZqs4DA.jpeg",
      "https://i.imgur.com/F0xx3wE.jpeg",
      "https://i.imgur.com/JLpH0QV.jpeg",
      "https://i.imgur.com/fgl10uU.jpeg",
      "https://i.imgur.com/78c1lMe.jpeg",
      "https://i.imgur.com/GwUSqZn.jpeg",
      "https://i.imgur.com/vE8fGjv.jpeg",
    ],
    duringImages: [],
    afterImages: [
      "https://i.imgur.com/beCktgm.jpeg",
      "https://i.imgur.com/wLXZPsw.jpeg",
      "https://i.imgur.com/GiHDibM.jpeg",
      "https://i.imgur.com/mOlvlwb.jpeg",
      "https://i.imgur.com/01YEVPY.jpeg",
      "https://i.imgur.com/rkawSpJ.jpeg",
      "https://i.imgur.com/skroFY2.jpeg",
      "https://i.imgur.com/e6VCF5o.jpeg",
      "https://i.imgur.com/klz5ubD.jpeg",
      "https://i.imgur.com/siiUIpL.jpeg",
    ],
  },
  {
    id: 2,
    name: "Rue d'Achères",
    description:
      "Un spacieux trois-pièces transformé en un havre de paix lumineux et aéré.",
    beforeImages: [
      "https://i.imgur.com/ySfkK0K.jpeg",
      "https://i.imgur.com/R7UbGUk.jpeg",
      "https://i.imgur.com/yuB8pcY.jpeg",
      "https://i.imgur.com/I9jvbUX.jpeg",
      "https://i.imgur.com/LiR65KJ.jpeg",
      "https://i.imgur.com/K6Ahud8.jpeg",
      "https://i.imgur.com/tYTNyrw.jpeg",
      "https://i.imgur.com/c5W3y5h.jpeg",
      "https://i.imgur.com/LvnNXWu.jpeg",
      "https://i.imgur.com/X8XZrar.jpeg",
      "https://i.imgur.com/iFD8mU5.jpeg",
      "https://i.imgur.com/QSonzVk.jpeg",
      "https://i.imgur.com/Drr88yI.jpeg",
      "https://i.imgur.com/S1aRA5N.jpeg",
      "https://i.imgur.com/6SJ9Mgs.jpeg",
      "https://i.imgur.com/IWYzu8k.jpeg",
      "https://i.imgur.com/KUm8mXQ.jpeg",
      "https://i.imgur.com/vJk7FUF.jpeg",
      "https://i.imgur.com/Y8hmitH.jpeg",
    ],
    duringImages: [],
    afterImages: [
      "https://i.imgur.com/J67snc0.jpeg",
      "https://i.imgur.com/xVE90F3.jpeg",
      "https://i.imgur.com/ZyjxoqJ.jpeg",
      "https://i.imgur.com/m5x3Spm.jpeg",
      "https://i.imgur.com/nikMHxf.jpeg",
      "https://i.imgur.com/v9m1bFH.jpeg",
      "https://i.imgur.com/tUMQVDk.jpeg",
      "https://i.imgur.com/mMVXo2b.jpeg",
      "https://i.imgur.com/q3kfLN7.jpeg",
      "https://i.imgur.com/U61k0Yf.jpeg",
      "https://i.imgur.com/vUhQNWx.jpeg",
      "https://i.imgur.com/yV2jM79.jpeg",
      "https://i.imgur.com/EA1zdba.jpeg",
      "https://i.imgur.com/pUgnyWW.jpeg",
      "https://i.imgur.com/T6ZiWWT.jpeg",
      "https://i.imgur.com/a4qWdYr.jpeg",
      "https://i.imgur.com/lKAMePD.jpeg",
      "https://i.imgur.com/TonbyaW.jpeg",
      "https://i.imgur.com/tBefzNZ.jpeg",
    ],
  },
  {
    id: 3,
    name: "Avenue Faidherbe",
    description:
      "",
    beforeImages: [],
    duringImages: [],
    afterImages: [],
  },
]

export default function ApartmentPage({ params }: { params: { id: string } }) {
  const apartment = apartments.find((apt) => apt.id === Number.parseInt(params.id))

  if (!apartment) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold mb-6 text-black">{apartment.name}</h1>
        <p className="mb-8 text-lg text-black">{apartment.description}</p>
        <BeforeAfterImages
          beforeImages={apartment.beforeImages}
          duringImages={apartment.duringImages}
          afterImages={apartment.afterImages}
        />
      </div>
    </div>
  )
}

