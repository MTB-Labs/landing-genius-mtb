import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const RoiCalculator = () => {
  const [investment, setInvestment] = useState("");
  const [revenue, setRevenue] = useState("");
  const [roi, setRoi] = useState<number | null>(null);
  const { toast } = useToast();

  const calculateROI = () => {
    const investmentNum = parseFloat(investment);
    const revenueNum = parseFloat(revenue);

    if (isNaN(investmentNum) || isNaN(revenueNum)) {
      toast({
        title: "Invalid Input",
        description: "Please enter valid numbers for investment and revenue.",
        variant: "destructive",
      });
      return;
    }

    const roiValue = ((revenueNum - investmentNum) / investmentNum) * 100;
    setRoi(roiValue);

    toast({
      title: "ROI Calculated",
      description: `Your ROI is ${roiValue.toFixed(2)}%`,
    });
  };

  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold text-center mb-8">ROI Calculator</h1>
      <Card className="max-w-md mx-auto p-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              Initial Investment ($)
            </label>
            <Input
              type="number"
              value={investment}
              onChange={(e) => setInvestment(e.target.value)}
              placeholder="Enter investment amount"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">
              Revenue Generated ($)
            </label>
            <Input
              type="number"
              value={revenue}
              onChange={(e) => setRevenue(e.target.value)}
              placeholder="Enter revenue amount"
            />
          </div>
          <Button onClick={calculateROI} className="w-full">
            Calculate ROI
          </Button>
          {roi !== null && (
            <div className="mt-4 p-4 bg-muted rounded-lg">
              <p className="text-center font-medium">
                Your ROI: {roi.toFixed(2)}%
              </p>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default RoiCalculator;