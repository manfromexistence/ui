import { ConfettiButton } from "@/registry/new-york/ui/confetti"

export default function ConfettiButtonDemo() {
  return (
    <div className="relative">
      <ConfettiButton
        options={{
          get angle() {
            return Math.random() * 360
          },
        }}
      >
        Random Confetti 🎉
      </ConfettiButton>
    </div>
  )
}
