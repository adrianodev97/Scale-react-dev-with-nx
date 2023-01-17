export const formatRating = (rating: number) => {
  return `${Math.round(rating * 100) / 10} / 10`
}
