import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen bg-pink-100">
      <div className="p-4 bg-gray-100 rounded-lg shadow-xl lg:w-1/2">
        <div className="m-4">
          <label className="flex justify-center my-3 text-gray-500">Upload any
            Image</label>
          <div className="flex items-center justify-center w-full">
            <label className="flex flex-col items-center justify-center w-full border-4 border-dashed items just h-52 hover:bg-gray-100 hover:border-gray-300">
              <div className="flex flex-col items-center cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg"
                  className="w-12 h-12 text-gray-400 group-hover:text-gray-600" viewBox="0 0 20 20"
                  fill="currentColor">
                  <path fill-rule="evenodd"
                    d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                    clip-rule="evenodd" />
                </svg>
                <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                  Select a photo</p>
              </div>
              <input type="file" className="opacity-0" />
            </label>
          </div>
        </div>
        <div className="flex justify-center my-3 space-x-5">
          <button className="px-4 py-2 text-white bg-red-500 rounded shadow-xl">Reset</button>
          <button className="px-4 py-2 text-white bg-green-500 rounded shadow-xl">Caption</button>
        </div>
      </div>
    </div>
  )
}
