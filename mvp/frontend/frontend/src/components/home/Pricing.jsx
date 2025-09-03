import { Check } from 'lucide-react'


function Pricing() {

    return(
      <div className="justify-items-center mt-30">
        <div className="text-center center">
        <h2 className="font-bold text-4xl text-white mb-4">Pricing Plans That Scale With You</h2>
        <p className="text-xl text-slate-400/80 w-250 mb-30">Choose a plan designed to grow with your business. Whether you’re just starting out or running a fast-growing team, we’ve got the tools to help you streamline, analyze, and expand — without limits.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 gap-x-20">
          <div className="flex flex-col bg-slate-800/70 border-2 border-slate-500/80 rounded-2xl w-100 h-125 p-8 shadow-xl">
            <h3 className="font-bold text-white text-xl mb-4">Starter</h3>
            <h2 className="font-black text-emerald-400 text-5xl mb-2">Free
              <span className="font-normal text-white/20 text-xl"> /forever</span>
            </h2>
            <p className='text-slate-400/80 mb-6'>Kickstart your journey with essential tools</p>
            <ul>
              <li className='text-white'><Check className='inline h-6 w-6 text-emerald-400 -translate-y-1/12 mr-2'/>Core features</li>
              <li className='text-white'><Check className='inline h-6 w-6 text-emerald-400 -translate-y-1/12 mr-2'/>Email support</li>
              <li className='text-white'><Check className='inline h-6 w-6 text-emerald-400 -translate-y-1/12 mr-2'/>Limit of 5 items</li>
            </ul>
            <button className="w-full h-10 bg-slate-400/80 text-white rounded-xl p-1 mt-auto">Select</button>
          </div>

          <div className="flex flex-col bg-slate-800/70 border-2 border-slate-500/80 rounded-2xl w-100 h-125 p-8 shadow-xl">
            <h3 className="font-bold text-white text-xl mb-4">Pro</h3>
            <h4 className="font-black text-emerald-400 text-5xl mb-2">$39
              <span className="font-normal text-white/20 text-xl">/mo</span>
            </h4>
            <p className='text-slate-400/80 mb-6'>Unlock advanced tools to scale faster</p>
            <ul>
              <li className='text-white'><Check className='inline h-6 w-6 text-emerald-400 -translate-y-1/12 mr-2'/>Everything in starter</li>
              <li className='text-white'><Check className='inline h-6 w-6 text-emerald-400 -translate-y-1/12 mr-2'/>Powerful analytics & insights</li>
              <li className='text-white'><Check className='inline h-6 w-6 text-emerald-400 -translate-y-1/12 mr-2'/>Basic AI tools</li>
              <li className='text-white'><Check className='inline h-6 w-6 text-emerald-400 -translate-y-1/12 mr-2'/>Priority support</li>
            </ul>
            <button className="w-full h-10 bg-slate-400/80 text-white rounded-xl p-1 mt-auto">Select</button>
          </div>

          <div className="p-0.5 rounded-2xl bg-gradient-to-br from-emerald-400 to-blue-500 drop-shadow-xl">
          <div className="flex flex-col bg-slate-800/80 rounded-2xl w-100 h-125 p-8">
            <h3 className="font-bold text-white text-xl mb-4">Enterprise</h3>
            <h4 className="font-black text-emerald-400 text-5xl mb-2">$49
              <span className="font-normal text-white/20 text-xl">/mo</span>
            </h4>
            <p className='text-slate-400/80 mb-6'>Tailored for growing teams</p>
            <ul>
              <li className='text-white'><Check className='inline h-6 w-6 text-emerald-400 -translate-y-1/12 mr-2'/>Everything in Pro</li>
              <li className='text-white'><Check className='inline h-6 w-6 text-emerald-400 -translate-y-1/12 mr-2'/>Custom integrations</li>
              <li className='text-white'><Check className='inline h-6 w-6 text-emerald-400 -translate-y-1/12 mr-2'/>Advanced AI tools</li>
              <li className='text-white'><Check className='inline h-6 w-6 text-emerald-400 -translate-y-1/12 mr-2'/>Dedicated account support</li>
            </ul>

            <button className="w-full h-10 bg-slate-400/80 text-white rounded-xl p-1 mt-auto">Select</button>
          </div>
          </div>
        </div>
      </div>
    )
}

export default Pricing