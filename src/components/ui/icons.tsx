import {
  Shield,
  Lock,
  FileX,
  Search,
  Archive,
  ShieldAlert,
  Banknote,
  Megaphone,
  HelpCircle,
  Users,
  Clock,
  UserX,
  FileText,
  Home,
  type LucideIcon
} from 'lucide-react'

export const SITUATION_ICONS: Record<string, LucideIcon> = {
  shield: Shield,
  handcuffs: Lock,
  fileX: FileX,
  search: Search,
  archive: Archive,
  shieldAlert: ShieldAlert,
  banknote: Banknote,
  megaphone: Megaphone,
  help: HelpCircle,
  users: Users,
  clock: Clock,
  userX: UserX,
  fileText: FileText,
  home: Home
}

export function SituationIcon({ name, className }: { name: string; className?: string }) {
  const Icon = SITUATION_ICONS[name] ?? HelpCircle
  return <Icon className={className} aria-hidden="true" />
}
