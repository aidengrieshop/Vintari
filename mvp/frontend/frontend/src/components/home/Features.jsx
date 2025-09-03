import { Cog, BarChart3, Sprout, Shield, ShieldIcon } from 'lucide-react'

function Features() {
          return(
  <div className='relative flex flex-col md:flex-row mt-40 ml-60 justify-center items-center gap-16 px-12'>

    {/* Left Hero */}
  <div className="text-white max-w-lg">

    {/* Heading */}
    <div className='mb-12'>
        <h2 className="text-4xl font-bold mb-4 ">Level up your sales</h2>
        <h3 className='text-2xl text-white/80'>Move your inventory to the cloud</h3>
          <p className="mt-4 text-slate-400/80">
            Automate workflows, track trends, and scale with confidence using our AI-powered tools.
          </p>
    </div>

    {/* Features */}
    
        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <Cog className='w-6 h-6 text-emerald-400/80 mt-1.5'/>
            <div>
              <h4 className='font-semibold'>Smart Automation</h4>
              <p className='text-slate-400/80'>Save hours with AI-driven processes</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <BarChart3 className='w-6 h-6 text-emerald-400/80 mt-1.5'/>
            <div>
              <h4 className='font-semibold'>Real-Time Analytics</h4>
              <p className='text-slate-400/80'>See trends before they happen</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Sprout className='w-6 h-6 text-emerald-400/80 mt-1.5'/>
            <div>
              <h4 className='font-semibold'>Scalable Solutions</h4>
              <p className='text-slate-400/80'>Grow without limits</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Shield className='w-6 h-6 text-emerald-400/80 mt-1.5'/>
            <div>
              <h4 className='font-semibold'>Secure & Reliable</h4>
              <p className='text-slate-400/80'>Your data, protected</p>
            </div>
          </div>
        </div>
      </div>
    {/* Right dashboard example */}
    <div className='h-150 border border-slate-500/80 w-full rounded-l-2xl right-0'></div>
    </div>
    )
}

export default Features