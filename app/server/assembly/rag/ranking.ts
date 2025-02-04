@json
export class RankedDocument {
  id!: string
  docid!: string
  content: string = ""
  score: f64 = 0.0
}

export function computeRRF(
  rankings: RankedDocument[][],
  limit: i32 = 10,
  k: i32 = 60,
): RankedDocument[] {
  const rrfScores = new Map<string, RankedDocument>()

  for (let i = 0; i < rankings.length; i++) {
    const ranking = rankings[i]

    for (let j = 0; j < ranking.length; j++) {
      const docId = ranking[j].id

      const reciprocalRank: f64 = 1.0 / (k + j + 1)
      console.log(`Reciprocal Rank for ${docId}: ${reciprocalRank}`)
      if (rrfScores.has(docId)) {
        const r = rrfScores.get(docId)

        r.score = r.score + reciprocalRank
        console.log(`Updating RRF score for ${docId} to ${r.score}`)
      } else {
        rrfScores.set(docId, <RankedDocument>{
          id: docId,
          content: ranking[j].content,
          score: reciprocalRank,
        })
      }
    }
  }

  const rrfScoresArray = rrfScores.values()
  rrfScoresArray.sort((a, b) => (b.score - a.score > 0 ? 1 : -1))
  return rrfScoresArray.slice(0, limit)
}