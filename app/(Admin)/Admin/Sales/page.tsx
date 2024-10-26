'use client'

import { Line } from 'react-chartjs-2'
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)

export default function Sales() {
  return (
    <div className='flex flex-col w-full justify-center items-center -mb-16'>
      <span className='text-2xl font-semibold mb-10'>THỐNG KÊ DOANH SỐ BÁN HÀNG</span>
      <div className='grid grid-cols-2 grid-rows-2 gap-x-52 gap-y-20'>
        <div className='text-center border-2 border-black rounded-lg w-[35rem] h-80 p-2'>
          <span className='font-semibold text-lg'>DOANH SỐ THÁNG NÀY</span>
          <div className='w-full h-0.5 bg-black' />
          <Line
            data={{
              labels: ["Tuần 1", "Tuần 2", "Tuần 3", "Tuần 4"],
              datasets: [
                {
                  label: "Tổng thu",
                  data: [3915, 1292, 3982, 3401],
                  fill: false,
                  borderWidth: 2,
                  borderColor: 'green'
                },
                {
                  label: "Tổng chi",
                  data: [1232, 4516, 3232, 2620],
                  fill: false,
                  borderWidth: 2,
                  borderColor: 'red'
                }
              ]
            }}
          />
        </div>
        <div className='text-center border-2 border-black rounded-lg w-[35rem] h-80 p-2'>
          <span className='font-semibold text-lg'>DOANH SỐ QUÝ NÀY</span>
          <div className='w-full h-0.5 bg-black' />
          <Line
            data={{
              labels: ["Tháng 1", "Tháng 2", "Tháng 3"],
              datasets: [
                {
                  label: "Tổng thu",
                  data: [17440, 18329, 15115],
                  fill: false,
                  borderWidth: 2,
                  borderColor: 'green'
                },
                {
                  label: "Tổng chi",
                  data: [15187, 14099, 13727],
                  fill: false,
                  borderWidth: 2,
                  borderColor: 'red'
                }
              ]
            }}
          />
        </div>
        <div className='text-center border-2 border-black rounded-lg w-[35rem] h-80 p-2'>
          <span className='font-semibold text-lg'>DOANH SỐ THÁNG TRƯỚC</span>
          <div className='w-full h-0.5 bg-black' />
          <Line
            data={{
              labels: ["Tuần 1", "Tuần 2", "Tuần 3", "Tuần 4"],
              datasets: [
                {
                  label: "Tổng thu",
                  data: [4953, 2393, 3310, 4423],
                  fill: false,
                  borderWidth: 2,
                  borderColor: 'green'
                },
                {
                  label: "Tổng chi",
                  data: [2928, 1595, 4357, 2217],
                  fill: false,
                  borderWidth: 2,
                  borderColor: 'red'
                }
              ]
            }}
          />
        </div>
        <div className='text-center border-2 border-black rounded-lg w-[35rem] h-80 p-2'>
          <span className='font-semibold text-lg'>DOANH SỐ QUÝ TRƯỚC</span>
          <div className='w-full h-0.5 bg-black' />
          <Line
            data={{
              labels: ["Tháng 10", "Tháng 11", "Tháng 12"],
              datasets: [
                {
                  label: "Tổng thu",
                  data: [15841, 16266, 17871],
                  fill: false,
                  borderWidth: 2,
                  borderColor: 'green'
                },
                {
                  label: "Tổng chi",
                  data: [15453, 18146, 14319],
                  fill: false,
                  borderWidth: 2,
                  borderColor: 'red'
                }
              ]
            }}
          />
        </div>
      </div>
    </div>
  )
} 