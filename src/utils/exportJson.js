export function exportAsJson(result) {
  const payload = {
    title: 'RUB Skiausbildung \u2014 Einstufungsergebnis',
    name: result.name,
    timestamp: result.timestamp,
    assignedLevel: result.level,
    totalScore: result.totalScore,
    maxScore: result.maxScore,
    adaptivePool: result.selectedPool,
    answers: result.answers.map((a) => ({
      question: a.questionText,
      answer: a.selectedOption,
      points: a.points,
    })),
  }

  const blob = new Blob([JSON.stringify(payload, null, 2)], {
    type: 'application/json',
  })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  const safeName = result.name ? result.name.replace(/\s+/g, '-') : 'anonym'
  link.download = `ski-einstufung-${safeName}-level-${result.level}.json`
  link.click()
  URL.revokeObjectURL(url)
}
