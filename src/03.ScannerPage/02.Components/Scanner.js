import React, { useEffect } from 'react'
import config from './config.json'
import Quagga from 'quagga'

export default function Scanner({ onDetected }) {
  useEffect(() => {
    Quagga.init(config, (err) => {
      if (err) {
        console.log(err, 'error msg')
      }
      Quagga.start()
      return () => {
        Quagga.stop()
      }
    })

    //detecting boxes on stream
    Quagga.onProcessed((result) => {
      const drawingCtx = Quagga.canvas.ctx.overlay
      const drawingCanvas = Quagga.canvas.dom.overlay

      if (result) {
        if (result.boxes) {
          drawingCtx.clearRect(
            0,
            0,
            Number(drawingCanvas.getAttribute('width')),
            Number(drawingCanvas.getAttribute('height'))
          )
          result.boxes
            .filter(function (box) {
              return box !== result.box
            })
            .forEach(function (box) {
              Quagga.ImageDebug.drawPath(box, { x: 0, y: 1 }, drawingCtx, {
                color: '#ffffff',
                lineWidth: 1,
              })
            })
        }

        if (result.box) {
          Quagga.ImageDebug.drawPath(result.box, { x: 0, y: 1 }, drawingCtx, {
            color: '#3cba54',
            lineWidth: 10,
          })
        }

        if (result.codeResult && result.codeResult.code) {
          Quagga.ImageDebug.drawPath(
            result.line,
            { x: 'x', y: 'y' },
            drawingCtx,
            { color: '#3cba54', lineWidth: 3 }
          )
        }
      }
    })

    Quagga.onDetected(detected)
  }, [])

  function detected(result) {
    onDetected(result.codeResult.code)
    console.log(result)
  }

  return (
    // If you do not specify a target,
    // QuaggaJS would look for an element that matches
    // the CSS selector #interactive.viewport
    <div id="interactive" className="viewport" />
  )
}
