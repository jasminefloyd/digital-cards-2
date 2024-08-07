import Footer from './components/Footer'
import BizCard from './components/BizCard'
import { supabase } from './config/supabase'

export default function App() {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await supabase.from('cardData').select('*')

      setCardData(data || [])
    };

    fetchData(); 
  }, []); 

//   const bizcards = data.map(item => {
//     return (
//       <BizCard
//           key={item.id}
//           item={item}
//       />
//     )
// })        
    

  return (
      <div className='container'>
        { 
        cardData.map(item => (
            <BizCard key={item.id || item.locationName} item={item} /> 
          ))
        }
          {/* {bizcards} */}
          <Footer />
      </div>
  )
}


/*

export default function App() {

  return (
    <>
      <div className='container'>
          <Info />
          <About />
          <Interest />
          <QRcode />
          <Footer />
      </div>    
    </>
  )
}



*/