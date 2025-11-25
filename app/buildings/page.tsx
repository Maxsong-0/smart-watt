import { Sidebar } from "@/components/layout/sidebar"
import { Header } from "@/components/layout/header"
import { BuildingCard } from "@/components/buildings/building-card"
import { buildings } from "@/lib/mock-data"

export default function BuildingsPage() {
  const sortedBuildings = [...buildings].sort((a, b) => {
    const statusOrder = { critical: 0, warning: 1, "dr-active": 2, normal: 3 }
    return statusOrder[a.status] - statusOrder[b.status]
  })

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="Buildings" subtitle="Monitor and control individual buildings" />

        <main className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sortedBuildings.map((building) => (
              <BuildingCard key={building.id} building={building} />
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}
