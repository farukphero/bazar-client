type questions = Array<{
  id: number;
  question: string;
  answer: string;
}>;

export const faqs: questions = [
  {
    id: 1,
    question: "How much do deliveries cost?",
    answer: `The delivery fee across the country 
    is in the table below:
    +------------+---------+---------+ 
    |            |  Orders |  Orders | 
    |            |  below  |  above  | 
    |            |   400   |   400   | 
    +------------+---------+---------+ 
    | Dhaka      | 49      | 39      | 
    +------------+---------+---------+ 
    | Chattagram | 29      | 19      | 
    +------------+---------+---------+ 
    | Jashore    | 29      | 19      | 
    +------------+---------+---------+`,
  },
  {
    id: 2,
    question: "What are your delivery hours",
    answer:
      "We deliver from 7.30 am to 11 pm every day. You can choose from available slots to find something that is convenient for you.",
  },
  {
    id: 3,
    question: "What is your policiy on refunds?",
    answer: `We offer a refund or return policy of seven (7) days on most unopened or unspoilt packaged products.
    1. For perishable products such as milk, fruits, and fresh vegetables, we have a 1 (one) day return policy.
    2. Diaper items must be returned for refunds before 10% or 3 pieces (whichever comes first) have been used.
    3. Certain products; Face Mask, Disposable Vinyl Gloves, Alcohol Pads, and Covid Testing Kits are not acceptable for refund or return either opened or unopened.`,
  },
  {
    id: 4,
    question: "What about the prices?",
    answer:
      "Our prices are our own but we try our best to offer them to you at or below market prices. Our prices are the same as the local market and we are working hard to get them even lower! If you feel that any product is priced unfairly, please let us know.",
  },
  {
    id: 5,
    question: "Do you serve in my area?",
    answer:
      "We are currently serving in three big cities of Bangladesh including Dhaka, Chattogram, Jashore.",
  },
];
