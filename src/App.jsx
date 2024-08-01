import Header from "./Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./Card";
function App() {
  const cards = [
    {
      plan: "Free",
      price: 0,
      features: [
        {
          name: "Single User",
          enable : true
        },
        {
          name: "50GB Storage",
          enable : true
        },
        {
          name: "Unlimited Public Projects",
          enable : true
        },
        {
          name: "Community Access",
          enable : true
        },
        {
          name: "Unlimited Private Projects",
          enable : false
        },
        {
          name: "Dedicated Phone Support",
          enable : false
        },
        {
          name: "Free Subdomain",
          enable : false
        },
        {
          name: "Monthly Status Reports",
          enable : false
        },
      ],
    },
    {
      plan: "Plus",
      price: 9,
      features: [
        {
          name: "5 Users",
          enable : true
        },
        {
          name: "50GB Storage",
          enable : true
        },
        {
          name: "Unlimited Public Projects",
          enable : true
        },
        {
          name: "Community Access",
          enable : true
        },
        {
          name: "Unlimited Private Projects",
          enable : true
        },
        {
          name: "Dedicated Phone Support",
          enable : true
        },
        {
          name: "Free Subdomain",
          enable : true
        },
        {
          name: "Monthly Status Reports",
          enable : false
        },
      ],
    },
    {
      plan: "Pro",
      price: 49,
      features: [
        {
          name: "Unlimited Users",
          enable : true
        },
        {
          name: "50GB Storage",
          enable : true
        },
        {
          name: "Unlimited Public Projects",
          enable : true
        },
        {
          name: "Community Access",
          enable : true
        },
        {
          name: "Unlimited Private Projects",
          enable : true
        },
        {
          name: "Dedicated Phone Support",
          enable : true
        },
        {
          name: "Free Subdomain",
          enable : true
        },
        {
          name: "Monthly Status Reports",
          enable : true
        },
      ],
    },
  ];
  return (
    <div className="container">
      <Header />
      <div className="container  mt-5 bg-primary bg-gradient" >
        <main>
          <div className="row row-cols-1 row-cols-md-3 mb-3">
          {cards.map((card, index) => {
            return <Card key={index} card={card}/>;/*on eeach iteration key get the index value for differentiate the card*/ 
          })}
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
