import Price from "../Price/Price";

const PriceOption = () => {
  const membershipOptions = [
    {
      id: 1,
      name: "Bronze Membership",
      features: [
        "Access to cardio equipment",
        "Access to weightlifting area",
        "Locker room access",
        "Group fitness classes",
        "One free personal training session per month",
      ],
      price: 29.99,
    },
    {
      id: 2,
      name: "Silver Membership",
      features: [
        "All Bronze Membership features",
        "Access to swimming pool",
        "Sauna and steam room access",
        "Unlimited group fitness classes",
        "Two free personal training sessions per month",
      ],
      price: 49.99,
    },
    {
      id: 3,
      name: "Gold Membership",
      features: [
        "All Silver Membership features",
        "Access to tennis courts",
        "Yoga and Pilates classes",
        "Unlimited personal training sessions",
        "Nutrition consultation",
      ],
      price: 79.99,
    },
    // {
    //   id: 4,
    //   name: "Student Membership",
    //   features: [
    //     "Access to cardio equipment",
    //     "Access to weightlifting area",
    //     "Locker room access",
    //     "Group fitness classes",
    //     "Valid student ID required",
    //   ],
    //   price: 19.99,
    // },
  ];
  return (
    <div className="m-12">
      <h2 className="text-5xl text-center font-bold">Price Data Package</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {
           membershipOptions.map((singledata) => (
          <Price option={singledata} key={singledata.id}></Price>
        ))}
      </div>
    </div>
  );
};

export default PriceOption;
