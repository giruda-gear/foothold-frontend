'use client'

import {
  Bodies,
  Bounds,
  Composite,
  Engine,
  Events,
  IMouseEvent,
  Mouse,
  MouseConstraint,
  Render,
  Runner,
  World,
} from 'matter-js'
import { useEffect, useRef } from 'react'

export default function Amino() {
  const containerRef = useRef<HTMLDivElement>(null)
  const boxesRef = useRef<Bodies[]>([])

  useEffect(() => {
    if (!containerRef.current) return

    // create an engine
    const engine = Engine.create()

    console.log(
      containerRef.current.clientWidth,
      containerRef.current.clientHeight
    )
    // create a renderer
    const render = Render.create({
      element: containerRef.current,
      engine: engine,
      options: {
        width: containerRef.current.clientWidth,
        height: containerRef.current.clientHeight - 100,
        wireframes: false,
        background: '#F7F4C8',
      },
    })

    // create two boxes and a ground
    const boxA = Bodies.rectangle(400, 200, 40, 40)
    const boxB = Bodies.rectangle(450, 50, 80, 80)
    const ground = Bodies.rectangle(
      500,
      containerRef.current.clientHeight - 155,
      600,
      100,
      {
        isStatic: true,
        render: {
          fillStyle: 'orange',
        },
      }
    )

    boxesRef.current = [boxA, boxB]

    // add all of the bodies to the world
    Composite.add(engine.world, [boxA, boxB, ground])

    // run the renderer
    Render.run(render)

    // create runner
    const runner = Runner.create()

    // run the engine
    Runner.run(runner, engine)

    const mouse = Mouse.create(render.canvas)
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
    })

    Events.on(mouseConstraint, 'mousedown', () => {
      console.log(mouse.position)
      console.log(boxesRef.current)
    })

    return () => {
      Render.stop(render)
      Engine.clear(engine)
      render.canvas.remove()
    }
  }, [])

  return <div className="relative size-full" ref={containerRef} />
}
