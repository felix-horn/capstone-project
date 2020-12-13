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
                color: '#4285F4',
                lineWidth: 2,
              })
            })
        }
      }
    })

    Quagga.onDetected(detected)
  }, [])

  function detected(result) {
    onDetected(result.codeResult.code)
    Quagga.stop()
  }

  return <div id="interactive" className="viewport" />
}
