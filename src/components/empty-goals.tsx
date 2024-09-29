import { Plus } from 'lucide-react'
import { DialogTrigger } from '../components/ui/dialog'
import astron from '../assets/astron.svg'
import logo from '../assets/logo.svg'
import { Button } from '../components/ui/button'

export function EmptyGoals() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-4">
      <img src={logo} alt="In.orbit" />
      <img src={astron} alt="in.orbit" />
      <p className="text-zinc-300 leading-relaxed max-w-80 text-center">
        Você ainda não cadastrou nenhuma meta. Que tal cadastrar uma agora
        mesmo?
      </p>

      <DialogTrigger asChild>
        <Button>
          <Plus className="size-4" />
          Cadastrar meta
        </Button>
      </DialogTrigger>
    </div>
  )
}
