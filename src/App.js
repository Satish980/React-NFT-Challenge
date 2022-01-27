
import './App.css';
import Header from './components/Header'
import {useState, useEffect} from 'react'
import axios from 'axios';
import PunkList from './components/PunkList';
import Main from './components/Main';

function App() {
  const [punkListData, setPunkListData] = useState([])
  const [selectedPunk, setSelectedPunk] = useState(0)
  useEffect(() => {
    const getMyNfts = async () => {
       const openseaData = await axios.get(
         'https://testnets-api.opensea.io/assets?order_direction=asc&asset_contract_address=0x855Ee71F38512dc100E00DAa3026f1e5B23197d1',
         
       )

       console.log(openseaData.data.assets);
       setPunkListData(openseaData.data.assets)
    }

    return getMyNfts()
  }, [])


  return (
    <div className='app'>
    <Header/>
    {
      punkListData.length > 0 && (
        <>
          <Main punkListData={punkListData} selectedPunk={selectedPunk}/>
          <PunkList 
           punkListData={punkListData} 
           setSelectedPunk={setSelectedPunk}
          />
        </>
      )
    }
  </div>
  )
}

export default App;
