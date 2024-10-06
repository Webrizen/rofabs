"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Bar,
  BarChart,
  Line,
  LineChart,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  AreaChart,
  Area,
} from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { ArrowDownIcon, ArrowUpIcon, Building2, DollarSign, Home, Hotel, MessageSquare, TrendingUp, Users, Calendar, FileText } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function MainDashboard() {
  // Sample data for charts and cards
  const propertyTypes = [
    { name: "Hotels", value: 35 },
    { name: "Apartments", value: 45 },
    { name: "Houses", value: 20 },
  ]

  const overviewData = [
    { name: "Jan", visited: 4000, booked: 2400 },
    { name: "Feb", visited: 3000, booked: 1398 },
    { name: "Mar", visited: 2000, booked: 9800 },
    { name: "Apr", visited: 2780, booked: 3908 },
    { name: "May", visited: 1890, booked: 4800 },
    { name: "Jun", visited: 2390, booked: 3800 },
  ]

  const salesData = [
    { name: "Jan", sales: 4000 },
    { name: "Feb", sales: 3000 },
    { name: "Mar", sales: 5000 },
    { name: "Apr", sales: 4500 },
    { name: "May", sales: 6000 },
    { name: "Jun", sales: 5500 },
  ]

  const occupancyRateData = [
    { name: "Jan", rate: 75 },
    { name: "Feb", rate: 68 },
    { name: "Mar", rate: 80 },
    { name: "Apr", rate: 85 },
    { name: "May", rate: 90 },
    { name: "Jun", rate: 88 },
  ]

  const revenueByPropertyTypeData = [
    { name: "Hotels", revenue: 250000 },
    { name: "Apartments", revenue: 180000 },
    { name: "Houses", revenue: 120000 },
  ]

  const customerSatisfactionData = [
    { name: "5 Stars", value: 45 },
    { name: "4 Stars", value: 30 },
    { name: "3 Stars", value: 15 },
    { name: "2 Stars", value: 7 },
    { name: "1 Star", value: 3 },
  ]

  const maintenanceRequestsData = [
    { month: "Jan", requests: 50 },
    { month: "Feb", requests: 40 },
    { month: "Mar", requests: 60 },
    { month: "Apr", requests: 45 },
    { month: "May", requests: 55 },
    { month: "Jun", requests: 48 },
  ]

  const topPerformingProperties = [
    { id: 1, name: "Luxury Suite 501", revenue: 50000, occupancy: 95 },
    { id: 2, name: "Beachfront Villa", revenue: 45000, occupancy: 92 },
    { id: 3, name: "City Center Apartment", revenue: 40000, occupancy: 88 },
    { id: 4, name: "Mountain Retreat Cabin", revenue: 35000, occupancy: 85 },
    { id: 5, name: "Historic Downtown Loft", revenue: 30000, occupancy: 82 },
  ]

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"]

  return (
    <div className="flex-col md:flex">
      <div className="flex-1 space-y-4 p-4 md:p-2">
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-blue-600">Total Properties</CardTitle>
                  <Building2 className="h-4 w-4 text-blue-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1,234</div>
                  <p className="text-xs text-muted-foreground">+20% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-green-600">Revenue</CardTitle>
                  <DollarSign className="h-4 w-4 text-green-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$567,890</div>
                  <p className="text-xs text-muted-foreground">+15% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-purple-600">Properties Sold</CardTitle>
                  <Home className="h-4 w-4 text-purple-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">89</div>
                  <p className="text-xs text-muted-foreground">+5% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-orange-600">Reservations</CardTitle>
                  <Hotel className="h-4 w-4 text-orange-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">456</div>
                  <p className="text-xs text-muted-foreground">+10% from last month</p>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-indigo-600">Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={overviewData}>
                        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                        <YAxis
                          stroke="#888888"
                          fontSize={12}
                          tickLine={false}
                          axisLine={false}
                          tickFormatter={(value) => `${value}`}
                        />
                        <Tooltip content={({ active, payload }) => {
                          if (active && payload && payload.length) {
                            return (
                              <div className="rounded-lg border bg-background p-2 shadow-sm">
                                <div className="grid grid-cols-2 gap-2">
                                  <div className="flex flex-col">
                                    <span className="text-[0.70rem] uppercase text-muted-foreground">
                                      Visited
                                    </span>
                                    <span className="font-bold text-muted-foreground">
                                      {payload[0].value}
                                    </span>
                                  </div>
                                  <div className="flex flex-col">
                                    <span className="text-[0.70rem] uppercase text-muted-foreground">
                                      Booked
                                    </span>
                                    <span className="font-bold text-muted-foreground">
                                      {payload[1].value}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            )
                          }
                          return null
                        }} />
                        <Line
                          type="monotone"
                          dataKey="visited"
                          stroke="hsl(var(--chart-1))"
                          strokeWidth={2}
                          activeDot={{ r: 8 }}
                        />
                        <Line
                          type="monotone"
                          dataKey="booked"
                          stroke="hsl(var(--chart-2))"
                          strokeWidth={2}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              <Card className="md:col-span-3 col-span-4">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-teal-600">Property Types</CardTitle>
                  <CardDescription>Distribution of property types</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={propertyTypes}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        >
                          {propertyTypes.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-rose-600">Sales Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={salesData}>
                        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                        <YAxis
                          stroke="#888888"
                          fontSize={12}
                          tickLine={false}
                          axisLine={false}
                          tickFormatter={(value) => `$${value}`}
                        />
                        <Tooltip content={({ active, payload }) => {
                          if (active && payload && payload.length) {
                            return (
                              <div className="rounded-lg border bg-background p-2 shadow-sm">
                                <div className="grid grid-cols-2 gap-2">
                                  <div className="flex flex-col">
                                    <span className="text-[0.70rem] uppercase text-muted-foreground">
                                      Sales
                                    </span>
                                    <span className="font-bold text-muted-foreground">
                                      ${payload[0].value}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            )
                          }
                          return null
                        }} />
                        <Bar dataKey="sales" fill="hsl(var(--chart-3))" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              <Card className="md:col-span-3 col-span-4">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-amber-600">Complaints</CardTitle>
                  <CardDescription>Recent customer complaints</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <MessageSquare className="mr-2 h-4 w-4 text-amber-600" />
                      <span className="text-sm font-medium">Maintenance issue at Property #1234</span>
                    </div>
                    <div className="flex items-center">
                      <MessageSquare className="mr-2 h-4 w-4 text-amber-600" />
                      <span className="text-sm font-medium">Noise complaint at Property #5678</span>
                    </div>
                    <div className="flex items-center">
                      <MessageSquare className="mr-2 h-4 w-4 text-amber-600" />
                      <span className="text-sm font-medium">Cleanliness issue at Property #9012</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="analytics" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card className="col-span-2">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-blue-600">Occupancy Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={occupancyRateData}>
                        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                        <YAxis
                          stroke="#888888"
                          fontSize={12}
                          tickLine={false}
                          axisLine={false}
                          tickFormatter={(value) => `${value}%`}
                        />
                        <Tooltip content={({ active, payload }) => {
                          if (active && payload && payload.length) {
                            return (
                              <div className="rounded-lg border bg-background p-2 shadow-sm">
                                <div className="grid grid-cols-2 gap-2">
                                  <div className="flex flex-col">
                                    <span className="text-[0.70rem] uppercase text-muted-foreground">
                                      Occupancy Rate
                                    </span>
                                    <span className="font-bold text-muted-foreground">
                                      {payload[0].value}%
                                    </span>
                                  </div>
                                </div>
                              </div>
                            )
                          }
                          return null
                        }} />
                        <Area type="monotone" dataKey="rate" stroke="hsl(var(--chart-4))" fill="hsl(var(--chart-4))" fillOpacity={0.2} />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              <Card className="md:col-span-1 col-span-2">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-green-600">Revenue by Property Type</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={revenueByPropertyTypeData} layout="vertical">
                        <XAxis type="number" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                        <YAxis dataKey="name" type="category" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                        <Tooltip content={({ active, payload }) => {
                          if (active && payload && payload.length) {
                            return (
                              <div className="rounded-lg border bg-background p-2 shadow-sm">
                                <div className="grid grid-cols-2 gap-2">
                                  <div className="flex flex-col">
                                    <span className="text-[0.70rem] uppercase text-muted-foreground">
                                      Revenue
                                    </span>
                                    <span className="font-bold text-muted-foreground">
                                      ${payload[0].value}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            )
                          }
                          return null
                        }} />
                        <Bar dataKey="revenue" fill="hsl(var(--chart-5))" radius={[0, 4, 4, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card className="md:col-span-1 col-span-2">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-purple-600">Customer Satisfaction</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={customerSatisfactionData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        >
                          {customerSatisfactionData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              <Card className="col-span-2">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-orange-600">Maintenance Requests</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={maintenanceRequestsData}>
                        <XAxis dataKey="month" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                        <Tooltip content={({ active, payload }) => {
                          if (active && payload && payload.length) {
                            return (
                              <div className="rounded-lg border bg-background p-2 shadow-sm">
                                <div className="grid grid-cols-2 gap-2">
                                  <div className="flex flex-col">
                                    <span className="text-[0.70rem] uppercase text-muted-foreground">
                                      Requests
                                    </span>
                                    <span className="font-bold text-muted-foreground">
                                      {payload[0].value}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            )
                          }
                          return null
                        }} />
                        <Line type="monotone" dataKey="requests" stroke="hsl(var(--chart-6))" strokeWidth={2} dot={{ r: 4 }} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="reports" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-indigo-600">Top Performing Properties</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Property Name</TableHead>
                      <TableHead>Revenue</TableHead>
                      <TableHead>Occupancy Rate</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {topPerformingProperties.map((property) => (
                      <TableRow key={property.id}>
                        <TableCell>{property.name}</TableCell>
                        <TableCell>${property.revenue.toLocaleString()}</TableCell>
                        <TableCell>{property.occupancy}%</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-blue-600">Total Revenue YTD</CardTitle>
                  <TrendingUp className="h-4 w-4 text-blue-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$3,456,789</div>
                  <p className="text-xs text-muted-foreground">+25% from last year</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-green-600">Average Occupancy Rate</CardTitle>
                  <Users className="h-4 w-4 text-green-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">82%</div>
                  <p className="text-xs text-muted-foreground">+5% from last year</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-purple-600">Total Bookings</CardTitle>
                  <Calendar className="h-4 w-4 text-purple-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">24,567</div>
                  <p className="text-xs text-muted-foreground">+15% from last year</p>
                </CardContent>
              </Card>
            </div>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-rose-600">Monthly Financial Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Month</TableHead>
                      <TableHead>Revenue</TableHead>
                      <TableHead>Expenses</TableHead>
                      <TableHead>Net Profit</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>January</TableCell>
                      <TableCell>$250,000</TableCell>
                      <TableCell>$150,000</TableCell>
                      <TableCell>$100,000</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>February</TableCell>
                      <TableCell>$280,000</TableCell>
                      <TableCell>$160,000</TableCell>
                      <TableCell>$120,000</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>March</TableCell>
                      <TableCell>$310,000</TableCell>
                      <TableCell>$170,000</TableCell>
                      <TableCell>$140,000</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}