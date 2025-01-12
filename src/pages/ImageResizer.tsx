import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const ImageResizer = () => {
  const [file, setFile] = useState<File | null>(null);
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const { toast } = useToast();

  const handleResize = () => {
    if (!file) {
      toast({
        title: "No Image Selected",
        description: "Please select an image to resize.",
        variant: "destructive",
      });
      return;
    }

    // For now, just show a toast since actual image resizing would require additional setup
    toast({
      title: "Image Resize Requested",
      description: `Resizing image to ${width}x${height}`,
    });
  };

  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold text-center mb-8">Image Resizer</h1>
      <Card className="max-w-md mx-auto p-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Select Image</label>
            <Input
              type="file"
              accept="image/*"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Width (px)</label>
              <Input
                type="number"
                value={width}
                onChange={(e) => setWidth(e.target.value)}
                placeholder="Width"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Height (px)</label>
              <Input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="Height"
              />
            </div>
          </div>
          <Button onClick={handleResize} className="w-full">
            Resize Image
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default ImageResizer;