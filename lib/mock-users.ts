export type UserRole = "facility-manager" | "utility-rep"

export interface User {
  id: string
  email: string
  name: string
  role: UserRole
  avatar?: string
}

export interface MockUser extends User {
  password: string
}

export const mockUsers: MockUser[] = [
  {
    id: "1",
    email: "bob@smartwatt.com",
    password: "demo",
    name: "Bob",
    role: "facility-manager",
  },
  {
    id: "2",
    email: "alice@smartwatt.com",
    password: "demo",
    name: "Alice",
    role: "utility-rep",
  },
]

export function findUserByEmail(email: string): MockUser | undefined {
  return mockUsers.find((user) => user.email.toLowerCase() === email.toLowerCase())
}

export function validateCredentials(email: string, password: string): User | null {
  const mockUser = findUserByEmail(email)
  if (mockUser && mockUser.password === password) {
    const { password: _, ...user } = mockUser
    return user
  }
  return null
}

export function getDemoUser(role: UserRole): User {
  const mockUser = mockUsers.find((user) => user.role === role)!
  const { password: _, ...user } = mockUser
  return user
}
