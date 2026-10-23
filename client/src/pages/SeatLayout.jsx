import { ArrowRightIcon } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import BlurCircle from '../components/BlurCircle'

const SeatLayout = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">

      {/* Background Blur */}
      <BlurCircle top="-120px" left="-120px" />
      <BlurCircle bottom="-120px" right="-120px" />

      <div className="relative text-center bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl px-12 py-14 shadow-2xl max-w-lg w-full">

        <h1 className="text-4xl font-bold mb-4">
          Ready to Book? 🎬
        </h1>

        <p className="text-gray-400 mb-10">
          You're just one step away from confirming your movie tickets.
          Proceed to checkout and enjoy your show!
        </p>

        <button
          onClick={() => navigate("/my-bookings")}
          className="flex items-center gap-1 mt-20 px-10 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer active:scale-95 mx-auto"
        >
          Proceed to CheckOut
          <ArrowRightIcon strokeWidth={3} className="w-4 h-4" />
        </button>

      </div>
    </div>
  )
}

export default SeatLayout