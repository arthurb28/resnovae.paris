import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ImageGallery from "./image-gallery"

interface BeforeAfterImagesProps {
  beforeImages: string[]
  duringImages: string[]
  afterImages: string[]
}

export default function BeforeAfterImages({ beforeImages, duringImages, afterImages }: BeforeAfterImagesProps) {
  return (
    <Tabs defaultValue="before" className="w-full">
      <TabsList className="grid w-full grid-cols-3 mb-8">
        <TabsTrigger value="before" className="data-[state=active]:bg-gray-200 data-[state=active]:text-black">
          Avant
        </TabsTrigger>
        <TabsTrigger value="during" className="data-[state=active]:bg-gray-200 data-[state=active]:text-black">
          Pendant
        </TabsTrigger>
        <TabsTrigger value="after" className="data-[state=active]:bg-gray-200 data-[state=active]:text-black">
          Après
        </TabsTrigger>
      </TabsList>
      <TabsContent value="before">
        {beforeImages.length > 0 ? <ImageGallery images={beforeImages} /> : <p>Ça arrive...</p>}
      </TabsContent>
      <TabsContent value="during">
        {duringImages.length > 0 ? <ImageGallery images={duringImages} /> : <p>Ça arrive...</p>}
      </TabsContent>
      <TabsContent value="after">
        {afterImages.length > 0 ? <ImageGallery images={afterImages} /> : <p>Ça arrive...</p>}
      </TabsContent>
    </Tabs>
  )
}

