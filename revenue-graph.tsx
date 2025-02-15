import type React from "react"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { month: "Jan", revenue: 10000 },
  { month: "Feb", revenue: 20000 },
  { month: "Mar", revenue: 30000 },
  { month: "Apr", revenue: 40000 },
  { month: "May", revenue: 50000 },
  { month: "Jun", revenue: 60000 },
  { month: "Jul", revenue: 70000 },
  { month: "Aug", revenue: 80000 },
  { month: "Sep", revenue: 90000 },
  { month: "Oct", revenue: 100000 },
]

export const RevenueGraph: React.FC = () => {
  return (
    <div className="w-full h-80 bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-2xl">
      <h3 className="text-2xl font-bold text-white mb-4">10x Revenue Growth</h3>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#A855F7" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#A855F7" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
          <XAxis dataKey="month" stroke="#ffffff80" />
          <YAxis stroke="#ffffff80" />
          <Tooltip
            contentStyle={{ backgroundColor: "#1F1432", border: "none", borderRadius: "8px" }}
            labelStyle={{ color: "#A855F7" }}
          />
          <Area type="monotone" dataKey="revenue" stroke="#A855F7" fillOpacity={1} fill="url(#colorRevenue)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

