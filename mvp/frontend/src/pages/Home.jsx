import Features from "../components/home/Features.jsx"
import GetStarted from "../components/home/GetStarted.jsx"
import Pricing from "../components/home/Pricing.jsx"
import Footer from "../components/Footer.jsx"

 function Home() {
    return(
        <div className="overflow-x-auto bg-slate-900">
            <GetStarted/>
              <Features/>
              <Pricing/>
            <Footer/> 
        </div>
    )
}

export default Home