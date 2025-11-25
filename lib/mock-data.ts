// Mock data generator for Smart Watt dashboard

export interface Building {
  id: string
  name: string
  type: "academic" | "residential" | "admin" | "sports" | "library"
  currentLoad: number
  maxCapacity: number
  status: "normal" | "warning" | "critical" | "dr-active"
  temperature: number
  hvacStatus: "on" | "off" | "eco"
  coordinates: { x: number; y: number }
}

export interface EnergyReading {
  timestamp: Date
  value: number
  predicted?: number
}

export interface DREvent {
  id: string
  type: "curtailment" | "shift" | "generation"
  status: "pending" | "active" | "completed"
  startTime: Date
  endTime: Date
  targetReduction: number
  actualReduction: number
  incentive: number
}

export const buildings: Building[] = [
  {
    id: "eng-1",
    name: "Engineering Hall",
    type: "academic",
    currentLoad: 245,
    maxCapacity: 400,
    status: "normal",
    temperature: 72,
    hvacStatus: "on",
    coordinates: { x: 30, y: 25 },
  },
  {
    id: "sci-1",
    name: "Science Center",
    type: "academic",
    currentLoad: 312,
    maxCapacity: 350,
    status: "warning",
    temperature: 74,
    hvacStatus: "on",
    coordinates: { x: 50, y: 20 },
  },
  {
    id: "lib-1",
    name: "Main Library",
    type: "library",
    currentLoad: 156,
    maxCapacity: 300,
    status: "normal",
    temperature: 70,
    hvacStatus: "eco",
    coordinates: { x: 70, y: 30 },
  },
  {
    id: "res-1",
    name: "North Residence",
    type: "residential",
    currentLoad: 89,
    maxCapacity: 200,
    status: "normal",
    temperature: 71,
    hvacStatus: "on",
    coordinates: { x: 25, y: 55 },
  },
  {
    id: "res-2",
    name: "South Residence",
    type: "residential",
    currentLoad: 112,
    maxCapacity: 200,
    status: "normal",
    temperature: 72,
    hvacStatus: "on",
    coordinates: { x: 45, y: 65 },
  },
  {
    id: "admin-1",
    name: "Admin Building",
    type: "admin",
    currentLoad: 78,
    maxCapacity: 150,
    status: "dr-active",
    temperature: 75,
    hvacStatus: "eco",
    coordinates: { x: 60, y: 50 },
  },
  {
    id: "gym-1",
    name: "Sports Complex",
    type: "sports",
    currentLoad: 198,
    maxCapacity: 500,
    status: "normal",
    temperature: 68,
    hvacStatus: "on",
    coordinates: { x: 80, y: 60 },
  },
]

export function generateHourlyData(hours = 24): EnergyReading[] {
  const data: EnergyReading[] = []
  const now = new Date()

  for (let i = hours; i >= 0; i--) {
    const timestamp = new Date(now.getTime() - i * 60 * 60 * 1000)
    const hour = timestamp.getHours()

    // Simulate realistic campus energy pattern
    let baseLoad = 800
    if (hour >= 8 && hour <= 18)
      baseLoad = 1400 // Peak hours
    else if (hour >= 6 && hour <= 22) baseLoad = 1000 // Active hours

    const variation = Math.random() * 200 - 100
    const value = Math.round(baseLoad + variation)
    const predicted = Math.round(baseLoad + (Math.random() * 100 - 50))

    data.push({ timestamp, value, predicted })
  }

  return data
}

export function generateLoadBreakdown() {
  return [
    { name: "HVAC", value: 42, color: "var(--chart-1)" },
    { name: "Lighting", value: 23, color: "var(--chart-2)" },
    { name: "Equipment", value: 18, color: "var(--chart-3)" },
    { name: "IT Systems", value: 12, color: "var(--chart-4)" },
    { name: "Other", value: 5, color: "var(--chart-5)" },
  ]
}

export const drEvents: DREvent[] = [
  {
    id: "dr-001",
    type: "curtailment",
    status: "active",
    startTime: new Date(Date.now() - 30 * 60 * 1000),
    endTime: new Date(Date.now() + 90 * 60 * 1000),
    targetReduction: 150,
    actualReduction: 142,
    incentive: 450,
  },
  {
    id: "dr-002",
    type: "shift",
    status: "pending",
    startTime: new Date(Date.now() + 2 * 60 * 60 * 1000),
    endTime: new Date(Date.now() + 4 * 60 * 60 * 1000),
    targetReduction: 200,
    actualReduction: 0,
    incentive: 600,
  },
]

export interface PredictionData {
  timestamp: Date
  actual: number | null
  predicted: number
  confidence: { upper: number; lower: number }
}

export interface OptimizationSuggestion {
  id: string
  title: string
  description: string
  potentialSavings: number
  confidence: number
  category: "hvac" | "lighting" | "scheduling" | "load-shift"
  priority: "high" | "medium" | "low"
  affectedBuildings: string[]
}

export function generate24hPrediction(): PredictionData[] {
  const data: PredictionData[] = []
  const now = new Date()

  // Past 12 hours (with actuals)
  for (let i = 12; i > 0; i--) {
    const timestamp = new Date(now.getTime() - i * 60 * 60 * 1000)
    const hour = timestamp.getHours()

    let baseLoad = 800
    if (hour >= 8 && hour <= 18) baseLoad = 1400
    else if (hour >= 6 && hour <= 22) baseLoad = 1000

    const predicted = Math.round(baseLoad + (Math.random() * 100 - 50))
    const actual = Math.round(predicted + (Math.random() * 80 - 40))

    data.push({
      timestamp,
      actual,
      predicted,
      confidence: {
        upper: predicted + 100 + Math.random() * 50,
        lower: predicted - 100 - Math.random() * 50,
      },
    })
  }

  // Future 12 hours (predictions only)
  for (let i = 0; i <= 12; i++) {
    const timestamp = new Date(now.getTime() + i * 60 * 60 * 1000)
    const hour = timestamp.getHours()

    let baseLoad = 800
    if (hour >= 8 && hour <= 18) baseLoad = 1400
    else if (hour >= 6 && hour <= 22) baseLoad = 1000

    const predicted = Math.round(baseLoad + (Math.random() * 100 - 50))

    data.push({
      timestamp,
      actual: null,
      predicted,
      confidence: {
        upper: predicted + 120 + i * 10,
        lower: predicted - 120 - i * 10,
      },
    })
  }

  return data
}

export function generateWeeklyForecast(): { day: string; predicted: number; lastWeek: number }[] {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  return days.map((day) => ({
    day,
    predicted: Math.round(20000 + Math.random() * 8000),
    lastWeek: Math.round(21000 + Math.random() * 7000),
  }))
}

export const optimizationSuggestions: OptimizationSuggestion[] = [
  {
    id: "opt-1",
    title: "Pre-cool Science Center before peak hours",
    description: "Start cooling at 6 AM instead of 8 AM to reduce peak demand by shifting load to off-peak hours.",
    potentialSavings: 320,
    confidence: 92,
    category: "hvac",
    priority: "high",
    affectedBuildings: ["sci-1"],
  },
  {
    id: "opt-2",
    title: "Reduce lighting in unoccupied zones",
    description: "Occupancy sensors indicate 40% of Main Library zones are unused. Dim lights to 30%.",
    potentialSavings: 85,
    confidence: 88,
    category: "lighting",
    priority: "medium",
    affectedBuildings: ["lib-1"],
  },
  {
    id: "opt-3",
    title: "Shift EV charging to overnight",
    description: "Current EV charging coincides with peak hours. Scheduling overnight can save $180/day.",
    potentialSavings: 180,
    confidence: 95,
    category: "load-shift",
    priority: "high",
    affectedBuildings: ["admin-1", "eng-1"],
  },
  {
    id: "opt-4",
    title: "Optimize Sports Complex HVAC schedule",
    description: "Reduce HVAC 2 hours before closing based on thermal inertia modeling.",
    potentialSavings: 145,
    confidence: 78,
    category: "scheduling",
    priority: "medium",
    affectedBuildings: ["gym-1"],
  },
]

export interface ModelMetrics {
  name: string
  mape: number
  rmse: number
  accuracy: number
  lastTrained: Date
}

export const modelMetrics: ModelMetrics[] = [
  {
    name: "LSTM Neural Network",
    mape: 3.2,
    rmse: 45.8,
    accuracy: 96.8,
    lastTrained: new Date(Date.now() - 2 * 60 * 60 * 1000),
  },
  {
    name: "XGBoost Ensemble",
    mape: 4.1,
    rmse: 52.3,
    accuracy: 95.9,
    lastTrained: new Date(Date.now() - 24 * 60 * 60 * 1000),
  },
  {
    name: "Prophet Baseline",
    mape: 5.8,
    rmse: 68.2,
    accuracy: 94.2,
    lastTrained: new Date(Date.now() - 48 * 60 * 60 * 1000),
  },
]

export function getTotalCampusLoad(): number {
  return buildings.reduce((sum, b) => sum + b.currentLoad, 0)
}

export function getTotalCapacity(): number {
  return buildings.reduce((sum, b) => sum + b.maxCapacity, 0)
}

// New interfaces and constants
export interface GridSignal {
  id: string
  type: "price" | "emergency" | "capacity" | "renewable"
  severity: "info" | "warning" | "critical"
  message: string
  timestamp: Date
  expiresAt: Date
  priceMultiplier?: number
}

export interface DRProgram {
  id: string
  name: string
  type: "capacity" | "energy" | "ancillary" | "emergency"
  enrolled: boolean
  maxCommitment: number
  currentCommitment: number
  revenue: number
  events: number
  performance: number
}

export interface AutomationRule {
  id: string
  name: string
  trigger: string
  action: string
  enabled: boolean
  lastTriggered?: Date
  executionCount: number
}

export const gridSignals: GridSignal[] = [
  {
    id: "sig-1",
    type: "price",
    severity: "warning",
    message: "High electricity price period starting",
    timestamp: new Date(Date.now() - 15 * 60 * 1000),
    expiresAt: new Date(Date.now() + 2 * 60 * 60 * 1000),
    priceMultiplier: 2.5,
  },
  {
    id: "sig-2",
    type: "renewable",
    severity: "info",
    message: "High solar generation available",
    timestamp: new Date(Date.now() - 30 * 60 * 1000),
    expiresAt: new Date(Date.now() + 4 * 60 * 60 * 1000),
  },
  {
    id: "sig-3",
    type: "capacity",
    severity: "critical",
    message: "Grid capacity constraint - DR event triggered",
    timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000),
    expiresAt: new Date(Date.now() + 90 * 60 * 60 * 1000),
  },
]

export const drPrograms: DRProgram[] = [
  {
    id: "prog-1",
    name: "Peak Demand Response",
    type: "capacity",
    enrolled: true,
    maxCommitment: 300,
    currentCommitment: 250,
    revenue: 12450,
    events: 8,
    performance: 94,
  },
  {
    id: "prog-2",
    name: "Emergency Load Shed",
    type: "emergency",
    enrolled: true,
    maxCommitment: 500,
    currentCommitment: 400,
    revenue: 8200,
    events: 2,
    performance: 98,
  },
  {
    id: "prog-3",
    name: "Real-Time Pricing",
    type: "energy",
    enrolled: true,
    maxCommitment: 200,
    currentCommitment: 180,
    revenue: 5680,
    events: 24,
    performance: 87,
  },
  {
    id: "prog-4",
    name: "Frequency Regulation",
    type: "ancillary",
    enrolled: false,
    maxCommitment: 100,
    currentCommitment: 0,
    revenue: 0,
    events: 0,
    performance: 0,
  },
]

export const automationRules: AutomationRule[] = [
  {
    id: "rule-1",
    name: "Peak Price Response",
    trigger: "Price > $0.15/kWh",
    action: "Reduce HVAC by 20%, dim lights to 70%",
    enabled: true,
    lastTriggered: new Date(Date.now() - 2 * 60 * 60 * 1000),
    executionCount: 156,
  },
  {
    id: "rule-2",
    name: "DR Event Auto-Accept",
    trigger: "DR signal received",
    action: "Auto-enroll if incentive > $200",
    enabled: true,
    lastTriggered: new Date(Date.now() - 30 * 60 * 60 * 1000),
    executionCount: 45,
  },
  {
    id: "rule-3",
    name: "Emergency Shed",
    trigger: "Grid emergency signal",
    action: "Shed non-critical loads immediately",
    enabled: true,
    lastTriggered: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
    executionCount: 3,
  },
  {
    id: "rule-4",
    name: "Renewable Maximizer",
    trigger: "High renewable availability",
    action: "Shift deferrable loads to current window",
    enabled: false,
    executionCount: 0,
  },
]

export function generatePriceHistory(): { time: string; price: number; predicted: number }[] {
  const data = []
  const now = new Date()

  for (let i = 24; i >= 0; i--) {
    const timestamp = new Date(now.getTime() - i * 60 * 60 * 1000)
    const hour = timestamp.getHours()

    let basePrice = 0.08
    if (hour >= 14 && hour <= 19)
      basePrice = 0.15 // Peak hours
    else if (hour >= 8 && hour <= 21) basePrice = 0.1 // Day hours

    const variation = Math.random() * 0.03 - 0.015

    data.push({
      time: timestamp.toLocaleTimeString("en-US", { hour: "2-digit" }),
      price: Number((basePrice + variation).toFixed(3)),
      predicted: Number((basePrice + (Math.random() * 0.02 - 0.01)).toFixed(3)),
    })
  }

  return data
}

export interface Equipment {
  id: string
  name: string
  type: "hvac" | "lighting" | "elevator" | "server" | "other"
  status: "running" | "idle" | "maintenance" | "fault"
  power: number
  runtime: number // hours today
  efficiency: number // percentage
}

export interface Zone {
  id: string
  name: string
  temperature: number
  setpoint: number
  humidity: number
  occupancy: number
  maxOccupancy: number
}

export function getBuildingEquipment(buildingId: string): Equipment[] {
  const baseEquipment: Equipment[] = [
    { id: "eq-1", name: "Main AHU-1", type: "hvac", status: "running", power: 45, runtime: 8.5, efficiency: 92 },
    { id: "eq-2", name: "Main AHU-2", type: "hvac", status: "running", power: 42, runtime: 8.5, efficiency: 89 },
    { id: "eq-3", name: "Chiller Unit", type: "hvac", status: "running", power: 120, runtime: 6.2, efficiency: 94 },
    {
      id: "eq-4",
      name: "Floor 1 Lighting",
      type: "lighting",
      status: "running",
      power: 12,
      runtime: 10,
      efficiency: 100,
    },
    {
      id: "eq-5",
      name: "Floor 2 Lighting",
      type: "lighting",
      status: "running",
      power: 12,
      runtime: 9.5,
      efficiency: 100,
    },
    { id: "eq-6", name: "Elevator Bank A", type: "elevator", status: "running", power: 25, runtime: 8, efficiency: 96 },
    { id: "eq-7", name: "Server Room CRAC", type: "server", status: "running", power: 35, runtime: 24, efficiency: 91 },
    { id: "eq-8", name: "Backup Generator", type: "other", status: "idle", power: 0, runtime: 0, efficiency: 100 },
  ]

  return baseEquipment.map((eq) => ({
    ...eq,
    power: eq.power + Math.round(Math.random() * 10 - 5),
    efficiency: Math.min(100, eq.efficiency + Math.round(Math.random() * 6 - 3)),
  }))
}

export function getBuildingZones(buildingId: string): Zone[] {
  return [
    {
      id: "zone-1",
      name: "Floor 1 - Lobby",
      temperature: 72,
      setpoint: 72,
      humidity: 45,
      occupancy: 12,
      maxOccupancy: 50,
    },
    {
      id: "zone-2",
      name: "Floor 1 - Office A",
      temperature: 73,
      setpoint: 72,
      humidity: 48,
      occupancy: 24,
      maxOccupancy: 30,
    },
    {
      id: "zone-3",
      name: "Floor 2 - Labs",
      temperature: 68,
      setpoint: 68,
      humidity: 40,
      occupancy: 18,
      maxOccupancy: 40,
    },
    {
      id: "zone-4",
      name: "Floor 2 - Office B",
      temperature: 74,
      setpoint: 72,
      humidity: 52,
      occupancy: 8,
      maxOccupancy: 25,
    },
    {
      id: "zone-5",
      name: "Floor 3 - Conference",
      temperature: 71,
      setpoint: 70,
      humidity: 44,
      occupancy: 35,
      maxOccupancy: 60,
    },
    {
      id: "zone-6",
      name: "Basement - Storage",
      temperature: 65,
      setpoint: 65,
      humidity: 55,
      occupancy: 2,
      maxOccupancy: 10,
    },
  ]
}

export function generateBuildingHistory(
  hours = 24,
): { time: string; load: number; hvac: number; lighting: number; other: number }[] {
  const data = []
  const now = new Date()

  for (let i = hours; i >= 0; i--) {
    const timestamp = new Date(now.getTime() - i * 60 * 60 * 1000)
    const hour = timestamp.getHours()

    let baseHvac = 80
    let baseLighting = 30
    let baseOther = 40

    if (hour >= 8 && hour <= 18) {
      baseHvac = 150
      baseLighting = 60
      baseOther = 80
    } else if (hour >= 6 && hour <= 22) {
      baseHvac = 100
      baseLighting = 40
      baseOther = 50
    }

    const hvac = Math.round(baseHvac + Math.random() * 30 - 15)
    const lighting = Math.round(baseLighting + Math.random() * 10 - 5)
    const other = Math.round(baseOther + Math.random() * 15 - 7)

    data.push({
      time: timestamp.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }),
      load: hvac + lighting + other,
      hvac,
      lighting,
      other,
    })
  }

  return data
}

export interface Gateway {
  id: string
  name: string
  type: "bacnet" | "modbus" | "mqtt" | "opcua"
  status: "online" | "offline" | "error"
  ip: string
  port: number
  devices: number
  lastSeen: Date
  dataPoints: number
}

export interface Device {
  id: string
  name: string
  gatewayId: string
  protocol: string
  address: string
  type: string
  status: "active" | "inactive" | "error"
  lastReading: Date
  points: number
}

export interface SystemAlert {
  id: string
  type: "connection" | "data" | "security" | "performance"
  severity: "info" | "warning" | "error"
  message: string
  timestamp: Date
  acknowledged: boolean
}

export const gateways: Gateway[] = [
  {
    id: "gw-1",
    name: "Main BACnet Gateway",
    type: "bacnet",
    status: "online",
    ip: "192.168.1.100",
    port: 47808,
    devices: 24,
    lastSeen: new Date(Date.now() - 30 * 1000),
    dataPoints: 1247,
  },
  {
    id: "gw-2",
    name: "Modbus RTU Gateway",
    type: "modbus",
    status: "online",
    ip: "192.168.1.101",
    port: 502,
    devices: 12,
    lastSeen: new Date(Date.now() - 45 * 1000),
    dataPoints: 456,
  },
  {
    id: "gw-3",
    name: "MQTT Broker",
    type: "mqtt",
    status: "online",
    ip: "192.168.1.102",
    port: 1883,
    devices: 36,
    lastSeen: new Date(Date.now() - 15 * 1000),
    dataPoints: 892,
  },
  {
    id: "gw-4",
    name: "OPC-UA Server",
    type: "opcua",
    status: "error",
    ip: "192.168.1.103",
    port: 4840,
    devices: 8,
    lastSeen: new Date(Date.now() - 10 * 60 * 1000),
    dataPoints: 234,
  },
]

export const devices: Device[] = [
  {
    id: "dev-1",
    name: "AHU-1 Controller",
    gatewayId: "gw-1",
    protocol: "BACnet",
    address: "1001",
    type: "HVAC Controller",
    status: "active",
    lastReading: new Date(),
    points: 45,
  },
  {
    id: "dev-2",
    name: "AHU-2 Controller",
    gatewayId: "gw-1",
    protocol: "BACnet",
    address: "1002",
    type: "HVAC Controller",
    status: "active",
    lastReading: new Date(),
    points: 45,
  },
  {
    id: "dev-3",
    name: "VAV Box Floor 1",
    gatewayId: "gw-1",
    protocol: "BACnet",
    address: "2001",
    type: "VAV Controller",
    status: "active",
    lastReading: new Date(),
    points: 12,
  },
  {
    id: "dev-4",
    name: "Chiller Plant",
    gatewayId: "gw-2",
    protocol: "Modbus",
    address: "10",
    type: "Chiller",
    status: "active",
    lastReading: new Date(),
    points: 28,
  },
  {
    id: "dev-5",
    name: "Power Meter Main",
    gatewayId: "gw-2",
    protocol: "Modbus",
    address: "20",
    type: "Power Meter",
    status: "active",
    lastReading: new Date(),
    points: 18,
  },
  {
    id: "dev-6",
    name: "IoT Sensor Hub",
    gatewayId: "gw-3",
    protocol: "MQTT",
    address: "sensors/hub1",
    type: "Sensor Hub",
    status: "active",
    lastReading: new Date(),
    points: 64,
  },
  {
    id: "dev-7",
    name: "Lighting Controller",
    gatewayId: "gw-1",
    protocol: "BACnet",
    address: "3001",
    type: "Lighting",
    status: "inactive",
    lastReading: new Date(Date.now() - 60 * 60 * 1000),
    points: 24,
  },
  {
    id: "dev-8",
    name: "EV Charger Station",
    gatewayId: "gw-4",
    protocol: "OPC-UA",
    address: "ns=2;s=EV01",
    type: "EV Charger",
    status: "error",
    lastReading: new Date(Date.now() - 10 * 60 * 1000),
    points: 8,
  },
]

export const systemAlerts: SystemAlert[] = [
  {
    id: "alert-1",
    type: "connection",
    severity: "error",
    message: "OPC-UA Server connection lost",
    timestamp: new Date(Date.now() - 10 * 60 * 1000),
    acknowledged: false,
  },
  {
    id: "alert-2",
    type: "data",
    severity: "warning",
    message: "Stale data from Lighting Controller (1h)",
    timestamp: new Date(Date.now() - 55 * 60 * 1000),
    acknowledged: false,
  },
  {
    id: "alert-3",
    type: "performance",
    severity: "info",
    message: "High data throughput on MQTT Broker",
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
    acknowledged: true,
  },
  {
    id: "alert-4",
    type: "security",
    severity: "warning",
    message: "Failed authentication attempt from 192.168.1.200",
    timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000),
    acknowledged: true,
  },
]
