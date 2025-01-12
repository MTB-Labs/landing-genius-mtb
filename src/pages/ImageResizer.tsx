import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

const ImageResizer = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const [width, setWidth] = useState<number>(800);
  const [height, setHeight] = useState<number>(600);
  const [maintainAspectRatio, setMaintainAspectRatio] = useState(true);
  const [originalAspectRatio, setOriginalAspectRatio] = useState(1.33);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
        const img = new Image();
        img.onload = () => {
          const ratio = img.width / img.height;
          setOriginalAspectRatio(ratio);
          setWidth(img.width);
          setHeight(img.height);
        };
        img.src = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  };

  const handleWidthChange = (value: number) => {
    setWidth(value);
    if (maintainAspectRatio) {
      setHeight(Math.round(value / originalAspectRatio));
    }
  };

  const handleHeightChange = (value: number) => {
    setHeight(value);
    if (maintainAspectRatio) {
      setWidth(Math.round(value * originalAspectRatio));
    }
  };

  const handleDownload = () => {
    if (!selectedImage || !previewUrl) return;

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();

    img.onload = () => {
      canvas.width = width;
      canvas.height = height;
      ctx?.drawImage(img, 0, 0, width, height);
      
      const link = document.createElement("a");
      link.download = `resized-${selectedImage.name}`;
      link.href = canvas.toDataURL(selectedImage.type);
      link.click();
    };

    img.src = previewUrl;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-secondary"
    >
      <Navigation />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Image Resizer</h1>
        
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <div className="space-y-6">
            <div>
              <Label htmlFor="image-upload">Select Image</Label>
              <Input
                ref={fileInputRef}
                id="image-upload"
                type="file"
                accept="image/*"
                onChange={handleImageSelect}
                className="mt-2"
              />
            </div>

            {previewUrl && (
              <div className="space-y-6">
                <div className="aspect-video relative rounded-lg overflow-hidden border">
                  <img
                    src={previewUrl}
                    alt="Preview"
                    className="object-contain w-full h-full"
                  />
                </div>

                <div className="space-y-4">
                  <div>
                    <Label>Width (px)</Label>
                    <Slider
                      value={[width]}
                      onValueChange={(value) => handleWidthChange(value[0])}
                      min={50}
                      max={2000}
                      step={1}
                      className="mt-2"
                    />
                    <Input
                      type="number"
                      value={width}
                      onChange={(e) => handleWidthChange(Number(e.target.value))}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label>Height (px)</Label>
                    <Slider
                      value={[height]}
                      onValueChange={(value) => handleHeightChange(value[0])}
                      min={50}
                      max={2000}
                      step={1}
                      className="mt-2"
                    />
                    <Input
                      type="number"
                      value={height}
                      onChange={(e) => handleHeightChange(Number(e.target.value))}
                      className="mt-2"
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="aspect-ratio"
                      checked={maintainAspectRatio}
                      onChange={(e) => setMaintainAspectRatio(e.target.checked)}
                      className="rounded border-gray-300"
                    />
                    <Label htmlFor="aspect-ratio">Maintain aspect ratio</Label>
                  </div>

                  <Button onClick={handleDownload} className="w-full">
                    Download Resized Image
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default ImageResizer;