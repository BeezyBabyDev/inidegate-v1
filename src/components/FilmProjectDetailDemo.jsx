import FilmProjectDetail from './FilmProjectDetail'

const FilmProjectDetailDemo = () => {
  const handleBack = () => {
    console.log('Back button clicked')
    // In a real app, this would navigate back to the investment opportunities list
  }

  return (
    <FilmProjectDetail
      onBack={handleBack}
      project={{
        title: 'Midnight in Brooklyn',
        subtitle: 'Drama • Pre-Production',
        badge: 'Hot Deal',
        budget: '$2.8M',
        seeking: '$1.2M',
        equity: '15%',
        roi: '280%',
        description:
          'A young immigrant nurse navigates love, loss, and identity while working the night shift in a Brooklyn hospital during the height of the pandemic.',
        director: 'Sarah Chen',
        genre: 'Drama',
        status: 'Pre-Production',
      }}
    />
  )
}

export default FilmProjectDetailDemo
