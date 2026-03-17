"use client"

import { type ComponentPropsWithoutRef, type PointerEventHandler, useRef, useState } from "react"

import { cn } from "@/lib/utils"

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  /**
   * Optional CSS class name to apply custom styles
   */
  className?: string
  /**
   * Whether to reverse the animation direction
   * @default false
   */
  reverse?: boolean
  /**
   * Whether to pause the animation on hover
   * @default false
   */
  pauseOnHover?: boolean
  /**
   * Content to be displayed in the marquee
   */
  children: React.ReactNode
  /**
   * Whether to animate vertically instead of horizontally
   * @default false
   */
  vertical?: boolean
  /**
   * Number of times to repeat the content
   * @default 4
   */
  repeat?: number
  /**
   * Whether to allow dragging the marquee with pointer input
   * @default false
   */
  draggable?: boolean
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  draggable = false,
  style,
  onPointerDown,
  onPointerMove,
  onPointerUp,
  onPointerCancel,
  onPointerLeave,
  ...props
}: MarqueeProps) {
  const rootRef = useRef<HTMLDivElement>(null)
  const dragStateRef = useRef<{ active: boolean; startPos: number; startScroll: number }>({
    active: false,
    startPos: 0,
    startScroll: 0,
  })
  const [isDragging, setIsDragging] = useState(false)

  const handlePointerDown: PointerEventHandler<HTMLDivElement> = (event) => {
    onPointerDown?.(event)
    if (!draggable) return

    const container = rootRef.current
    if (!container) return

    dragStateRef.current = {
      active: true,
      startPos: vertical ? event.clientY : event.clientX,
      startScroll: vertical ? container.scrollTop : container.scrollLeft,
    }

    setIsDragging(true)
    container.setPointerCapture(event.pointerId)
  }

  const handlePointerMove: PointerEventHandler<HTMLDivElement> = (event) => {
    onPointerMove?.(event)
    if (!draggable) return

    const container = rootRef.current
    const { active, startPos, startScroll } = dragStateRef.current
    if (!container || !active) return

    const currentPos = vertical ? event.clientY : event.clientX
    const delta = currentPos - startPos

    if (vertical) {
      container.scrollTop = startScroll - delta
    } else {
      container.scrollLeft = startScroll - delta
    }
  }

  const stopDragging: PointerEventHandler<HTMLDivElement> = (event) => {
    onPointerUp?.(event)
    if (!draggable) return

    dragStateRef.current.active = false
    setIsDragging(false)
  }

  return (
    <div
      {...props}
      ref={rootRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={stopDragging}
      onPointerCancel={(event) => {
        stopDragging(event)
        onPointerCancel?.(event)
      }}
      onPointerLeave={(event) => {
        if (dragStateRef.current.active) {
          stopDragging(event)
        }
        onPointerLeave?.(event)
      }}
      style={{ touchAction: draggable ? (vertical ? "pan-x" : "pan-y") : undefined, ...style }}
      className={cn(
        "group flex gap-(--gap) overflow-hidden p-2 [--duration:40s] [--gap:1rem]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
          "cursor-grab select-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden active:cursor-grabbing": draggable,
          "overflow-x-auto": draggable && !vertical,
          "overflow-y-auto": draggable && vertical,
        },
        className
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0 justify-around gap-(--gap)", {
              "animate-marquee flex-row": !vertical,
              "animate-marquee-vertical flex-col": vertical,
              "group-hover:[animation-play-state:paused]": pauseOnHover,
              "[animation-direction:reverse]": reverse,
            })}
            style={isDragging ? { animationPlayState: "paused" } : undefined}
          >
            {children}
          </div>
        ))}
    </div>
  )
}
