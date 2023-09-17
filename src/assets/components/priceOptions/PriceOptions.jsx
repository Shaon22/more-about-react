import PriceOption from "../priceoption/PriceOption";


const PriceOptions = () => {
    
        
      const gym= [
          {
            "id": 1,
            "membership_class": "Basic",
            "price": 30,
            "features": [
              "Access to cardio equipment",
              "Access to strength training equipment",
              "Locker room access"
            ]
          },
          {
            "id": 2,
            "membership_class": "Premium",
            "price": 50,
            "features": [
              "Access to all gym facilities",
              "Unlimited group fitness classes",
              "Personalized fitness assessment",
              "Sauna and steam room access"
            ]
          },
          {
            "id": 3,
            "membership_class": "Student",
            "price": 25,
            "features": [
              "Access to cardio equipment",
              "Access to strength training equipment",
              "Locker room access",
              "Valid student ID required"
            ]
          }
        ]
    
      
    return (
        <div>
            <h1 className="text-5xl font-bold py-5 text-center">Best price in the town</h1>
            <div className="grid grid-cols-3 gap-5 p-6">
            {
                gym.map(option=><PriceOption
                key={option.id} option={option}></PriceOption>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;