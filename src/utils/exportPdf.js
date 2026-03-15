import { jsPDF } from 'jspdf'
import { LEVEL_LABELS } from '../data/questions'

export function exportAsPdf(result) {
  const doc = new jsPDF()
  const label = LEVEL_LABELS[result.level] || `Level ${result.level}`
  const date = new Date(result.timestamp).toLocaleDateString('de-DE')

  // Title
  doc.setFontSize(20)
  doc.text('RUB Skiausbildung', 20, 25)
  doc.setFontSize(14)
  doc.text('Einstufungsergebnis', 20, 35)

  // Name
  if (result.name) {
    doc.setFontSize(12)
    doc.text(`Name: ${result.name}`, 20, 48)
  }

  // Level
  doc.setFontSize(16)
  doc.text(`Zugewiesene Gruppe: Level ${result.level} (${label})`, 20, result.name ? 60 : 52)

  // Meta
  doc.setFontSize(11)
  const metaY = result.name ? 70 : 62
  doc.text(`Datum: ${date}`, 20, metaY)
  doc.text(
    `Punkte: ${result.totalScore} von ${result.maxScore}`,
    20,
    metaY + 8
  )

  // Answers
  doc.setFontSize(12)
  doc.text('Antworten:', 20, metaY + 23)

  doc.setFontSize(10)
  let y = metaY + 33

  result.answers.forEach((a, i) => {
    if (y > 270) {
      doc.addPage()
      y = 20
    }

    doc.setFont(undefined, 'bold')
    doc.text(`${i + 1}. ${a.questionText}`, 20, y)
    y += 6

    doc.setFont(undefined, 'normal')
    doc.text(`   -> ${a.selectedOption} (${a.points} Pkt)`, 20, y)
    y += 10
  })

  const safeName = result.name ? result.name.replace(/\s+/g, '-') : 'anonym'
  doc.save(`ski-einstufung-${safeName}-level-${result.level}.pdf`)
}
