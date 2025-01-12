import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const ColorPalette = () => {
  const [baseColor, setBaseColor] = useState("#000000");
  const [palette, setPalette] = useState<string[]>([]);
  const { toast } = useToast();

  const generatePalette = () => {
    // Simple palette generation logic
    const shades = [
      baseColor,
      adjustBrightness(baseColor, 20),
      adjustBrightness(baseColor, 40),
      adjustBrightness(baseColor, 60),
      adjustBrightness(baseColor, 80),
    ];
    setPalette(shades);
    
    toast({
      title: "Palette Generated",
      description: "Your color palette has been generated.",
    });
  };

  const adjustBrightness = (hex: string, percent: number) => {
    const num = parseInt(hex.replace("#", ""), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) + amt;
    const G = (num >> 8 & 0x00FF) + amt;
    const B = (num & 0x0000FF) + amt;
    return "#" + (
      0x1000000 +
      (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
      (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
      (B < 255 ? (B < 1 ? 0 : B) : 255)
    ).toString(16).slice(1);
  };

  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold text-center mb-8">Color Palette Generator</h1>
      <Card className="max-w-md mx-auto p-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Base Color</label>
            <Input
              type="color"
              value={baseColor}
              onChange={(e) => setBaseColor(e.target.value)}
              className="h-12"
            />
          </div>
          <Button onClick={generatePalette} className="w-full">
            Generate Palette
          </Button>
          {palette.length > 0 && (
            <div className="grid grid-cols-5 gap-2 mt-4">
              {palette.map((color, index) => (
                <div
                  key={index}
                  className="aspect-square rounded-lg"
                  style={{ backgroundColor: color }}
                  onClick={() => {
                    navigator.clipboard.writeText(color);
                    toast({
                      title: "Color Copied",
                      description: `${color} copied to clipboard`,
                    });
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default ColorPalette;